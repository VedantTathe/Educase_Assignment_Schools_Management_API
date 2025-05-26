## Educase Assignment – Schools Management API

A Node.js and Express.js RESTful API for managing school data, built as part of the Educase backend assignment. The API allows users to add schools, list them based on proximity, and delete schools from a MySQL database.

---

## Features

Add a new school with location details
List schools sorted by distance to the user’s location
Delete a school by ID
Postman Collection for testing included

---

## Tech Stack

Backend: Node.js, Express.js
Database: MySQL
Tools: Postman

---

## Installation

## 1. Clone the repository

   git clone https://github.com/VedantTathe/Educase_Assignment_Schools_Management_API.git
   cd Educase_Assignment_Schools_Management_API
   

## 2. Install dependencies

   npm install
   
## 3. Create .env file
   Add your MySQL credentials and config:
   
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=school_management
   PORT=5000

## 4. Set up your MySQL database

   CREATE DATABASE school_management;

   USE school_management;

   CREATE TABLE school (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255) NOT NULL,
     address VARCHAR(255) NOT NULL,
     latitude FLOAT NOT NULL,
     longitude FLOAT NOT NULL
   );
   
## 5. Start the server

   npm start
   
---

## API Endpoints

## 1. Add School

Endpoint: POST /addSchool
Body (JSON):
{
  "name": "Sunrise Public School",
  "address": "Nagpur",
  "latitude": 21.1458,
  "longitude": 79.0882
}

## 2. List Schools by Proximity

Endpoint: GET /listSchools
Query Params:
latitude
longitude

Example:
GET /listSchools?latitude=19.0760&longitude=72.8777

## 3. Delete School

Endpoint: DELETE /deleteSchool/:id
Example:
DELETE /deleteSchool/3

---

## Live API (for testing)

> Deployed on: **https://educase-assignment-schools-management-api.vercel.app/**

---

## Postman Collection

[Click here to view the Postman collection](https://www.postman.com/vedanttathe/workspace/mypublicworkspace/collection/28619898-87d0969e-d608-436e-b29c-c71da37ddcbb?action=share&creator=28619898)

The collection includes:

* Add School (POST)
* List Schools (GET)
* Delete School (DELETE)

---

## About the Developer

**Name**: Vedant Tathe
**Email**: \[[your.email@example.com](mailto:tathevedant70@gmail.com)]
**GitHub**: [VedantTathe](https://github.com/VedantTathe)
