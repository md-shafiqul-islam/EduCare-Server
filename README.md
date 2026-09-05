# EduCare — Server

Backend API for **EduCare**, an educational service-sharing platform where users can create, explore, and book educational services.

This repository contains the server-side application responsible for authentication, authorization, service management, booking workflows, reviews, and secure API operations.

---

## 🚀 Project Overview

EduCare connects users with educational service providers through a centralized service-sharing platform.

The backend supports workflows for:

- User authentication
- Role-based access
- Educational service management
- Service booking
- Booking management
- Review management
- Secure API operations

This server powers the EduCare client application by providing RESTful APIs and handling database operations.

---

## ✨ Key Features

### 🔐 Authentication & Authorization

- Firebase token verification
- JWT-based authentication
- Protected API endpoints
- Secure middleware-based authorization

---

### 🛡️ Role-Based Access Control

The application supports role-based access for:

- Users
- Service Providers

Authorization middleware helps ensure users can only perform actions permitted for their role.

---

### 📚 Service Management

- Create educational service listings
- Retrieve available services
- Update service information
- Delete services
- Manage service-related data

---

### 📅 Booking Management

- Create service bookings
- Retrieve booking information
- Manage booking requests
- Track booking-related workflows
- Support booking status updates

---

### ⭐ Review Management

- Create reviews for services
- Retrieve service reviews
- Manage review-related data

---

### 🌐 RESTful API

- Structured API routes
- CRUD operations
- Protected endpoints
- Middleware-based request handling
- Database operations with MongoDB

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB**
- **Firebase Admin SDK**
- **JWT**
- **CORS**
- **dotenv**

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/md-shafiqul-islam/EduCare-Server.git
```

### 2. Navigate to the Project

```bash
cd EduCare-Server
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

```env
PORT=3000
DB_URL=your_mongodb_connection_string
ACCESS_TOKEN_SECRET=your_jwt_secret
FB_SERVICE_KEY=your_firebase_service_account_credentials
```

### 5. Run the Server

```bash
nodemon index.js
```

---

## 🔗 Related Repository

- Backend: [CraftFlow Server](https://github.com/md-shafiqul-islam/EduCare-Client)

---

## 🌐 Live Project

👉 [Live](https://edu-care978.netlify.app/)

---

### 🔌 API Capabilities

The backend provides APIs for:

- Authentication-related operations
- User management
- Role-based authorization
- Educational service management
- Service creation and updates
- Service booking
- Booking management
- Review management

---

### 🔒 Security

The server implements security-focused practices including:

- Firebase token verification
- JWT-based authentication
- Protected API routes
- Role-based authorization
- Middleware-based request validation
- Environment variable protection
- CORS configuration

---

### 📌 About EduCare

EduCare is a full-stack educational service-sharing platform that allows users to explore, provide, and book educational services.

The application focuses on:

- Educational service discovery
- Service publishing
- Booking workflows
- Role-based access
- Secure authentication
- Responsive user experience

---

### 👨‍💻 Author

Md. Shafiqul Islam

Software Engineer | Full-Stack Developer

- [Porfolio](https://shafiqul-islam.netlify.app/)
- [LinkedIn](https://www.linkedin.com/in/mdshafiqulislam1/)
- [GitHub](https://github.com/md-shafiqul-islam)

---

