const dbHandler = require("./dbHandler")

var playerCount = 0

incrementPlayerCount = string => {
  if(string == "connected:"){
    playerCount++
  }
  if(string == "disconnected:"){
    playerCount--
  }
}

exports.getPlayerCount = data => {
  let string = data.toString().split(" ")
  if(string[3] == "Player") {
    incrementPlayerCount(string[4])
    console.log("\x1b[34mPlayer Count: %s\x1b[0m", playerCount)
    return playerCount
  }
  return null
}

exports.trimData = data => {
  let string = data.toString()
  trimmedData = string.trim()
  return trimmedData
}
