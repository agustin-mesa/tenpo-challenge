import UiText from './ui/UiText';

interface EmptyStateProps {
	icon?: string;
	title: string;
	description: string;
	iconSize?: string;
	className?: string;
}

const EmptyState = ({
	icon = 'pi-search',
	title,
	description,
	iconSize = 'text-3xl',
	className
}: EmptyStateProps) => {
	return (
		<div className={`flex flex-col items-center justify-center py-12 ${className || ''}`}>
			<div className="bg-v1-neutral-800 mb-4 flex h-24 w-24 items-center justify-center rounded-full">
				<i className={`pi ${icon} text-v1-neutral-500 ${iconSize}`} />
			</div>
			<UiText type="h4" className="text-v1-neutral-300 mb-2">
				{title}
			</UiText>
			<UiText type="body2" className="text-v1-neutral-500 max-w-md text-center">
				{description}
			</UiText>
		</div>
	);
};

export default EmptyState;
