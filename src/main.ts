import { Application, Sprite, Loader } from 'pixi.js'

const app = new Application() as Application
const keys = {}
const speed = 3.5
const bullets = []
const bulletSpeed = 10

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

const createBullet = () => {
  const bullet = Sprite.from('./kenny_pixelshmup/Tiles/tile_0000.png')
  bullet.anchor.set(0.5)
  bullet.x = shipSprite.x
  bullet.y = shipSprite.y
  return bullet
}

document.querySelector('body').onpointerdown = () => {
  const bullet = createBullet()
  app.stage.addChild(bullet)
  bullets.push(bullet)
}

const updateBullet = () => {
  bullets.forEach((bullet, i) => {
    bullet.y -= bulletSpeed
    if (bullet.y < 0) {
      app.stage.removeChild(bullet)
      bullets.splice(i, 1)
    }
  })
}

const gameLoop = () => {
  updateBullet()
}

app.ticker.add(gameLoop)