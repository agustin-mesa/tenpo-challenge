import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import PublicLayout from '@/layouts/PublicLayout';
import PrivateLayout from '@/layouts/PrivateLayout';
import LoginPage from '@/modules/auth/pages/LoginPage';
import HomePage from '@/modules/home/pages/HomePage';
import { ProtectedRoute } from '@/app/router/ProtectedRoute';

export const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <>Not found</>,
		children: [
			{
				path: 'auth',
				element: <PublicLayout />,
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
						path: 'home',
						element: <HomePage />
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
