import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import AuthLayout from '@/layouts/AuthLayout';
import PrivateLayout from '@/layouts/PrivateLayout';
import LoginPage from '@/modules/auth/pages/LoginPage';
import TransactionsPage from '@/modules/transactions/pages/TransactionsPage';
import { ProtectedRoute } from '@/app/router/ProtectedRoute';

export const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <>Not found</>,
		children: [
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
		element: <>Not found</>
	}
]);
