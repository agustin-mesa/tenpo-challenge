import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuthStore } from '@/app/store/auth.store';
import { Toaster } from 'sonner';

const MainLayout = () => {
	const { pathname } = useLocation();
	const { isAuthenticated } = useAuthStore();

	useEffect(() => {
		document.getElementById('app-layout')?.scrollTo({
			top: 0,
			left: 0,
			behavior: 'instant'
		});
	}, [pathname]);

	if (!isAuthenticated && pathname.startsWith('/app/')) return <Navigate to={'/auth/login'} />;

	return (
		<div id="app-layout" className="bg-v1-background flex h-dvh flex-col overflow-x-hidden">
			<Toaster position="top-right" richColors />
			<Outlet />
		</div>
	);
};

export default MainLayout;
