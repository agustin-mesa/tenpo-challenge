import '@/index.css';
import 'primereact/resources/themes/lara-dark-teal/theme.css';
import 'primeicons/primeicons.css';
import Tailwind from 'primereact/passthrough/tailwind';
import { PrimeReactProvider } from 'primereact/api';
import type { ReactNode } from 'react';

interface GlobalProviderProps {
	children: ReactNode;
}

const GlobalProvider = ({ children }: GlobalProviderProps) => {
	return <PrimeReactProvider value={{ pt: Tailwind }}>{children}</PrimeReactProvider>;
};

export default GlobalProvider;
