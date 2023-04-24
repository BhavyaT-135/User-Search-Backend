const User = require('../models/User')

const getIncome = async (req, res) => {
  res.json({msg: "This is the income route"})
}

const getPrice = async (req, res) => {
  res.json({msg: "This is the price route"})
}

const getName = async (req, res) => {
  res.json({msg: "This is the name route"})
}

const getBrand = async (req, res) => {
  res.json({msg: "This is the brand route"})
}

const getCities = async (req, res) => {
  res.json({msg: "This is the cities route"})
}

module.exports = {
  getIncome,
  getPrice,
  getName,
  getBrand,
  getCities
}