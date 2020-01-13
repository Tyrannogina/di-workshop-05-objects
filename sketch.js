var ballCount = 5
var balls = []

function createBall() {
  return {
    xs: Math.random() * width,
    ys: Math.random() * height,
    speedX: Math.random() * 3,
    speedY: Math.random() * 3
  }
}

function setup() {
  // Creates canvas
  createCanvas(400, 400)
  // Creates balls (5 in this case) and saves them in the balls array.
  for (var i = 0; i < ballCount; i++) {
    balls.push(createBall())
  }
}

function draw() {
  background(200)

  balls.forEach(ball => {
    ball.xs += ball.speedX
    ball.ys += ball.speedY

    if (ball.xs < 0 || ball.xs > width) {
      ball.speedX = ball.speedX * -1
    }

    if (ball.ys < 0 || ball.ys > height) {
      ball.speedY = ball.speedY * -1
    }

    ellipse(ball.xs - 5, ball.ys - 5, 20, 20)
  })
}
