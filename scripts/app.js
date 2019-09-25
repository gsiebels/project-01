
// ************> Board Setup <*************

function initGame(){

  const width = 20 
  const grid = document.querySelector('.grid')
  const cells = []
  let snake = [185,184,183]
  const walls = [0,1,2,3,4,5,6,7,8,9,
    10,11,12,13,14,15,16,17,18,19,
    20,39,40,59,60,79,80,99,100,119,
    120,139,140,159,160,179,180,199,200,219,
    220,239,240,259,260,279,280,299,300,319,
    320,339,340,359,360,379,380,381,382,383,
    384,385,386,387,388,389,390,391,392,393,
    394,395,396,397,398,399,
    92,94,95,115,155,244,264,304,306,307]
  let snakeSpeed = 400
  let timer 
  const scoreDisplay = document.querySelector('.score')
  let score = 0
  

  //======================================================================
  // ======================= FUNCTIONS ===================================

  // =======> This creates the grid and the cells inside it <======

  function setupGame() {

    for (let i = 0; i < width ** 2; i++) {
      const cell = document.createElement('DIV')
      grid.appendChild(cell)
      cells.push(cell)
    }
    walls.forEach(index => cells[index].classList.add('wall')) 
  }

  function resButton(){
    const restartButton = document.createElement('BUTTON')
    restartButton.innerHTML = 'Play Again!'
    document.body.appendChild(restartButton)  
    restartButton.addEventListener('click', () => {
      
      snake = [185,184,183]
      console.log('hello')
        
      initGame()
      restartButton.classList.remove('BUTTON')  
    })
    displaySnake()
  }
  setupGame()


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
    while (cells[randomFood].classList.contains('snake' && 'wall')) {
      randomFood = Math.floor(Math.random() * cells.length)
    }
    cells[randomFood].classList.add('food')
  }


  // ==========> Snake eats the food <===================================

  function snakeEats() {
    if (cells[snake[0]].classList.contains('food')) {
      cells[snake[0]].classList.remove('food')
      snakeSpeed -= 10 
      score ++
      scoreDisplay.innerText = score
      snake.unshift(snake[0])     
      food()
    } 
  }
    
  //==============> GAME OVER ===========================================

  function gameOver() {
    grid.innerHTML = ''
    deleteSnake()
    console.log('Game Over')
    // if (timer) clearInterval(timer)  
    resButton()
    clearInterval(timer)
    
  }   
      

  // =============> Snake dies ==========================================

  function snakeDies() {
    if (snake.slice(1).includes(snake[0]) ||
      cells[snake[0]].classList.contains('wall')) {
      gameOver()    
    }   
  }

    
  // ==========> Snake automatic movement <===============================
  // =============> UP DOWN RIGHT LEFT Movement ==========================
  function moveSnake() {
  
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
      let moveCall
      switch (e.keyCode) {
        case 39: moveCall = moveSnakeRight
          break
        case 37: moveCall = moveSnakeLeft
          break
        case 38: moveCall = moveSnakeUp
          break
        case 40: moveCall = moveSnakeDown
          break          
      }
      if (timer) clearInterval(timer)
      timer = setInterval(moveCall, snakeSpeed)  
    }) 
  }
  moveSnake()
  food()
  
  // startGame()

  //========> Restart Game Button==================================

}
document.addEventListener('DOMContentLoaded', initGame)

 
  

