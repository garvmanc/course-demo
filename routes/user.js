const { Router } = require("express");
const userRouter = Router();

userRouter.post("/signup", function(req, res) {
    res.json({
        message: "signup endpoint preview"
    })
});

userRouter.post("/signin", function(req, res) {
    res.json({
        message: "signin endpoint preview"
    })
});

userRouter.get("/purchase", function(req, res) {
    res.json({
        message: "purchase endpoint"
    })
});

module.exports = {
    userRouter: userRouter
}