-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "is_Admin" BOOLEAN DEFAULT FALSE
);


CREATE TABLE "clients" (
	"id" SERIAL PRIMARY KEY,
	"client_name" VARCHAR (80) NOT NULL,
	"default_location" VARCHAR(150)
	);
	
CREATE TABLE "rides" (
	"id" SERIAL PRIMARY KEY,
	"pickup_location" varchar NOT NULL,
	"dropoff_location" varchar NOT NULL,
	"pickup_time" TIME NOT NULL,
	"dropoff_time" TIME NOT NULL,
	"is_Complete" BOOLEAN DEFAULT FALSE,
	"client_id" INT REFERENCES "clients",
	"user_id" INT REFERENCES "user"
	
);

--DROP TABLE "rides";

INSERT INTO "clients" ("client_name", "default_location")
VALUES 
('ANNA BURKINS', '123 MAIN ST, Minneapolis, MN 55442'),
('KATE SPADE', '345 BANE ST, Saimt Paul, MN 55332 '),
('MAX COCO',  '678 CANE ST, Plymouth, MN 55423');

INSERT INTO "rides" ("pickup_location",
	"dropoff_location", 
	"pickup_time",
	"dropoff_time")
VALUES 
('888 Bane Street Bloomington, MN', '999 Main Street Saint Paul 55122', '12:50', '14:15');



