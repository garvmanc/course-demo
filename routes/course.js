const { Router } = require("express");
const courseRouter = Router();
const { courseModel } = require("../db")

courseRouter.post("/purchase", function(req, res) {
    res.json({
        message: "purchase endpoint"
    })
})

courseRouter.get("/preview", function(req, res) {
    res.json({
        message: "purchase endpoint"
    })
})

module.exports = {
    courseRouter: courseRouter
}