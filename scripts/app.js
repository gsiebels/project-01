document.addEventListener('DOMContentLoaded', () => {


  const width = 20   // << edit this for the amount of cells you want on the grids!
  const grid = document.querySelector('.grid')
  const cells = []
  const snakesHead = 186
  const snakesTale = 185
  // const randomFood = Math.floor(Math.random() * width ** 2)
  
  let snake = [snakesHead,snakesTale]

  console.log(snake)
  
  


  
  // =======> This creates the grid and the cells inside it <======

  for (let i = 0; i < width ** 2; i++) {
    const cell = document.createElement('DIV')
    // if ( i === randomFood ) cell.classList.add('food')
    grid.appendChild(cell)
    cells.push(cell)
  }



  //============> This makes the the Snake and Food to show up on the grid.

  // cells[randomFood].classList.add('food')
  // cells[snakesHead].classList.add('head')
  // cells[snakesTale].classList.add('tale')
  // cells[snake].classList.add('head', 'tale')
  snake.forEach(i => {
    cells[i].classList.add('head','tale')
  })
  


  
  // let foodEaten = 0{
  //   foodEaten += 1
  // }




  // ==========> This is the controller comand for the snake.==============

  document.addEventListener('keydown', (e) => {

    // cells[snake].classList.remove(snake.length())
    snake.forEach(i => cells[i].classList.remove('head','tale'))
    // const x = snake % width

    // const y = Math.floor(snake / width)

    switch (e.keyCode) {
      case 37:  snake = snake.map(i => i -= 1)
        break
      case 38:  snake = snake.map(i => i -= width)
        break
      case 39:  snake = snake.map(i => i += 1)
        break
      case 40:  snake = snake.map(i => i+= width)
        break
    }  
    console.log(snake)
    
    // cells[snake].classList.add('head') * 2
    snake.forEach(i => cells[i].classList.add('head','tale'))
    
  })

  // document.addEventListener('keydown', (e) => {

  //   cells[snakesHead].classList.remove('head')
  //   const x = snakesHead % width
  //   const y = Math.floor(snakesHead / width)

  //   switch (e.keyCode) {
  //     case 37: if (x > 0) snakesHead -= 1
  //       break
  //     case 38: if (y > 0) snakesHead -= width
  //       break
  //     case 39: if (x < width - 1) snakesHead += 1
  //       break
  //     case 40: if (y < width - 1) snakesHead += width
  //       break
  //   }  
  //   cells[snakesHead].classList.add('head') * 2
    
  // })


 
  
})