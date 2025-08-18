import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/app/store/auth.store';
import { AuthAPI } from '@/shared/services/auth.api';
import { AUTH_KEYS } from './useLogin';

const authAPI = new AuthAPI();

export const useLogout = () => {
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const { logout: clearAuthState } = useAuthStore();

	return useMutation({
		mutationFn: authAPI.logout,
		onSuccess: () => {
			queryClient.removeQueries({ queryKey: AUTH_KEYS.all });
			clearAuthState();
			navigate('/auth/login');
		},
		onError: () => {
			clearAuthState();
			navigate('/auth/login');
		}
	});
};
