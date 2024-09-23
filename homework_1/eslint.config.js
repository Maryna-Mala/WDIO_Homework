import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
    js.configs.recommended,
    eslintConfigPrettier,
    {
        rules: {
            'no-unused-vars': 'off',
            'no-undef': 'warn',
        },
    },
    {
        ignores: [
            '!node_modules/', // unignore `node_modules/` directory
            'node_modules/*', // ignore its content
            '!node_modules/mylibrary/', // unignore `node_modules/mylibrary` directory
        ],
    },
]
