-- database name: "urban_guide"

CREATE TABLE user(
    user_id INT(11) PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(255),
    user_email VARCHAR(255),
    user_password VARCHAR(255)
) ENGINE=INNODB;

-- tours table

CREATE TABLE tours(
    tour_id INT(11) PRIMARY KEY AUTO_INCREMENT,
    tour_name VARCHAR(255),
    tour_description VARCHAR(255),
    tour_location VARCHAR(255),
    tour_price INT(11),
    tour_rating INT(11),
    tour_image VARCHAR(255),
    tour_type VARCHAR(255)
) ENGINE=INNODB;

-- educations table
CREATE TABLE educations(
    education_id INT(11) PRIMARY KEY AUTO_INCREMENT,
    education_name VARCHAR(255),
    education_description VARCHAR(255),
    education_location VARCHAR(255),
    education_price INT(11),
    education_rating INT(11),
    education_image VARCHAR(255),
    education_type VARCHAR(255)
) ENGINE=INNODB;

-- jobs table
CREATE TABLE jobs(
    job_id INT(11) PRIMARY KEY AUTO_INCREMENT,
    job_name VARCHAR(255),
    job_description VARCHAR(255),
    job_location VARCHAR(255),
    job_price INT(11),
    job_rating INT(11),
    job_image VARCHAR(255),
    job_type VARCHAR(255)
) ENGINE=INNODB;

-- locations table
CREATE TABLE locations(
    location_id INT(11) PRIMARY KEY AUTO_INCREMENT,
    location_name VARCHAR(255)
) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS tour_images (
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    tour_id INT(11),
    tour_image_url VARCHAR(255),
    FOREIGN KEY (tour_id) REFERENCES tours(tour_id)
) ENGINE=INNODB;

INSERT INTO tours(tour_name, tour_description, tour_location, tour_price, tour_rating, tour_image, tour_type) VALUE('Tour 1', 'Tour 1 description', 'Tour 1 location', "100", "5", 'tour1.jpg', 'tour');

INSERT INTO educations(education_name, education_description, education_location, education_price, education_rating, education_image, education_type) VALUE('Education 1', 'Education 1 description', 'Education 1 location', "100", "5", 'education1.jpg', 'education');

INSERT INTO jobs(job_name, job_description, job_location, job_price, job_rating, job_image, job_type) VALUE('Job 1', 'Job 1 description', 'Job 1 location', "100", "5", 'job1.jpg', 'job');

INSERT INTO locations(location_name) VALUE('Location 1');
