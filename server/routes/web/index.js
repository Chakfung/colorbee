module.exports = app => {
  const express = require('express')
  const assert = require('http-assert')
  const jwt = require('jsonwebtoken')
  const router = express.Router({
    mergeParams: true
  })

  const multer = require('multer')
  //资源获取模型中间件
  const resourceMiddleware = require('../../middleware/resource')
//挂载子路由 加中间件  设定路由 是否存在用户 模型
  app.use('/web/api/rest/:resource',  resourceMiddleware() , router)


//添加
  router.post('/', async (req, res) => {

    const model = await req.Model.create(req.body)
    res.send(model)
  })

//删除
  router.delete('/:id', async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id)
    res.send({
      success: true
    })
  })

//修改
  router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })


  router.get('/',  async (req, res) => {


    const queryOptions = {};
    let items=null;


    if(req.Model.modelName === 'Photo'){
      items = await req.Model.find().populate('user').populate('class').limit(100)
    }else if(req.Model.modelName === 'Theme'){
      items = await req.Model.find().populate('photographer').populate('parent').populate('tag').limit(100)
    }else if(req.Model.modelName === 'Blog'){
      items = await req.Model.find().populate('class').populate('author').populate('tag').limit(100)
    }else if(req.Model.modelName === 'BuyGallery'){
      items = await req.Model.find().populate('photo').populate('user').limit(100)
    }
    else{

      if (req.Model.modelName === 'Category') {
        queryOptions.populate = 'parent'
      }
      else if (req.Model.modelName === 'aaa') {
        queryOptions.populate = 'photographer'
      }

      items = await req.Model.find().setOptions(queryOptions).limit(100)

    }
    res.send(items)
  })

//ID获取信息 me页面
  router.get('/:id', async (req, res) => {

    let model=null;

    if(req.Model.modelName === 'Theme'){
      model = await req.Model.findById(req.params.id).populate('photographer').populate('parent').populate('tag').limit(100)
    }else if(req.Model.modelName === 'AppointOrder') {

      model = await req.Model.find({'customer':{$eq:req.params.id}}).populate('customer')
          .populate({
            path: 'theme',
            populate: {
              path: 'photographer',
            },
          })
          .populate({
            path: 'theme',
            populate: {
              path: 'parent',
            },


          }).populate({
            path: 'theme',
            populate: {
              path: 'tag',
            },


          })
          .limit(100)
    }else if(req.Model.modelName === 'CollectTheme') {

      model = await req.Model.find({'user':{$eq:req.params.id}}).populate('user')
          .populate({
            path: 'theme',
            populate: {
              path: 'photographer',
            },
          })
          .populate({
            path: 'theme',
            populate: {
              path: 'parent',
            },


          }).populate({
            path: 'theme',
            populate: {
              path: 'tag',
            },


          })
          .limit(100)
    }else if(req.Model.modelName === 'CollectBlog') {

      model = await req.Model.find({'user':{$eq:req.params.id}}).populate('user')
          .populate({
            path: 'blog',
            populate: {
              path: 'class',
            },
          })
          .populate({
            path: 'blog',
            populate: {
              path: 'author',
            },


          }).populate({
            path: 'blog',
            populate: {
              path: 'tag',
            },


          })
          .limit(100)
    }
    else{
      model = await req.Model.findById(req.params.id)
    }
    res.send(model)
  })

  // //用户获取信息
  // router.get('/web/api/kk', async (req, res) => {
  //   console.log('123');
  //   res.send('123')
  // })
  // app.get('/web/api/myblog', async (req, res) => {
  //   let model=null;
  //   const Blog = require('../../models/Blog')
  //
  //   model = await Blog.find().populate('class').populate('author').populate('tag')
  //
  //   res.send(model)
  //   // console.log(req.body.id);
  //   // model = req.body
  //   // res.send(model)
  // })

  //登录
  app.post('/web/api/login', async (req, res) => {

    const {username, password} = req.body
    //找用户
    const User = require('../../models/User')
    //不加select没有password
    const user = await User.findOne({username}).select('+password')
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

    res.send({token,user})

  })

  const upload = multer({dest: __dirname + '/../../uploads'})
  app.post('/web/api/upload',  upload.single('file'), async (req, res) => {
    const file = req.file;
    // file.url = `http://localhost:3000/uploads/${file.filename}`
    file.url = `http://www.chakfung-ng.com/uploads/${file.filename}`

    res.send(file)
  })

  app.use(async (err,req,res,next)=>{
    res.status(err.statusCode || 500).send({
      message:err.message
    })
  })

  app.use('web/api',router)
}


