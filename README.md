```
# 🚀 Team Task Manager

A full-stack **Team Task Manager** application built with **React, Express, Node.js, and MongoDB**. This project demonstrates real-world concepts such as authentication, authorization, CRUD operations, and role-based access control (RBAC), similar to applications like Jira, Trello, and Asana.

---

## 📌 Features

### 👨‍💼 Admin

* Register/Login
* View all users
* Create, update, and delete tasks
* Assign tasks to employees
* View all tasks
* Dashboard with task statistics

### 👨‍💻 Employee

* Secure login
* View only assigned tasks
* Update task status
* Edit profile
* Logout

---

## 🛠️ Tech Stack

### Frontend

* React
* React Router
* Axios
* Tailwind CSS (Optional)

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt
* dotenv
* CORS

---

# 📂 Project Structure

```text
team-task-manager/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── context/
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   ├── server.js
│   └── .env
│
├── README.md
└── package.json
```

---

# 🗄️ Database Design

## User

```javascript
{
  name: String,
  email: String,
  password: String,
  role: "admin" | "employee"
}
```

## Task

```javascript
{
  title: String,
  description: String,
  priority: "Low" | "Medium" | "High",
  status: "Pending" | "In Progress" | "Completed",
  assignedTo: ObjectId,
  createdBy: ObjectId
}
```

---

# 🔐 Authentication Flow

```text
Login
   │
   ▼
Verify Email
   │
Verify Password
   │
Generate JWT
   │
Return Token
   │
React Stores Token
   │
Protected API Requests
```

---

# 🔒 Authorization (RBAC)

| Role     | Permissions                                  |
| -------- | -------------------------------------------- |
| Admin    | Create, Update, Delete Tasks, View All Users |
| Employee | View Assigned Tasks, Update Task Status      |

Example:

```javascript
if (user.role !== "admin") {
    return res.status(403).json({
        message: "Access Denied"
    });
}
```

---

# 🌐 API Endpoints

## Authentication

| Method | Endpoint    |
| ------ | ----------- |
| POST   | `/register` |
| POST   | `/login`    |
| GET    | `/profile`  |

---

## Users

| Method | Endpoint     |
| ------ | ------------ |
| GET    | `/users`     |
| GET    | `/users/:id` |

---

## Tasks

| Method | Endpoint     |
| ------ | ------------ |
| GET    | `/tasks`     |
| GET    | `/tasks/:id` |
| POST   | `/tasks`     |
| PUT    | `/tasks/:id` |
| DELETE | `/tasks/:id` |

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/your-username/team-task-manager.git
cd team-task-manager
```

---

## Backend Setup

```bash
cd server
npm install
npm run dev
```

---

## Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

# 🚀 Future Improvements

* Search Tasks
* Task Filters
* Pagination
* Profile Image Upload
* Email Notifications
* Due Dates
* Dashboard Charts
* Dark Mode
* Real-time Notifications using Socket.io

---

# 📚 Learning Outcomes

This project covers:

* REST APIs
* Express.js
* MongoDB & Mongoose
* React
* JWT Authentication
* Authorization (RBAC)
* CRUD Operations
* Middleware
* Protected Routes
* React Router
* Axios Integration
* Full-Stack Development

---

# 📅 Development Roadmap

* ✅ Day 1 – Express & MongoDB Setup
* ✅ Day 2 – User Registration
* ✅ Day 3 – Login & JWT
* ✅ Day 4 – Authentication Middleware
* ✅ Day 5 – Task CRUD
* ✅ Day 6 – Role-Based Authorization
* ✅ Day 7 – Employee APIs
* ✅ Day 8 – React Setup
* ✅ Day 9 – React + Express Integration
* ✅ Day 10 – Dashboard & UI

---

# 🤝 Contributing

Contributions are welcome! Feel free to fork the repository, create a feature branch, and submit a pull request.

---

# 📄 License

This project is licensed under the MIT License.

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub. It helps others discover the project and motivates future improvements.

```
