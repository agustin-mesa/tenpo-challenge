export type TransactionType = 'debit' | 'credit';

export type TransactionStatus = 'pending' | 'completed' | 'failed' | 'cancelled';

export type TransactionCategory =
	| 'transfer'
	| 'payment'
	| 'deposit'
	| 'withdrawal'
	| 'purchase'
	| 'refund'
	| 'fee'
	| 'salary'
	| 'bonus';

export interface Transaction {
	id: string;
	transaction_id: string;
	account_number: string;
	account_holder_name: string;
	type: TransactionType;
	amount: number;
	currency: string;
	status: TransactionStatus;
	category: TransactionCategory;
	description: string;
	merchant: string | null;
	destination_account: string | null;
	destination_account_holder: string | null;
	reference: string;
	balance: number;
	location: string;
	processed_at: string;
	created_at: string;
}

export interface TransactionMeta {
	page: number;
	limit: number;
	total: number;
	total_pages: number;
	has_next_page: boolean;
	has_prev_page: boolean;
}

export interface TransactionsResponse {
	data: Transaction[];
	meta: TransactionMeta;
}

export interface TransactionQueryParams {
	page?: number;
	limit?: number;
	type?: TransactionType;
	status?: TransactionStatus;
	category?: TransactionCategory;
	account_number?: string;
	search?: string;
}
