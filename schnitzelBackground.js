var canvas = document.getElementsByClassName('background')[0]
var ctx = canvas.getContext('2d')
ctx.canvas.width = window.innerWidth
ctx.canvas.height = window.innerHeight

var schnitzelImg = new Image()
schnitzelImg.src = 'schnitzel.png'
var floatingSchnitzels = [
  {
    image: schnitzelImg,
    x: Math.random() * canvas.width,
    y: Math.random() * 5,
    speed: 3 + Math.random() * 5
  },
  {
    image: schnitzelImg,
    x: Math.random() * canvas.width,
    y: Math.random() * 5,
    speed: 3 + Math.random() * 5
  },
  {
    image: schnitzelImg,
    x: Math.random() * canvas.width,
    y: Math.random() * 5,
    speed: 3 + Math.random() * 5
  },
  {
    image: schnitzelImg,
    x: Math.random() * canvas.width,
    y: Math.random() * 5,
    speed: 3 + Math.random() * 5
  },
  {
    image: schnitzelImg,
    x: Math.random() * canvas.width,
    y: Math.random() * 5,
    speed: 3 + Math.random() * 5
  },
  {
    image: schnitzelImg,
    x: Math.random() * canvas.width,
    y: Math.random() * 5,
    speed: 3 + Math.random() * 5
  },
  {
    image: schnitzelImg,
    x: Math.random() * canvas.width,
    y: Math.random() * 5,
    speed: 3 + Math.random() * 5
  }
]

function draw() {
  ctx.canvas.width = window.innerWidth
  ctx.canvas.height = window.innerHeight
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  for (var i = 0; i < floatingSchnitzels.length; i++) {
    ctx.drawImage(floatingSchnitzels[i].image, floatingSchnitzels[i].x, floatingSchnitzels[i].y)
    floatingSchnitzels[i].y += floatingSchnitzels[i].speed
    if (floatingSchnitzels[i].y > ctx.canvas.height) {
      floatingSchnitzels[i].y = -25
      floatingSchnitzels[i].x = Math.random() * ctx.canvas.width - schnitzelImg.width / 2
    }
  }
}

setInterval(draw, 36)
