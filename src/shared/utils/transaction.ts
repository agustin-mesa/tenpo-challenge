import type { TransactionCategory } from '@/shared/types/transaction.types';

export const transaction = {
	getCategoryIcon: (category: TransactionCategory): string => {
		switch (category) {
			case 'transfer':
				return 'pi-arrow-right-arrow-left';
			case 'payment':
				return 'pi-credit-card';
			case 'deposit':
				return 'pi-plus-circle';
			case 'withdrawal':
				return 'pi-minus-circle';
			case 'purchase':
				return 'pi-shopping-cart';
			case 'refund':
				return 'pi-undo';
			case 'fee':
				return 'pi-percentage';
			case 'salary':
				return 'pi-wallet';
			case 'bonus':
				return 'pi-gift';
			default:
				return 'pi-circle';
		}
	},
	getCategoryLabel: (category: TransactionCategory): string => {
		switch (category) {
			case 'transfer':
				return 'Transferencia';
			case 'payment':
				return 'Pago';
			case 'deposit':
				return 'Depósito';
			case 'withdrawal':
				return 'Retiro';
			case 'purchase':
				return 'Compra';
			case 'refund':
				return 'Reembolso';
			case 'fee':
				return 'Comisión';
			case 'salary':
				return 'Salario';
			case 'bonus':
				return 'Bono';
			default:
				return 'Otro';
		}
	}
};
