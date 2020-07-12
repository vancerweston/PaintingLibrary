import { paintMath } from './paintingMath';

let lotLength = 1350;
let endCapLength = 18;

let straitStallLines = paintMath.numOfStraitStallLines(lotLength);

console.log('Strait Stall Lines:', straitStallLines);

let diagonalStallLines = paintMath.numOfDiagonalStallLines(lotLength);

console.log('Diagonal Stall Lines:', diagonalStallLines);

let parallelStallLines = paintMath.numOfParallelStallLines(lotLength);

console.log('Parallel Stall Lines:', parallelStallLines);

let straitStalls = paintMath.numOfStraitStalls(lotLength);

console.log('Number of strait Stalls:', straitStalls);

let diagonalStalls = paintMath.numOfDiagonalStalls(lotLength);

console.log('Number of Diagonal Stalls:', diagonalStalls);

let parallelStalls = paintMath.numOfParallelStalls(lotLength);

console.log('Number of Parallel Stalls:', parallelStalls);

let totalPaintUsedStrait = paintMath.totalPaintUsedStrait(endCapLength, lotLength);

console.log('Total Paint in gallons for Strait Lines:', totalPaintUsedStrait);

let totalPaintUsedDiagonal = paintMath.totalPaintUsedDiagonal(endCapLength, lotLength);

console.log('Total Paint in gallons for Diagonal Lines:', totalPaintUsedDiagonal);

let totalPaintUsedParallel = paintMath.totalPaintUsedParallel(endCapLength, lotLength);

console.log('Total Paint in gallons for Parallel Lines:', totalPaintUsedParallel);

let timeToPaint = paintMath.timeToPaint(endCapLength, lotLength);

console.log('Estimate of Time to Paint Lines in hours:', timeToPaint);

let crewSize = paintMath.crewSize(endCapLength, lotLength);

console.log('Estimate of Crew Members to send to Job:', crewSize);
