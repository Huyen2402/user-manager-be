// const db = require('./index')
// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');
module.exports = (sequelize, DataTypes) => {
const Users = sequelize.define('Users', {
    // Model attributes are defined here
    ID: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    FirstName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    LastName: {
      type: DataTypes.STRING(255)
      // allowNull defaults to true
    },
    Email: {
        type: DataTypes.STRING(250),
        allowNull: true,
        validate: {
            len: {
                args: [1, 254],
                msg: 'Email must be within 254 characters.',
            },
        },
    },
    Password: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validator: {
            len: {
                args: [8,20],
                msg: 'Password must be less 20 characters and more than 8 characters.',
            }
        }
    },
   
    RoleID: {
      type: DataTypes.INTEGER,
      
  }
    
  },
  
   {
    // Other model options go here
  });
  Users.associate = (Models) => {
    Users.belongsTo(Models.Roles, {
      foreignKey: 'RoleID',
      targetKey: 'ID',
    });
  };
  
  
  // `sequelize.define` also returns the model
  console.log(Users === sequelize.models.Users); // true
  return Users;
}


