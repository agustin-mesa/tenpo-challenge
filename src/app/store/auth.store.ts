import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
	id: string;
	email: string;
	name: string;
}

interface AuthState {
	// State
	isAuthenticated: boolean;
	token: string | null;
	user: User | null;
	isLoading: boolean;
	error: string | null;

	// Actions
	login: (email: string, password: string) => Promise<void>;
	logout: () => void;
	clearError: () => void;
	setLoading: (loading: boolean) => void;
}

// Store
export const useAuthStore = create<AuthState>()(
	persist(
		(set) => ({
			// Initial state
			isAuthenticated: false,
			token: null,
			user: null,
			isLoading: false,
			error: null,

			login: async (email: string, password: string) => {
				set({ isLoading: true, error: null });

				try {
					// Fake login simulation
					await new Promise((resolve) => setTimeout(resolve, 1000));

					// Simulate API response
					const fakeToken = `fake-jwt-token-${Date.now()}`;
					const fakeUser: User = {
						id: '1',
						email,
						name: email.split('@')[0]
					};

					set({
						isAuthenticated: true,
						token: fakeToken,
						user: fakeUser,
						isLoading: false,
						error: null
					});
				} catch (error) {
					set({
						isAuthenticated: false,
						token: null,
						user: null,
						isLoading: false,
						error: 'Invalid credentials'
					});
					throw error;
				}
			},

			logout: () => {
				set({
					isAuthenticated: false,
					token: null,
					user: null,
					error: null
				});
			},

			clearError: () => set({ error: null }),

			setLoading: (loading: boolean) => set({ isLoading: loading })
		}),
		{
			name: 'auth-storage',
			partialize: (state) => ({
				token: state.token,
				user: state.user,
				isAuthenticated: state.isAuthenticated
			})
		}
	)
);
