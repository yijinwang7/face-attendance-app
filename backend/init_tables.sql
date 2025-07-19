-- Create the users table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    face_encoding TEXT, -- For storing face fingerprint as JSON or string
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Create the attendance table
CREATE TABLE IF NOT EXISTS attendance (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    status ENUM('checked_in', 'checked_out') NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

SHOW TABLES;SHOW TABLES;

