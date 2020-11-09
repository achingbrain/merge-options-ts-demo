# merge-options ts demo

```console
$ git clone https://github.com/achingbrain/merge-options-ts-demo.git
$ cd merge-options-ts-demo
$ npm i
$ npm run build
npm info it worked if it ends with ok
npm info using npm@6.14.1
npm info using node@v12.16.1
npm info lifecycle merge-options-ts-demo@1.0.0~prebuild: merge-options-ts-demo@1.0.0
npm info lifecycle merge-options-ts-demo@1.0.0~build: merge-options-ts-demo@1.0.0

> merge-options-ts-demo@1.0.0 build /path/to/merge-options-ts-demo
> rm -rf ./dist && tsc

index.js:5:1 - error TS2349: This expression is not callable.
  Type 'typeof import("/path/to/merge-options-ts-demo/node_modules/merge-options/index")' has no call signatures.

5 mergeOptions(defaults, {})
  ~~~~~~~~~~~~


Found 1 error.

npm info lifecycle merge-options-ts-demo@1.0.0~build: Failed to exec build script
npm ERR! code ELIFECYCLE
npm ERR! errno 2
npm ERR! merge-options-ts-demo@1.0.0 build: `rm -rf ./dist && tsc`
npm ERR! Exit status 2
npm ERR!
npm ERR! Failed at the merge-options-ts-demo@1.0.0 build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm timing npm Completed in 955ms

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/alex/.npm/_logs/2020-11-09T09_58_54_789Z-debug.log
```