import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from 'react';

interface QueryProviderProps {
	children: ReactNode;
}

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			refetchOnReconnect: true
		}
	}
});

export const QueryProvider = ({ children }: QueryProviderProps) => {
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export { queryClient };
