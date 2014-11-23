var Overlap = require("../index");

var a =
"+--------------+\n" +
"|              |\n" +
"|              |\n" +
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
        x: 10
      , y: 1
    }
}));
