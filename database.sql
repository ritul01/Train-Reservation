CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE seats (
  id SERIAL PRIMARY KEY,
  seat_number INT UNIQUE NOT NULL,
  is_reserved BOOLEAN DEFAULT FALSE
);