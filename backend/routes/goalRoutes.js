const express = require('express')
const router = express.Router()
const {getGoals, setGoals, putGoals} = require ("../controllers/goalController")



router.get('/',getGoals)
router.post('/',setGoals)
router.put('/',putGoals)

module.exports =  router