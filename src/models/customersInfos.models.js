const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const CustomersInfo = db.define("customersInfos", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  idCustomer: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  account: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tax_certificate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state:{
    type:DataTypes.BOOLEAN,
    allowNull:false,
    defaultValue:true
  }
});

module.exports = CustomersInfo;
