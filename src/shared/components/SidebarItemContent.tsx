import { memo, useMemo } from 'react';
import type { ISidebarItem } from '@/shared/components/SidebarItem';
import { helpers } from '@/shared/utils/helpers';
import UiIcon from '@/shared/components/ui/UiIcon';
import UiText from '@/shared/components/ui/UiText';

const SidebarItemContent = memo(
	({
		item,
		isActive,
		isExpanded = true,
		animationDelay = 0
	}: {
		item: ISidebarItem;
		isActive: boolean;
		isExpanded?: boolean;
		animationDelay?: number;
	}) => {
		const iconClassName = useMemo(
			() =>
				helpers.cn(
					'text-v1-neutral-0 group-hover:text-v1-primary-950',
					isActive && 'text-v1-primary-500'
				),
			[isActive]
		);

		const textClassName = useMemo(
			() =>
				helpers.cn(
					'text-v1-neutral-0 group-hover:text-v1-primary-950',
					isActive && 'text-v1-primary-500'
				),
			[isActive]
		);

		return (
			<div className="relative flex items-center">
				<UiIcon icon={item.icon.name} className={iconClassName} />
				<div
					className={helpers.cn(
						'absolute left-6 transition-all duration-300 ease-in-out',
						isExpanded ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'
					)}
					style={{
						transitionDelay: isExpanded ? `${animationDelay}ms` : '0ms'
					}}
				>
					<UiText type="body1" className={helpers.cn(textClassName, 'whitespace-nowrap')}>
						{item.label}
					</UiText>
				</div>
			</div>
		);
	}
);

export default SidebarItemContent;
