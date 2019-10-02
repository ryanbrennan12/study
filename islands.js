
function countIslands(grid) {
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        count ++;
        dfs(grid, i,j);
      }
    }
  }

  return count;
}

function dfs(grid, row, col) {
  // bound check
  if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) return;

  const value = grid[row][col];
  if (value === 1) {
    grid[row][col] = '#';
    ///this is just transfering state to the next stack frame
    //each one of these is getting called and flipping visited until they don't equal 0
    dfs(grid, row + 1, col);
    dfs(grid, row - 1, col);
    dfs(grid, row, col + 1);
    dfs(grid, row, col - 1);
  }
}

const islands = [
  [0,0,0,1,1,0,0],
  [0,1,0,0,1,1,0],
  [1,1,0,1,0,0,1],
  [0,0,0,0,0,1,0],
  [1,1,0,0,0,0,0],
  [0,0,0,1,0,0,0],
]

const islands2 = [
  [1,1,0,0,0],
  [1,1,0,0,0],
  [0,0,1,0,0],
  [0,0,0,1,1]
]

const count = [
  [1,2,3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15],
  [16,17,18,19,20]
]

// console.log(countIslands(islands2))


console.log('ryan' < 'ryaa')