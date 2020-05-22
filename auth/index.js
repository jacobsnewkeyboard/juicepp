const express = require('express').Router;
const router = express();
const jwt = require('jsonwebtoken');
const users = require("../users.json");
// const permissions = require("../permissions.json");

router.post("/login", (req, res) => {
    const user = users.find(usr => usr.password === req.body.password);
    if (user) {
        const token = jwt.sign({userID: user.id}, "bigSecret", {expiresIn: "30m"});
        res.status(200).json({token});
    } else {
        res.status(401).json({ message : "Access denied"});
    }
});

// function checkToken(req, res, next) {
//     const token = req.headers["x-access-token"];
//     if (token) {
//         jwt.verify(token, "bigSecret", (err, decoded) => {
//             if (err) {
//                 res.status(401).json({message: "Access denied"});
//                 return;
//             } else {
//                 req.userID = decoded.userID;
//                 next();
//             }
//         })
//     } else {
//         res.status(401).json({message: "Access denied"});
//     }
// }

// router.get("/info", checkToken, (req, res) => {
//     const filtered = permissions.filter(permission => permission.userID = req.userID);
//     res.status(200).json({data: filtered});
// })

module.exports = router;