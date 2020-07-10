const { spawn } = require("child_process")
const serverHandler = require("../handlers/serverHandler")
const mongoose = require("mongoose")
const db = require("../config/keys").mongoURI
const dbHandler = require("../handlers/dbHandler")
const readServerProperties = require("../config/readServerProperties")
const serverProperties = readServerProperties.readFile("./server.properties")

var server = spawn("./start_server")
var status

mongoose
  .connect(
    db,
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
  )
  .then(() => console.log("\x1b[35m%s\x1b[0m", "MongoDB successfully connected"))
  .catch(err => console.log("\x1b[35m%s\x1b[0m", err))

startServer = () => {
  dbHandler.startup(serverProperties)
  // var server = spawn("./start_server")

  server.stdout.on("data", data => {
      console.log("\x1b[32m%s\x1b[0m", serverHandler.trimData(data))
      playerCount = serverHandler.getPlayerCount(data)
      if(playerCount !== null){
        dbHandler.update(serverProperties.name, {onlinePlayers: playerCount})
      }
  })

  server.stderr.on("data", data => {
      console.log("\x1b[32m%s\x1b[0m", serverHandler.trimData(data))
  })

  server.on('error', (error) => {
      console.log("\x1b[31m%s\x1b[0m", `Error: ${error.message}`)
  })

  server.on("close", code => {
      console.log("\x1b[33m%s\x1b[0m", `Server exited with code ${code}`)
  })

  process.stdin.pipe(server.stdin)
  status = true
}

startServer()

setInterval( () => {
  dbHandler.serverStatus(serverProperties.name, serverOnline => {
    online = serverOnline
    if(online){
      if(status){
        return
      }
      else {
        server = spawn("./start_server")
        startServer()
      }
    }
    else {
      if(status){
        server.stdin.write("stop\n")
        server.stdin.end()
        dbHandler.update(serverProperties.name, { online: false, onlinePlayers: 0 })
        server = null
        status = false
      }
      else {
        return
      }
    }
  })
}, 5000)
