const db = require('../db/index')
// const { Sequelize } = require('sequelize');
// const sequelize = new Sequelize('CustomerPortal_DB', 'sa', '123456', {
//     host: 'localhost',
//     dialect: 'mssql'
//   });


exports.getAllUsers = async (req,res,next)=> {
   try {
    const u = await db.Users.findAll();
    res.send(u);
   } catch (error) {
    console.log("error", error); // "Jane"
   }
}

exports.createUser = async (req, res, next)=> {
    console.log("createUser");
    const body = req.body;
    const FirstName = body.FirstName || '';
    const LastName = body.LastName || '';
    const Password = body.Password || '';
    const Email = body.Email || '';
    const RoleID = body.RoleID || '';
   
   try {
    const checkUser = await db.Users.findOne({ where: { Email: Email } });
    if(checkUser !== null){
        const newUser = await db.Users.create({  FirstName: FirstName,LastName:LastName, Password:Password , RoleID:RoleID, Email: Email});
       
        
        await jane.save();
        console.log(newUser); // "Jane"
        next();
    }

   
   } catch (error) {
    console.log("error", error); // "Jane"
   }
  }

  exports.updateUser = async(req,res,next)=>{
    console.log("updateUser");
    const id = req.params.id;
    const body = req.body;
   
    try {
        const check = await db.Users.findByPk(id);
        const FirstName = body.FirstName === '' ? check.FirstName  : body.FirstName;
        const LastName = body.LastName  === '' ? check.LastName  : body.LastName;
        const Password = body.Password === '' ? check.Password  : body.Password;
       
       
        if(check !== null){
            const user = await db.Users.update({
                FirstName: FirstName,
                LastName: LastName,
                Password: Password,
             }, {
                where: {
                  ID: check.ID
                }
              });
        }

        console.log("check", check);
        res.send({mess: "Update user success"})
    } catch (error) {
        console.log("error", error);
    }
    
   
  }

  exports.findUserByID = async(req,res,next)=>{
    console.log("findUserByID IDUser", req.params.id);
    const id = req.params.id;
    try {
        const check = await db.Users.findByPk(id);
        if(check !== null){
            console.log("check",check);
            res.send(check);
        }
    } catch (error) {
        console.log("error", error);
    }

  }
