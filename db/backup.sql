create database if not exists company;

CREATE USER 'administracion'@'localhost' IDENTIFIED BY '12345';

GRANT ALL PRIVILEGES ON * . * TO 'administracion'@'localhost';
create table if not exists employees(
	id int(11) primary key auto_increment,
    name varchar(45) default null,
    salary int(11) default null

);
insert into  employees ( name, salary) values
		('Juan' , 11000),  ('Carlos' , 12000), ('Hernandez' , 13000), ('Lucas' , 14000), ('Francisco' , 1500), ('Adal' , 16000);
select * from employees;


USE `company`;
DROP procedure IF EXISTS `addOrEdit`;

DELIMITER $$
USE `company`$$
CREATE DEFINER=`administracion`@`localhost` PROCEDURE `addOrEdit`(
	in _id int,
    in _name varchar(45),
    in _salary int 
)
BEGIN
	if _id = 0 then
		insert into employees (name, salary) values( _name, _salary );
		set _id = last_insert_id();
	else
		update employees set
			name= _name,
			salary = _salary
		where id = _id;
	end if;
    
    
    select _id as id;
END$$

DELIMITER ;

