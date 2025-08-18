import { InputText, type InputTextProps } from 'primereact/inputtext';
import UiText from '@/shared/components/ui/UiText';
import { helpers } from '@/shared/utils/helpers';

interface UiInputProps extends InputTextProps {
	label?: string;
	placeholder?: string;
	helperText?: string;
	invalid?: boolean;
	errorMessage?: string;
	classNames?: {
		[k in 'root' | 'label']: string;
	};
}

const UiInput = ({
	label,
	helperText,
	invalid = false,
	errorMessage,
	classNames,
	...props
}: UiInputProps) => {
	return (
		<div className={helpers.cn('flex flex-col', classNames?.root)}>
			{label && (
				<UiText
					type="label2"
					className={helpers.cn('text-v1-neutral-0', classNames?.label)}
				>
					{label}
					{props.required && <span className="text-v1-error-400">*</span>}
				</UiText>
			)}
			<InputText
				id={props.id}
				{...props}
				invalid={invalid}
				size="large"
				className={helpers.cn(
					'border-v1-neutral-300 hover:!border-v1-primary-500 !bg-v1-neutral-950 !rounded-lg',
					invalid && 'border-v1-error-400 focus:border-v1-error-400',
					props.className
				)}
			/>
			{errorMessage && (
				<UiText type="caption2" className="text-v1-error-400">
					{errorMessage}
				</UiText>
			)}
			{helperText && !errorMessage && (
				<UiText type="caption2" className="text-v1-neutral-500">
					{helperText}
				</UiText>
			)}
		</div>
	);
};

export default UiInput;
