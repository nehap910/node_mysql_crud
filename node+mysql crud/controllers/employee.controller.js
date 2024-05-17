const express = require('express'),
router =express.Router()

const db = require('../db')
const service = require('../services/employee.service');

//http:localhost:3000/api/employees/
router.get('/', async(req,res)=>{
const employees = await service.getAllEmployees()
   res.send(employees);
})


//http:localhost:3000/api/employees/:id
router.get('/:id', async(req,res)=>{
   const employee = await service.getEmployeeById(req.params.id)
   if(employee.length==0){
      res.status(400).json("No record with id "+req.params.id)
   }
   else{
      res.send(employee);
   }
      res.send(employee);
   })


   //http:localhost:3000/api/employees/:id
   router.delete('/:id', async(req,res)=>{
   const afftectedRows = await service.deleteEmployee(req.params.id)
    if(afftectedRows==0){
      res.status(400).json("No record with id "+req.params.id)
   }
   else
    res.send("ID "+req.params.id+" Deleted Successfully");
    })


//http:localhost:3000/api/employees/:id
   router.post('/', async(req,res)=>{
    await service.addOrEditEmployee(req.body)
    res.status(201).send("created Successfully..")
   
    })
module.exports = router;