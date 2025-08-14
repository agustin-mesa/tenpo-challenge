import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AuthAPI } from '@/shared/services/auth.api';
import { AUTH_KEYS } from './useLogin';

const authAPI = new AuthAPI();

export const useLogout = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: authAPI.logout,
		onSuccess: () => {
			queryClient.removeQueries({ queryKey: AUTH_KEYS.all });
		}
	});
};
