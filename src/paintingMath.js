export let paintMath = (() => {
    return {
        numOfStraitStallLines: (lotLength) => {
            return Math.floor(lotLength / 9) - 1;
        },
        numOfDiagonalStallLines: (lotLength) => {
            return Math.floor(lotLength / 11) - 1;
        },
        numOfParallelStallLines: (lotLength) => {
            return Math.floor(lotLength / 25) - 1;
        },
        numOfStraitStalls: (lotLength) => {
            let result = Math.floor(paintMath.numOfStraitStallLines(lotLength)) + 1;
            return result;
        },
        numOfDiagonalStalls: (lotLength) => {
            let result = Math.floor(paintMath.numOfDiagonalStallLines(lotLength)) + 1;
            return result;
        },
        numOfParallelStalls: (lotLength) => {
            let result = Math.floor(paintMath.numOfParallelStallLines(lotLength)) + 1;
            return result;
        },
        totalPaintUsedStrait: (endCapLength, lotLength) => {
            let paint = 0.01
            let time = endCapLength / 4;

            let amountStraitLines = paintMath.numOfStraitStallLines(lotLength);
            
            let strait = (time * amountStraitLines) * paint;
            return Number(strait.toFixed(3));
        },
        totalPaintUsedDiagonal:  (endCapLength, lotLength) => {
            let paint = 0.01;
            //to find the painted angled line c2 = a2 + b2
            let lineLength = (9*9) + (endCapLength * endCapLength);
            let time = Math.sqrt(lineLength) / 3;

            let amountDiagLines = paintMath.numOfDiagonalStallLines(lotLength);

            let diagonal = (time * amountDiagLines) * paint;
            return Number(diagonal.toFixed(3));
        },
        totalPaintUsedParallel:  (endCapLength, lotLength) => {
            let paint = 0.01;
            let time = endCapLength / 4;

            let amountParLines = paintMath.numOfParallelStallLines(lotLength);

            let parallel = (time * amountParLines) * paint;
            return Number(parallel.toFixed(3));
        },
        timeToPaint: (endCapLength, lotLength) => {
            let time = endCapLength / 4;

            let lineTotal = paintMath.numOfStraitStallLines(lotLength);

            let totalTime = (time * lineTotal) / 2.75; 
            let timeInHours = totalTime / 120;

            return Number(timeInHours.toFixed(2));
        },
        crewSize: (endCapLength, lotLength) => {
            let jobTime = paintMath.timeToPaint(endCapLength, lotLength);

            let crewMembers = (Math.ceil(jobTime / 6) + 1);

            return crewMembers;
        }
    }
})();