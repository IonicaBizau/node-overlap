var Overlap = require("../index")
  , Couleurs = require("couleurs")()
  , a =
    "+--------------+\n" +
    "|              |\n" +
    "|   " + Couleurs.rgb("Hello World", 0, 255, 0) + "  |\n" +
    "|              |\n" +
    "|              |\n" +
    "|              |\n" +
    "|   " + Couleurs.rgb("Hello World", 0, 255, 0) + "    |\n" +
    "|              |\n" +
    "+--------------+"
  , b =
    "+-------+\n" +
    "|       |\n" +
    "|       |\n" +
    "+-------+"
  ;

console.log(Overlap({
    who: a
  , with: b
  , where: {
        x: 10
      , y: 1
    }
}));
