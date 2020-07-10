const fs = require('fs')
const readline = require('readline')
const serverProperties = require("./serverProperties")

parseLine = line => {
  if(line.charAt(0) !== "#") {
    let split_line = line.split("=")
    if(split_line[0] === "server-name"){
      serverProperties.name = split_line[1]
    }
    if(split_line[0] === "server-port"){
      serverProperties.port = split_line[1]
    }
    if(split_line[0] === "max-players"){
      serverProperties.maxPlayers = split_line[1]
    }
    if(split_line[0] === "gamemode"){
      serverProperties.gamemode = split_line[1]
    }
    if(split_line[0] === "difficulty"){
      serverProperties.difficulty = split_line[1]
    }
    if(split_line[0] === "level-seed"){
      serverProperties.seed = split_line[1]
    }
  }
}

exports.readFile = file => {
  try {
      const data = fs.readFileSync(file, 'UTF-8')
      const lines = data.split(/\r?\n/)
      lines.forEach((line) => {
          parseLine(line)
      })
  } catch (err) {
      console.error(err)
  }
  return serverProperties
}
