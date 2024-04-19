const express = require('express');
const router = express.Router();
const Class = require('../models/class')
//Currently at 25:43 on video week 10

//GET: classes
router.get('/',async (req, res)=>{
    console.log("In here")
    try{
        const classes = await Class.find()
        console.log(classes)
        return res.json(classes).status(200)
    }catch(err){
        return res.json(err).status(404)
    }

    
})

module.exports = router