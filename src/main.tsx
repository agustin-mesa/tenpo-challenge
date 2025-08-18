import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { appRouter } from './routes';
import { RouterProvider } from 'react-router-dom';
import { QueryProvider } from './app/providers/QueryProvider';
import GlobalProvider from './app/providers/GlobalProvider';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryProvider>
			<GlobalProvider>
				<RouterProvider router={appRouter} />
			</GlobalProvider>
		</QueryProvider>
	</StrictMode>
);
