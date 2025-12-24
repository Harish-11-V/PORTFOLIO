Portfolio Website — Full Stack MERN Application

A **modern, interactive portfolio website** built using the **MERN stack**, featuring **glassmorphism UI**, smooth animations, interactive particle effects, and a fully dynamic backend for managing projects, skills, and contact messages.

---

## 🖼️ Preview & Badges

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge\&logo=react\&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?style=for-the-badge\&logo=node.js\&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-7.0-47A248?style=for-the-badge\&logo=mongodb\&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

---

## ✨ Features

* 🎨 **Modern UI/UX** – Glassmorphism design with smooth animations using **Framer Motion**
* 🌌 **Interactive Particle Background** – Custom canvas-based particle system with mouse interaction
* 📱 **Fully Responsive** – Optimized for desktops, tablets, and mobile devices
* 🎯 **Dynamic Content Management** – Projects and skills fetched from **MongoDB**
* 📧 **Contact Form Integration** – Email notifications via **Nodemailer** with validation
* 🎭 **3D Hover Effects** – Interactive card tilts and depth animations
* 🚀 **Performance Optimized** – Lazy loading, code splitting, and optimized assets
* 🔒 **Security Focused** – Helmet.js, rate limiting, and input sanitization

---

## 🛠️ Tech Stack

### Frontend

* **React 18**
* **Vite**
* **Tailwind CSS**
* **Framer Motion**
* **React Router**
* **Axios**
* **React Icons**

### Backend

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **Nodemailer**
* **Express Validator**
* **Helmet**
* **Express Rate Limiter**

---

## 📋 Prerequisites

Ensure the following are installed before setup:

* Node.js **v18+**
* npm or yarn
* MongoDB (Local or Atlas)
* Git

---

## 🚀 Quick Start

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Harish-11-V/portfolio-website.git
cd portfolio-website
```

---

### 2️⃣ Install Dependencies

```bash
npm run install-all
```

---

### 3️⃣ Environment Configuration

#### Backend (`backend/.env`)

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
FRONTEND_URL=http://localhost:5173
```

#### Frontend (`frontend/.env`)

```env
VITE_API_URL=http://localhost:5000
```

---

### 4️⃣ Database Setup

#### Option A: MongoDB Atlas (Recommended)

* Create a free cluster (M0)
* Whitelist your IP
* Copy the connection string
* Update `MONGODB_URI` in `.env`

#### Option B: Local MongoDB

```bash
mongod
```

---

### 5️⃣ Seed the Database

```bash
cd backend
npm run seed
```

---

### 6️⃣ Run the Application

#### Development Mode

```bash
npm run dev
```

📍 **Access URLs**

* Frontend: `http://localhost:5173`
* Backend API: `http://localhost:5000`
* Health Check: `http://localhost:5000/health`

---

## 📁 Project Structure

```bash
portfolio-website/
├── frontend/
│   ├── src/
│   ├── public/
│   └── vite.config.js
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── server.js
└── package.json
```

---

## 🔌 API Endpoints

### Projects

* `GET /api/projects`
* `GET /api/projects/:id`
* `POST /api/projects`
* `PUT /api/projects/:id`
* `DELETE /api/projects/:id`

### Skills

* `GET /api/skills`
* `GET /api/skills/:id`
* `POST /api/skills`
* `PUT /api/skills/:id`
* `DELETE /api/skills/:id`

### Contact

* `POST /api/contact`
* `GET /api/contact`
* `PUT /api/contact/:id/status`
* `DELETE /api/contact/:id`

---

## 🎨 Customization

### Personal Information

* **Homepage** → `Home.jsx`
* **Resume Section** → `Resume.jsx`
* **Social Links** → `Navbar.jsx`, `Footer.jsx`

### Theme & Colors

Modify `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: "#0f172a",
      accent: "#38bdf8",
    }
  }
}
```

---

## 🔐 Email Configuration (Gmail)

1. Enable **2-Step Verification**
2. Generate **App Password**
3. Use it as `EMAIL_PASS` in `.env`

---

## 🚢 Deployment

### Frontend (Vercel / Netlify)

```bash
npm run build
```

Deploy the `dist/` folder.

### Backend (Render / Railway / Heroku)

* Set environment variables
* Deploy `backend/`
* Update `VITE_API_URL` with backend URL

### Database

* Use **MongoDB Atlas** for production

---

## 🐛 Troubleshooting

* **MongoDB Connection Error** → Check URI & IP whitelist
* **Port Already in Use** → Change `PORT` in `.env`
* **CORS Issues** → Ensure `FRONTEND_URL` matches deployed frontend

---

## 📝 Scripts

### Root

```bash
npm run install-all
npm run dev
npm run build
npm run server
npm run client
```

### Backend

```bash
npm start
npm run dev
npm run seed
```

### Frontend

```bash
npm run dev
npm run build
npm run preview
```

---

## 🤝 Contributing

1. Fork the repo
2. Create a branch (`feature/your-feature`)
3. Commit changes
4. Push to GitHub
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Harish Kumar V**

* GitHub: [@Harish-11-V](https://github.com/Harish-11-V)
* LinkedIn: **Harish Kumar V**
* Email: `harishkumar11v@gmail.com`

---

## 🙏 Acknowledgments

* React
* Tailwind CSS
* Framer Motion
* MongoDB
* Express.js

---
