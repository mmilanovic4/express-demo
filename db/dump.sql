DROP TABLE IF EXISTS "Person";

CREATE TABLE "Person" (
	"id"	INTEGER,
	"firstName"	TEXT NOT NULL,
	"lastName"	TEXT NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);

INSERT INTO "Person" (firstName, lastName) VALUES ("John", "Doe");
INSERT INTO "Person" (firstName, lastName) VALUES ("Jane", "Doe");

SELECT * FROM "Person" ORDER BY id ASC;
