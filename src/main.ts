import { Application, Sprite, Loader } from 'pixi.js'

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

const showComplete = () => {
  console.log("Done Loading")

  const ship_01 = Sprite.from(app.loader.resources.ship01.texture)
  ship_01.anchor.set(0.5)
  ship_01.x = app.view.width / 4
  ship_01.y = app.view.height / 4
  app.stage.addChild(ship_01)
  const ship_02 = Sprite.from(app.loader.resources.ship02.texture)
  ship_02.anchor.set(0.5)
  ship_02.x = app.view.width * (3 / 4)
  ship_02.y = app.view.height / 4
  app.stage.addChild(ship_02)
  const ship_03 = Sprite.from(app.loader.resources.ship03.texture)
  ship_03.anchor.set(0.5)
  ship_03.x = app.view.width / 4
  ship_03.y = app.view.height * (3 / 4)
  app.stage.addChild(ship_03)
  const ship_04 = Sprite.from(app.loader.resources.ship04.texture)
  ship_04.anchor.set(0.5)
  ship_04.x = app.view.width * (3 / 4)
  ship_04.y = app.view.height * (3 / 4)
  app.stage.addChild(ship_04)
}

const showProgress = (e: Loader) => {
  console.log(e.progress)
}

const showError = (e: Error) => {
  console.error(e.message)
}

app.loader.baseUrl = "kenny_pixelshmup/Ships"

app.loader
  .add("ship01", "ship_0001.png")
  .add("ship02", "ship_0002.png")
  .add("ship03", "ship_0003.png")
  .add("ship04", "ship_0004.png")
  .add("ship05", "ship_0005.png")
  .add("ship06", "ship_0006.png")
  .add("ship07", "ship_0007.png")

app.loader.onProgress.add(showProgress)
app.loader.onComplete.add(showComplete)
app.loader.onError.add(showError)
app.loader.load()
