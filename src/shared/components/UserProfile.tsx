import { useAuthStore } from '@/app/store/auth.store';
import { SidebarItem } from './SidebarItem';
import UiText from './ui/UiText';
import { useMenuLogic } from '@/shared/hooks/useMenuLogic';

const UserProfile = () => {
	const { user } = useAuthStore();
	const { menuBottomItems } = useMenuLogic();

	if (!user) return null;

	return (
		<div className="flex flex-col gap-2">
			<div className="flex items-center gap-2">
				<div className="bg-v1-primary-500 flex size-10 min-w-10 items-center justify-center rounded-full">
					<UiText type="body1" className="text-v1-neutral-950 font-bold">
						{user.name.charAt(0).toUpperCase()}
					</UiText>
				</div>
				<UiText type="body1" className="text-v1-neutral-300">
					¡Bienvenido, <b className="text-v1-neutral-0 capitalize">{user.name}</b>!
				</UiText>
			</div>
			<SidebarItem item={menuBottomItems} />
		</div>
	);
};

export default UserProfile;
