const User = require('../models/User')

const getIncome = async (req, res) => {
  const users = await User.find({
    $and: [
      { income: { $lt: "$5" } },
      { car: { $in: ["BMW", "Mercedes"] } }
    ]
  })
  res.status(200).json({users, nbHits: users.length})
}

const getPrice = async (req, res) => {
  const users = await User.find({
    $and: [
      { gender: "Male" },
      { phone_price: { $gt: "10000" } }
    ]
  })
  res.status(200).json({users, nbHits: users.length})
}

const getName = async (req, res) => {
  const users = await User.find({
    $and: [
      { last_name: { $regex: "^M" } },
      { quote: { $exists: true, $regex: /^.{16,}$/ } },
      { email: { $regex: ".*" + "$" + "$", $options: "i" } }
    ]
  })
  res.status(200).json({users, nbHits: users.length})
}

const getBrand = async (req, res) => {
  const users = await User.find({
    $and: [
      { car: { $in: ["BMW", "Mercedes", "Audi"] } },
      { email: { $not: { $regex: /\d/ } } }
    ]
  })
  res.status(200).json({users, nbHits: users.length})
}

const getCities = async (req, res) => {
  const users = await User.aggregate([
    { $group: { _id: "$city", user_count: { $sum: 1 }, income_total: { $sum: { $toDouble: { $substr: ["$income", 1, -1] } } } } },
    { $sort: { user_count: -1 } },
    { $limit: 10 }
  ])
  res.status(200).json({users, nbHits: users.length})
}

module.exports = {
  getIncome,
  getPrice,
  getName,
  getBrand,
  getCities
}