const Sequelize=require('sequelize');

const sequelize=require('../util/database')

const Company=sequelize.define('company',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      companyName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      pro:{
        type: Sequelize.STRING,
        allowNull: false
      },
      cons:{
        type: Sequelize.STRING,
        allowNull: false
      },
      rating:{
        type: Sequelize.INTEGER,
        allowNull: false
      }

})

module.exports=Company;