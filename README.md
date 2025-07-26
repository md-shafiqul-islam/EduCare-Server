# 🛠️ EduCare – Server Side

Backend for **EduCare**, a role-based service sharing platform for educational resources.  
Handles authentication, user roles, service creation, booking management, and secure API endpoints.

---

## 📌 About

Built with **Express.js**, **MongoDB**, and **Firebase Admin SDK**, this server provides RESTful APIs for user registration, login, service publishing, booking, and review management.

---

## ⚙️ Setup & Run Locally

1. Clone the repository

   ```bash
   git clone https://github.com/md-shafiqul-islam/educare-server.git
   cd educare-server

---

## 🛠 Tech Stack

- Node.js  
- Express.js  
- MongoDB
- Firebase Admin SDK
- JWT
- CORS & dotenv

---

## 🌐 Project Structure 

📦 educare-server
┣ 📂 controllers
┣ 📂 middlewares
┣ 📂 models
┣ 📂 routes
┣ 📜 server.js
┣ 📜 .env.example
┗ 📜 package.json

---

## 📁 Repositories  
**Server:** [github.com/md-shafiqul-islam/craftflow-server](github.com/md-shafiqul-islam/educare-server)

---

## 🧪 Getting Started

To run this project locally:

# 1. Clone the repositories
git clone https://github.com/md-shafiqul-islam/EduCare-Server

# 2. Install dependencies for both
cd ../server
npm install

# 3. Set up environment variables
# For server: create `.env` inside `craftflow-server`
PORT=3000
DB_URL=MONGODB_URI
ACCESS_TOKEN_SECRET=FB_SERVICE_KEY

# 4. Run server
# In terminal:
cd server
nodemon index.js

---

## 🔧 Key Features

- Firebase JWT-based authentication
- CRUD operations for services
- Booking and review management
- Secure API with validation and middleware

---

## 📄 License  
This project is open-source and available under the [MIT License](LICENSE).

---
