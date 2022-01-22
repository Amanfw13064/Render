const express=require('express')

const router=express.Router()

const crudConstroller=require('./crudController')

const User=require('../models/userModel')

router.get('/new',async(req,res)=>{
    res.render('new')
})

router.get('/:id/edit',async(req,res)=>{
    try{
        const user=await User.findById(req.params.id).lean().exec()
        return res.render('edit',{user:user})
    }catch(err)
    {
        return res.status(500).send(err.message)
    }
})

router.post('',crudConstroller(User).post)

router.get('',crudConstroller(User,"index").getAll)

router.patch('/:id',crudConstroller(User,"index").update)

module.exports=router;
