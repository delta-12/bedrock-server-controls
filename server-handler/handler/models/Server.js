const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ServerSchema = new Schema({
  name: {
    type: String
  },
  online: {
    type: Boolean
  },
  address: {
    type: String
  },
  port: {
    type: String
  },
  onlinePlayers: {
    type: String
  },
  maxPlayers: {
    type: String
  },
  gamemode: {
    type: String
  },
  difficulty: {
    type: String
  },
  seed: {
    type: String
  },
  software: {
    type: String
  },
  version: {
    type: String
  }
});

module.exports = Server = mongoose.model("servers", ServerSchema);
