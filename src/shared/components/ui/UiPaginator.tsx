import { Paginator } from 'primereact/paginator';

interface UiPaginatorProps {
	first: number;
	rows: number;
	totalRecords: number;
	onPageChange: (page: number) => void;
}

const UiPaginator = ({ first, rows, totalRecords, onPageChange }: UiPaginatorProps) => {
	return (
		<Paginator
			first={(first - 1) * rows}
			rows={rows}
			totalRecords={totalRecords}
			onPageChange={(e) => onPageChange(e.page + 1)}
			pt={{
				root: {
					className: '!bg-transparent !border-none !p-0'
				}
			}}
		/>
	);
};

export default UiPaginator;
