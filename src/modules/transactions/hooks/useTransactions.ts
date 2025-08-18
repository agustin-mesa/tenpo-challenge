import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import TransactionsAPI from '@/shared/services/transactions.api';
import type { TransactionQueryParams } from '@/shared/types/transaction.types';

export const TRANSACTIONS_KEYS = {
	all: ['transactions'] as const,
	lists: () => [...TRANSACTIONS_KEYS.all, 'list'] as const,
	list: (params?: TransactionQueryParams) => [...TRANSACTIONS_KEYS.lists(), params] as const
};

const transactionsAPI = new TransactionsAPI();

export const useTransactions = (initialParams?: TransactionQueryParams) => {
	const [params, setParams] = useState<TransactionQueryParams>({
		page: 1,
		limit: 10,
		...initialParams
	});

	const query = useQuery({
		queryKey: TRANSACTIONS_KEYS.list(params),
		queryFn: () => transactionsAPI.getTransactions(params),
		staleTime: 5 * 60 * 1000,
		refetchOnWindowFocus: false
	});

	const updateParams = (newParams: Partial<TransactionQueryParams>) => {
		setParams((prev) => ({ ...prev, ...newParams }));
	};

	const goToPage = (page: number) => {
		updateParams({ page });
	};

	const changePageSize = (limit: number) => {
		updateParams({ limit, page: 1 });
	};

	const applyFilters = (filters: Partial<TransactionQueryParams>) => {
		updateParams({ ...filters, page: 1 });
	};

	const clearFilters = () => {
		setParams({ page: 1, limit: params.limit });
	};

	return {
		transactions: query.data?.data || [],
		meta: query.data?.meta,

		isLoading: query.isLoading,
		error: query.error,
		isError: query.isError,
		isFetching: query.isFetching,

		currentParams: params,

		refetch: query.refetch,
		updateParams,
		goToPage,
		changePageSize,
		applyFilters,
		clearFilters
	};
};
