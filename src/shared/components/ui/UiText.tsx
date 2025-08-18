import { helpers } from '@/shared/utils/helpers';
import React from 'react';

export type UiTextProps = {
	id?: string;
	type?:
		| 'display1'
		| 'display-subtitle-1'
		| 'h1'
		| 'h2'
		| 'h3'
		| 'h4'
		| 'body1'
		| 'body2'
		| 'label1'
		| 'label2'
		| 'label3'
		| 'label4'
		| 'label5'
		| 'label6'
		| 'label7'
		| 'caption1'
		| 'caption2';
	className?: string;
	children?: React.ReactNode;
	style?: React.CSSProperties;
	dangerouslySetInnerHTML?: { __html: string };
};

const UiText: React.FC<UiTextProps> = ({
	id,
	type = 'body1',
	className = '',
	children,
	dangerouslySetInnerHTML,
	style
}) => {
	switch (type) {
		case 'display1':
			return (
				<h1
					id={id}
					className={helpers.cn(
						'text-v1-neutral-800 text-4xl leading-[50px] font-bold',
						className
					)}
					style={style}
					dangerouslySetInnerHTML={dangerouslySetInnerHTML}
				>
					{children}
				</h1>
			);
		case 'display-subtitle-1':
			return (
				<h2
					id={id}
					className={helpers.cn(
						'text-v1-neutral-800 text-[1.75rem] leading-10 font-light',
						className
					)}
					style={style}
					dangerouslySetInnerHTML={dangerouslySetInnerHTML}
				>
					{children}
				</h2>
			);
		case 'h1':
			return (
				<h1
					id={id}
					className={helpers.cn(
						'text-v1-neutral-800 text-[1.75rem] leading-9 font-semibold',
						className
					)}
					style={style}
					dangerouslySetInnerHTML={dangerouslySetInnerHTML}
				>
					{children}
				</h1>
			);
		case 'h2':
			return (
				<h2
					id={id}
					className={helpers.cn(
						'text-v1-neutral-800 text-2xl leading-8 font-semibold',
						className
					)}
					style={style}
					dangerouslySetInnerHTML={dangerouslySetInnerHTML}
				>
					{children}
				</h2>
			);
		case 'h3':
			return (
				<h3
					id={id}
					className={helpers.cn(
						'text-v1-neutral-800 text-xl leading-6 font-semibold',
						className
					)}
					style={style}
					dangerouslySetInnerHTML={dangerouslySetInnerHTML}
				>
					{children}
				</h3>
			);
		case 'h4':
			return (
				<h4
					id={id}
					className={helpers.cn(
						'text-v1-neutral-800 text-lg leading-6 font-normal',
						className
					)}
					style={style}
					dangerouslySetInnerHTML={dangerouslySetInnerHTML}
				>
					{children}
				</h4>
			);
		case 'body1':
			return (
				<p
					id={id}
					className={helpers.cn(
						'text-v1-neutral-800 text-base leading-6 font-normal',
						className
					)}
					style={style}
					dangerouslySetInnerHTML={dangerouslySetInnerHTML}
				>
					{children}
				</p>
			);
		case 'body2':
			return (
				<p
					id={id}
					className={helpers.cn(
						'text-v1-neutral-800 text-sm leading-5 font-normal',
						className
					)}
					style={style}
					dangerouslySetInnerHTML={dangerouslySetInnerHTML}
				>
					{children}
				</p>
			);
		case 'label1':
			return (
				<label
					id={id}
					className={helpers.cn(
						'text-v1-neutral-800 text-base leading-6 font-semibold',
						className
					)}
					style={style}
					dangerouslySetInnerHTML={dangerouslySetInnerHTML}
				>
					{children}
				</label>
			);
		case 'label2':
			return (
				<label
					id={id}
					className={helpers.cn(
						'text-v1-neutral-800 text-base leading-6 font-normal',
						className
					)}
					style={style}
					dangerouslySetInnerHTML={dangerouslySetInnerHTML}
				>
					{children}
				</label>
			);
		case 'label3':
			return (
				<label
					id={id}
					className={helpers.cn(
						'text-v1-neutral-800 text-sm leading-5 font-semibold uppercase',
						className
					)}
					style={style}
					dangerouslySetInnerHTML={dangerouslySetInnerHTML}
				>
					{children}
				</label>
			);
		case 'label4':
			return (
				<label
					id={id}
					className={helpers.cn(
						'text-v1-neutral-800 text-sm leading-5 font-semibold',
						className
					)}
					style={style}
					dangerouslySetInnerHTML={dangerouslySetInnerHTML}
				>
					{children}
				</label>
			);
		case 'label5':
			return (
				<label
					id={id}
					className={helpers.cn(
						'text-v1-neutral-800 text-sm leading-5 font-normal',
						className
					)}
					style={style}
					dangerouslySetInnerHTML={dangerouslySetInnerHTML}
				>
					{children}
				</label>
			);
		case 'label6':
			return (
				<label
					id={id}
					className={helpers.cn(
						'text-v1-neutral-800 text-xs leading-4 font-medium',
						className
					)}
					style={style}
					dangerouslySetInnerHTML={dangerouslySetInnerHTML}
				>
					{children}
				</label>
			);
		case 'label7':
			return (
				<label
					id={id}
					className={helpers.cn('text-md font-[500] text-[#118D57]', className)}
					style={style}
					dangerouslySetInnerHTML={dangerouslySetInnerHTML}
				>
					{children}
				</label>
			);
		case 'caption1':
			return (
				<span
					id={id}
					className={helpers.cn(
						'text-v1-neutral-800 text-sm leading-5 font-normal',
						className
					)}
					style={style}
					dangerouslySetInnerHTML={dangerouslySetInnerHTML}
				>
					{children}
				</span>
			);
		case 'caption2':
			return (
				<span
					id={id}
					className={helpers.cn(
						'text-v1-neutral-800 text-xs leading-4 font-medium',
						className
					)}
					style={style}
					dangerouslySetInnerHTML={dangerouslySetInnerHTML}
				>
					{children}
				</span>
			);
		default:
			return null;
	}
};

export default UiText;
