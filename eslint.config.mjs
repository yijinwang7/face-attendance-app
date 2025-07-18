// eslint.config.mjs
import pkgJs from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import vueParser from 'vue-eslint-parser';
import babelParser from '@babel/eslint-parser';

const { configs: jsConfigs } = pkgJs;
const compat = new FlatCompat({ recommendedConfig: jsConfigs.recommended });

const nodeGlobals = {
  require: 'readonly',
  module: 'readonly',
  exports: 'readonly',
  process: 'readonly',
  __dirname: 'readonly',
  __filename: 'readonly',
  console: 'readonly',
  Buffer: 'readonly',
  setTimeout: 'readonly',
  setInterval: 'readonly',
  clearTimeout: 'readonly',
  clearInterval: 'readonly'
};

export default [
  // JS base recommended
  jsConfigs.recommended,
  {
    ignores: [
      'node_modules/**',
      'backend/node_modules/**',
      'frontend/node_modules/**',
      'dist/**',
      'coverage/**'
    ]
  },

  // Backend (Node.js)
  {
    files: ['backend/**/*.js'],
    languageOptions: {
      parserOptions: { ecmaVersion: 2020, sourceType: 'script' },
      globals: nodeGlobals
    },
    rules: {
      'no-console': 'off'
    }
  },

  // Frontend config files (Node.js)
  {
    files: ['frontend/*.js'],
    languageOptions: {
      globals: nodeGlobals
    }
  },

  // Frontend (Vue 3 + Babel), with Vue warnings silenced
  {
    files: ['frontend/**/*.{js,vue}'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: babelParser,
        requireConfigFile: false,
        babelOptions: { configFile: './frontend/babel.config.js' },
        ecmaVersion: 2020,
        sourceType: 'module'
      },
      globals: {
        window: 'readonly',
        document: 'readonly'
      }
    },
    settings: {
      'vue/setup-compiler-macros': true
    },
    rules: {
      'vue/max-attributes-per-line': 'off',
      'vue/html-closing-bracket-spacing': 'off',
      'vue/require-default-prop': 'off'
    }
  },

  // Vue 3 recommended rules
  ...compat.config({ extends: ['plugin:vue/recommended'] })
];

