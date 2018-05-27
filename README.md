Loader
=========

A small library for managing loaders.
[![NPM](https://nodei.co/npm/brsjs-loader.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/brsjs-loader/)

## Installation

  `npm install brsjs-loader`

## Usage
### Initialize loader with
```
import Loader from 'brsjs-loader';
let loader = new Loader('id', 'type');
```
#### 'id' is id of your element where you want to show your loader.
#### 'type' is type of loader.
### Show loader with
```
loader.show();
```
### Hide loader with
```
loader.hide();
```

# Loaders
- standard
- small-circle
- bars
- dots

## Example
[Live example](https://stackblitz.com/edit/brsjs-loader-live-example)

    let loader = new Loader('app', 'standard');

    loader.show();
    loader.hide();

