import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
	{
		ignores: ['dist/', 'node_modules/', '*.config.js', '*.config.ts', 'public/']
	},
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		languageOptions: {
			parser: typescriptParser,
			parserOptions: {
				ecmaVersion: 2021,
				sourceType: 'module',
				ecmaFeatures: {
					jsx: true
				}
			},
			globals: {
				console: 'readonly',
				process: 'readonly',
				Buffer: 'readonly',
				__dirname: 'readonly',
				__filename: 'readonly',
				global: 'readonly',
				window: 'readonly',
				document: 'readonly',
				navigator: 'readonly',
				localStorage: 'readonly',
				sessionStorage: 'readonly',
				setTimeout: 'readonly',
				URLSearchParams: 'readonly'
			}
		},
		plugins: {
			'@typescript-eslint': typescript,
			react,
			'react-hooks': reactHooks,
			prettier
		},
		rules: {
			...js.configs.recommended.rules,
			...typescript.configs.recommended.rules,
			...react.configs.recommended.rules,
			'react/jsx-no-target-blank': 'off', // Disable target="_blank" security warning
			...reactHooks.configs.recommended.rules,
			...prettierConfig.rules,

			// Prettier integration
			'prettier/prettier': 'error',

			// React rules
			'react/react-in-jsx-scope': 'off',
			'react/prop-types': 'off',
			'react/no-children-prop': 'off',
			'react/display-name': 'off',

			// TypeScript rules
			'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
			'@typescript-eslint/no-explicit-any': 'error',
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',

			// React Hooks rules
			'react-hooks/rules-of-hooks': 'off',
			'react-hooks/exhaustive-deps': 'off'
		},
		settings: {
			react: {
				version: 'detect'
			}
		}
	},
	{
		files: ['**/*.js', '**/*.cjs'],
		languageOptions: {
			sourceType: 'commonjs',
			globals: {
				module: 'readonly',
				require: 'readonly',
				exports: 'readonly',
				process: 'readonly',
				__dirname: 'readonly',
				__filename: 'readonly'
			}
		}
	}
];
