import { useNavigate } from 'react-router-dom';
import UiButton from '@/shared/components/ui/UiButton';
import UiInput from '@/shared/components/ui/UiInput';
import UiText from '@/shared/components/ui/UiText';
import { useLogin } from '../hooks/useLogin';
import type { KeyboardEvent } from 'react';
import { toast } from 'sonner';
import { helpers } from '@/shared/utils/helpers';

const LoginPage = () => {
	const navigate = useNavigate();
	const { formData, isLoading, updateField, handleLogin } = useLogin();

	const handleSubmit = async () => {
		try {
			await handleLogin();
			navigate('/app/transactions');
		} catch (error) {
			toast.error(helpers.string.getError(error));
		}
	};

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Enter' && !isLoading) {
			handleSubmit();
		}
	};

	return (
		<div className="relative flex h-full flex-col items-center justify-center p-4">
			<div className="flex w-full max-w-sm flex-col gap-8">
				<div className="relative flex h-20 flex-col gap-2 overflow-hidden rounded-full">
					<img
						src="/assets/images/tenpo-logo.svg"
						alt="Tenpo Logo"
						className="z-10 !m-auto h-16 w-fit max-md:h-10"
					/>
					<div className="absolute hidden overflow-hidden max-md:block">
						<video
							src="/assets/videos/tenpo.mp4"
							autoPlay
							muted
							loop
							className="!size-full object-cover"
						/>
					</div>
				</div>

				<div className="relative flex flex-col gap-2">
					<UiText type="h1" className="text-v1-neutral-0">
						¡Bienvenido!
					</UiText>
					<UiText type="h4" className="text-v1-neutral-100">
						Todo lo que necesitas, en un solo lugar
					</UiText>
				</div>

				<div className="flex flex-col gap-10">
					<div className="flex flex-col gap-4">
						<UiInput
							type="email"
							label="Email"
							placeholder="Dirección de email"
							value={formData.email}
							onChange={(e) => updateField('email', e.target.value)}
							onKeyDown={handleKeyDown}
							disabled={isLoading}
						/>
						<UiInput
							type="password"
							label="Contraseña"
							placeholder="Contraseña"
							value={formData.password}
							onChange={(e) => updateField('password', e.target.value)}
							onKeyDown={handleKeyDown}
							disabled={isLoading}
						/>

						<button
							className="text-v1-primary-500 ml-auto w-fit font-semibold disabled:opacity-50"
							onClick={() => navigate('/auth/forgot-password')}
							disabled={isLoading}
						>
							¿Olvidaste tu contraseña?
						</button>
					</div>

					<UiButton
						variant="primary"
						label={isLoading ? 'Ingresando...' : 'Ingresar'}
						onClick={handleSubmit}
						disabled={isLoading || !formData.email || !formData.password}
					/>
				</div>
			</div>
			<div className="absolute right-0 bottom-5 left-0 flex justify-center">
				<UiText type="body2" className="text-v1-neutral-300">
					Developed by{' '}
					<a
						href="https://www.linkedin.com/in/mauro-agustin-mesa/"
						className="text-v1-primary-500"
					>
						Mauro Agustín Mesa
					</a>
				</UiText>
			</div>
		</div>
	);
};

export default LoginPage;
