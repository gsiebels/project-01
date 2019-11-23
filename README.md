![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)


# Project 1 - Yoshi themed Snake game clone.

![yoshi snake logo](https://raw.githubusercontent.com/gsiebels/project-01/master/Screenshot%202019-11-21%20at%2010.53.47.png)

This project was one of the options that General Assembly had for the first project during a software engineering immersive course. This project helped me to apply what I have learned in the first 4 weeks in to a real project.

This is my snake clone game where I used common but powerful technologies to build.

## Technologies

- HTML5
- CSS3
- JavaScript
- GitHub
- Affinity Designer (Logo designe)

## Deployment

Then game was deployed using GitHub, you can play it here: http://gsiebels.github.io/project-01/

## Getting Started

Use the clone button to download the game source code. Open the index.html file in your browser and the game should start, if 
not check console for any issues. The assets used in this game are stored in the assets folder. They inlcude gifs, png files 
and fonts and the logo that I have designe usein Affinity Designer.

## Game Architecture

The goal in Snake is for the player to collect all the items that randomly appear on the board, for every item you collect the 
snake gets longer and the speed increases making the game harder, more challenging and fun.

![snake gif](https://raw.githubusercontent.com/gsiebels/project-01/master/ezgif.com-video-to-gif.gif)

* The snake movement
> The snake starts on a static position and when you press an arrow key it starts moving by deleting the last section of the array and creating a new one at the start, this way the snake can change direction.

* Snake eating
>  When the snake eats a new object, it gets added to the snake which lengthens the snakes array.

When the snake crashes on any of the walls, obstacles or on it own body is game over and you get prompted by a button to start again, you can also see you score.

Here is a section of the code.

```javascript
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
    while (cells[randomFood].classList.contains( 'snake' && 'wall')) {
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
      eatingSound.play()   
      food()
    } 
  }
```

## Challenges and future improvements

I would improve the music player and fix the random food spawn. I would also do a scoreboard to make it more challenging and competitive and I would also add a special item that appears for a limited time and gives you more points when you collect it.

## Author

Gerardo Siebels 
