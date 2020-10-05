# Este es un ejemplo basico de una rest api con operaciones CRUD, la base de datos utilizada es MySql el esquema de la base de datos se encuentra en la carpeta db -> backup.sql 

nota si al hacer la peticion al servidor express y al hacer una consulta a la base de datos este manda el error "ER_NOT_SUPPORTED_AUTH_MODE" ejecuten el siguiente comando:
  < ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'> 
y posteriormente 
  < flush privileges; >

para la ejecucion del servidor usar ->  npm run dev
