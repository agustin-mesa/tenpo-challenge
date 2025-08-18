import { useState } from 'react';
import { SidebarItem } from './SidebarItem';
import UiIcon from './ui/UiIcon';
import { useMenuLogic } from '@/shared/hooks/useMenuLogic';
import UserProfile from './UserProfile';

const NavbarBurger = () => {
	const { menuItems } = useMenuLogic();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className="bg-v1-neutral-950/10 fixed top-0 right-0 left-0 z-50 border-b border-b-neutral-900 px-6 py-4 backdrop-blur-md">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<img src="/assets/images/tenpo-logo.svg" alt="logo" className="h-8" />
					</div>

					<div className="flex items-center gap-2">
						<button onClick={() => setIsOpen(!isOpen)}>
							<UiIcon icon="bars" className="text-v1-neutral-0 !text-2xl" />
						</button>
					</div>
				</div>
			</div>
			{isOpen && (
				<div className="bg-v1-neutral-950/70 fixed inset-0 z-50 border-b px-6 py-4 backdrop-blur-md">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-2">
							<img src="/assets/images/tenpo-logo.svg" alt="logo" className="h-8" />
						</div>
						<button onClick={() => setIsOpen(!isOpen)}>
							<UiIcon icon="times" className="text-v1-neutral-0 !text-2xl" />
						</button>
					</div>
					<div className="flex flex-col gap-4 py-10">
						{menuItems.map((item, index) => {
							return <SidebarItem key={index} item={item} />;
						})}
					</div>
					<UserProfile />
				</div>
			)}
		</>
	);
};

export default NavbarBurger;
