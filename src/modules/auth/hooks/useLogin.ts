import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AuthAPI } from '@/shared/services/auth.api';

const AUTH_KEYS = {
	all: ['auth'] as const,
	user: () => [...AUTH_KEYS.all, 'user'] as const
} as const;

const authAPI = new AuthAPI();

export const useLogin = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: authAPI.login,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: AUTH_KEYS.all });
		}
	});
};

export { AUTH_KEYS };
