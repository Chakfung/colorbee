module.exports = options =>async (req, res, next) => {

  const jwt = require('jsonwebtoken')
  const assert = require('http-assert')
  const AdminUser = require('../models/AdminUser')

  //inflection 转换为大写开头去S
  const modelName = require('inflection').classify(req.params.resource)
  req.Model = require(`../models/${modelName}`)
  next()
}