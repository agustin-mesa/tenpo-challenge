import { useLogout } from '@/modules/auth/hooks/useLogout';
import { toast } from 'sonner';
import type { ISidebarItem } from '@/shared/components/SidebarItem';

export const useMenuLogic = () => {
	const logoutMutation = useLogout();

	const handleLogout = async () => {
		try {
			await logoutMutation.mutateAsync();
			toast.success('Sesión cerrada correctamente');
		} catch (error) {
			toast.error('Error al cerrar sesión');
			console.error('Logout error:', error);
		}
	};

	const menuItems: ISidebarItem[] = [
		{
			label: 'Transacciones',
			to: '/app/transactions',
			show: true,
			icon: {
				name: 'arrow-right-arrow-left'
			}
		}
	];

	const menuBottomItems: ISidebarItem = {
		label: 'Cerrar sesión',
		command: handleLogout,
		show: true,
		icon: {
			name: 'sign-out'
		},
		isLoading: logoutMutation.isPending
	};

	return {
		menuItems,
		menuBottomItems,
		handleLogout,
		isLoggingOut: logoutMutation.isPending
	};
};
