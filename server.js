const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})

server.get("/", function(req, res) {
    return res.render("about")
})

server.get("/course", function (req, res) {
    return res.render("course")
})

server.listen(2500, function() {
    console.log("server is running")
})

server.use(function(req, res) {
    res.status(404).render("not-found");
  });