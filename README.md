Loader
=========

A small library for managing loaders.

## Installation

  `npm install brsjs-loader`

## Usage
### Initialize loader with
```
let loader = new Loader('id', 'type');
```
#### 'id' is id of your element where you want to show your loader.
#### 'type' is type of loader. Currently only 'standard' is supported.
### Show loader with
```
loader.show();
```
### Hide loader with
```
loader.hide();
```

## Example

    let loader = new Loader('app', 'standard');

    loader.show();

