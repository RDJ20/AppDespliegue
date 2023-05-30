const mysql = require('mysql2');

//Aqui debes de cambiar las variables para algo mas seguro
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'aws'
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectarse a la base de datos:', err);
    return;
  }
  console.log('Conexión a la base de datos exitosa');
});
setTimeout(() => {}, 4000); // función vacía



  module.exports = connection;