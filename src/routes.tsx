import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import AuthLayout from '@/layouts/AuthLayout';
import PrivateLayout from '@/layouts/PrivateLayout';
import LoginPage from '@/modules/auth/pages/LoginPage';
import TransactionsPage from '@/modules/transactions/pages/TransactionsPage';
import { ProtectedRoute } from '@/app/router/ProtectedRoute';
import NotFound from './shared/components/NotFound';

export const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <Navigate to="/auth/login" replace />
			},
			{
				path: 'auth',
				element: <AuthLayout />,
				children: [{ path: 'login', element: <LoginPage /> }]
			},
			{
				path: 'app',
				element: (
					<ProtectedRoute>
						<PrivateLayout />
					</ProtectedRoute>
				),
				children: [
					{
						path: 'transactions',
						element: <TransactionsPage />
					}
				]
			}
		]
	},
	{
		path: '*',
		element: <NotFound />
	}
]);
