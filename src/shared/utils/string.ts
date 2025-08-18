/* eslint-disable @typescript-eslint/no-explicit-any */

export const string = {
	isValidErrorMessage: (message: unknown): message is string => {
		return typeof message === 'string' && message.trim().length > 0;
	},
	isValidErrorArray: (message: unknown): message is string[] => {
		return (
			Array.isArray(message) &&
			message.length > 0 &&
			message.every((item) => typeof item === 'string' && item.trim().length > 0)
		);
	},
	formatErrorMessage: (message: unknown): string | null => {
		if (string.isValidErrorMessage(message)) {
			return message;
		}

		if (string.isValidErrorArray(message)) {
			return message.join(', ');
		}

		return null;
	},
	getError: (error: unknown) => {
		const fallbackMessage = 'Unknown error';

		if (!error || typeof error !== 'object') {
			return fallbackMessage;
		}

		const commonErrorPaths = [
			'response.data.message',
			'response.data.error.message',
			'response.data.error',
			'response.data.errors.message',
			'response.data.errors[0].message',
			'response.data.details',
			'data.message',
			'data.error.message',
			'data.error',
			'data.errors.message',
			'data.errors[0].message',
			'data.details',
			'message',
			'error.message',
			'error',
			'errors.message',
			'errors[0].message',
			'details',
			'statusText'
		];

		for (const path of commonErrorPaths) {
			const errorMessage = (error as Record<string, unknown>)?.[path];
			const formattedMessage = string.formatErrorMessage(errorMessage);

			if (formattedMessage) {
				return formattedMessage;
			}
		}

		if (typeof error === 'string') {
			return error;
		}

		return fallbackMessage;
	}
};
