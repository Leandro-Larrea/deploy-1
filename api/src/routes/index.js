const express = require("express");
const server = express();
const Task = require("../models/task.js")
require("dotenv").config();
const a = process.env.prueba

server.get("/prueba",async (req,res)=>{
    let a = await Task.find()
    res.status(200).send(a)
})

server.get("/gama",async (req,res)=>{
    res.status(200).send(a)
})

server.post("/", async (req,res)=>{
    try {
        let obj = req.body
   const a = Task(obj)
   const s = await a.save()
   return res.status(200).json(s)
    } catch (error) {
        res.status(400).send("something went wrong")
    } 
})

server.put("/:id", async (req,res)=>{
    try {
    let {id} = req.params

    let a = await Task.findByIdAndUpdate(id, req.body);
    let b = await Task.findById(id);
        res.status(200).json({a,b})
    } catch (error) {
        res.status(400).send("something get wrong")
    } 
})

server.delete("/:id", async (req,res)=>{
    try {
    let {id} = req.params

    let a = await Task.findByIdAndDelete(id);
        res.status(200).json(a)
    } catch (error) {
        res.status(400).send("something get wrong")
    } 
})

module.exports = server
