# `@code-pushup` config

Default configuration, suitable for any JavaScript/TypeScript project.

## ⚙️ Setup

Add to `extends` in your .eslintrc file:

```json
{
  "extends": ["@code-pushup"]
}
```

## 📏 Rules (92)

🔧 Automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/user-guide/command-line-interface#--fix).<br>💡 Manually fixable by [editor suggestions](https://eslint.org/docs/developer-guide/working-with-rules#providing-suggestions).

### 🚨 Errors (72)

| Plugin | Rule | Options | Autofix |
| :-- | :-- | :-- | :-- |
| - | [eqeqeq](https://eslint.org/docs/latest/rules/eqeqeq)<br>Require the use of `===` and `!==` | <details><summary>always, null: never</summary><pre>[<br>  "always",<br>  {<br>    "null": "never"<br>  }<br>]</pre></details> | 🔧 |
| - | [for-direction](https://eslint.org/docs/latest/rules/for-direction)<br>Enforce "for" loop update clause moving the counter in the right direction | - | - |
| - | [guard-for-in](https://eslint.org/docs/latest/rules/guard-for-in)<br>Require `for-in` loops to include an `if` statement | - | - |
| - | [no-async-promise-executor](https://eslint.org/docs/latest/rules/no-async-promise-executor)<br>Disallow using an async function as a Promise executor | - | - |
| - | [no-case-declarations](https://eslint.org/docs/latest/rules/no-case-declarations)<br>Disallow lexical declarations in case clauses | - | - |
| - | [no-class-assign](https://eslint.org/docs/latest/rules/no-class-assign)<br>Disallow reassigning class members | - | - |
| - | [no-compare-neg-zero](https://eslint.org/docs/latest/rules/no-compare-neg-zero)<br>Disallow comparing against -0 | - | - |
| - | [no-cond-assign](https://eslint.org/docs/latest/rules/no-cond-assign)<br>Disallow assignment operators in conditional expressions | - | - |
| - | [no-constant-condition](https://eslint.org/docs/latest/rules/no-constant-condition)<br>Disallow constant expressions in conditions | - | - |
| - | [no-control-regex](https://eslint.org/docs/latest/rules/no-control-regex)<br>Disallow control characters in regular expressions | - | - |
| - | [no-debugger](https://eslint.org/docs/latest/rules/no-debugger)<br>Disallow the use of `debugger` | - | - |
| - | [no-delete-var](https://eslint.org/docs/latest/rules/no-delete-var)<br>Disallow deleting variables | - | - |
| - | [no-dupe-else-if](https://eslint.org/docs/latest/rules/no-dupe-else-if)<br>Disallow duplicate conditions in if-else-if chains | - | - |
| - | [no-duplicate-case](https://eslint.org/docs/latest/rules/no-duplicate-case)<br>Disallow duplicate case labels | - | - |
| - | [no-empty](https://eslint.org/docs/latest/rules/no-empty)<br>Disallow empty block statements | - | 💡 |
| - | [no-empty-character-class](https://eslint.org/docs/latest/rules/no-empty-character-class)<br>Disallow empty character classes in regular expressions | - | - |
| - | [no-empty-pattern](https://eslint.org/docs/latest/rules/no-empty-pattern)<br>Disallow empty destructuring patterns | - | - |
| - | [no-eval](https://eslint.org/docs/latest/rules/no-eval)<br>Disallow the use of `eval()` | - | - |
| - | [no-ex-assign](https://eslint.org/docs/latest/rules/no-ex-assign)<br>Disallow reassigning exceptions in `catch` clauses | - | - |
| - | [no-extra-boolean-cast](https://eslint.org/docs/latest/rules/no-extra-boolean-cast)<br>Disallow unnecessary boolean casts | - | 🔧 |
| - | [no-extra-semi](https://eslint.org/docs/latest/rules/no-extra-semi)<br>Disallow unnecessary semicolons | - | 🔧 |
| - | [no-fallthrough](https://eslint.org/docs/latest/rules/no-fallthrough)<br>Disallow fallthrough of `case` statements | - | - |
| - | [no-global-assign](https://eslint.org/docs/latest/rules/no-global-assign)<br>Disallow assignments to native objects or read-only global variables | - | - |
| - | [no-inner-declarations](https://eslint.org/docs/latest/rules/no-inner-declarations)<br>Disallow variable or `function` declarations in nested blocks | - | - |
| - | [no-invalid-regexp](https://eslint.org/docs/latest/rules/no-invalid-regexp)<br>Disallow invalid regular expression strings in `RegExp` constructors | - | - |
| - | [no-irregular-whitespace](https://eslint.org/docs/latest/rules/no-irregular-whitespace)<br>Disallow irregular whitespace | - | - |
| - | [no-misleading-character-class](https://eslint.org/docs/latest/rules/no-misleading-character-class)<br>Disallow characters which are made with multiple code points in character class syntax | - | 💡 |
| - | [no-mixed-spaces-and-tabs](https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs)<br>Disallow mixed spaces and tabs for indentation | - | - |
| - | [no-nonoctal-decimal-escape](https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape)<br>Disallow `\8` and `\9` escape sequences in string literals | - | 💡 |
| - | [no-octal](https://eslint.org/docs/latest/rules/no-octal)<br>Disallow octal literals | - | - |
| - | [no-param-reassign](https://eslint.org/docs/latest/rules/no-param-reassign)<br>Disallow reassigning `function` parameters | <details><summary>props: true</summary><pre>{<br>  "props": true<br>}</pre></details> | - |
| - | [no-prototype-builtins](https://eslint.org/docs/latest/rules/no-prototype-builtins)<br>Disallow calling some `Object.prototype` methods directly on objects | - | 💡 |
| - | [no-regex-spaces](https://eslint.org/docs/latest/rules/no-regex-spaces)<br>Disallow multiple spaces in regular expressions | - | 🔧 |
| - | [no-self-assign](https://eslint.org/docs/latest/rules/no-self-assign)<br>Disallow assignments where both sides are exactly the same | - | - |
| - | [no-sequences](https://eslint.org/docs/latest/rules/no-sequences)<br>Disallow comma operators | - | - |
| - | [no-shadow-restricted-names](https://eslint.org/docs/latest/rules/no-shadow-restricted-names)<br>Disallow identifiers from shadowing restricted names | - | - |
| - | [no-sparse-arrays](https://eslint.org/docs/latest/rules/no-sparse-arrays)<br>Disallow sparse arrays | - | - |
| - | [no-template-curly-in-string](https://eslint.org/docs/latest/rules/no-template-curly-in-string)<br>Disallow template literal placeholder syntax in regular strings | - | - |
| - | [no-unexpected-multiline](https://eslint.org/docs/latest/rules/no-unexpected-multiline)<br>Disallow confusing multiline expressions | - | - |
| - | [no-unreachable-loop](https://eslint.org/docs/latest/rules/no-unreachable-loop)<br>Disallow loops with a body that allows only one iteration | - | - |
| - | [no-unsafe-finally](https://eslint.org/docs/latest/rules/no-unsafe-finally)<br>Disallow control flow statements in `finally` blocks | - | - |
| - | [no-unsafe-optional-chaining](https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining)<br>Disallow use of optional chaining in contexts where the `undefined` value is not allowed | - | - |
| - | [no-unused-labels](https://eslint.org/docs/latest/rules/no-unused-labels)<br>Disallow unused labels | - | 🔧 |
| - | [no-useless-backreference](https://eslint.org/docs/latest/rules/no-useless-backreference)<br>Disallow useless backreferences in regular expressions | - | - |
| - | [no-useless-catch](https://eslint.org/docs/latest/rules/no-useless-catch)<br>Disallow unnecessary `catch` clauses | - | - |
| - | [no-useless-escape](https://eslint.org/docs/latest/rules/no-useless-escape)<br>Disallow unnecessary escape characters | - | 💡 |
| - | [no-var](https://eslint.org/docs/latest/rules/no-var)<br>Require `let` or `const` instead of `var` | - | 🔧 |
| - | [no-with](https://eslint.org/docs/latest/rules/no-with)<br>Disallow `with` statements | - | - |
| - | [prefer-const](https://eslint.org/docs/latest/rules/prefer-const)<br>Require `const` declarations for variables that are never reassigned after declared | - | 🔧 |
| - | [prefer-rest-params](https://eslint.org/docs/latest/rules/prefer-rest-params)<br>Require rest parameters instead of `arguments` | - | - |
| - | [prefer-spread](https://eslint.org/docs/latest/rules/prefer-spread)<br>Require spread operators instead of `.apply()` | - | - |
| - | [require-yield](https://eslint.org/docs/latest/rules/require-yield)<br>Require generator functions to contain `yield` | - | - |
| - | [use-isnan](https://eslint.org/docs/latest/rules/use-isnan)<br>Require calls to `isNaN()` when checking for `NaN` | - | - |
| - | [valid-typeof](https://eslint.org/docs/latest/rules/valid-typeof)<br>Enforce comparing `typeof` expressions against valid strings | - | 💡 |
| [![@typescript-eslint](./icons/typescript.png)](https://typescript-eslint.io/) | [ban-ts-comment](https://typescript-eslint.io/rules/ban-ts-comment)<br>Disallow `@ts-<directive>` comments or require descriptions after directives | - | 💡 |
| [![@typescript-eslint](./icons/typescript.png)](https://typescript-eslint.io/) | [ban-types](https://typescript-eslint.io/rules/ban-types)<br>Disallow certain types | - | 🔧 💡 |
| [![@typescript-eslint](./icons/typescript.png)](https://typescript-eslint.io/) | [no-array-constructor](https://typescript-eslint.io/rules/no-array-constructor)<br>Disallow generic `Array` constructors | - | 🔧 |
| [![@typescript-eslint](./icons/typescript.png)](https://typescript-eslint.io/) | [no-duplicate-enum-values](https://typescript-eslint.io/rules/no-duplicate-enum-values)<br>Disallow duplicate enum member values | - | - |
| [![@typescript-eslint](./icons/typescript.png)](https://typescript-eslint.io/) | [no-explicit-any](https://typescript-eslint.io/rules/no-explicit-any)<br>Disallow the `any` type | - | 🔧 💡 |
| [![@typescript-eslint](./icons/typescript.png)](https://typescript-eslint.io/) | [no-extra-non-null-assertion](https://typescript-eslint.io/rules/no-extra-non-null-assertion)<br>Disallow extra non-null assertions | - | 🔧 |
| [![@typescript-eslint](./icons/typescript.png)](https://typescript-eslint.io/) | [no-loss-of-precision](https://typescript-eslint.io/rules/no-loss-of-precision)<br>Disallow literal numbers that lose precision | - | - |
| [![@typescript-eslint](./icons/typescript.png)](https://typescript-eslint.io/) | [no-misused-new](https://typescript-eslint.io/rules/no-misused-new)<br>Enforce valid definition of `new` and `constructor` | - | - |
| [![@typescript-eslint](./icons/typescript.png)](https://typescript-eslint.io/) | [no-namespace](https://typescript-eslint.io/rules/no-namespace)<br>Disallow TypeScript namespaces | - | - |
| [![@typescript-eslint](./icons/typescript.png)](https://typescript-eslint.io/) | [no-non-null-asserted-optional-chain](https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain)<br>Disallow non-null assertions after an optional chain expression | - | 💡 |
| [![@typescript-eslint](./icons/typescript.png)](https://typescript-eslint.io/) | [no-require-imports](https://typescript-eslint.io/rules/no-require-imports)<br>Disallow invocation of `require()` | - | - |
| [![@typescript-eslint](./icons/typescript.png)](https://typescript-eslint.io/) | [no-this-alias](https://typescript-eslint.io/rules/no-this-alias)<br>Disallow aliasing `this` | - | - |
| [![@typescript-eslint](./icons/typescript.png)](https://typescript-eslint.io/) | [no-unnecessary-type-constraint](https://typescript-eslint.io/rules/no-unnecessary-type-constraint)<br>Disallow unnecessary constraints on generic types | - | 💡 |
| [![@typescript-eslint](./icons/typescript.png)](https://typescript-eslint.io/) | [no-unsafe-declaration-merging](https://typescript-eslint.io/rules/no-unsafe-declaration-merging)<br>Disallow unsafe declaration merging | - | - |
| [![@typescript-eslint](./icons/typescript.png)](https://typescript-eslint.io/) | [no-unused-vars](https://typescript-eslint.io/rules/no-unused-vars)<br>Disallow unused variables | - | - |
| [![@typescript-eslint](./icons/typescript.png)](https://typescript-eslint.io/) | [no-var-requires](https://typescript-eslint.io/rules/no-var-requires)<br>Disallow `require` statements except in import statements | - | - |
| [![@typescript-eslint](./icons/typescript.png)](https://typescript-eslint.io/) | [prefer-as-const](https://typescript-eslint.io/rules/prefer-as-const)<br>Enforce the use of `as const` over literal type | - | 🔧 💡 |
| [![@typescript-eslint](./icons/typescript.png)](https://typescript-eslint.io/) | [triple-slash-reference](https://typescript-eslint.io/rules/triple-slash-reference)<br>Disallow certain triple slash directives in favor of ES6-style import declarations | - | - |

### ⚠️ Warnings (20)

| Plugin | Rule | Options | Autofix |
| :-- | :-- | :-- | :-- |
| - | [arrow-body-style](https://eslint.org/docs/latest/rules/arrow-body-style)<br>Require braces around arrow function bodies | <details><summary>as-needed</summary><pre>"as-needed"</pre></details> | 🔧 |
| - | [complexity](https://eslint.org/docs/latest/rules/complexity)<br>Enforce a maximum cyclomatic complexity allowed in a program | - | - |
| - | [curly](https://eslint.org/docs/latest/rules/curly)<br>Enforce consistent brace style for all control statements | - | 🔧 |
| - | [max-depth](https://eslint.org/docs/latest/rules/max-depth)<br>Enforce a maximum depth that blocks can be nested | - | - |
| - | [max-lines](https://eslint.org/docs/latest/rules/max-lines)<br>Enforce a maximum number of lines per file | <details><summary>skipBlankLines: true, skipC...</summary><pre>{<br>  "skipBlankLines": true,<br>  "skipComments": true<br>}</pre></details> | - |
| - | [max-lines-per-function](https://eslint.org/docs/latest/rules/max-lines-per-function)<br>Enforce a maximum number of lines of code in a function | <details><summary>skipBlankLines: true, skipC...</summary><pre>{<br>  "skipBlankLines": true,<br>  "skipComments": true<br>}</pre></details> | - |
| - | [max-nested-callbacks](https://eslint.org/docs/latest/rules/max-nested-callbacks)<br>Enforce a maximum depth that callbacks can be nested | <details><summary>max: 3</summary><pre>{<br>  "max": 3<br>}</pre></details> | - |
| - | [no-bitwise](https://eslint.org/docs/latest/rules/no-bitwise)<br>Disallow bitwise operators | - | - |
| - | [no-console](https://eslint.org/docs/latest/rules/no-console)<br>Disallow the use of `console` | <details><summary>allow: error, warn, info</summary><pre>{<br>  "allow": [<br>    "error",<br>    "warn",<br>    "info"<br>  ]<br>}</pre></details> | - |
| - | [no-duplicate-imports](https://eslint.org/docs/latest/rules/no-duplicate-imports)<br>Disallow duplicate module imports | - | - |
| - | [no-magic-numbers](https://eslint.org/docs/latest/rules/no-magic-numbers)<br>Disallow magic numbers | <details><summary>ignore: -1, 0, 1, 2, 7, 10,...</summary><pre>{<br>  "ignore": [<br>    -1,<br>    0,<br>    1,<br>    2,<br>    7,<br>    10,<br>    24,<br>    60,<br>    100,<br>    1000,<br>    3600<br>  ],<br>  "ignoreDefaultValues": true,<br>  "enforceConst": true,<br>  "detectObjects": true,<br>  "ignoreArrayIndexes": false,<br>  "ignoreClassFieldInitialValues": false<br>}</pre></details> | - |
| - | [no-undef-init](https://eslint.org/docs/latest/rules/no-undef-init)<br>Disallow initializing variables to `undefined` | - | 🔧 |
| - | [prefer-template](https://eslint.org/docs/latest/rules/prefer-template)<br>Require template literals instead of string concatenation | - | 🔧 |
| - | [radix](https://eslint.org/docs/latest/rules/radix)<br>Enforce the consistent use of the radix argument when using `parseInt()` | - | 💡 |
| - | [yoda](https://eslint.org/docs/latest/rules/yoda)<br>Require or disallow "Yoda" conditions | - | 🔧 |
| [![@typescript-eslint](./icons/typescript.png)](https://typescript-eslint.io/) | [consistent-type-definitions](https://typescript-eslint.io/rules/consistent-type-definitions)<br>Enforce type definitions to consistently use either `interface` or `type` | <details><summary>type</summary><pre>"type"</pre></details> | 🔧 |
| [![@typescript-eslint](./icons/typescript.png)](https://typescript-eslint.io/) | [default-param-last](https://typescript-eslint.io/rules/default-param-last)<br>Enforce default parameters to be last | - | - |
| [![@typescript-eslint](./icons/typescript.png)](https://typescript-eslint.io/) | [method-signature-style](https://typescript-eslint.io/rules/method-signature-style)<br>Enforce using a particular method signature syntax | - | 🔧 |
| [![@typescript-eslint](./icons/typescript.png)](https://typescript-eslint.io/) | [no-shadow](https://typescript-eslint.io/rules/no-shadow)<br>Disallow variable declarations from shadowing variables declared in the outer scope | - | - |
| [![@typescript-eslint](./icons/typescript.png)](https://typescript-eslint.io/) | [no-unused-expressions](https://typescript-eslint.io/rules/no-unused-expressions)<br>Disallow unused expressions | - | - |