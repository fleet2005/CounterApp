import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]


// React components must start with an uppercase letter 

// ✅ 1. Default Export
// 📦 What It Means:
// A module can export only one default value.

// 👇 How to Export:

// export default functionName;

// 👇 How to Import:

// import sayHello from './utils'; // ✅ No curly braces
// sayHello();



// ✅ 2. Named Export
// 📦 What It Means:
// You can export multiple things by name from a module.

// 👇 How to Export:
// export {functionName1, functionName2, functionNameN};  //notice the absence of default keyword

// 👇 How to Import:
// import { add, subtract } from './math'; // ✅ Use curly braces
// console.log(add(2, 3));

 
// An id cannot start with a number



// Generic Syntax for selecting based on satisfying multiple selectors (AND condition):
// Selector1Selector2 {
//     box-shadow: 0 0 10px gray;
// }
// Targets: an element that has both selectors.
// No space between the selectors //(this is important).


// Selecting By class AND ID together:
// .card#featured {
//   box-shadow: 0 0 10px gray;
// }
// Targets: an element that has both .card class and #featured ID.
// No space between .class and #id //(this is important).

