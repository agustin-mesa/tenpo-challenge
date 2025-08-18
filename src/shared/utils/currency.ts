export const currency = {
	formatChilean: (amount: number, currencyCode: string) => {
		return new Intl.NumberFormat('es-CL', {
			style: 'currency',
			currency: currencyCode,
			minimumFractionDigits: 0,
			maximumFractionDigits: 0
		}).format(amount);
	},
	formatWithDecimals: (amount: number, currencyCode: string, decimals: number = 2) => {
		return new Intl.NumberFormat('es-CL', {
			style: 'currency',
			currency: currencyCode,
			minimumFractionDigits: decimals,
			maximumFractionDigits: decimals
		}).format(amount);
	},
	formatNumber: (amount: number) => {
		return new Intl.NumberFormat('es-CL').format(amount);
	}
};
