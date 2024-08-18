import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'
import airbnbBase from 'eslint-config-airbnb-base'
import prettier from 'eslint-config-prettier'
import babelParser from '@babel/eslint-parser'

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react'], // JSX 파싱을 위해 필요
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react: pluginReact,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      ...pluginJs.configs.recommended.rules,
      ...pluginReact.configs.flat.recommended.rules,
      ...pluginReact.configs['jsx-runtime'].rules, // JSX Runtime 관련 규칙 추가
      ...airbnbBase.rules, // Airbnb 베이스 규칙 추가
      ...prettier.rules, // Prettier 규칙 추가
    },
  },
]
