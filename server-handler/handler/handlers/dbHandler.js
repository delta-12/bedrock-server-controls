const Server = require("../models/Server")

exports.startup = serverProperties => {
  Server.findOne({ name: serverProperties.name }).then(server => {
        if(server) {
          console.log("\x1b[35m%s\x1b[0m", "Updating server...")
          Server.updateOne({ $set: serverProperties })
          .then(() => console.log("\x1b[35m%s\x1b[0m", "Server Updated!"))
          .catch(err => console.log("\x1b[35m%s\x1b[0m", err))
        }
        if(!server) {
          console.log("\x1b[35m%s\x1b[0m", "Creating new server...")
          const newServer = new Server(serverProperties)
          newServer.save()
          .then(() => console.log("\x1b[35m%s\x1b[0m", "Created server!"))
          .catch(err => console.log("\x1b[35m%s\x1b[0m", err))
        }
    })
}

exports.update = (serverName, newValues) => {
  Server.updateOne({ name: serverName }, { $set: newValues })
  .then(() => console.log("\x1b[35m%s\x1b[0m", "Server Updated!"))
  .catch(err => console.log("\x1b[35m%s\x1b[0m", err))
}

exports.serverStatus = (serverName, callback) => {
  Server.findOne({ name: serverName })
  .then(server => {
    if(server){
      return callback(server.online)
    }
  })
  .catch(err => console.log("\x1b[35m%s\x1b[0m", err))
}
