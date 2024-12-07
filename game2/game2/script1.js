const player = document.getElementById("player");
const gameContainer = document.getElementById("game-container");
const scoreElement = document.getElementById("score");
const healthElement = document.getElementById("health");

let playerPosition = gameContainer.offsetWidth / 2 - 25;  // Initial position of player
let score = 0;
let health = 100;

player.style.left = playerPosition + 'px'; // Set initial player position

// Move the player left and right with keyboard events
document.addEventListener("keydown", (e) => {
  const playerWidth = 50;
  const containerWidth = gameContainer.offsetWidth;
  
  if (e.key === "ArrowLeft" && playerPosition > 0) {
    playerPosition -= 20;  // Move left by 20px
    if (playerPosition < 0) playerPosition = 0;  // Prevent moving off the screen
    player.style.left = playerPosition + "px";
  } 
  else if (e.key === "ArrowRight" && playerPosition < containerWidth - playerWidth) {
    playerPosition += 20;  // Move right by 20px
    if (playerPosition > containerWidth - playerWidth) playerPosition = containerWidth - playerWidth;  // Prevent moving off the screen
    player.style.left = playerPosition + "px";
  }
});

// Generate items (healthy or unhealthy food)
function createItem() {
  const item = document.createElement("div");
  item.classList.add("item");

  const isHealthy = Math.random() > 0.5;
  item.classList.add(isHealthy ? "healthy" : "unhealthy");

  // Set the initial position of the food item
  item.style.left = Math.random() * (gameContainer.offsetWidth - 50) + "px";
  item.style.top = "0px";  // Start at the top of the container

  gameContainer.appendChild(item);

  // Move the item down
  let fallInterval = setInterval(() => {
    const itemTop = parseInt(window.getComputedStyle(item).getPropertyValue("top"));
    const itemLeft = parseInt(window.getComputedStyle(item).getPropertyValue("left"));
    const playerLeft = playerPosition;

    // Check for collision (item falls into the player)
    if (
      itemTop > 550 &&
      itemLeft > playerLeft - 40 &&
      itemLeft < playerLeft + 50
    ) {
      clearInterval(fallInterval);
      gameContainer.removeChild(item);

      if (isHealthy) {
        score += 10;
      } else {
        health -= 20;
      }

      updateScoreboard();
    }

    // Remove item if it falls out of bounds
    if (itemTop > 600) {
      clearInterval(fallInterval);
      gameContainer.removeChild(item);
    }

    item.style.top = itemTop + 5 + "px";
  }, 30);
}

// Update the scoreboard
function updateScoreboard() {
  scoreElement.textContent = `Score: ${score}`;
  healthElement.textContent = `Health: ${health}`;

  if (health <= 0) {
    alert("Game Over! Your score: " + score);
    resetGame();
  }
}

// Reset the game after game over
function resetGame() {
  score = 0;
  health = 100;
  updateScoreboard();
}

// Start the game loop (falling food)
setInterval(createItem, 1000);
