import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User } from '@/shared/services/auth.api';

interface AuthState {
	isAuthenticated: boolean;
	token: string | null;
	user: User | null;
	isLoading: boolean;

	setAuthState: (
		state: Partial<Pick<AuthState, 'isAuthenticated' | 'token' | 'user' | 'isLoading'>>
	) => void;
	logout: () => void;
}

export const useAuthStore = create<AuthState>()(
	persist(
		(set) => ({
			isAuthenticated: false,
			token: null,
			user: null,
			isLoading: false,
			setAuthState: (newState) => {
				set((state) => ({
					...state,
					...newState
				}));
			},

			logout: () => {
				set({
					isAuthenticated: false,
					token: null,
					user: null
				});
			}
		}),
		{
			name: 'auth-storage',
			partialize: (state) => ({
				token: state.token,
				user: state.user,
				isAuthenticated: state.isAuthenticated,
				isLoading: state.isLoading
			})
		}
	)
);
