import { useAuthStore } from '@/app/store/auth.store';
import { Navigate, Outlet } from 'react-router-dom';

const AuthLayout = () => {
	const { isAuthenticated } = useAuthStore();

	if (isAuthenticated) {
		return <Navigate to="/app/transactions" />;
	}

	return (
		<div className="bg-v1-neutral-950 grid h-dvh grid-cols-2 overflow-x-hidden max-md:grid-cols-1 max-md:overflow-y-auto">
			<Outlet />

			<div className="overflow-hidden max-md:hidden">
				<video
					src="/assets/videos/tenpo.mp4"
					autoPlay
					muted
					loop
					controls={false}
					className="!size-full object-cover"
				/>
			</div>
		</div>
	);
};

export default AuthLayout;
