# @x12i/runs usage example

Run state machine, event stream, cancellation, checkpoints, and in-memory run storage. No HTTP.

This consuming application demonstrates **track an operation through an in-memory run lifecycle** using the published npm package, pinned to `0.4.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Track a workflow through state transitions and an event stream.
- Cancel or checkpoint a run using the included in-memory store without adding HTTP hosting.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/runs)
- [Implementation monorepo](https://github.com/x12i/web-agentic-tools)
- [Reviewed package source](https://github.com/x12i/web-agentic-tools/tree/adaddecd37858d6622bc977363c951988ef7b0a4/packages/runs)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
