CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    userName VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) NOT NULL,
    discord VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS events (
      id SERIAL PRIMARY KEY,
      eventName VARCHAR(100) NOT NULL,
      organizer VARCHAR(100) NOT NULL,
      organizerEmail VARCHAR(100) UNIQUE NOT NULL,
      organizerDiscord VARCHAR(100) UNIQUE NOT NULL,
      eventDate DATE NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
    )

CREATE TABLE IF NOT EXISTS comments (
      id SERIAL PRIMARY KEY,
      commentor VARCHAR(100) NOT NULL,
      eventName VARCHAR(100) NOT NULL,
      comment VARCHAR(1000) NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
    )