import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { appRouter } from './routes';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import 'primeicons/primeicons.css';
import { QueryProvider } from './app/providers/QueryProvider';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryProvider>
			<RouterProvider router={appRouter} />
		</QueryProvider>
	</StrictMode>
);
