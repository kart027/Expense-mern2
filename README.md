# Expense Tracker MERN Application

A full-stack expense tracking application built using the MERN (MongoDB, Express.js, React, Node.js) stack. This application allows users to track their expenses, manage budgets, and visualize their spending patterns.

## 🚀 Features

- User Authentication (Register/Login)
- Expense Management (CRUD operations)
- Interactive Charts and Graphs
- Responsive Design
- Secure JWT Authentication


## 📁 Project Structure

```
Expense-mern2/
├── Backend/                 # Node.js/Express backend
│   ├── config/             # Configuration files
│   ├── controller/         # Business logic
│   ├── database/           # Database connection
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── server.js           # Main server file
│   └── .env                # Environment variables
└── Frontend/               # React frontend
    ├── src/                # Source code
    ├── public/             # Static files
    └── .env                # Frontend environment variables
```

## 🛠️ Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Passport.js
- Bcrypt

### Frontend
- React
- Redux Toolkit
- Material-UI
- React Router
- Chart.js (via DevExpress)
- Day.js

## ⚙️ Setup and Installation

1. Clone the repository
```bash
git clone <repository-url>
cd Expense-mern2
```

2. Backend Setup
```bash
cd Backend
npm install
```

3. Frontend Setup
```bash
cd Frontend
npm install
```

4. Environment Variables

Create a `.env` file in the Backend directory:
```
PORT=4000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

Create a `.env` file in the Frontend directory:
```
REACT_APP_API_URL=http://localhost:4000
```

5. Start the Application

Start the backend server:
```bash
cd Backend
npm i
npm start
```

Start the frontend development server:
```bash
cd Frontend
npm i
npm run start
```

## 📚 API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile



## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- CORS implementation
- Environment variable configuration
- Protected API routes

## 📊 Features in Detail

### User Interface
- Modern Material-UI components
- Responsive design
- Interactive charts and graphs
- Date picker integration

### State Management
- Redux for global state
- Redux Toolkit for simplified state management
- Local storage integration

### Data Visualization
- Expense charts
- Budget tracking
- Spending patterns analysis


