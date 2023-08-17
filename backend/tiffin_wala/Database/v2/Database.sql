
-- -------------------------------------------

DROP DATABASE IF EXISTS tiffin_service;
CREATE DATABASE tiffin_service;
USE tiffin_service;

-- -------------------------------------------

CREATE TABLE addresses (
   id BIGINT NOT NULL,
   line1 VARCHAR(255) NOT NULL,
   line2 VARCHAR(255) NOT NULL,
   city VARCHAR(50) NOT NULL,
   pincode INT NOT NULL,
   state VARCHAR(50) NOT NULL,
   PRIMARY KEY (id)
);



-- ------------------------------------------------------------------------------------------------------------------

CREATE TABLE customers (
  id BIGINT NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  mobile VARCHAR(10) NOT NULL,
  register_date DATETIME(6) NOT NULL,
  address_id BIGINT NOT NULL,
  is_blocked BIT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (address_id) REFERENCES addresses (id)
);


-- ------------------------------------------------------------------------------------------------------------------

CREATE TABLE vendors (
  id BIGINT NOT NULL,
  email VARCHAR(50) NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  mobile VARCHAR(10) NOT NULL,
  register_date DATETIME(6) NOT NULL,
  is_blocked BIT NOT NULL,
  is_available BIT NOT NULL,
  is_verified BIT NOT NULL,
  address_id BIGINT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (address_id) REFERENCES addresses (id)
);

-- ------------------------------------------------------------------------------------------------------------------


CREATE TABLE subscription_plans (
  id BIGINT NOT NULL,
  description VARCHAR(255) NOT NULL,
  is_available BIT(1) NOT NULL,
  name VARCHAR(255) NOT NULL,
  vendor_id BIGINT NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (vendor_id) REFERENCES vendors (id)
);



-- ------------------------------------------------------------------------------------------------------------------

CREATE TABLE tiffins (
  id BIGINT NOT NULL,
  description VARCHAR(255) NOT NULL,
  food_type VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  price DOUBLE NOT NULL,
  subscription_plans_id BIGINT NOT NULL,
  is_available BIT(1) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (subscription_plans_id) REFERENCES subscription_plans (id)
);


-- ------------------------------------------------------------------------------------------------------------------

CREATE TABLE orders (
  id BIGINT NOT NULL,
  date_time DATETIME NOT NULL,
  quantity INT NOT NULL,
  customer_id BIGINT NOT NULL,   
  tiffins_id BIGINT NOT NULL,
  order_status ENUM('pending', 'accepted') DEFAULT 'pending',
  PRIMARY KEY (id),
  FOREIGN KEY (customer_id) REFERENCES customers (id),
  FOREIGN KEY (tiffins_id) REFERENCES tiffins (id)
);


-- -------------------------------------------------------------------------------------------------------

SHOW TABLES;

DESCRIBE subscription_plans;
DESCRIBE customers;
DESCRIBE tiffins;

DESCRIBE orders;
DESCRIBE vendors;

-- -----------------------------------------------------------------------------------------------------------

