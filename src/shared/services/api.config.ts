import axios, { type AxiosInstance, type AxiosResponse, type AxiosError } from 'axios';
import { useAuthStore } from '@/app/store/auth.store';

export type ApiRequest =
	| {
			path: string;
			searchParams?: URLSearchParams;
			method?: 'get';
			headers?: Record<string, string>;
	  }
	| {
			path: string;
			searchParams?: URLSearchParams;
			method: 'post' | 'put' | 'patch' | 'delete';
			headers?: Record<string, string>;
			body?: unknown;
	  };

export interface RequestOptions {
	skipAuth?: boolean;
}

export class APIError extends Error {
	public readonly status: number;
	public readonly data: unknown;

	constructor(status: number, data: unknown, message?: string) {
		super(message || `API Error: ${status}`);
		this.name = 'APIError';
		this.status = status;
		this.data = data;
	}
}

class ApiClient {
	private static readonly baseURL = import.meta.env.VITE_API_URL;

	public axiosInstance: AxiosInstance;

	constructor() {
		this.axiosInstance = axios.create({
			baseURL: ApiClient.baseURL,
			timeout: 10000
		});

		// Request interceptor - Add auth token
		this.axiosInstance.interceptors.request.use((config) => {
			const { token } = useAuthStore.getState();

			if (token && !config.headers.skipAuth) {
				config.headers.Authorization = `Bearer ${token}`;
			}

			// Add common headers
			config.headers['Content-Type'] = config.headers['Content-Type'] || 'application/json';
			config.headers['timezone-offset'] = new Date().getTimezoneOffset().toString();

			return config;
		});

		// Response interceptor - Handle errors
		this.axiosInstance.interceptors.response.use(
			(response) => response,
			(error: AxiosError) => {
				if (error.response?.status === 401) {
					// Auto logout on 401
					useAuthStore.getState().logout();
				}

				throw new APIError(
					error.response?.status || 500,
					error.response?.data,
					error.message
				);
			}
		);
	}

	protected async send<R>(
		request: ApiRequest,
		options?: RequestOptions
	): Promise<AxiosResponse<R>> {
		const method = request.method || 'get';
		const url = this.buildUrl(request);
		const headers = this.buildHeaders(request, options);

		try {
			const response = await this.axiosInstance.request<R>({
				method,
				url,
				headers,
				data: this.buildBody(request)
			});

			return response;
		} catch (error) {
			if (error instanceof APIError) {
				throw error;
			}
			throw new APIError(500, null, 'Network error');
		}
	}

	private buildUrl(request: ApiRequest): string {
		let url = request.path;

		if (request.searchParams) {
			const params = new URLSearchParams();
			request.searchParams.forEach((value, key) => {
				params.set(key, value);
			});
			url += `?${params.toString()}`;
		}

		return url;
	}

	private buildHeaders(request: ApiRequest, options?: RequestOptions): Record<string, string> {
		const headers: Record<string, string> = {};

		if (options?.skipAuth) {
			headers.skipAuth = 'true';
		}

		if (request.headers) {
			Object.assign(headers, request.headers);
		}

		return headers;
	}

	private buildBody(request: ApiRequest): unknown {
		if (request.method === undefined || request.method === 'get' || !('body' in request)) {
			return undefined;
		}

		return request.body;
	}

	// Utility method for URL params
	objectToURLParams(data: Record<string, unknown>): URLSearchParams {
		return new URLSearchParams(
			Object.fromEntries(
				Object.entries(data)
					.filter(([, v]) => v !== undefined && v !== null)
					.map(([k, v]) => [k, String(v)])
			)
		);
	}
}

export default ApiClient;
