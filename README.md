# auto-type-env

[![npm version](https://badge.fury.io/js/auto-type-env.svg)](https://www.npmjs.com/package/auto-type-env)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

auto-type-env is a Node.js library that automatically generates TypeScript types for your environment variables.

## Installation

You can install auto-type-env via npm:

```shell
npm install -g auto-type-env

# or

npx auto-type-env
```

## Usage

Here's a quick example to get you started with auto-type-env:

```bash
auto-type-env --path .env --types ./src/environment.d.ts

# or

auto-type-env # will use default values (./.env, ./src/environment.d.ts)
```

## Example

Imagine you have a .env like this:

```env
ULTRA_SECRET_VARIABLE=value
ANOTHER_SECRET=value2
```

This library will generate something like:

```ts
export {};

declare global {
 namespace NodeJS {
  interface ProcessEnv {
   ULTRA_SECRET_VARIABLE: string;
   ANOTHER_SECRET: string;
  }
 }
}
```

## Tip

A great way to implement this to your project, is creating a custom script in your `package.json`:

```json
{
 "scripts": {
  "gen:env": "auto-type-env --path .env --types ./src/environment.d.ts"
 }
}
```

Then you can run `npm run generate-env` or `yarn generate-env` to generate the types.

Then you will have all the items available for you when you type `process.env`

## Contribution

Contributions are welcome! If you find a bug, have a feature request, or want to contribute in any other way, please open an issue or submit a pull request. We appreciate your feedback and involvement in making auto-type-env even better.

## License

auto-type-env is [MIT licensed](https://opensource.org/licenses/MIT), which means you can use it freely in your projects, both personal and commercial.

## Contact

If you have any questions, suggestions, or feedback, you can reach me at <contato@lucasgardini.com>.

---

**Disclaimer**: auto-type-env is a third-party library and is not affiliated with or endorsed by Node.js or its contributors.
