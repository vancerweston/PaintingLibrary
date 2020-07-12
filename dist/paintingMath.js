"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paintMath = void 0;

var paintMath = function paintMath() {
  return {
    numOfSingleStallLines: function numOfSingleStallLines(lotLength) {
      return Math.floor(lotLength / 9);
    },
    numOfDiagonalStallLines: function numOfDiagonalStallLines(lotLength) {
      return Math.floor(lotLength / 11);
    },
    numOfParallelStallLines: function numOfParallelStallLines(lotLength) {
      return Math.floor(lotLength / 25);
    }
  };
};

exports.paintMath = paintMath;