document.addEventListener('DOMContentLoaded', () => {

  // ************> Board Setup <*************

  const width = 20 
  const heigth = 20
  const grid = document.querySelector('.grid')
  const cells = []

  const snakesHead = 186
  const snakesTale = 185
  const snakesBody = 'body'
  const randomFood = Math.floor(Math.random() * width ** 2)
  let snake = [snakesHead,snakesTale]

  // =======> This creates the grid and the cells inside it <======

  for (let i = 0; i < width ** 2; i++) {
    const cell = document.createElement('DIV')


    if ( i === randomFood ) cell.classList.add('food')

    grid.appendChild(cell)
    cells.push(cell)
  }


  //====> This function is the makes the snake get longer when eating the food!

  function eating() {
    if (snakesHead === randomFood)
      return snake.push(snakesBody + snake.lenght + 2)
  }
  

  // const snakesBody = snakes + snakes.lengteh + 2
  console.log(snake)
  
  
  // if (snake[snakesHead] === randomFood ){
  //   return snake.push(snakesBody + snake.length - 2)
  // }
  

  
  



  //============> This makes the the Snake and Food to show up on the grid.

  cells[randomFood].classList.add('food')
  // cells[snakesHead].classList.add('head')
  // cells[snakesTale].classList.add('tale')
  // cells[snake].classList.add('head', 'tale')
  snake.forEach(i => {
    cells[i].classList.add('head','tale')
  })
  




  // ==========> This is the controller comand for the snake.==============

  document.addEventListener('keydown', (e) => {

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
      case 40:  snake = snake.map(i => i += width)
        break
    }  
    console.log(snake)
    
    
    snake.forEach(i => cells[i].classList.add('head','tale'))
    

  })

  

  eating()

 
  
})