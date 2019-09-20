document.addEventListener('DOMContentLoaded', () => {


  const width = 20   // << edit this for the amount of cells you want on the grids!
  const grid = document.querySelector('.grid')
  const cells = []
  let snakesHead = 186
  let snakesTale = 185
  const randomFood = Math.floor(Math.random() * width ** 2)
  
  // =======> This creates the grid and the cells inside it <======

  for (let i = 0; i < width ** 2; i++) {
    const cell = document.createElement('DIV')
    // if ( i === randomFood ) cell.classList.add('food')
    grid.appendChild(cell)
    cells.push(cell)
  }

  //============> This makes the the Snake and Food to show up on the grid.

  cells[randomFood].classList.add('food')
  cells[snakesHead].classList.add('snake')
  cells[snakesTale].classList.add('tale')


  //=====> This is the controller comand for the snake.

  document.addEventListener('keydown', (e) => {

    cells[snakesHead].classList.remove('snake')
    const x = snakesHead % width
    const y = Math.floor(snakesHead / width)

    switch (e.keyCode) {
      case 37: if (x > 0) snakesHead -= 1
        break
      case 38: if (y > 0) snakesHead -= width
        break
      case 39: if (x < width - 1) snakesHead += 1
        break
      case 40: if (y < width - 1) snakesHead += width
        break
    }  
    cells[snakesHead].classList.add('snake') * 2
  })



})