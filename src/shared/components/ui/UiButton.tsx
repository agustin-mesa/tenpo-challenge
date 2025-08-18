import { helpers } from '@/shared/utils/helpers';
import { Button, type ButtonProps } from 'primereact/button';

const variants = {
	primary: {
		root: {
			className:
				'justify-center !bg-v1-primary-500 !rounded-lg hover:!bg-v1-primary-600 outline-none !shadow-none ring-0 !border-transparent'
		},
		label: {
			className: 'text-v1-neutral-950 !flex-none'
		}
	},
	outlined: {
		root: {
			className:
				'justify-center !border-v1-primary-500 bg-transparent !rounded-lg hover:!bg-v1-primary-500/20 outline-none !shadow-none ring-0'
		},
		label: {
			className: 'text-v1-primary-500 !flex-none'
		},
		icon: {
			className: 'text-v1-primary-500'
		}
	}
};

type IgtUiButtonProps = Omit<ButtonProps, 'variant'> & {
	variant?: keyof typeof variants;
};

const IgtUiButton = ({ variant, ...props }: IgtUiButtonProps) => {
	return (
		<Button
			{...props}
			pt={variant ? { ...variants[variant], ...props.pt } : undefined}
			icon={props.icon ? `pi pi-${props.icon}` : undefined}
			iconPos={props.iconPos || 'right'}
			className={helpers.cn('!text-center', props.className)}
		/>
	);
};

export default IgtUiButton;
