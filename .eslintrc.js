// .eslintrc.js
module.exports = {
  root: true,
  ignorePatterns: ['node_modules/'],
  overrides: [
    //─── Backend (Node/CommonJS) ─────────────────────────────────────────────────
    {
      files: ['backend/**/*.js'],
      env: {
        node: true,
        commonjs: true,
        es6: true,
      },
      extends: ['eslint:recommended'],
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'script',
      },
      rules: {
        'no-console': 'off',
      },
    },
    //─── Frontend (React/Browser) ────────────────────────────────────────────────
    {
      files: ['frontend/**/*.{js,jsx}'],
      env: {
        browser: true,
        es6: true,
      },
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      extends: ['eslint:recommended', 'plugin:react/recommended'],
      settings: {
        react: {
          version: 'detect',
        },
      },
      rules: {
        // add any React‑specific overrides here
      },
    },
  ],
};

