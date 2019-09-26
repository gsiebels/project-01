
// ************> Board Setup <*************







function initGame(){


  const width = 20 
  const grid = document.querySelector('.grid')
  const cells = []
  const snake = [185,184,183]
  let direction
  const walls = [0,1,2,3,4,5,6,7,8,9,
    10,11,12,13,14,15,16,17,18,19,
    20,39,40,59,60,79,80,99,100,119,
    120,139,140,159,160,179,180,199,200,219,
    220,239,240,259,260,279,280,299,300,319,
    320,339,340,359,360,379,380,381,382,383,
    384,385,386,387,388,389,390,391,392,393,
    394,395,396,397,398,399,
    92,94,95,115,155,244,264,304,306,307]
    
  let snakeSpeed = 300
  let score = 0
  let timer 
  const scoreDisplay = document.querySelector('.score')
  const restartButton = document.getElementById('resetButton')
  
  let hasLoaded = false
  

  //======================================================================
  // ======================= FUNCTIONS ===================================

  // =======> This creates the grid and the cells inside it <======

  function setupGame() {
    
    grid.innerHTML = ''
    for (let i = 0; i < width ** 2; i++) {
      const cell = document.createElement('DIV')
      grid.appendChild(cell)
      cells.push(cell)
    }
    walls.forEach(index => cells[index].classList.add('wall')) 
    hasLoaded = true
  }

  if (hasLoaded === false) setupGame()

  function resButton(){
    restartButton.addEventListener('click', () => {
      grid.style.display = 'flex'
      restartButton.style.display = 'none'
      console.log('hello')
      score = 0
      scoreDisplay.innerText = score
      initGame()
       
    })
    
  }
  


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
    while (cells[randomFood].classList.contains( snake && 'wall')) {
      randomFood = Math.floor(Math.random() * cells.length)
    }
    cells[randomFood].classList.add('food')
  }


  // ==========> Snake eats the food <===================================

  function snakeEats() {
    if (cells[snake[0]].classList.contains('food')) {
      cells[snake[0]].classList.remove('food')
      snakeSpeed -= 8 
      score ++
      scoreDisplay.innerText = score
      snake.unshift(snake[0])     
      food()
    } 
  }
    
  //==============> GAME OVER ===========================================

  function gameOver() {
    
    // grid.innerHTML = ''
    grid.style.display = 'none'
    // grid.classList.remove('.grid')
    console.log('Game Over')
    if (timer) clearTimeout(timer) 
    restartButton.style.display = 'block'
    resButton()
    deleteSnake()
    
  }   
      

  // =============> Snake dies ==========================================

  function snakeDies() {
    if (snake.slice(1).includes(snake[0]) ||
      cells[snake[0]].classList.contains('wall')) {
      gameOver()    
    }   
  }

    
  // ==========> Snake automatic movement <===============================
  
  function moveSnake() {

    timer = setTimeout(moveSnake, snakeSpeed)

    switch (direction){
      case 'right': moveSnakeRight()
        break
      case 'left': moveSnakeLeft()
        break
      case 'up': moveSnakeUp()
        break
      case 'down': moveSnakeDown()
    }
    snakeEats()
    
  }

  // =============> UP DOWN RIGHT LEFT Movement ==========================
  
  function moveSnakeDown() {
    deleteSnake()
    snake.pop()
    snake.unshift(snake[0] + width)
    displaySnake()
    snakeDies()
    snakeEats()
  }

  function moveSnakeUp() {
    deleteSnake()
    snake.pop()
    snake.unshift(snake[0] - width)
    displaySnake()
    snakeDies()
    snakeEats()
  }

  function moveSnakeLeft() {
    deleteSnake()
    snake.pop()
    snake.unshift(snake[0] - 1)
    displaySnake()
    snakeDies()
    snakeEats()
  }

  function moveSnakeRight() {
    deleteSnake()
    snake.pop()
    snake.unshift(snake[0] + 1)
    displaySnake()
    snakeDies()
    snakeEats()
  }


  document.addEventListener('keydown', (e) => {
    e.preventDefault()
    switch (e.keyCode) {
      case 37: if (direction !== 'right') direction = 'left'
        break
      case 38: if (direction !== 'down') direction = 'up'
        break
      case 39: if (direction !== 'left') direction = 'right'
        break
      case 40: if (direction !== 'up') direction = 'down'
        break
    }
        
  }) 

  moveSnake()
  food()
  
}
document.addEventListener('DOMContentLoaded', initGame)

 
  

