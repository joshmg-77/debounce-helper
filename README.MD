# Debounce helper
![NPM](https://img.shields.io/npm/v/@joshmg-77/debounce-helper?color=green&logo=npm)

Simple debounce for all javascript environments, can be used in React, Vanilla js, Svelte, Node and more.   Easy to use and lightweight

## Features
- Multiple callbacks
- Optional Delay 
- default delay 350 miliseconds

## Installation

Debounce-helper can use any version of Node to run.

**Npm**
```js
npm i @joshmg-77/debounce-helper --save-dev
```
**Yarn**

```sh
yarn add @joshmg-77/debounce-helper --dev
```

## Example

Using ES6 Modules
```js
import debounce from '@joshmg-77/debounce-helper'

const fn = debounce((params) => console.log("avoid excessive clicks", params), 5000)

fn()
```
After 5 second
```js
Result: avoid excessive clicks
```
***
Without ES6 Modules
```js
const debounce = require('@joshmg-77/debounce-helper')

const fn = debounce((params) => console.log("avoid excessive clicks", params), 5000)

fn()
```
After 5 second
```js
Result: avoid excessive clicks
```
***
### Another example:

```js
import debounce from '@joshmg-77/debounce-helper'

const fn1 = () => console.log('some code')
const fn2 = () => console.log('foo bar')
const fn3 = () => console.log('service call')
const [Fn1, Fn2, Fn3] = debounce([fn1, fn2, fn3])

Fn1()
Fn2()
Fn3()

```
After 350 miliseconds
```js
Result: 
'some code'
'foo bar'
'service call'
```

## License
GPL

