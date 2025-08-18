import { helpers } from '@/shared/utils/helpers';
import { memo } from 'react';

interface UiIconProps {
	icon: string;
	className?: string;
}

const UiIcon = memo(({ icon, className }: UiIconProps) => {
	return <span className={helpers.cn(`pi pi-${icon}`, className)}></span>;
});

UiIcon.displayName = 'UiIcon';

export default UiIcon;
