-- In the db folder, create a file named schema.sql. Write SQL queries this file that do the following:



-- Create the burgers_db.
-- Switch to or use the burgers_db.
-- Create a burgers table with these fields:



-- id: an auto incrementing int that serves as the primary key.

-- burger_name: a string.

-- devoured: a boolean.





-- Still in the db folder, create a seeds.sql file. In this file, write insert queries to populate the burgers table with at least three entries.
-- Run the schema.sql and seeds.sql files into the mysql server from the command line

CREATE DATABASE burgers_db;
USE burgers_db;


CREATE TABLE tburger
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

drop database if exists burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burger
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

INSERT INTO burger (name, devoured) VALUES ('Mark', true);
INSERT INTO burger (name, devoured) VALUES ('Bobbi', false);
INSERT INTO burger (name, devoured) VALUES ('Sylvester', true);
INSERT INTO burger (name, devoured) VALUES ('Obama', true);
INSERT INTO burger (name, devoured) VALUES ('Joe Biden', true);
INSERT INTO burger (name, devoured) VALUES ('Trump', true);
