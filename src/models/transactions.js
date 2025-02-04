import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class transactions extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    detail: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    transaction_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'transactions_type',
        key: 'id'
      }
    },
    propety_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'propety',
        key: 'id'
      }
    },
    payment_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'payment_type',
        key: 'id'
      }
    },
    payment_status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'payment_status',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'transactions',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "transactions_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
