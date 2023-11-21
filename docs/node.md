# `@code-pushup/eslint-config/node` config

Configuration for Node.js projects.

## ⚙️ Setup

Add to `extends` in your .eslintrc file:

```json
{
  "extends": ["@code-pushup/eslint-config/node"]
}
```

## 📏 Rules (259)

**255** rules are included from the default config. For brevity, only the **4** additional rules are listed in this document.

Refer to the extended config's docs:

- [`@code-pushup` rules](./index.md#📏-rules-255)


> 🔧 Automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/user-guide/command-line-interface#--fix).<br>💡 Manually fixable by [editor suggestions](https://eslint.org/docs/developer-guide/working-with-rules#providing-suggestions).<br>🧪🚫 Disabled for [test files](../README.md#🧪-test-overrides).<br>🧪⚠️ Severity lessened to warning for [test files](../README.md#🧪-test-overrides).

### 🚨 Errors (1)

| Plugin | Rule | Options | Autofix | Overrides |
| :-: | :-- | :-- | :-: | :-: |
| [![n](./icons/material/nodejs.png)](https://github.com/eslint-community/eslint-plugin-n#readme) | [no-unsupported-features/node-builtins](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unsupported-features/node-builtins.md)<br>disallow unsupported Node.js built-in APIs on the specified version |  |  |  |

### ⚠️ Warnings (3)

| Plugin | Rule | Options | Autofix | Overrides |
| :-: | :-- | :-- | :-: | :-: |
| [![n](./icons/material/nodejs.png)](https://github.com/eslint-community/eslint-plugin-n#readme) | [no-process-exit](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-process-exit.md)<br>disallow the use of `process.exit()` |  |  |  |
| [![n](./icons/material/nodejs.png)](https://github.com/eslint-community/eslint-plugin-n#readme) | [no-sync](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-sync.md)<br>disallow synchronous methods |  |  |  |
| [![n](./icons/material/nodejs.png)](https://github.com/eslint-community/eslint-plugin-n#readme) | [prefer-promises/fs](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-promises/fs.md)<br>enforce `require("fs").promises` |  |  |  |