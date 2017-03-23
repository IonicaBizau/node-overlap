
[![overlap](http://i.imgur.com/iiLhdlD.png)](#)

# overlap

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Travis](https://img.shields.io/travis/IonicaBizau/node-overlap.svg)](https://travis-ci.org/IonicaBizau/node-overlap/) [![Version](https://img.shields.io/npm/v/overlap.svg)](https://www.npmjs.com/package/overlap) [![Downloads](https://img.shields.io/npm/dt/overlap.svg)](https://www.npmjs.com/package/overlap)

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

## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help from me, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:


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


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`ascii-github`](https://npmjs.com/package/ascii-github)—GitHub CLI Client
 - [`cli-github`](https://github.com/IonicaBizau/cli-github)—A fancy GitHub client for command line.
 - [`cli-snow`](https://github.com/IonicaBizau/cli-snow)—Snow, snow, snow! Let it snow, in terminal!
 - [`happy-birthday-gabriel`](https://github.com/IonicaBizau/happy-birthday-gabriel)—A NPM module for Gabriel's birthday
 - [`le-table`](https://github.com/IonicaBizau/le-table)—Another NodeJS module for creating ASCII tables.
 - [`text-animation`](https://github.com/IonicaBizau/text-animation)—Create beautiful ASCII text animations using NodeJS.
 - [`tmuxos`](https://github.com/TmuxOS/TmuxOS)—The awesome power of command line is finally revealed.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2014#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
