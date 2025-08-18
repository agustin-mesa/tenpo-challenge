import { useAuthStore } from '@/app/store/auth.store';
import Sidebar from '@/shared/components/Sidebar';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateLayout = () => {
	const { isAuthenticated } = useAuthStore();

	if (!isAuthenticated) {
		return <Navigate to="/auth/login" />;
	}

	return (
		<div className="bg-v1-neutral-950 grid min-h-screen">
			<Sidebar />

			<div className="ml-80 flex min-h-[100dvh] flex-col overflow-auto">
				{/* <Header /> */}

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
