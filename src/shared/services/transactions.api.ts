import ApiClient from './api.config';
import type {
	TransactionsResponse,
	TransactionQueryParams
} from '@/shared/types/transaction.types';

export class TransactionsAPI extends ApiClient {
	async getTransactions(params?: TransactionQueryParams): Promise<TransactionsResponse> {
		const response = await this.send<TransactionsResponse>(
			{
				method: 'get',
				path: '/transactions',
				searchParams: this.objectToURLParams(params as Record<string, unknown>)
			},
			{
				skipAuth: true
			}
		);

		return response.data;
	}
}

export default TransactionsAPI;
