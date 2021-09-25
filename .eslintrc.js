module.exports = {
    extends: [
        'plugin:jsx-a11y/recommended',
        '@skycell-ag/eslint-config',
    ],
    globals: {
        otherGlobal: true,
        page: 'readonly',
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        cy: 'readonly',
        Cypress: 'readonly',
        jest: 'readonly',
        before: 'readonly',
        it: 'readonly',
        describe: 'readonly',
        expect: 'readonly',
    },
    env: {
        jest: true,
        browser: true,
        es6: true,
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        'react/jsx-props-no-spreading': 'error',
        complexity: [
            'error',
            7,
        ],
        'no-multiple-empty-lines': 'warn',
        'no-unused-vars': 'warn',
    },
}
