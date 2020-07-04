const express = require("express")
const router = express.Router()

// Load User and Server model
const User = require("../../models/User")
const Server = require("../../models/Server")

// @route POST api/server/info
// @desc get server info
// @access Public, should be private?
router.post("/info", (req, res) => {

  User.findOne({ _id: req.body.id }).then(user => {
  if (!user) {
    return res.status(404).json({ UserIDNotFound: "No user ID found" });
  }
  else {
    Server.findOne({ name: user.server }).then(server => {
      if(server) {
        return res.status(200).json({ success: true, data: server })
      }
      else {
        return res.status(404).json({ success: false, error: "Server Not Found" })
      }
    })
  }
  })

})

// @route POST api/server/online
// @desc switch server status
// @access Public, should be private?
router.post("/online", (req, res) => {

  User.findOne({ _id: req.body.id }).then(user => {
  if (!user) {
    return res.status(404).json({ UserIDNotFound: "No user ID found" });
  }
  else {
    Server.findOne({ name: user.server }).then(server => {
      if(server) {
        Server.update({
          $set: {
            online: req.body.online
          }
        }).then(update => {
          return res.status(200).json({ data: update })
        })
        // return res.status(200).json({ success: true })
      }
      else {
        return res.status(404).json({ success: false, error: "Update unsuccessful" })
      }
    })
  }
  })

})

module.exports = router
