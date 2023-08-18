# Welcome to the world of shared types

To contribute:
1. Create a new type anywhere within the `/src` directory. This can be in an existing directory/file or a new one.
  - If creating a new file, export everything from an `index.ts` file
2. Make sure that is is exported from `/src/index.ts`
3. Increment the pacakge version
4. Push to remote and open a PR (here)[https://github.com/palmerigarrett/experiment-types]


>For example: If a new directory `experimentGroup` is created. Use `index.ts` at `/experimentGroup/index.ts` to define and export your type/interface/etc. Then in `/src/index.ts`, add `export * from './experimentGroup'`.


On push to main, if the above was done correctly, a github action will trigger and publish the latest version of the package to be used.
