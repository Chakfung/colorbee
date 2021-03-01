//封装校验中间件
module.exports = options => async (req, res, next) => {
  const jwt = require('jsonwebtoken')
  const assert = require('http-assert')
  const AdminUser = require('../models/AdminUser')


  const token = String(req.headers.authorization || '').split(' ').pop()
  assert(token, 401, '请提供jwt token请先登录')

  const {id} = jwt.verify(token, req.app.get('secret'))
  assert(id, 401, '无效jwt token请先登录')

  req.user = await AdminUser.findById(id);
  assert(req.user, 401, '请先登录')

  await next()
}
