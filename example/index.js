// Dependencies
var Overlap = require("../lib")
  , Couleurs = require("couleurs")
  , Box = require("cli-box")
  ;


var box1 = Box("20x10", Couleurs("Hello World", [142, 68, 173]))
  , box2 = Box("30x5", Couleurs("Hello Mars!", "#c0392b"))
  ;

console.log(Overlap({
    who: box1
  , with: box2
  , where: {
        x: 17
      , y: 2
    }
}));
