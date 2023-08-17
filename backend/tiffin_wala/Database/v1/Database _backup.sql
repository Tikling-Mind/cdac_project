
-- -------------------------------------------

DROP DATABASE IF EXISTS tiffin_service;
CREATE DATABASE tiffin_service;
USE tiffin_service;

-- -------------------------------------------

CREATE TABLE otps (
  id BIGINT NOT NULL,
  version INT NOT NULL,
  date_created DATETIME(6) NOT NULL,
  email VARCHAR(35) NOT NULL,
  otp INT NOT NULL,
  PRIMARY KEY (id)
);


INSERT INTO otps (id, version, date_created, email, otp)
VALUES 
(1, 1, '2023-08-14 10:30:00.000000', 'john@example.com', 1234),
(2, 1, '2023-08-14 11:15:00.000000', 'jane@example.com', 5678),
(3, 1, '2023-08-14 12:00:00.000000', 'bob@example.com', 9012),
(4, 1, '2023-08-14 13:45:00.000000', 'alice@example.com', 3456),
(5, 1, '2023-08-14 14:30:00.000000', 'sam@example.com', 7890);


-- -----------------------------------------------------------------------

CREATE TABLE logins (
  id BIGINT NOT NULL,
  version INT NOT NULL,
  email VARCHAR(35) NOT NULL,
  password VARCHAR(250) NOT NULL,
  user_role VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);


INSERT INTO logins (id, version, email, password, user_role)
VALUES 
(1, 1, 'user1@example.com', 'password1', 'admin'),
(2, 1, 'user2@example.com', 'password2', 'user'),
(3, 1, 'user3@example.com', 'password3', 'user'),
(4, 1, 'user4@example.com', 'password4', 'user'),
(5, 1, 'user5@example.com', 'password5', 'user');

-- -----------------------------------------------------------------------

CREATE TABLE customers (
  id BIGINT NOT NULL,
  version INT NOT NULL,
  email VARCHAR(100) NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  mobile VARCHAR(10) NOT NULL,
  profile_image VARCHAR(255) NOT NULL,
  register_date DATETIME(6) NOT NULL,
  line1 VARCHAR(255) NOT NULL,
  line2 VARCHAR(255) NOT NULL,
  city VARCHAR(50) NOT NULL,
  pincode INT NOT NULL,
  state VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);


INSERT INTO customers (id, version, email, first_name, last_name, mobile, profile_image, register_date, line1, line2, city, pincode, state)
VALUES 
(1, 1, 'john@example.com', 'John', 'Doe', '1234567890', 'profile1.jpg', '2023-08-14 00:00:00.000000', '123 Main St', 'Apt 1', 'New York', 10001, 'NY'),
(2, 1, 'jane@example.com', 'Jane', 'Doe', '2345678901', 'profile2.jpg', '2023-08-14 00:00:00.000000', '456 Elm St', '', 'Los Angeles', 90001, 'CA'),
(3, 1, 'bob@example.com', 'Bob', 'Smith', '3456789012', 'profile3.jpg', '2023-08-14 00:00:00.000000', '789 Oak St', 'Unit 2', 'Chicago', 60601, 'IL'),
(4, 1, 'alice@example.com', 'Alice', 'Johnson', '4567890123', 'profile4.jpg', '2023-08-14 00:00:00.000000', '321 Pine St', '', 'Houston', 77001, 'TX'),
(5, 1, 'sam@example.com', 'Sam', 'Lee', '5678901234', 'profile5.jpg', '2023-08-14 00:00:00.000000', '654 Maple St', 'Suite 3', 'San Francisco', 94101, 'CA');

-- ------------------------------------------------------------------------------------------------------------------

CREATE TABLE vendors (
  id BIGINT NOT NULL,
  version INT NOT NULL,
  email VARCHAR(50) NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  mobile VARCHAR(10) NOT NULL,
  profile_image VARCHAR(255) NOT NULL,
  register_date DATETIME(6) NOT NULL,
  line1 VARCHAR(255) NOT NULL,
  line2 VARCHAR(255) NOT NULL,
  city VARCHAR(50) NOT NULL,
  pincode INT NOT NULL,
  state VARCHAR(50) NOT NULL,
  is_blocked BIT NOT NULL,
  is_verified BIT NOT NULL,
  PRIMARY KEY (id)
);


INSERT INTO vendors (id, version, email, first_name, last_name, mobile, profile_image, register_date, line1, line2, city, pincode, state, is_blocked, is_verified)
VALUES 
(1, 1, 'john@example.com', 'John', 'Doe', '1234567890', 'profile1.jpg', '2023-08-14 00:00:00.000000', '123 Main St', 'Apt 1', 'New York', 10001, 'NY', 0, 1),
(2, 1, 'jane@example.com', 'Jane', 'Doe', '2345678901', 'profile2.jpg', '2023-08-14 00:00:00.000000', '456 Elm St', '', 'Los Angeles', 90001, 'CA', 0, 1),
(3, 1, 'bob@example.com', 'Bob', 'Smith', '3456789012', 'profile3.jpg', '2023-08-14 00:00:00.000000', '789 Oak St', 'Unit 2', 'Chicago', 60601, 'IL', 0, 1),
(4, 1, 'alice@example.com', 'Alice', 'Johnson', '4567890123', 'profile4.jpg', '2023-08-14 00:00:00.000000', '321 Pine St', '', 'Houston', 77001, 'TX', 0, 1),
(5, 1, 'sam@example.com', 'Sam', 'Lee', '5678901234', 'profile5.jpg', '2023-08-14 00:00:00.000000', '654 Maple St', 'Suite 3', 'San Francisco', 94101, 'CA', 0, 1);

-- ------------------------------------------------------------------------------------------------------------------

CREATE TABLE subscription_plans (
  id BIGINT NOT NULL,
  version INT NOT NULL,
  description VARCHAR(255) NOT NULL,
  is_available BIT(1) NOT NULL,
  name VARCHAR(255) NOT NULL,
  plan_type VARCHAR(255) NOT NULL,
  price DOUBLE NOT NULL,
  vendor_id BIGINT NOT NULL,
  image VARCHAR(255) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (vendor_id) REFERENCES vendors (id)
);


INSERT INTO subscription_plans (id, version, description, is_available, name, plan_type, price, vendor_id, image)
VALUES 
(1, 1, 'Basic plan with limited features', 1, 'Basic Plan', 'Standard', 9.99, 1, 'basic_plan.jpg'),
(2, 1, 'Standard plan with additional features', 1, 'Standard Plan', 'Standard', 19.99, 1, 'standard_plan.jpg'),
(3, 1, 'Premium plan with advanced features', 1, 'Premium Plan', 'Premium', 29.99, 2, 'premium_plan.jpg'),
(4, 1, 'Business plan for enterprise customers', 1, 'Business Plan', 'Enterprise', 49.99, 2, 'business_plan.jpg'),
(5, 1, 'Free plan with limited functionality', 1, 'Free Plan', 'Free', 0, 3, 'free_plan.jpg');


-- ------------------------------------------------------------------------------------------------------------------

CREATE TABLE customer_plans (
  id BIGINT NOT NULL,
  version INT NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  customer_id BIGINT NOT NULL,
  subscription_plan_id BIGINT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (subscription_plan_id) REFERENCES subscription_plans (id),
  FOREIGN KEY (customer_id) REFERENCES customers (id)
);


INSERT INTO customer_plans (id, version, start_date, end_date, customer_id, subscription_plan_id)
VALUES 
(1, 1, '2023-08-14', '2023-09-14', 1, 1),
(2, 1, '2023-08-14', '2023-09-14', 2, 2),
(3, 1, '2023-08-14', '2023-09-14', 3, 3),
(4, 1, '2023-08-14', '2023-09-14', 4, 4),
(5, 1, '2023-08-14', '2023-09-14', 5, 5);


-- -----------------------------------------------------------------------------------------------------------------


CREATE TABLE tiffin (
  id BIGINT NOT NULL,
  version INT NOT NULL,
  image_path VARCHAR(255) NOT NULL,
  day VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  food_type VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  price DOUBLE NOT NULL,
  subscription_plan_id BIGINT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (subscription_plan_id) REFERENCES subscription_plans (id)
);


INSERT INTO tiffin (id, version, image_path, day, description, food_type, name, price, subscription_plan_id)
VALUES 
(1, 1, 'tiffin1.jpg', 'Monday', 'Veg thali with roti, rice, and dal', 'Vegetarian', 'Veg Thali', 5.99, 1),
(2, 1, 'tiffin2.jpg', 'Tuesday', 'Chicken biryani with raita', 'Non-vegetarian', 'Chicken Biryani', 8.99, 2),
(3, 1, 'tiffin3.jpg', 'Wednesday', 'Paneer tikka with naan and salad', 'Vegetarian', 'Paneer Tikka', 6.99, 3),
(4, 1, 'tiffin4.jpg', 'Thursday', 'Egg fried rice with manchurian', 'Non-vegetarian', 'Egg Fried Rice', 7.99, 4),
(5, 1, 'tiffin5.jpg', 'Friday', 'Chole bhature with pickle', 'Vegetarian', 'Chole Bhature', 5.99, 5);

-- ------------------------------------------------------------------------------------------------------------------

CREATE TABLE orders (
  id BIGINT NOT NULL,
  version INT NOT NULL,
  date_time DATETIME NOT NULL,
  quantity INT NOT NULL,
  customer_id BIGINT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (customer_id) REFERENCES customers (id)
);

INSERT INTO orders (id, version, date_time, quantity, customer_id)
VALUES 
(1, 1, '2023-08-14 12:00:00', 2, 1),
(2, 1, '2023-08-15 10:30:00', 1, 2),
(3, 1, '2023-08-16 15:45:00', 3, 3),
(4, 1, '2023-08-17 09:15:00', 2, 4),
(5, 1, '2023-08-18 13:00:00', 1, 5);

-- -------------------------------------------------------------------------------------------------------

CREATE TABLE payments (
  id BIGINT NOT NULL,
  version INT NOT NULL,
  amount DOUBLE NOT NULL,
  payment_time DATETIME(6) NOT NULL,
  payment_type VARCHAR(255) NOT NULL,
  razorpay_payment_id VARCHAR(255) NOT NULL,
  status VARCHAR(255) NOT NULL,
  order_id BIGINT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (order_id) REFERENCES orders (id)
);


INSERT INTO payments (id, version, amount, payment_time, payment_type, razorpay_payment_id, status, order_id)
VALUES 
(1, 1, 10.99, '2023-08-14 12:00:00.000000', 'Credit Card', 'pay_12345', 'Success', 1),
(2, 1, 8.99, '2023-08-15 10:30:00.000000', 'Debit Card', 'pay_23456', 'Success', 2),
(3, 1, 15.99, '2023-08-16 15:45:00.000000', 'UPI', 'pay_34567', 'Success', 3),
(4, 1, 7.99, '2023-08-17 09:15:00.000000', 'Net Banking', 'pay_45678', 'Success', 4),
(5, 1, 5.99, '2023-08-18 13:00:00.000000', 'Wallet', 'pay_56789', 'Success', 5);


-- -----------------------------------------------------------------------------------------------------------------

CREATE TABLE plan_orders (
  subscription_id BIGINT NOT NULL,
  order_id BIGINT NOT NULL,
  FOREIGN KEY (subscription_id) REFERENCES subscription_plans (id),
  FOREIGN KEY (order_id) REFERENCES orders (id)
);


INSERT INTO plan_orders (subscription_id, order_id)
VALUES 
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

-- ---------------------------------------------------------------------------------------------------------

SHOW TABLES;

DESCRIBE otps;
DESCRIBE customer_plans;
DESCRIBE logins;

DESCRIBE subscription_plans;
DESCRIBE customers;
DESCRIBE tiffin;

DESCRIBE orders;
DESCRIBE plan_orders;
DESCRIBE vendors;
DESCRIBE payments;

-- -----------------------------------------------------------------------------------------------------------

