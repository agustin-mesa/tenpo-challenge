import StatCard from './StatCard';
import type { ReactNode } from 'react';

interface StatItem {
	icon: string;
	iconColor?: string;
	iconBgColor?: string;
	title: string | number;
	subtitle: string;
}

interface StatsGridProps {
	stats: StatItem[];
	columns?: 1 | 2 | 3 | 4;
	className?: string;
	children?: ReactNode;
}

const StatsGrid = ({ stats, columns = 3, className, children }: StatsGridProps) => {
	const gridCols = {
		1: 'grid-cols-1',
		2: 'grid-cols-1 md:grid-cols-2',
		3: 'grid-cols-1 md:grid-cols-3',
		4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
	};

	return (
		<div className={`grid gap-4 ${gridCols[columns]} ${className || ''}`}>
			{stats.map((stat, index) => (
				<StatCard
					key={index}
					icon={stat.icon}
					iconColor={stat.iconColor}
					iconBgColor={stat.iconBgColor}
					title={stat.title}
					subtitle={stat.subtitle}
				/>
			))}
			{children}
		</div>
	);
};

export default StatsGrid;
