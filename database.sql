-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE items (
"id" serial PRIMARY KEY,
"item" varchar (80),
"quantity" real,
"unit" varchar (20),
"purchase" boolean default false
);

INSERT INTO items (item, quantity, unit, purchase)
VALUES ('apples','5', 'lb', 'false'),
('carrots', '2', 'lb', 'true')