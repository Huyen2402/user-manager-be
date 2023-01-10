const db = require('../db/index')
// const { Sequelize } = require('sequelize');
// const sequelize = new Sequelize('CustomerPortal_DB', 'sa', '123456', {
//     host: 'localhost',
//     dialect: 'mssql'
//   });


exports.getAllUsers = async (req,res,next)=> {
    const u = await db.Users.findAll();
    res.send(u);
}

exports.createUser = async (req, res, next)=> {
    console.log("createUser");
   try {
    const jane = await db.Users.create({  FirstName: "abc",LastName:"ok", Password:123 , RoleID:1});
    console.log(jane.FirstName); // "Jane"
    // jane.name = "Ada";
    // the name is still "Jane" in the database
    await jane.save();
   } catch (error) {
    console.log("error", error); // "Jane"
   }
  }
