const express = require('express')
const router = express.Router()
const {getIncome, getPrice, getName, getBrand, getCities} = require('../controllers/users')

router.get('/income', getIncome)
router.get('/phone_price', getPrice)
router.get('/last_name', getName)
router.get('/car_brand', getBrand)
router.get('/cities', getCities)

module.exports = router