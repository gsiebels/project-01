document.addEventListener('DOMContentLoaded', () => {

  // ************> Board Setup <*************

  const width = 20 
  const grid = document.querySelector('.grid')
  const cells = []
  const direction = 'right'
  
  const snake = [185,184,183]
  // const randomFood = Math.floor(Math.random() * width ** 2)

  // =======> This creates the grid and the cells inside it <======
  for (let i = 0; i < width ** 2; i++) {
    const cell = document.createElement('DIV')
    grid.appendChild(cell)
    cells.push(cell)
  }


  function startGame(){
  //======================================================================
  // ======================= FUNCTIONS ===================================

  //====> Makes the snake appear and desppiear for the movement ==========
    function displaySnake() {
      snake.forEach(index => cells[index].classList.add('snake'))
    }
    displaySnake()
    
    function deleteSnake() {
      snake.forEach(index => cells[index].classList.remove('snake'))
    }


    // ==========> Food apears randomy on the map =========================

    function food() {
      let randomFood = Math.floor(Math.random() * cells.length)
      while (cells[randomFood].classList.contains('snake')) {
        randomFood = Math.floor(Math.random() * cells.length)
      }
      cells[randomFood].classList.add('food')
    }


    // ==========> Snake eats the food <===================================

    function snakeEats() {
      if (cells[snake[0]].classList.contains('food')) {
        cells[snake[0]].classList.remove('food')
        snake.unshift(snake[0])
        food()
      } 
    }

    //==============> Game Over ===========================================

    // function gameOver() {
    //   startGame()
    // }

    // =============> Snake dies ==========================================

    function snakeDies() {
      if (snake.slice(1).includes(snake[0])) {
        return startGame()
      }
    }
    snakeDies()

    // ==========> Snake automatic movement <===============================

    function moveSnake() {
      console.log(snake)
      if (snake[0] % width === 0 && direction === 'left' ||
      snake[0] % width === width - 1 && direction === 'right' ||
      snake[0] - width < 0 && direction === 'up' ||
      snake[0] >= width * (width - 1) && direction === 'down') {
        return
      }
      snakeEats() 
    }
    
    // =============> UP DOWN RIGHT LEFT Movement ==========================

    function moveSnakeDown() {
      deleteSnake()
      snake.pop()
      snake.unshift(snake[0] + width)
      displaySnake()
    }

    function moveSnakeUp() {
      deleteSnake()
      snake.pop()
      snake.unshift(snake[0] - width)
      displaySnake()
    }

    function moveSnakeLeft() {
      deleteSnake()
      snake.pop()
      snake.unshift(snake[0] - 1)
      displaySnake()
    }

    function moveSnakeRight() {
      deleteSnake()
      snake.pop()
      snake.unshift(snake[0] + 1)
      displaySnake()
    }

    
    //========================================================





    // *******************************************************
    // ******************** EVENT LISTENER *******************
    // *******************************************************

    document.addEventListener('keydown', (e) => {
      switch (e.keyCode) {
        case 39: moveSnakeRight()
          break
        case 37: moveSnakeLeft()
          break
        case 38: moveSnakeUp()
          break
        case 40: moveSnakeDown()
          break
      }
      // moveSnake()
      moveSnake()
    })
    food()
  
  }
  startGame()



  // cells[randomFood].classList.add('food')
  // snake.forEach(i => {
  //   cells[i].classList.add('snake','tale')
  // })

  //   snake.forEach(i => cells[i].classList.remove('head','tale'))
   

  //   switch (e.keyCode) {
  //     case 37:  snake = snake.map(i => i -= 1)
  //       break
  //     case 38:  snake = snake.map(i => i -= width)
  //       break
  //     case 39:  snake = snake.map(i => i += 1)
  //       break
  //     case 40:  snake = snake.map(i => i += width)
  //       break
  //   }  
  //   console.log(snake)
    
    
  //   snake.forEach(i => cells[i].classList.add('head','tale'))
    

  // })

  

 

 
  
})
