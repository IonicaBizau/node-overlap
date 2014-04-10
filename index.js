function replaceCharAt (str, index, character) {
    return str.substr(0, index) + character + str.substr(index+character.length);
}

var Overlap = function (options) {

    var whoString = options.who.split("\n")
      , withString = options.with.split("\n")
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

    // start merging
    for (var y = where.y; y < where.y + withStringSize.h; ++y) {

        if (!whoString[y]) {
            whoString[y] = "";
            for (var i = 0; i < where.x; ++i) {
                whoString[y] += " ";
            }
        }

        for (var x = where.x; x < where.x + withStringSize.w; ++x) {
            whoString[y] = replaceCharAt (whoString[y], x, withString[y - where.y][x - where.x]);
        }
    }

    var overlapped = "";
    for (var y = 0; y < whoString.length; ++y) {
        overlapped += whoString[y] + "\n";
    }
    return overlapped
};

module.exports = Overlap;
