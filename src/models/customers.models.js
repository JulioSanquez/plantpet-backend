const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Customers = db.define("customers", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  codigo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

module.exports = Customers;
