import type React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '@/app/store/auth.store';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
	const { isAuthenticated } = useAuthStore();
	return isAuthenticated ? children : <Navigate to="/auth/login" />;
};
