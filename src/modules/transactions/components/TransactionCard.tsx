import UiText from '@/shared/components/ui/UiText';
import { helpers } from '@/shared/utils/helpers';
import type { Transaction } from '@/shared/types/transaction.types';

interface TransactionCardProps {
	transaction: Transaction;
	onClick?: () => void;
}

const TransactionCard = ({ transaction, onClick }: TransactionCardProps) => {
	const isCredit = transaction.type === 'credit';

	return (
		<div
			className={helpers.cn(
				'border-v1-neutral-800 hover:border-v1-primary-500 rounded-lg border p-4 transition-all duration-200 hover:shadow-lg',
				onClick && 'hover:bg-v1-neutral-800'
			)}
			onClick={onClick}
		>
			<div className="flex items-start justify-between">
				<div className="flex gap-3">
					<div
						className={helpers.cn(
							'flex size-10 min-w-10 items-center justify-center rounded-full',
							isCredit
								? 'bg-v1-success-900 text-v1-success-400'
								: 'bg-v1-error-600/50 text-v1-error-400'
						)}
					>
						<i
							className={`pi ${helpers.transaction.getCategoryIcon(transaction.category)} text-sm`}
						/>
					</div>
					<div className="flex flex-col">
						<UiText type="body1" className="text-v1-neutral-0 font-medium">
							{transaction.description}
						</UiText>
						<UiText type="caption1" className="text-v1-neutral-400">
							{transaction.account_holder_name}
						</UiText>
						<UiText type="caption1" className="text-v1-neutral-400">
							{helpers.date.formatToChilean(transaction.processed_at)}
						</UiText>
					</div>
				</div>
				<div className="flex flex-col items-end gap-2">
					<UiText
						type="h4"
						className={helpers.cn(
							'font-bold',
							isCredit ? 'text-v1-success-400' : 'text-v1-error-400'
						)}
					>
						{isCredit ? '+' : '-'}
						{helpers.currency.formatChilean(transaction.amount, transaction.currency)}
					</UiText>
					<UiText type="caption2" className="text-v1-neutral-500">
						Balance:{' '}
						{helpers.currency.formatChilean(transaction.balance, transaction.currency)}
					</UiText>
				</div>
			</div>
		</div>
	);
};

export default TransactionCard;
