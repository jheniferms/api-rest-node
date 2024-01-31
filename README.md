# api-rest-node
This project is a study of node 

## Config build

Run command `yarn tsc --init`. This will create a file `tsconfig.json`. 

In this file put these lines:

``"rootDir": "./src",``

``"outDir": "./build",``

## Config integration test

Run command `yarn add jest ts-jest @types/jest` to install.

Run `yarn jest --init` to create `jest.config.ts`.

1. In this file remove comment of `coverageReporters` and select `json`. 
2. Put this `setupFilesAfterEnv: [
        "./tests/jest.setup.ts"
    ]`
3. Overwrite `testMatch` with `testMatch: [
        "<rootDir>/tests/**/*.test.ts",
    ]`
4. Overwrite `transform` with `transform: {"^.+\\.(ts|tsx)$":"ts-jest"}`

Run command `yarn add -D supertest @types/supertest`

Then config `jest.config.ts`

Put on `tsconfig.json` this `"exclude": [
    "./jest.config.ts",
    "./node_modules",
    "./tests",
    "./build"
  ]`

