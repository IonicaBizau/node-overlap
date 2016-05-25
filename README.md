
[![overlap](http://i.imgur.com/iiLhdlD.png)](#)

# overlap

 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Travis](https://img.shields.io/travis/IonicaBizau/node-overlap.svg)](https://travis-ci.org/IonicaBizau/node-overlap/) [![Version](https://img.shields.io/npm/v/overlap.svg)](https://www.npmjs.com/package/overlap) [![Downloads](https://img.shields.io/npm/dt/overlap.svg)](https://www.npmjs.com/package/overlap) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Overlap two strings that contain new lines. Useful for ASCII drawings.

[![overlap](http://i.imgur.com/TC5QXRt.png)](#)

## :cloud: Installation

```sh
$ npm i --save overlap
```


## :clipboard: Example



```js
// Dependencies
var Overlap = require("overlap")
  , Couleurs = require("couleurs")
  , Box = require("cli-box")
  ;

// Create two boxes
var box1 = Box("20x10", Couleurs("Hello World", [142, 68, 173]))
  , box2 = Box("30x5", Couleurs("Hello Mars!", "#c0392b"))
  ;

// Combine them
console.log(Overlap({
    who: box1
  , with: box2
  , where: {
        x: 17
      , y: 2
    }
}));
```

## :memo: Documentation


### `Overlap(options)`
Overlaps two strings.

#### Params
- **Object** `options`: An object containing the following fields:
 - `who` (String): The first string.
 - `with` (String): The second string.
 - `where` (Object): The second string position:
    - `x` (Number): The position on `x` axis.
    - `y` (Number): The position on `y` axis.

#### Return
- **String** The result string.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2014#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
