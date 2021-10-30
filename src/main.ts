import { Application, Sprite } from 'pixi.js'

const app = new Application() as Application
const keys = {}
const speed = 3.5

app.renderer.resize(window.innerWidth, window.innerHeight)
app.renderer.view.style.position = 'absolute'
app.renderer.backgroundColor = 0x3498db

document.body.appendChild(app.view)

// sprites
const shipSprite = Sprite.from('./kenny_pixelshmup/Ships/ship_0000.png')
shipSprite.anchor.set(0.5)
shipSprite.x = app.view.width / 2
shipSprite.y = app.view.height / 2
app.stage.addChild(shipSprite)

app.stage.interactive = true

window.onkeydown = (e) => {
  keys[e.keyCode] = true
}

window.onkeyup = (e) => {
  keys[e.keyCode] = false
}

const gameLoop = () => {
  if (keys["87"]) {
    // W key
    shipSprite.y -= speed
  }
  if (keys["83"]) {
    // S key
    shipSprite.y += speed
  }
  if (keys["65"]) {
    // A key
    shipSprite.x -= speed
  }
  if (keys["68"]) {
    // D key
    shipSprite.x += speed
  }
}

app.ticker.add(gameLoop)