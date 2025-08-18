export const date = {
	formatToChilean: (date: string) => {
		return new Intl.DateTimeFormat('es-CL', {
			day: '2-digit',
			month: 'short',
			year: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		}).format(new Date(date));
	},
	formatDateOnly: (date: string) => {
		return new Intl.DateTimeFormat('es-CL', {
			day: '2-digit',
			month: 'short',
			year: 'numeric'
		}).format(new Date(date));
	},

	format: (date: string, options: Intl.DateTimeFormatOptions) => {
		return new Intl.DateTimeFormat('es-CL', options).format(new Date(date));
	}
};
