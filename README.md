# 📚 Books Library Management App – Backend

This is the **backend** of the Books Library Management App — a simplified Goodreads clone built using **Node.js**, **Express**, and **MongoDB**. It handles user authentication, book data management, and user-specific book tracking.

---

## 🚀 Features

- 🔐 **User Authentication** using JWT and bcrypt
- 📚 **Public Book APIs** – View all available books
- 👤 **User-Specific Books (MyBooks)** – Add books, update reading status, and give ratings
- 🍪 **Session Management** using HTTP-only cookies
- 🌍 **CORS Support** for frontend integration

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT for authentication
- bcrypt for password hashing
- CORS for frontend-backend communication

---

## 📁 Folder Structure

backend/
├── models/
│ ├── User.js
│ ├── Book.js
│ └── MyBook.js
├── routes/
│ ├── authRoutes.js
│ ├── bookRoutes.js
│ └── myBookRoutes.js
├── controllers/
│ └── (Controller functions)
├── middleware/
│ └── auth.js
├── server.js
├── .env
└── package.json

yaml
Copy
Edit

---

## 📦 API Endpoints

### 🔐 Auth Routes

| Method | Endpoint               | Description              |
| ------ | ---------------------- | ------------------------ |
| POST   | `/api/auth/register` | Register a new user      |
| POST   | `/api/auth/login`    | Log in a user            |
| GET    | `/api/auth/logout`   | Log out current user     |
| GET    | `/api/auth/me`       | Get current user profile |

### 📚 Book Routes (Public)

| Method | Endpoint       | Description       |
| ------ | -------------- | ----------------- |
| GET    | `/api/books` | Get list of books |

### 📘 MyBooks Routes (Protected)

| Method | Endpoint                        | Description                 |
| ------ | ------------------------------- | --------------------------- |
| GET    | `/api/mybooks`                | Get books added by the user |
| POST   | `/api/mybooks/:bookId`        | Add book to user's list     |
| PATCH  | `/api/mybooks/:bookId/status` | Update reading status       |
| PATCH  | `/api/mybooks/:bookId/rating` | Update book rating          |

> ⚠️ MyBooks routes require authentication via cookies.

---

## 🔐 Authentication

- Passwords are hashed with `bcrypt`
- JWT tokens are stored in **HTTP-only cookies**
- Authenticated routes use a custom `auth.js` middleware

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=https://your-frontend-domain.vercel.app
Replace with your own credentials and deployed frontend URL

💻 Running Locally
1. Clone the Repo
bash

git clone https://github.com/your-username/book-library-backend.git
cd book-library-backend
2. Install Dependencies
bash

npm install
3. Start the Server
bash

npm run start
Server will start on http://localhost:5000

🌐 Deployment
✅ Backend Deployed On: Render

Example: https://booklibraryapi.onrender.com

✅ Frontend Deployed On: Vercel

Example: https://booklibrary.vercel.app

Ensure the CLIENT_URL in .env and CORS config includes the deployed frontend:

js
const cors = require('cors');
app.use(cors({
  origin: ['http://localhost:3000', 'https://booklibrary.vercel.app'],
  credentials: true
}));
🧪 Sample Book Data
You can import book data manually using MongoDB Compass or mongoimport.

Example format:

json

{
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "coverImage": "https://covers.openlibrary.org/b/id/9646976-L.jpg",
  "availability": true
}
```
