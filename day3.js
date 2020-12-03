const treeMaze = [
  '.##.#.........#.....#....#...#.',
  '.#.#.#...#.......#.............',
  '......#..#....#.#...###.......#',
  '.......###......#.....#..##..#.',
  '..#...##.......#.......###.....',
  '....###.#....###......#....#..#',
  '......#..#....#...##...........',
  '..#..#....#...#.....####.......',
  '...#........#.#.......#..#...#.',
  '......#...#........#...#..##...',
  '#..#........#............#...##',
  '..#..#.#....#...........#...###',
  '#.#..#...........#.##.#.#....#.',
  '.#.#....#...##.....#...........',
  '.....##....#...#..............#',
  '...#....#...#.#.#.#...#........',
  '#....#....#.#.#..#....#..#..#..',
  '.................#..#.....#....',
  '#..###...#.#..#.#......#.......',
  '...#..........#......#....#....',
  '.#.#.........##..#.......#...#.',
  '.#..........#...#..#...........',
  '....##.#.......................',
  '.......#...........#...#.......',
  '...#...#..##...#....###..#....#',
  '....#.#.....##...##.#.#........',
  '...........#.#..#.#......#..#..',
  '.....#.....#....#...#........#.',
  '..#......#..#.........#.....#..',
  '.........................#...#.',
  '#...#...#....#........##....#..',
  '#..#.#.............#..........#',
  '.#.........#.....#..#.#.#..#.#.',
  '#...#..#.......####.#....##....',
  '##...##..#.#.#...#.#.....#..#.#',
  '.#..#....#.##........#...#....#',
  '#...#..##.#....##..#..#.#......',
  '.#........#.....#.#....##.##.#.',
  '...#...#........#..#.##.##.....',
  '....................#.#.#.#...#',
  '..####.#..##...#....#.....##...',
  '#......#.....#.#......#.#..#.##',
  '..#.....#..#...........##.#....',
  '#....#........#............#...',
  '..##....#..............#......#',
  '..#......#.#.......####......#.',
  '..............##....#....##.#..',
  '.#...............#....#....#.#.',
  '..#.#.#..#.......##.#..........',
  '.#...#.......#.#....#.##.......',
  '.....#.##...#...........#.#....',
  '..#.#..#...#..##...#.#.......##',
  '.#.....#....#.#......#.#.......',
  '....##.........#.#.............',
  '.......##.......#..............',
  '..........#......#......#....##',
  '..##.....#..#.#..........#.....',
  '...#....#.......#....##........',
  '.......#...........#...........',
  '...#.#......#.#........#....#..',
  '.....#...........#.#.#...#.#..#',
  '.#.#...#.#.#..........#.....###',
  '#........#...#.................',
  '...##.....#.....#..#..#.......#',
  '......##...........#..#....##..',
  '.........#............##...#...',
  '.....#.....##...##.............',
  '.#....#..#.#.#.#...#..#..#.....',
  '.....#..#.#..#....#..#.........',
  '....#.....#......#...#.........',
  '#..#..#.................#......',
  '.###.....#...#.#........##.#...',
  '..#...#....#.##..#.....#.#....#',
  '..#...##.................#.#...',
  '....##..........#..#..#..#....#',
  '....#..##....##.....#.#....#...',
  '.#.#.#.....##........#.##..##.#',
  '....#..#......#..#........#....',
  '.......#.....###.#....#.......#',
  '#....#.......#......##.#.......',
  '.##.#.........#.#..##..#....##.',
  '......#........#.#....#...#....',
  '.####.....#.........#.#......##',
  '##....#......#....#..#.#....##.',
  '...........###.#.....#..#......',
  '.......#...........#...........',
  '........###....#..#.#..........',
  '....#........#......#..........',
  '.........#......#..............',
  '...#...............#......#...#',
  '....#..##...#.........#...#....',
  '##........#.#....#......###....',
  '....#.......................#..',
  '#................#.#..#......##',
  '...#.#.....#...#...........#.##',
  '.#....#.##......#...##.#....#..',
  '#...#....#..............#..#..#',
  '.......#....#.##............#.#',
  '.....#.#.......#.#...#.........',
  '...#.....#..##...##...#........',
  '..#.......#..####..#..#...#....',
  '#.#................##...##.#..#',
  '.....#.....##.#.....#......#..#',
  '....#.#...#.........#.........#',
  '..#......#............#.....#..',
  '.....#..........#.#..#..##...##',
  '........#................#.#...',
  '#...#.#....##...###...#.#......',
  '.............##.#..##..........',
  '#..#......#...........#......#.',
  '#.#....#..........#.##....###..',
  '.............#.........#....#..',
  '#........#..#.#..#...#....#....',
  '..............#..............##',
  '.....#...#..............#.##...',
  '#...##..#...........#..........',
  '..#....#...#.#........#..#.#..#',
  '..##......#...............#....',
  '....#...#..###..#......###.#...',
  '.......##..#.#........#....#...',
  '..##...#.......#...#...........',
  '.#.......#.....#.#...##..#....#',
  '.............#.......#.#.#....#',
  '#.......#..#..#...#.#......##..',
  '#.##..#..#..#....##.#...###.#.#',
  '...##...#..#..#........#.#..#..',
  '#....##........................',
  '##...#...#......#.#.....#..#...',
  '......#............#....#......',
  '#......#.......#.......##.#....',
  '..................#..#..#.#....',
  '..#..................##.#......',
  '..##........#.#.....##..#..#.#.',
  '#....#..............#....####..',
  '#..#..........................#',
  '..#.#.#.#....#.......#....#.#..',
  '.....#.#........#..........#.#.',
  '........#.....#.......#........',
  '#.....#....#.###.....#.......#.',
  '.....##.#...#.#..#...#.#.#.....',
  '......##...#.#...##..........#.',
  '.#............#.....#..#....#..',
  '.#................#.#..#.......',
  '....................##...##....',
  '#.......##...#.....#..#........',
  '.##....#.#.#.#...........#...#.',
  '..#.#..#.#.........#...........',
  '...#......#.....#...##.........',
  '..........#.#.....###.#........',
  '.............#.....##..........',
  '.........#...####........#.####',
  '...................#....#......',
  '.....#.........#.#....#..#...#.',
  '.##...#.......##.#...#.#.#..#..',
  '.....##........#....#...#.##.#.',
  '#...#...#.#....#..............#',
  '#..#.##.............#..........',
  '..#...#..#.#.##..............##',
  '#......#.#...##..........#.##..',
  '.##.#...#...#.........#.#......',
  '......#........##.#..#.........',
  '#..#.......#......#.#..#.#.....',
  '.#..#...........#.#.##.....#...',
  '.....................#..#.#....',
  '........#...##......#.....##...',
  '#.............#...##....##....#',
  '#.#...........#....##.#......##',
  '.....#.....#.#..........###..#.',
  '....#...#....##....#..##.......',
  '.#....#....#.......#.#.....#...',
  '.#...#.......##...##........#..',
  '......##.......#.##.#.###......',
  '....##.......#......#..........',
  '...................#..##.......',
  '......................#...##...',
  '...##....#.#..#..#.............',
  '.#......##..........#...#......',
  '....##..#....#..#...#...####.#.',
  '...#.......#.......#........#.#',
  '#.........#..#...#...##...#.#.#',
  '....#...#.......#...#....#.....',
  '...#.....#.##..##.#.......##.##',
  '.......#....#........#.........',
  '.....#...#....#..#....#....#...',
  '.##....#...#........#...#.#...#',
  '.......##............#..#...#..',
  '#.#...#....#......#.#..........',
  '.#.##...........#........#.....',
  '.#....#.............#.#.##.....',
  '#.......###..#...###.........#.',
  '#..#.#.......#.........#...#..#',
  '..........#......#........#...#',
  '.#.#...#.##.......##...........',
  '.....#.........#.....#.........',
  '.........#.........#....##.#..#',
  '.#.......##..##..#.....#...#...',
  '.#.....##...#..#..............#',
  '..##...#..#..#.#...#..........#',
  '.#.......####......#......####.',
  '##..##........#.....#........#.',
  '..##.#..#.#....................',
  '...........#..#...##....##.....',
  '..#.#........#.........#....##.',
  '..#...#..##..###.#..###........',
  '......#..#.............#..##...',
  '.##.........#.#..#...#.##.###..',
  '.#...............#...........#.',
  '.#....#........#....#........##',
  '..#####.#.#..#.#........##...#.',
  '###....#....#...#..............',
  '.....#...##............#...#...',
  '##...........##.#.##.....#.....',
  '..............#..#.....#...#...',
  '...................#...........',
  '#..........##.........#........',
  '...#.........#..#.....#..#..#..',
  '....###.#......#......##....#..',
  '#......#..........#...#........',
  '...#.#...#..#..........##......',
  '.....##.....#.#............##..',
  '..#..#.###....#.#.#...##....#..',
  '...#........#....##.......#....',
  '.#.............#..##.......#...',
  '..#.#..###..#.....#...##.......',
  '.........#......##...#.#..#....',
  '.............#....##....#.#....',
  '#..#...#....#.#...#......##....',
  '.............#.#......#.....###',
  '#.##....#........#.............',
  '.....#...#.####...#.....#......',
  '....#....###....##.......#.....',
  '..#....##..#....#.#.......#....',
  '...#.....#....#.........#......',
  '.#......#.#....#.#........#....',
  '.......#......#.....#.#..#.....',
  '#......#.........##.##.#...#...',
  '..#.###...................#....',
  '....#..#....##.#........#....#.',
  '...........#..........#......#.',
  '.#..#.#...###..........#..#...#',
  '...#...##..#....#...#..........',
  '.#........#.................##.',
  '....#.......##....#...#........',
  '#.#...##.##...#.#.......#...#..',
  '.....#.#.##.#......#..#..##....',
  '.....##...#.#.....#...#........',
  '#.#.......#..#..........##.....',
  '................#......#..#.#.#',
  '#......#...#...................',
  '...#.....##.#.........#.#..#..#',
  '...#..##..##.......#....#......',
  '....##...#....#..#...........#.',
  '..#..#......#...#..#...........',
  '...#.##....#...##.......#......',
  '.......#....#..#..##..#..#....#',
  '.#.................#.#...#.##..',
  '.....#..................#..#.#.',
  '...#......##...#...........#...',
  '..#.........#....#..#...#.....#',
  '..#...#.....#.........##.#.....',
  '.....#.#....##...............#.',
  '....#...#............#.........',
  '.....#.....###............#....',
  '..#.#.#.......#....#...........',
  '...........##...##...#.......#.',
  '.........###.#......#..........',
  '.#.......#....#.....#.##..#...#',
  '..#..................#..###....',
  '..#....#...#......##.........#.',
  '........#..#........#.........#',
  '.#..#......#.........#.........',
  '...#..##.....#....#....#.....#.',
  '......#.#............###.....##',
  '.......#........#.......#.#....',
  '..#.............#..............',
  '.............##..#.#.#....#....',
  '.................#....#.#......',
  '##..#.#.......#....#.....#.....',
  '.##............##.#.......#.#..',
  '#..#...........##......#.......',
  '.##......#####..##.#....#.#....',
  '.......##.....#...#........#...',
  '.#.#.....##....#..#....#..#...#',
  '............##.#.....##.#......',
  '........##...###.#......#......',
  '......#..#.#...#..#............',
  '.........#...........#......#..',
  '.#.........#............##.....',
  '.#..#..#...#.#.............#...',
  '......#.#..##...#.#...........#',
  '#.##.......#...#.........#.....',
  '.....#..#............#....##...',
  '.#......#........#.............',
  '..#...#....#..#.......###......',
  '....#.......###.#.#...........#',
  '.............#...##............',
  '.##.#.#.#...........#...#....#.',
  '............##.........#......#',
  '...............#......#...#....',
  '...#.....#..###..#...........#.',
  '.#........#.....##........#.#..',
  '....#.#.......#..#..#...##.#.#.',
  '.......##...........#...#......',
  '....#.#..##......#.......#.....',
  '..#........#.#......#.#........',
  '........#....#..#....#..##.....',
  '.#.........##..........#.#.....',
  '..##...##.....##......##..#....',
  '.###.....##...........##.#...##',
  '...#................#.......#..',
  '#.......#.#.#..#.#.##..#...#...',
  '.#.#.......#..#................',
  '..#.#.#......#............#....',
  '#.....#.###..#.#...#...........',
  '#...........#..........#.#.#.##',
  '..#.#...#......##.....#........',
  '........#.......#.#...#...#....',
  '..#..........#......###......#.',
  '..........##.#....#.....#.##...',
  '..#.....#......#.........#..##.',
  '.#...#........#..#.#..#...##..#',
  '..###........#......#.#........',
  '..#.##.#....#.#....#.#...#.....',
];

function getTreeCount(rightSlope, downSlope) {
  const columnCount = treeMaze[0].length;
  const rowCount = treeMaze.length;

  let treeCount = 0;

  for (
    let rowIndex = downSlope, columnIndex = rightSlope;
    rowIndex < rowCount;
    rowIndex += downSlope, columnIndex += rightSlope
  ) {
    if ( columnIndex >= columnCount) {
      columnIndex = columnIndex % columnCount;
    }
    if (treeMaze[rowIndex][columnIndex] === '#') {
      treeCount += 1;
    }
  }
  return treeCount;
}

const treeCount = getTreeCount(3,1);
console.log(`For slops down 3, right 1: ${treeCount} trees`);

const treeCountProduct = (
  treeCount
  * getTreeCount(1,1)
  * getTreeCount(5,1)
  * getTreeCount(7,1)
  * getTreeCount(1,2)
);
console.log(`Tree count product: ${treeCountProduct}`);


