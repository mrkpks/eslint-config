# @code-pushup/eslint-config

[![npm](https://img.shields.io/npm/v/%40code-pushup%2Feslint-config.svg)](https://www.npmjs.com/package/@code-pushup/eslint-config)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Recommended ESLint presets by [Code PushUp](https://github.com/code-pushup/cli/tree/main/packages/cli).

<!-- begin autogenerated -->

## ⚙️ Configs

Configurations are available for different tech stacks.

| Stack | Config | Description |
| :-: | :-- | :-- |
| ![javascript](https://raw.githubusercontent.com/code-pushup/eslint-config/main/docs/icons/material/javascript.png) | [@code-pushup](https://github.com/code-pushup/eslint-config/blob/main/docs/index.md) | Default config, suitable for any **JavaScript/TypeScript** project. |
| ![typescript](https://raw.githubusercontent.com/code-pushup/eslint-config/main/docs/icons/material/typescript.png) | [@code-pushup/eslint-config/typescript](https://github.com/code-pushup/eslint-config/blob/main/docs/typescript.md) | Config for strict **TypeScript** projects. |
| ![nodejs](https://raw.githubusercontent.com/code-pushup/eslint-config/main/docs/icons/material/nodejs.png) | [@code-pushup/eslint-config/node](https://github.com/code-pushup/eslint-config/blob/main/docs/node.md) | Config for **Node.js** projects. |
| ![angular](https://raw.githubusercontent.com/code-pushup/eslint-config/main/docs/icons/material/angular.png) | [@code-pushup/eslint-config/angular](https://github.com/code-pushup/eslint-config/blob/main/docs/angular.md) | Config for **Angular** projects. |
| ![ngrx](https://raw.githubusercontent.com/code-pushup/eslint-config/main/docs/icons/other/ngrx.png) | [@code-pushup/eslint-config/angular-ngrx](https://github.com/code-pushup/eslint-config/blob/main/docs/angular-ngrx.md) | Config for **Angular** projects using **NgRx** library. |
| ![graphql](https://raw.githubusercontent.com/code-pushup/eslint-config/main/docs/icons/material/graphql.png) | [@code-pushup/eslint-config/graphql](https://github.com/code-pushup/eslint-config/blob/main/docs/graphql.md) | Config for **GraphQL servers** implemented in Node.js. |
| ![jest](https://raw.githubusercontent.com/code-pushup/eslint-config/main/docs/icons/material/jest.png) | [@code-pushup/eslint-config/jest](https://github.com/code-pushup/eslint-config/blob/main/docs/jest.md) | Config for projects using **Jest** for testing. |
| ![vitest](https://raw.githubusercontent.com/code-pushup/eslint-config/main/docs/icons/material/vitest.png) | [@code-pushup/eslint-config/vitest](https://github.com/code-pushup/eslint-config/blob/main/docs/vitest.md) | Config for projects using **Vitest** for testing. |
| ![cypress](https://raw.githubusercontent.com/code-pushup/eslint-config/main/docs/icons/material/cypress.png) | [@code-pushup/eslint-config/cypress](https://github.com/code-pushup/eslint-config/blob/main/docs/cypress.md) | Config for projects using **Cypress** for testing. |
| ![storybook](https://raw.githubusercontent.com/code-pushup/eslint-config/main/docs/icons/material/storybook.png) | [@code-pushup/eslint-config/storybook](https://github.com/code-pushup/eslint-config/blob/main/docs/storybook.md) | Config for projects using **Storybook** for UI components. |

Some configs extend other configs, so for example adding `"extends": ["@code-pushup/eslint-config/angular"]` implicitly includes `@code-pushup/eslint-config/typescript` and `@code-pushup` as well.

```mermaid
  graph BT;
    index("@code-pushup")
    typescript("@code-pushup/eslint-config/typescript")
    node("@code-pushup/eslint-config/node")
    angular("@code-pushup/eslint-config/angular")
    angular-ngrx("@code-pushup/eslint-config/angular-ngrx")
    graphql("@code-pushup/eslint-config/graphql")
    typescript --extends--> index
    node --extends--> index
    angular --extends--> typescript
    angular-ngrx --extends--> angular
    graphql --extends--> node
```

### 📦 Peer dependencies

|  | NPM package | Version | Required |
| :-: | :-- | :-: | :-: |
| ![eslint](https://raw.githubusercontent.com/code-pushup/eslint-config/main/docs/icons/material/eslint.png) | [eslint](https://www.npmjs.com/package/eslint) | ```^8.0.0``` | ✅ |
| ![typescript](https://raw.githubusercontent.com/code-pushup/eslint-config/main/docs/icons/material/typescript.png) | [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) | ```^6.0.0``` | ✅ |
| ![typescript](https://raw.githubusercontent.com/code-pushup/eslint-config/main/docs/icons/material/typescript.png) | [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser) | ```^6.0.0``` | ✅ |
| ![lambda](https://raw.githubusercontent.com/code-pushup/eslint-config/main/docs/icons/icons8/lambda.png) | [eslint-plugin-functional](https://www.npmjs.com/package/eslint-plugin-functional) | ```^6.0.0``` | ✅ |
| ![import](https://raw.githubusercontent.com/code-pushup/eslint-config/main/docs/icons/icons8/import.png) | [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) | ```^2.25.0``` | ✅ |
| ![import](https://raw.githubusercontent.com/code-pushup/eslint-config/main/docs/icons/icons8/import.png) | [eslint-import-resolver-typescript](https://www.npmjs.com/package/eslint-import-resolver-typescript) | ```^3.0.0``` |  |
| ![secure](https://raw.githubusercontent.com/code-pushup/eslint-config/main/docs/icons/icons8/secure.png) | [eslint-plugin-no-secrets](https://www.npmjs.com/package/eslint-plugin-no-secrets) | ```^0.8.0``` | ✅ |
| ![promise](https://raw.githubusercontent.com/code-pushup/eslint-config/main/docs/icons/icons8/promise.png) | [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise) | ```^6.0.0``` | ✅ |
| ![sonar](https://raw.githubusercontent.com/code-pushup/eslint-config/main/docs/icons/other/sonar.png) | [eslint-plugin-sonarjs](https://www.npmjs.com/package/eslint-plugin-sonarjs) | ```>=0.22.0``` | ✅ |
| ![unicorn](https://raw.githubusercontent.com/code-pushup/eslint-config/main/docs/icons/icons8/unicorn.png) | [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn) | ```>=48.0.0``` | ✅ |
| ![angular](https://raw.githubusercontent.com/code-pushup/eslint-config/main/docs/icons/material/angular.png) | [@angular-eslint/eslint-plugin](https://www.npmjs.com/package/@angular-eslint/eslint-plugin) | ```^17.0.0``` |  |
| ![angular_component](https://raw.githubusercontent.com/code-pushup/eslint-config/main/docs/icons/material/angular_component.png) | [@angular-eslint/eslint-plugin-template](https://www.npmjs.com/package/@angular-eslint/eslint-plugin-template) | ```^17.0.0``` |  |
| ![angular_component](https://raw.githubusercontent.com/code-pushup/eslint-config/main/docs/icons/material/angular_component.png) | [@angular-eslint/template-parser](https://www.npmjs.com/package/@angular-eslint/template-parser) | ```^17.0.0``` |  |
| ![graphql](https://raw.githubusercontent.com/code-pushup/eslint-config/main/docs/icons/material/graphql.png) | [@graphql-eslint/eslint-plugin](https://www.npmjs.com/package/@graphql-eslint/eslint-plugin) | ```^3.0.0``` |  |
| ![ngrx](https://raw.githubusercontent.com/code-pushup/eslint-config/main/docs/icons/other/ngrx.png) | [@ngrx/eslint-plugin](https://www.npmjs.com/package/@ngrx/eslint-plugin) | ```^17.0.0``` |  |
| ![cypress](https://raw.githubusercontent.com/code-pushup/eslint-config/main/docs/icons/material/cypress.png) | [eslint-plugin-cypress](https://www.npmjs.com/package/eslint-plugin-cypress) | ```^2.0.0``` |  |
| ![expired](https://raw.githubusercontent.com/code-pushup/eslint-config/main/docs/icons/icons8/expired.png) | [eslint-plugin-deprecation](https://www.npmjs.com/package/eslint-plugin-deprecation) | ```^2.0.0``` |  |
| ![jest](https://raw.githubusercontent.com/code-pushup/eslint-config/main/docs/icons/material/jest.png) | [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest) | ```^27.0.0``` |  |
| ![nodejs](https://raw.githubusercontent.com/code-pushup/eslint-config/main/docs/icons/material/nodejs.png) | [eslint-plugin-n](https://www.npmjs.com/package/eslint-plugin-n) | ```^16.0.0``` |  |
| ![rxjs](https://raw.githubusercontent.com/code-pushup/eslint-config/main/docs/icons/other/rxjs.png) | [eslint-plugin-rxjs](https://www.npmjs.com/package/eslint-plugin-rxjs) | ```^5.0.0``` |  |
| ![storybook](https://raw.githubusercontent.com/code-pushup/eslint-config/main/docs/icons/material/storybook.png) | [eslint-plugin-storybook](https://www.npmjs.com/package/eslint-plugin-storybook) | ```^0.6.0``` |  |
| ![vitest](https://raw.githubusercontent.com/code-pushup/eslint-config/main/docs/icons/material/vitest.png) | [eslint-plugin-vitest](https://www.npmjs.com/package/eslint-plugin-vitest) | ```^0.3.0``` |  |

### 🧪 Test overrides

For non-production code, some rules are disabled (or downgraded from errors to warnings).

This applies to file paths matching any of the following globs:

- `*.spec.?(c|m)[jt]s?(x)`
- `*.test.?(c|m)[jt]s?(x)`
- `**/__tests__/**/*.?(c|m)[jt]s?(x)`
- `**/__mocks__/**/*.?(c|m)[jt]s?(x)`
- `*.cy.?(c|m)[jt]s?(x)`
- `*.stories.?(c|m)[jt]s?(x)`
- `*.e2e.?(c|m)[jt]s?(x)`
- `*.mock.?(c|m)[jt]s?(x)`
- `*.mocks.?(c|m)[jt]s?(x)`
- `**/test/**/*.?(c|m)[jt]s?(x)`
- `**/tests/**/*.?(c|m)[jt]s?(x)`
- `**/mocks/**/*.?(c|m)[jt]s?(x)`
- `**/testing-utils/**/*.?(c|m)[jt]s?(x)`
- `**/test-utils/**/*.?(c|m)[jt]s?(x)`
- `**/fixtures/**/*.?(c|m)[jt]s?(x)`

<!-- end autogenerated -->
