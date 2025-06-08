#!/usr/bin/env node

const fs = require("fs")
const path = require("path")

const resumePath = path.join(__dirname,"resume.txt")

fs.readFile(resumePath,'utf-8',(err,data)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log(data)
})
