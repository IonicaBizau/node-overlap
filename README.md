[![overlap](http://i.imgur.com/iiLhdlD.png)](#)

# overlap [![Support this project][donate-now]][paypal-donations]

Overlap two strings that contain new lines. Useful for ASCII drawings.

[![overlap](http://i.imgur.com/TC5QXRt.png)](#)

## Installation

```sh
$ npm i overlap
```

## Example

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

## Documentation

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

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`ascii-github`](https://npmjs.com/package/ascii-github)

 - [`cli-github`](https://github.com/IonicaBizau/cli-github)

 - [`cli-snow`](https://github.com/IonicaBizau/cli-snow)

 - [`happy-birthday-gabriel`](https://github.com/IonicaBizau/happy-birthday-gabriel)

 - [`le-table`](https://github.com/IonicaBizau/node-le-table)

 - [`text-animation`](https://github.com/IonicaBizau/text-animation)

 - [`tmuxos`](https://github.com/TmuxOS/TmuxOS)

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2014

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md