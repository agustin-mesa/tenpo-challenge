import UiText from './ui/UiText';
import { helpers } from '@/shared/utils/helpers';

interface StatCardProps {
	icon: string;
	iconColor?: string;
	iconBgColor?: string;
	title: string | number;
	subtitle: string;
	className?: string;
}

const StatCard = ({
	icon,
	iconColor = 'text-v1-primary-500',
	iconBgColor = 'bg-v1-primary-900',
	title,
	subtitle,
	className
}: StatCardProps) => {
	return (
		<div
			className={helpers.cn(
				'bg-v1-neutral-950 border-v1-neutral-800 rounded-lg border p-4',
				className
			)}
		>
			<div className="flex items-center gap-3">
				<div
					className={helpers.cn(
						'flex h-12 w-12 items-center justify-center rounded-lg',
						iconBgColor
					)}
				>
					<i className={helpers.cn('pi', icon, iconColor, 'text-xl')} />
				</div>
				<div>
					<UiText type="h4" className="text-v1-neutral-0">
						{typeof title === 'number' ? helpers.currency.formatNumber(title) : title}
					</UiText>
					<UiText type="body2" className="text-v1-neutral-400">
						{subtitle}
					</UiText>
				</div>
			</div>
		</div>
	);
};

export default StatCard;
