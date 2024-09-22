const express = require('express')
const router = express.Router()
const userModel = require('../models/user')
//////////////////////////////////////////////////
router.get('/api/users',async(req,res) => {
    try{
        const response = await userModel.find({})
        res.status(200).json(response)
    }catch(err){
        res.status(400).json(err.message)
    }
})
//////////////////////////////////////////////////
router.post('/api/users',async(req,res) => {
    const {name,email,password} = req.body
    try{
        const response = await userModel.create({name,email,password})
        res.status(200).json(response)
    }catch(err){
        res.status(400).json(err.message)
    }
})
//////////////////////////////////////////////////
router.put('/api/users/:id',async(req,res) => {
    const {id} = req.params
    const {name,email,password} = req.body
    try{
        const response = await userModel.findByIdAndUpdate(id,{name,email,password},{new:true})
        res.status(200).json(response)
    }catch(err){
        res.status(400).json(err.message)
    }
})
//////////////////////////////////////////////////
router.delete('/api/users/:id',async(req,res) => {
    const {id} = req.params
    try{
        const response = await userModel.findByIdAndDelete(id)
        res.status(200).json(response)
    }catch(err){
        res.status(400).json(err.message)
    }
})

module.exports = router