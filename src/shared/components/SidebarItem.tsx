import { Link, useLocation } from 'react-router-dom';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { memo, useMemo } from 'react';
import SidebarItemContent from './SidebarItemContent';

export interface ISidebarItem {
	label: string;
	to?: string;
	icon: {
		name: string;
		isCustom?: boolean;
	};
	show?: boolean;
	children?: ISidebarItem[];
	command?: () => void;
}

interface SidebarItemProps {
	item: ISidebarItem;
}

export const SidebarItem = memo(({ item }: SidebarItemProps) => {
	const { pathname } = useLocation();
	const isActive = useMemo(
		() => (item.to ? pathname.includes(item.to) : false),
		[item.to, pathname]
	);

	if (!item.show) return null;

	if (item.children) {
		return (
			<Accordion className="!m-0">
				<AccordionTab
					header={() => (
						<div className="flex items-center gap-2">
							<SidebarItemContent item={item} isActive={isActive} />
						</div>
					)}
					pt={{
						root: {
							className: '!m-0'
						},
						headerAction: {
							className:
								'bg-transparent flex flex-row-reverse py-3 pl-4 pr-0 border-none hover:bg-v1-neutral-100 !shadow-none !rounded-lg'
						},
						headerTitle: {
							className: 'text-v1-neutral-600 leading-normal font-normal'
						},
						content: {
							className: 'border-none flex flex-col gap-1 !p-0 !pt-2 !pl-4'
						}
					}}
				>
					{item.children.map((child, index) => (
						<SidebarItem key={index} item={child} />
					))}
				</AccordionTab>
			</Accordion>
		);
	}

	if (item.command) {
		return (
			<button
				className="hover:bg-v1-primary-500 group flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2.5"
				onClick={item.command}
			>
				<SidebarItemContent item={item} isActive={isActive} />
			</button>
		);
	}

	return (
		<Link
			to={item.to || '#'}
			className="hover:bg-v1-primary-500 group flex items-center gap-2 rounded-lg px-4 py-2.5"
		>
			<SidebarItemContent item={item} isActive={isActive} />
		</Link>
	);
});

SidebarItem.displayName = 'SidebarItem';
