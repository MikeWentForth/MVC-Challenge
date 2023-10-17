// models/User.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
class User extends Model { }

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
 
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8]
      }
    }

  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        console.log("BEFORE HASH:",newUserData.password);
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        console.log("HASHED PW:", newUserData.password); // 
        //return newUserData;
      },
      // beforeBulkCreate: async (newUserData) => {
      //   console.log("BEFORE HASH:",newUserData.password);
      //   newUserData.password = await bcrypt.hash(newUserData.password, 10);
      //   console.log("HASHED PW:", newUserData.password); // 
      //   //return newUserData;
      // },
      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      }
      // May need before lookup XXXXXXXX
    },
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User;