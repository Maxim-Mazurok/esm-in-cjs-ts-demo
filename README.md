# Demo of how to use ESM modules in CommonJS module with TypeScript

Demonstrating how to use ESM-only packages `node-fetch@3` and `got@12` in a `commonjs` project. As well as using `import` from `node:child_process`.

## Running it

1. `git clone https://github.com/Maxim-Mazurok/esm-in-cjs-ts-demo && cd esm-in-cjs-ts-demo`
2. `nvm i` - make sure to use node/npm versions from "engines" section of the [package.json](./package.json)
3. `npm ci` - install deps
4. `npm start` - compile and run
5. Observe:
   ```text
   [Function: spawn]
   Fetched with node-fetch:  <ref *1> Gunzip {...
   Fetched with got:  {"login":"Maxim-Mazurok",...
   ```

## Notes

- Need `"esModuleInterop": true` to resolve `Module '"node:http"' has no default export` error and similar
- Need `"module": "CommonJS"` or others to resolve `Dynamic imports are only supported when the '--module' flag is set to 'es2020', 'es2022', 'esnext', 'commonjs', 'amd', 'system', 'umd', 'node16', or 'nodenext'.`
- Need `"module": "CommonJS"` to allow using `import` instead of `require()`, resolves `Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.` error in `import { spawn } from "child_process";`
- Need `"moduleResolution": "nodenext"` to resolve `Cannot find module 'node-fetch'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option?`
- Don't really need to add `"type": "commonjs"` in `package.json` because module is assumed to be `commonjs` unless it has `"type": "module"` in `package.json`. tsconfig doesn't seem to affect that.
- Need to use `(async () => {...})()` pattern to resolve `'await' expressions are only allowed at the top level of a file when that file is a module, but this file has no imports or exports. Consider adding an empty 'export {}' to make this file a module.`
- Need to use dynamic imports to resolve `The current file is a CommonJS module whose imports will produce 'require' calls; however, the referenced file is an ECMAScript module and cannot be imported with 'require'. Consider writing a dynamic 'import("got")' call instead.
To convert this file to an ECMAScript module, change its file extension to '.mts' or create a local package.json file with { "type": "module" }`
