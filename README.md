<h1 align="center">🌐 PORTFOLIO WEBSITE</h1>
<h3 align="center">Full Stack MERN Application</h3>

<p align="center">
A <b>modern, interactive portfolio website</b> built using the <b>MERN stack</b>, featuring
<b>glassmorphism UI</b>, smooth animations, interactive particle effects, and a fully
<b>dynamic backend</b> for managing projects, skills, and contact messages.
</p>

---

## 🏷️ Badges

<p align="center">
  <img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-20.x-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-7.0-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" />
</p>

---

## ✨ Key Features

- 🎨 **Modern UI/UX** — Glassmorphism design with smooth animations using **Framer Motion**
- 🌌 **Interactive Particle Background** — Canvas-based particles with mouse interaction
- 📱 **Fully Responsive** — Optimized for desktop, tablet, and mobile
- 🎯 **Dynamic Content** — Projects & skills fetched from **MongoDB**
- 📧 **Contact Form Integration** — Secure email handling via **Nodemailer**
- 🎭 **3D Hover Effects** — Interactive card tilt & depth animations
- 🚀 **Performance Optimized** — Lazy loading, code splitting & asset optimization
- 🔒 **Security Focused** — Helmet.js, rate limiting & input validation

---

## 🛠️ Tech Stack

<h3 align="center">Frontend</h3>
<p align="center">
  <img src="https://skillicons.dev/icons?i=react,vite,tailwind,js,html,css" />
</p>
<p align="center">
  Framer Motion • React Router • Axios • React Icons
</p>

<h3 align="center">Backend</h3>
<p align="center">
  <img src="https://skillicons.dev/icons?i=nodejs,express,mongodb" />
</p>
<p align="center">
  Mongoose • Nodemailer • Express Validator • Helmet • Rate Limiter
</p>

---

## 📋 Prerequisites

- Node.js **v18+**
- npm or yarn
- MongoDB (Local / Atlas)
- Git

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

Backend (backend/.env)

```bash
PORT=5000
MONGODB_URI=your_mongodb_connection_string
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
FRONTEND_URL=http://localhost:5173
Frontend (frontend/.env)
VITE_API_URL=http://localhost:5000
```

---

### 4️⃣ Database Setup

```bash
MongoDB Atlas (Recommended)

Create a free M0 cluster

Whitelist IP

Copy connection string

Update MONGODB_URI

OR Local MongoDB

mongod
```

---

## 5️⃣ Seed the Database

```bash
cd backend
npm run seed
```

---

## 6️⃣ Run the Application

```bash
npm run dev
```

<p align="center"> 
  🌐 Frontend: <code>http://localhost:5173</code><br/> 
  🔌 Backend: <code>http://localhost:5000</code><br/> 
  ❤️ Health: <code>http://localhost:5000/health</code> </p>

---

## 📁 Project Structure

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

---

## 🎨 Customization
Homepage → Home.jsx

Resume Section → Resume.jsx

Social Links → Navbar.jsx, Footer.jsx

Theme Colors (tailwind.config.js):

```bash
extend: {
  colors: {
    primary: "#0f172a",
    accent: "#38bdf8",
  }
}
```

---

## 🚢 Deployment

• Frontend: Vercel / Netlify
• Backend: Render / Railway / Heroku
• Database: MongoDB Atlas

---

## 🤝 Contributing

• Fork the repository

• Create a feature branch

• Commit changes

• Push & open a Pull Request

---

## 📄 License
Licensed under the MIT License.

---

## 👨‍💻 Author
HARISH KUMAR V

---

<p align="center"> <a href="https://github.com/Harish-11-V">GitHub</a> • <a href="https://www.linkedin.com/in/harish-kumar-v/">LinkedIn</a> • <a href="mailto:harishkumar11v@gmail.com">Email</a> </p>
<p align="center">

---
