const express = require('express');
const res = require('express/lib/response');
const router = express.Router()
const Member = require ('../models/members')


router.use(express.urlencoded())
router.use(express.json())

router.get('/',(req,res)=> {
    res.render('main',{layout:'index'});
  });
  router.get('/about',(req,res)=> {
    res.render('main',{layout:'about'});
  });
  router.get('/references',(req,res)=> {
    res.render('main',{layout:'references'});
  });
  router.get('/contact',(req,res)=> {
    res.render('main',{layout:'contact'});
  });
  router.get('/login',(req,res)=> {
    res.render('main',{layout:'login'});
  });
  router.get('/register',(req,res)=> {
    res.render('main',{layout:'register'});
  });

  //to store email data in database
  router.post('/contact',(req,res) => {
      console.log(req.body)

        const member = new Member({
            membername: req.body.membername,
            email: req.body.email,
            message: req.body.message
    })
        member.save()
    .then((result) => {
      res.send(result)
    })
    .catch((err) =>{
      console.log(err);
    })
      
  })
    



  module.exports = router;