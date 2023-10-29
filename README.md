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
auto-type-env -p .env -t ./src/@types/environment.d.ts

# or

auto-type-env # will use default values
```

<!-- For more detailed usage examples and API documentation, please refer to our [Wiki](https://github.com/Lucas-Gardini/auto-type-env/wiki). -->

## Contribution

Contributions are welcome! If you find a bug, have a feature request, or want to contribute in any other way, please open an issue or submit a pull request. We appreciate your feedback and involvement in making auto-type-env even better.

## License

auto-type-env is [MIT licensed](https://opensource.org/licenses/MIT), which means you can use it freely in your projects, both personal and commercial.

## Contact

If you have any questions, suggestions, or feedback, you can reach me at <contato@lucasgardini.com>.

<!-- Visit our website: [https://www.threadx.com](https://www.threadx.com) -->

---

**Disclaimer**: auto-type-env is a third-party library and is not affiliated with or endorsed by Node.js or its contributors.
