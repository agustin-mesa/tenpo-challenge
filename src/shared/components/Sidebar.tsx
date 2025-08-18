import { SidebarItem, type ISidebarItem } from './SidebarItem';
import { useLogout } from '@/modules/auth/hooks/useLogout';
import { toast } from 'sonner';
import UiText from './ui/UiText';
import { useAuthStore } from '@/app/store/auth.store';

const Sidebar = () => {
	const { user } = useAuthStore();
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

	return (
		<div className="border-v1-neutral-900 bg-v1-neutral-950 fixed top-0 bottom-0 left-0 z-10 w-80 border-r p-4">
			<div className="flex h-full flex-col justify-between gap-4">
				<div className="flex flex-col gap-1.5">
					<img src="/assets/images/tenpo-logo.svg" alt="logo" className="mr-auto h-14" />

					{menuItems.map((item, index) => {
						return <SidebarItem key={index} item={item} />;
					})}
				</div>

				{user && (
					<div className="flex flex-col gap-2">
						<div className="flex items-center gap-2">
							<div className="bg-v1-primary-500 flex h-10 w-10 items-center justify-center rounded-full">
								<UiText type="body1" className="text-v1-neutral-950 font-bold">
									{user.name.charAt(0).toUpperCase()}
								</UiText>
							</div>
							<UiText type="body1" className="text-v1-neutral-300">
								¡Bienvenido,{' '}
								<b className="text-v1-neutral-0 capitalize">{user.name}</b>!
							</UiText>
						</div>

						<SidebarItem
							item={{
								label: 'Cerrar sesión',
								command: handleLogout,
								show: true,
								icon: {
									name: 'sign-out'
								},
								isLoading: logoutMutation.isPending
							}}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default Sidebar;
