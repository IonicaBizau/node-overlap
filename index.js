var AnsiParser = require("ansi-parser");

function removeAnsiColors(input) {
    return input.replace(/\u001b\[.*?m/g, "");
}

function replaceCharAt(str, index, character) {
    return str.substr(0, index) + character + str.substr(index+character.length);
}

var Overlap = function(options) {

    var whoString = AnsiParser.parse(options.who.split("\n"))
      , withString = AnsiParser.parse(options.with.split("\n"))
      , where = options.where
      , whoStringSize = {
            w: whoString[0].length
          , h: whoString.length
        }
      , withStringSize = {
            w: withString[0].length
          , h: withString.length
        }
      ;

    for (var y = where.y; y < where.y + withStringSize.h; ++y) {

        if (!whoString[y]) {
            whoString[y] = [];
            for (var i = 0; i < where.x; ++i) {
                AnsiParser.addChar(whoString[y], " ");
            }
        }

        for (var x = where.x; x < where.x + withStringSize.w; ++x) {
            if (!withString[y - where.y] || typeof withString[y - where.y][x - where.x] == "undefined") {
                continue;
            }
            whoString[y][x] = withString[y - where.y][x - where.x];
        }
    }

    return AnsiParser.stringify(whoString);
};

module.exports = Overlap;
