import { useTransactions } from '@/modules/transactions/hooks/useTransactions';
import TransactionList from '@/modules/transactions/components/TransactionList';
import PageHeader from '@/shared/components/PageHeader';
import StatsGrid from '@/shared/components/StatsGrid';

const TransactionsPage = () => {
	const { transactions, meta, isLoading, isError, error, goToPage } = useTransactions();

	const stats = meta
		? [
				{
					icon: 'pi-list',
					iconColor: 'text-v1-primary-500',
					iconBgColor: 'bg-v1-primary-900',
					title: meta.total,
					subtitle: 'Total de transacciones'
				},
				{
					icon: 'pi-arrow-up',
					iconColor: 'text-v1-success-400',
					iconBgColor: 'bg-v1-success-900',
					title: transactions.filter((t) => t.type === 'credit').length,
					subtitle: 'Ingresos en esta página'
				},
				{
					icon: 'pi-arrow-down',
					iconColor: 'text-v1-error-400',
					iconBgColor: 'bg-v1-error-600/50',
					title: transactions.filter((t) => t.type === 'debit').length,
					subtitle: 'Egresos en esta página'
				}
			]
		: [];

	return (
		<div className="space-y-6">
			<PageHeader
				title="Mis Transacciones"
				subtitle="Revisa el historial completo de tus movimientos financieros"
			/>

			{meta && <StatsGrid stats={stats} />}

			<TransactionList
				transactions={transactions}
				meta={meta}
				isLoading={isLoading}
				isError={isError}
				error={error}
				onPageChange={goToPage}
			/>
		</div>
	);
};

export default TransactionsPage;
