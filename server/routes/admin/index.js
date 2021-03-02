module.exports = app => {
  const express = require('express')
  const jwt = require('jsonwebtoken')
  //http-assert判断对错存不存在 报错
  const assert = require('http-assert')
  // const AdminUser = require('../../models/AdminUser')
  const router = express.Router({
    mergeParams: true
  })

  //封装校验中间件
  const authMiddleware = require('../../middleware/auth')

  //资源获取模型中间件
  const resourceMiddleware = require('../../middleware/resource')



  //挂载子路由 加中间件  设定路由 是否存在用户 模型
  app.use('/admin/api/rest/:resource', authMiddleware(), resourceMiddleware() , router)

  const multer = require('multer')


  //添加用户
  router.post('/', async (req, res) => {

    const model = await req.Model.create(req.body)
    res.send(model)
  })

  //修改用户
  router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })

  //删除用户
  router.delete('/:id', async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id)
    res.send({
      success: true
    })
  })

  //获取用户列表
  router.get('/',  async (req, res) => {

    const queryOptions = {};
    let items=null;
    // if (req.Model.modelName === 'Category') {
    //   queryOptions.populate = 'parent'
    // }
    // else if (req.Model.modelName === 'Theme') {
    //   queryOptions.populate = 'photographer'
    // }
    // else if(req.Model.modelName === 'Photo') {
    //   queryOptions.populate = 'photographer'
    //   // queryOptions.populate = 'parent'
    //
    // }

    if(req.Model.modelName === 'Photo'){
      items = await req.Model.find().populate('User').populate('class').limit(100)
    }else if (req.Model.modelName === 'Blog') {
      // queryOptions.populate = 'class'
      items = await req.Model.find().populate('author').populate('tag').populate('class').limit(100)
    }else{

      if (req.Model.modelName === 'Category') {
        queryOptions.populate = 'parent'
      }

      else if (req.Model.modelName === 'Theme') {
        queryOptions.populate = 'photographer'
      }

      items = await req.Model.find().setOptions(queryOptions).limit(100)

    }
    res.send(items)
  })

  //获取用户信息
  router.get('/:id', async (req, res) => {

    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })

  //条件查询
  router.get('/parent/:parent', async (req, res) => {
    console.log(req.params.parent);
    const model = await req.Model.find({'parent':{$eq:req.params.parent}})
    console.log(model);
    res.send(model)
  })


  //登陆 安装bcrypt 散列密码
  app.post('/admin/api/login', async (req, res) => {
    const {username, password} = req.body
    //找用户
    const AdminUser = require('../../models/AdminUser')
    //不加select没有password
    const user = await AdminUser.findOne({username}).select('+password')
    // if (!user) {
    //   return res.status(422).send({
    //     message: '用户不存在'
    //   })
    // }
    assert(user,422,'用户不存在')


    //校验密码
    const isValid = require('bcryptjs').compareSync(password, user.password)
    // if (!isValid) {
    //   return res.status(422).send({
    //     message: '密码错误'
    //   })
    // }
    assert(isValid,422,'密码错误')

    //返回token 安装jwt  jsonwebtoken

    const token = jwt.sign({id: user._id}, app.get('secret'))
    res.send({token})

  })

  //上传中间件
  const upload = multer({dest: __dirname + '/../../uploads'})

  app.post('/admin/api/upload', authMiddleware(), upload.single('file'), async (req, res) => {
    const file = req.file;
    // file.url = `http://localhost:3000/uploads/${file.filename}`
    file.url = `http://www.chakfung-ng.com/uploads/${file.filename}`
    res.send(file)
  })




  //错误处理函数配合assert
  app.use(async (err,req,res,next)=>{
    res.status(err.statusCode || 500).send({
      message:err.message
    })
  })
}


// module.exports = app => {
//   const express = require('express')
//   const router = express.Router()
//   const User = require('../../models/User')
//
//   //添加用户
//   router.post('/user',async (req,res) => {
//     const model = await User.create(req.body)
//     res.send(model)
//   })
//
//   //修改用户
//   router.put('/user/:id',async (req,res) => {
//     const model = await User.findByIdAndUpdate(req.params.id, req.body)
//     res.send(model)
//   })
//
//   //删除用户
//   router.delete('/user/:id',async (req,res) => {
//     await User.findByIdAndDelete(req.params.id)
//     res.send({
//       success:true
//     })
//   })
//
//   //获取用户列表
//   router.get('/user',async (req,res) => {
//     const items = await User.find().limit(10)
//     res.send(items)
//   })
//
//   //获取用户信息
//   router.get('/user/:id',async (req,res) => {
//     const model = await User.findById(req.params.id)
//     res.send(model)
//   })
//
//
//   //挂载子路由
//   app.use('/admin/api',router)
// }