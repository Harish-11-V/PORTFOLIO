# Portfolio Project Setup Guide

## Quick Start - MongoDB Atlas (Recommended for Development)

### Option 1: Use MongoDB Atlas (Free Cloud Database)

1. **Create MongoDB Atlas Account**
   - Go to https://www.mongodb.com/cloud/atlas/register
   - Sign up for free account
   - Create a free cluster (M0 tier)

2. **Get Connection String**
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string (looks like: `mongodb+srv://username:<password>@cluster.xxxxx.mongodb.net/portfolio`)
   - Replace `<password>` with your actual password

3. **Update Backend .env File**
   - Open `backend/.env`
   - Replace `MONGODB_URI=mongodb://localhost:27017/portfolio` with your Atlas connection string
   - Example: `MONGODB_URI=mongodb+srv://harish:mypassword@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority`

4. **Whitelist IP Address**
   - In Atlas, go to Network Access
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (for development)

### Option 2: Install MongoDB Locally

1. **Download MongoDB Community Edition**
   - Go to https://www.mongodb.com/try/download/community
   - Download Windows installer
   - Run installer and follow setup wizard
   - Choose "Complete" installation
   - Install as a Windows Service

2. **Verify Installation**
   ```powershell
   mongod --version
   ```

3. **Start MongoDB Service** (if not already running)
   ```powershell
   net start MongoDB
   ```

## Running the Application

### 1. Install Dependencies (if not done)
```powershell
# In project root
cd "c:\Users\HARISH KUMAR V\Desktop\portfolio-project"
npm run install-all
```

### 2. Seed the Database
```powershell
cd backend
npm run seed
```

### 3. Start Backend Server
```powershell
# In backend folder
npm run dev
```

### 4. Start Frontend (in a new terminal)
```powershell
cd "c:\Users\HARISH KUMAR V\Desktop\portfolio-project\frontend"
npm run dev
```

### 5. Access the Application
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000
- Health Check: http://localhost:5000/health

## Troubleshooting

### MongoDB Connection Error
- **Atlas**: Check connection string, password, and IP whitelist
- **Local**: Verify MongoDB service is running: `Get-Service MongoDB`

### Port Already in Use
- Backend (5000): `netstat -ano | findstr :5000`
- Frontend (5173): `netstat -ano | findstr :5173`
- Kill process: `Stop-Process -Id <PID> -Force`

### Email Configuration (Optional)
- Update `EMAIL_USER`, `EMAIL_PASS`, and `EMAIL_TO` in `backend/.env`
- For Gmail: Use App Password, not regular password
- Generate at: https://myaccount.google.com/apppasswords

## Current Status
✅ Dependencies installed
✅ Deprecation warnings fixed
⚠️ MongoDB needs to be running (Atlas or Local)
