const puzzleInputString = `.#.
..#
###`;

// const puzzleInputString = `#.#.#.##
// .####..#
// #####.#.
// #####..#
// #....###
// ###...##
// ...#.#.#
// #.##..##`;

const energySourceSlice = puzzleInputString.split('\n').map(row => row.split(""));

function getActiveNeighborsOf(slice, row, column, matrix) {
  let activeCubeCount = 0;
  const numRowsInSlice = matrix[0].length;
  const numColumnsInSlice = matrix[0][0].length;
  for (let s = Math.max(slice - 1, 0); s <= Math.min(slice + 1, matrix.length - 1); s++) {
    for (let r = Math.max(row - 1, 0); r <= Math.min(row + 1, numRowsInSlice - 1); r++) {
      for (let c = Math.max(column - 1, 0); c <= Math.min(column + 1, numColumnsInSlice - 1); c++) {
        if (s === slice && r === row && c === column) {
          continue;
        }
        if (matrix[s][r][c] === '#') {
          activeCubeCount++;
        }
      }
    }
  }
  return activeCubeCount;
}

function expandRow(row) {
  return [".", ...row, "."];
}

function expandSlice(slice) {
  let newSlice = slice.map(expandRow);
  const numColumns = newSlice[0].length;
  return [Array(numColumns).fill("."), ...newSlice, Array(numColumns).fill(".")];
}

function createEmptySlice(rows, columns) {
  let emptySlice = [];
  for (let r = 0; r < rows; r++) {
    let row = [];
    for (let c = 0; c < columns; c++) {
      row[c] = ".";
    }
    emptySlice[r] = row;
  }
  return emptySlice;
}

function expandMatrix(matrix) {
  const numRowsInSlice = matrix[0].length;
  const numColumnsInSlice = matrix[0][0].length;
  return [
    createEmptySlice(numRowsInSlice, numColumnsInSlice),
    ...matrix,
    createEmptySlice(numRowsInSlice, numColumnsInSlice),
  ];
}

// Part 1
let energySource = [
  energySourceSlice,
];

for (let cycle = 1; cycle <= 6; cycle++) {
  
  energySource = expandMatrix(energySource.map(expandSlice));
  const conversionMap = {
    ".": [],
    "#": [],
  };

  for (let slice = 0; slice < energySource.length; slice++) {
    for (let row = 0; row < energySource[0].length; row++) {
      for (let column = 0; column < energySource[0][0].length; column++) {
        const cubeValue = energySource[slice][row][column];
        const activeNeighbors = getActiveNeighborsOf(slice, row, column, energySource);
        if (cubeValue === "." && activeNeighbors === 3) {
          conversionMap['#'].push([slice, row, column]);
        } else if (cubeValue === '#' && (activeNeighbors < 2 || activeNeighbors > 3)) {
          conversionMap['.'].push([slice, row, column]);
        }
      }
    }
  }
  
  for (let newCubeState in conversionMap) {
    for (let i = 0; i < conversionMap[newCubeState].length; i++) {
      const [s, r, c] = conversionMap[newCubeState][i];
      energySource[s][r][c] = newCubeState;
    }
  }
}

const totalActiveCubeCount = energySource.reduce((sliceAcc, slice) => {
  return sliceAcc + slice.reduce((rowAcc, row) => {
    return rowAcc + row.filter(cube => cube === "#").length;
  }, 0);
}, 0);

console.log(`Part 1: Active Cube Count after 6 cycles: ${totalActiveCubeCount}`);

// Part 2


function createSliceVector(length, numRows, numColumns) {
  const sliceVector = new Array(length);
  for (let i = 0; i < sliceVector.length; i++) {
    sliceVector[i] = createEmptySlice(numRows, numColumns);
  }
  return sliceVector;
}

function expandMatrixInFourthDimension(matrix) {
  const numSliceColumns = matrix[0].length + 2;
  const numRows = matrix[0][0].length;
  const numColumns = matrix[0][0][0].length;
  return [
    createSliceVector(numSliceColumns, numRows, numColumns),
    [createEmptySlice(numRows, numColumns), ...matrix[0], createEmptySlice(numRows, numColumns)],
    createSliceVector(numSliceColumns, numRows, numColumns),
  ];
}

function getActive4DNeighborsOf(sliceRow, slice, row, column, matrix) {
  let activeCubeCount = 0;
  const numSlicesInSliceRow = matrix[0].length;
  const numRowsInSlice = matrix[0][0].length;
  const numColumnsInSlice = matrix[0][0][0].length;
  for (let sr = Math.max(sliceRow - 1, 0); sr <= Math.min(sliceRow + 1, matrix.length - 1); sr++) {
    for (let s = Math.max(slice - 1, 0); s <= Math.min(slice + 1, numSlicesInSliceRow - 1); s++) {
      for (let r = Math.max(row - 1, 0); r <= Math.min(row + 1, numRowsInSlice - 1); r++) {
        for (let c = Math.max(column - 1, 0); c <= Math.min(column + 1, numColumnsInSlice - 1); c++) {
          if (sr === sliceRow && s === slice && r === row && c === column) {
            continue;
          }
          if (matrix[sr][s][r][c] === '#') {
            activeCubeCount++;
          }
        }
      }
    }
  }
  return activeCubeCount;
}

energySource = [
  [energySourceSlice],
];

for (let cycle = 1; cycle <= 6; cycle++) {
  
  energySource = expandMatrixInFourthDimension(energySource);
  const conversionMap = {
    ".": [],
    "#": [],
  };

  for (let sliceRow = 0; sliceRow < energySource.length; sliceRow++) {
    for (let slice = 0; slice < energySource[0].length; slice++) {
      for (let row = 0; row < energySource[0][0].length; row++) {
        for (let column = 0; column < energySource[0][0][0].length; column++) {
          const cubeValue = energySource[sliceRow][slice][row][column];
          const activeNeighbors = getActive4DNeighborsOf(sliceRow, slice, row, column, energySource);
          if (cubeValue === "." && activeNeighbors === 3) {
            conversionMap['#'].push([sliceRow, slice, row, column]);
          } else if (cubeValue === '#' && (activeNeighbors < 2 || activeNeighbors > 3)) {
            conversionMap['.'].push([sliceRow, slice, row, column]);
          }
        }
      }
    }
  }

  for (let newCubeState in conversionMap) {
    for (let i = 0; i < conversionMap[newCubeState].length; i++) {
      const [sr, s, r, c] = conversionMap[newCubeState][i];
      energySource[sr][s][r][c] = newCubeState;
    }
  }
}

const totalActive4DCubeCount = energySource.reduce((sliceRowAcc, sliceRow) => {
  return sliceRowAcc + sliceRow.reduce((sliceAcc, slice) => {
    return sliceAcc + slice.reduce((rowAcc, row) => {
      return rowAcc + row.filter(cube => cube === "#").length;
    }, 0);
  }, 0);
}, 0);

console.log(totalActive4DCubeCount);
