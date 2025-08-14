import ApiClient, { APIError } from './api.config';

export interface LoginCredentials {
	email: string;
	password: string;
}

export interface LoginResponse {
	token: string;
	user: {
		id: string;
		email: string;
		name: string;
	};
}

export interface User {
	id: string;
	email: string;
	name: string;
}

export class AuthAPI extends ApiClient {
	/**
	 * Fake login - simulates API call
	 */
	async login(credentials: LoginCredentials): Promise<LoginResponse> {
		// Simulate API delay
		await new Promise((resolve) => setTimeout(resolve, 1000));

		// Basic validation for demo
		if (!credentials.email || !credentials.password) {
			throw new APIError(400, { message: 'Email and password are required' });
		}

		if (credentials.password.length < 3) {
			throw new APIError(401, { message: 'Invalid credentials' });
		}

		// Simulate successful response
		return {
			token: `fake-jwt-token-${Date.now()}`,
			user: {
				id: '1',
				email: credentials.email,
				name: credentials.email.split('@')[0]
			}
		};
	}

	/**
	 * Real API call example (for when you connect to actual backend)
	 */
	async loginReal(credentials: LoginCredentials): Promise<LoginResponse> {
		const response = await this.send<LoginResponse>(
			{
				method: 'post',
				path: '/auth/login',
				body: credentials,
				headers: {
					'Content-Type': 'application/json'
				}
			},
			{ skipAuth: true }
		);
		return response.data;
	}

	/**
	 * Logout - could call API to invalidate token
	 */
	async logout(): Promise<void> {
		// For fake implementation, just resolve
		await new Promise((resolve) => setTimeout(resolve, 500));

		// Real implementation would be:
		// const request: ApiRequest = {
		//   method: 'post',
		//   path: '/auth/logout'
		// };
		// await apiClient.send(request);
	}

	async getUser(): Promise<User> {
		const response = await this.send<User>({
			method: 'get',
			path: '/auth/me'
		});

		return response.data;
	}
}

export default AuthAPI;
