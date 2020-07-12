"use strict";

var _paintingMath = require("./paintingMath");

var lotLength = 150;

var singleStallLines = _paintingMath.paintMath.singleStallLines(lotLength);

console.log('Single Stall Lines:', singleStallLines);

var diagonalStallLines = _paintingMath.paintMath.diagonalStallLines(lotLength);

console.log('Diagonal Stall Lines:', diagonalStallLines);

var parallelStallLines = _paintingMath.paintMath.parallelStallLines(lotLength);

console.log('Parallel Stall Lines:', parallelStallLines);