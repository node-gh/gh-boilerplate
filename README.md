# GH Boilerplate

[![NPM version](http://img.shields.io/npm/v/gh-boilerplate.svg?style=flat)](http://npmjs.org/gh-boilerplate)
[![NPM downloads](http://img.shields.io/npm/dm/gh-boilerplate.svg?style=flat)](http://npmjs.org/gh-boilerplate)
[![Build Status](http://img.shields.io/travis/node-gh/gh-boilerplate/master.svg?style=flat)](https://travis-ci.org/node-gh/gh-boilerplate)
[![Dependencies Status](http://img.shields.io/david/node-gh/gh-boilerplate.svg?style=flat)](https://david-dm.org/node-gh/gh-boilerplate)
[![DevDependencies Status](http://img.shields.io/david/dev/node-gh/gh-boilerplate.svg?style=flat)](https://david-dm.org/node-gh/gh-boilerplate#info=devDependencies)

NodeGH plugin for demonstrating how to create NodeGH plugins :)

> Maintained by [Your Name](https://github.com/yourname).

## Install

```
[sudo] npm install -g gh gh-boilerplate
```

## Usage

```
gh boilerplate
```

> **Alias:** `gh bo`

Option             | Usage        | Type
---                | ---          | ---
`-f`, `--foo`      | **Required** | `String`

#### Examples

* **Shortcut** for showing hello world message.

	```
gh bo
	```

* Show hello world message.

	```
gh bo --foo
	```

## Testing

Check [Travis](https://travis-ci.org/node-gh/gh-boilerplate) for continous integration results.

* Run [JSHint](http://www.jshint.com/), a tool to detect errors and potential problems.

    ```
npm run-script lint
    ```

* Run [Mocha](http://mochajs.org/), a unit test framework.

    ```
npm run-script test
    ```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

* v0.0.1 September 12, 2013
	* Start plugin using [gh-boilerplate](https://github.com/node-gh/gh-boilerplate)

## License

[BSD License](https://github.com/node-gh/gh/blob/master/LICENSE.md)
