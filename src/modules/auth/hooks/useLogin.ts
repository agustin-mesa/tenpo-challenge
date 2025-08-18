import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useAuthStore } from '@/app/store/auth.store';
import AuthAPI from '@/shared/services/auth.api';
import type { LoginCredentials } from '@/shared/services/auth.api';

export const AUTH_KEYS = {
	all: ['auth'] as const,
	login: () => [...AUTH_KEYS.all, 'login'] as const,
	user: () => [...AUTH_KEYS.all, 'user'] as const
};

interface LoginFormData {
	email: string;
	password: string;
}

interface UseLoginReturn {
	formData: LoginFormData;
	isLoading: boolean;
	error: string | null;
	setFormData: (data: LoginFormData) => void;
	updateField: (field: keyof LoginFormData, value: string) => void;
	handleLogin: () => Promise<void>;
	clearError: () => void;
}

const authAPI = new AuthAPI();

export const useLogin = (): UseLoginReturn => {
	const [formData, setFormData] = useState<LoginFormData>({
		email: '',
		password: ''
	});

	const { setAuthState } = useAuthStore();

	const loginMutation = useMutation({
		mutationKey: AUTH_KEYS.login(),
		mutationFn: (credentials: LoginCredentials) => authAPI.login(credentials),
		onSuccess: (response) => {
			setAuthState({
				isAuthenticated: true,
				token: response.token,
				user: response.user,
				isLoading: false
			});
		},
		onError: (_error) => {
			setAuthState({
				isAuthenticated: false,
				token: null,
				user: null,
				isLoading: false
			});
		},
		onSettled: () => {
			setAuthState({
				isLoading: false
			});
		}
	});

	const updateField = (field: keyof LoginFormData, value: string) => {
		setFormData((prev) => ({
			...prev,
			[field]: value
		}));
	};

	const validateForm = (): string | null => {
		if (!formData.email) {
			return 'El email es requerido';
		}

		if (!formData.email.includes('@')) {
			return 'Ingresa un email válido';
		}

		if (!formData.password) {
			return 'La contraseña es requerida';
		}

		if (formData.password.length < 3) {
			return 'La contraseña debe tener al menos 3 caracteres';
		}

		return null;
	};

	const handleLogin = async (): Promise<void> => {
		const validationError = validateForm();
		if (validationError) {
			throw new Error(validationError);
		}

		const credentials: LoginCredentials = {
			email: formData.email.trim(),
			password: formData.password
		};

		await loginMutation.mutateAsync(credentials);
	};

	const clearError = () => {
		loginMutation.reset();
	};

	return {
		formData,
		isLoading: loginMutation.isPending,
		error: loginMutation.error?.message || null,
		setFormData,
		updateField,
		handleLogin,
		clearError
	};
};
