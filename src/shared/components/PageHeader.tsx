import UiText from './ui/UiText';
import type { ReactNode } from 'react';

interface PageHeaderProps {
	title: string;
	subtitle?: string;
	actions?: ReactNode;
	className?: string;
}

const PageHeader = ({ title, subtitle, actions, className }: PageHeaderProps) => {
	return (
		<div className={`flex items-center justify-between ${className || ''}`}>
			<div className="flex flex-col">
				<UiText type="h2" className="text-v1-neutral-0 mb-2">
					{title}
				</UiText>
				{subtitle && (
					<UiText type="body1" className="text-v1-neutral-400">
						{subtitle}
					</UiText>
				)}
			</div>
			{actions && <div className="flex items-center gap-2">{actions}</div>}
		</div>
	);
};

export default PageHeader;
