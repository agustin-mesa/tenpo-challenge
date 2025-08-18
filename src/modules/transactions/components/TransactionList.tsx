import { Message } from 'primereact/message';
import TransactionCard from '@/modules/transactions/components/TransactionCard';
import UiText from '@/shared/components/ui/UiText';
import UiPaginator from '@/shared/components/ui/UiPaginator';
import LoadingSpinner from '@/shared/components/LoadingSpinner';
import EmptyState from '@/shared/components/EmptyState';
import type { Transaction, TransactionMeta } from '@/shared/types/transaction.types';

interface TransactionListProps {
	transactions: Transaction[];
	meta?: TransactionMeta;
	isLoading: boolean;
	isError: boolean;
	error: Error | null;
	onPageChange: (page: number) => void;
}

const TransactionList = ({
	transactions,
	meta,
	isLoading,
	isError,
	error,
	onPageChange
}: TransactionListProps) => {
	const formatPaginatorText = (first: number, last: number, total: number) => {
		return `Mostrando ${first} - ${last} de ${total.toLocaleString('es-CL')} transacciones`;
	};

	if (isLoading) {
		return <LoadingSpinner message="Cargando transacciones..." />;
	}

	if (isError) {
		return (
			<div className="py-8">
				<Message
					severity="error"
					text={error?.message || 'Error al cargar las transacciones'}
					className="w-full"
				/>
			</div>
		);
	}

	if (!transactions.length) {
		return (
			<EmptyState
				title="No se encontraron transacciones"
				description="Intenta ajustar los filtros o verificar los criterios de búsqueda"
			/>
		);
	}

	return (
		<div className="space-y-6">
			<div className="flex flex-wrap items-center justify-between gap-4">
				<div className="flex flex-col">
					<UiText type="h3" className="text-v1-neutral-0 mb-1">
						Transacciones
					</UiText>
					{meta && (
						<UiText type="body2" className="text-v1-neutral-400">
							{formatPaginatorText(
								(meta.page - 1) * meta.limit + 1,
								Math.min(meta.page * meta.limit, meta.total),
								meta.total
							)}
						</UiText>
					)}
				</div>
			</div>

			{/* Transaction Cards List */}
			<div className="space-y-4">
				{transactions.map((transaction) => (
					<TransactionCard key={transaction.id} transaction={transaction} />
				))}
			</div>

			{/* Pagination */}
			{meta && meta.total_pages > 1 && (
				<div className="mt-8 flex justify-center">
					<UiPaginator
						first={(meta.page - 1) * meta.limit}
						rows={meta.limit}
						totalRecords={meta.total}
						onPageChange={onPageChange}
					/>
				</div>
			)}
		</div>
	);
};

export default TransactionList;
