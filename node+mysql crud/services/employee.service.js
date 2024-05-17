const db = require('../db');


//get all employees
module.exports.getAllEmployees = async()=>{
    const [rows] = await db.query("SELECT * from employees")
   return rows;
}


// get employee by id
module.exports.getEmployeeById = async(id)=>{
    //old query
   // const [rows] = await db.query("SELECT * from employees WHERE id = "+id)

   //New Query called Pre-prepared statements
   const [records] = await db.query("SELECT * from employees WHERE id = ?",[id])

   return records;
}



//delete by id
module.exports.deleteEmployee = async(id)=>{
    const [{affectedRows}] = await db.query("DELETE from employees WHERE id = ?",[id])
   return affectedRows;
}


//Add Or edite employee
module.exports.addOrEditEmployee = async(obj,id=0)=>{
    const [{affectedRows}] = await db.query("call usp_employee_add_or_edit(?,?,?,?)",[id,obj.name,obj.employee_code,obj.salary])
   return affectedRows;
}


