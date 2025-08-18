import { Navigate } from 'react-router-dom';
import { useAuthStore } from '@/app/store/auth.store';

const NotFound = () => {
	const { isAuthenticated } = useAuthStore();

	return <Navigate to={isAuthenticated ? '/app/transactions' : '/auth/login'} replace />;
};

export default NotFound;
