const express = require('express')
const app = express()
const path = require('path')
app.use(express.static(path.join(__dirname, "..", "client", "build")))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"))
})


const server = require('http').createServer(app)

const websocket = require('ws')
const wss = new websocket.Server({ server: server })
const port = process.env.PORT
const game = {
  "counter": 0
}

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    const result = JSON.parse(message)

    if (result.method === "client-connect") {

      const clientId = guid();

      let clicksToReward = 10 - (game.counter % 10)

      const payLoad = {
        "method": "client-connect",
        "clientId": clientId,
        "clicks": 20,
        "points": 0,
        "counter": game.counter,
        "clicksToReward": clicksToReward
      }
      ws.send(JSON.stringify(payLoad))
    }

    // handle client clicking a button
    if (result.method === "client-buttonClick") {
      let points = result.points
      const clicks = result.clicks - 1
      game.counter = game.counter + 1
      if (game.counter % 500 === 0) {
        points += 250
      } else if (game.counter % 100 === 0) {
        points += 40
      } else if (game.counter % 10 === 0) {
        points += 5
      }

      const payLoad = {
        "method": "client-buttonClick",
        "clicks": clicks,
        "points": points,
      }
      ws.send(JSON.stringify(payLoad))
    }

    // handle counter update
    if (result.method === "client-all-updateCounter") {
      let clicksToReward = 10 - (game.counter % 10)

      const payLoad = {
        "method": "client-all-updateCounter",
        "counter": game.counter,
        "clicksToReward": clicksToReward
      }

      wss.clients.forEach(client => {
        if (client.readyState === websocket.OPEN) {
          client.send(JSON.stringify(payLoad))
        }
      })
    }

  })
})

const guid = () => {
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}`;
}

server.listen(port, () => console.log("websocket server listening on port:" + port))
