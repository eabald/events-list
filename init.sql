CREATE TABLE "events" (
  "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
  "first_name" varchar(128) NOT NULL,
  "last_name" varchar(128) NOT NULL,
  "email" varchar(128) NOT NULL,
  "event_date" date NOT NULL
)
