import { useAuthStore } from '@/app/store/auth.store';
import NavbarBurger from '@/shared/components/NavbarBurger';
import Sidebar from '@/shared/components/Sidebar';
import useScreenSize from '@/shared/hooks/useScreenSize';
import { helpers } from '@/shared/utils/helpers';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateLayout = () => {
	const { isMobile, isDesktop } = useScreenSize();
	const { isAuthenticated } = useAuthStore();

	if (!isAuthenticated) {
		return <Navigate to="/auth/login" />;
	}

	return (
		<div className="bg-v1-neutral-950 grid min-h-screen">
			{isDesktop && <Sidebar />}
			{isMobile && <NavbarBurger />}

			<div
				className={helpers.cn(
					'ml-80 flex min-h-[100dvh] flex-col overflow-auto',
					isMobile && 'ml-0 pt-16'
				)}
			>
				<div className="flex min-h-[90dvh] w-full flex-col overflow-y-auto p-6">
					<div className="mx-auto w-full max-w-screen-lg">
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
};

export default PrivateLayout;
