import { useNavigate } from 'react-router-dom';
import { SidebarItem, type ISidebarItem } from './SidebarItem';

const Sidebar = () => {
	const navigate = useNavigate();

	const menuItems: ISidebarItem[] = [
		{
			label: 'Transacciones',
			to: '/app/transactions',
			show: true,
			icon: {
				name: 'arrow-right-arrow-left'
			}
		},
		{
			label: 'Cerrar sesión',
			command: () => {
				// setAuth(null);
				navigate('/auth/login');
			},
			show: true,
			icon: {
				name: 'sign-out'
			}
		}
	];

	return (
		<div className="border-v1-neutral-900 bg-v1-neutral-950 fixed top-0 bottom-0 left-0 z-10 w-80 border-r p-4">
			<div className="flex h-full flex-col gap-4">
				<img src="/assets/images/tenpo-logo.svg" alt="logo" className="mr-auto h-14" />

				<div className="flex flex-col gap-1.5">
					{menuItems.map((item, index) => {
						return <SidebarItem key={index} item={item} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
