Overlap
=======

Overlap two strings that contain new lines. Useful for ASCII drawings, for example.

## Example

```js
var Overlap = require ("overlap");

var a =
"+--------------+\n" +
"|              |\n" +
"|              |\n" +
"|              |\n" +
"|              |\n" +
"+--------------+"

var b =
"+-------+\n" +
"|       |\n" +
"|       |\n" +
"+-------+"

console.log(Overlap({
    who: a
  , with: b
  , where: {
        x: 4
      , y: 1
    }
}));
```

## Test

```sh
$ npm test

> overlap@0.1.0 test /home/.../overlap
> node test/test.js

+--------------+
|         +-------+
|         |       |
|         |       |
|         +-------+
|              |
|              |
+--------------+
```

## Changelog

### v0.1.0
 - Initial release

## License
See LICENSE file
