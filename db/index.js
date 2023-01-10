const { Sequelize } = require('sequelize');
const Users = require('./Users')

const sequelize = new Sequelize('CustomerPortal_DB', 'sa', '123456', {
  host: 'localhost',
  dialect: 'mssql'
});
const authentication = async () => {
  await  sequelize.authenticate();

}
authentication();
    const db = {}
db.sequelize = sequelize;
  db.Sequelize = Sequelize;
  db.Users = require('./Users')(sequelize, Sequelize)
// async function connectDatabase(req,res,next) {
  
//   try {
    
//     console.log('Connection has been established successfully.');
   
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
//   next();
//     // res.render('index', { title: 'Express' });
//   var sql = require('mssql');
//   // config for your database
//   var config = {
//    user: 'sa',
//    password: '123456',
//    server: 'localhost', 
//    database: 'CustomerPortal_DB' ,
//    synchronize: true,
//    trustServerCertificate: true,
// };
// sql.connect(config, function(err){
//  if (err) console.log(err);
// // create Request object
// var request = new sql.Request();
// // query to the database and get the records
// request.query('select * from users', function (err, recordset) {
           
//  if (err) console.log(err)

//  // send records as a response
//  res.send(recordset);
//  next();
// });
// })
// }

module.exports = db;