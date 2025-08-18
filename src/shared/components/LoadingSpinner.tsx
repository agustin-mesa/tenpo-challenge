import { ProgressSpinner } from 'primereact/progressspinner';
import UiText from './ui/UiText';

interface LoadingSpinnerProps {
	message?: string;
	size?: string;
	className?: string;
}

const LoadingSpinner = ({
	message = 'Cargando...',
	size = '50px',
	className
}: LoadingSpinnerProps) => {
	return (
		<div className={`flex flex-col items-center justify-center py-12 ${className || ''}`}>
			<ProgressSpinner
				style={{ width: size, height: size }}
				strokeWidth="3"
				className="text-v1-primary-500"
			/>
			<UiText type="body1" className="text-v1-neutral-400 mt-4">
				{message}
			</UiText>
		</div>
	);
};

export default LoadingSpinner;
