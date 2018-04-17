const express = require('express');
const router = express.Router();


router.get("/", (req,res) => {
    res.send({
        "Output": "Hello World!"
    });
})

router.post("/", (req,res) => {
    res.send({
        "Output": "Hello World!"
    });
})


module.exports = router