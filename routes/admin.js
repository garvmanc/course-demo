const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db")

adminRouter.post("/signup", function(req, res) {
    res.json({
        message: "endpoint"
    })
});

adminRouter.post("/signin", function(req, res) {
    res.json({
        message: "endpoint"
    })
});

adminRouter.post("/course", function(req, res) {
    res.json({
        message: "endpoint"
    })
});

adminRouter.put("/course", function(req, res) {
    res.json({
        message: "endpoint"
    })
})

adminRouter.get("/course/all", function(req, res) {
    res.json({
        message: "endpoint"
    })
})

module.exports = {
    adminRouter: adminRouter
};