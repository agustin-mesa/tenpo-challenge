import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const MainLayout = () => {
	const { pathname } = useLocation();
	// const { authenticated } = useAuthStore();

	useEffect(() => {
		document.getElementById('app-layout')?.scrollTo({
			top: 0,
			left: 0,
			behavior: 'instant'
		});
	}, [pathname]);

	// if (!authenticated && pathname.startsWith('/app/')) return <Navigate to={'/'} />;

	return (
		<div id="app-layout" className="bg-v1-background flex h-dvh flex-col overflow-x-hidden">
			<Outlet />
		</div>
	);
};

export default MainLayout;
