import Sequelize from 'sequelize'
import colors from 'colors'
//const colors = require('colors')

 export const sequelize = new Sequelize(
  'uluqgckh', // nombre de la base de datos 
  'uluqgckh', // nombre del usuario
  'lm-Zc0fIms766L3z56Q77ESSuvKWHUnN', // contraseña de la base
  {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
  }
)


