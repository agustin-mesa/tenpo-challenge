import { SidebarItem } from './SidebarItem';
import { useMenuLogic } from '@/shared/hooks/useMenuLogic';
import UserProfile from './UserProfile';

const Sidebar = () => {
	const { menuItems } = useMenuLogic();

	return (
		<div className="border-v1-neutral-900 bg-v1-neutral-950 fixed top-0 bottom-0 left-0 z-10 w-80 border-r p-4">
			<div className="flex h-full flex-col justify-between gap-4">
				<div className="flex flex-col gap-1.5">
					<img src="/assets/images/tenpo-logo.svg" alt="logo" className="mr-auto h-14" />

					{menuItems.map((item, index) => {
						return <SidebarItem key={index} item={item} />;
					})}
				</div>

				<UserProfile />
			</div>
		</div>
	);
};

export default Sidebar;
