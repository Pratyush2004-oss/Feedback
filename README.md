# Feedback Portal Backend

This is the backend for the Feedback Portal application, built using **Node.js**, **Express.js**, and **MongoDB**. It provides APIs for managing feedback and admin authentication.

---

## Features

- **Admin Authentication**: Secure login for admin users.
- **Feedback Management**: APIs to submit and retrieve feedback.
- **Database Integration**: MongoDB for storing feedback data.

---

## Libraries Used

### Core Libraries

- **[express](https://www.npmjs.com/package/express)**: Web framework for building APIs.
- **[dotenv](https://www.npmjs.com/package/dotenv)**: Loads environment variables from `.env` files.
- **[mongoose](https://www.npmjs.com/package/mongoose)**: MongoDB object modeling for Node.js.
- **[cors](https://www.npmjs.com/package/cors)**: Middleware for enabling Cross-Origin Resource Sharing.

---

## API Endpoints

### Admin Routes

| Method | Endpoint        | Description               |
| ------ | --------------- | ------------------------- |
| POST   | `/api/v1/admin` | Admin login.              |
| GET    | `/api/v1/admin` | Check admin login status. |

### Feedback Routes

| Method | Endpoint               | Description             |
| ------ | ---------------------- | ----------------------- |
| GET    | `/api/v1/feedback`     | Retrieve all feedbacks. |
| POST   | `/api/v1/feedback/add` | Submit a new feedback.  |

---

## Project Structure

```plaintext
backend/
├── index.js                # Entry point of the application
├── lib/
│   └── conn.js             # MongoDB connection logic
├── model/
│   └── feedback.model.js   # Feedback schema definition
├── router/
│   ├── admin.router.js     # Admin routes
│   └── feedback.router.js  # Feedback routes
```

---

## How to Run

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:

   ```env
   PORT=3000
   MONGO_URI=<your-mongodb-uri>
   adminEmail=<admin-email>
   adminPassword=<admin-password>
   ```

4. Start the server:

   ```bash
   npm run dev
   ```

5. The server will run at `http://localhost:3000`.

---

## Pictorial Representation

### Backend Workflow

```plaintext
Client Request
      ↓
+-------------------+
| Express.js Server |
+-------------------+
      ↓
+-------------------+
|    Routes         |
| - Admin Routes    |
| - Feedback Routes |
+-------------------+
      ↓
+-------------------+
| MongoDB Database  |
+-------------------+
```

---

## Example Usage

### Admin Login

```http
POST /api/v1/admin
Content-Type: application/json

{
  "email": "admin@example.com",
  "password": "password123"
}
```

### Submit Feedback

```http
POST /api/v1/feedback/add
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Great platform!"
}
```

---

Frontend Part

# Feedback Portal

This project is a **Feedback Portal** that allows users to submit feedback and provides an admin dashboard to view the feedback. It is built using **React** for the frontend and **Node.js** with **Express.js** for the backend.

---

## Features

- **User Feedback Submission**: Users can submit their feedback with their name, email, and message.
- **Admin Authentication**: Admins can log in to access the feedback dashboard.
- **Feedback Management**: Admins can view all feedback submitted by users.

---

## How It Works

### 1. Feedback Submission Workflow

1. **Frontend**: The user fills out the feedback form on the frontend.
2. **API Call**: The form data is sent to the backend via a POST request to `/api/v1/feedback/add`.
3. **Backend**: The backend validates the data and stores it in the MongoDB database.
4. **Response**: The backend sends a success or error response to the frontend.

**Pictorial Representation**:

```plaintext
User Input
   ↓
Frontend (React)
   ↓
POST /api/v1/feedback/add
   ↓
Backend (Express.js)
   ↓
MongoDB (Feedback Stored)
   ↓
Response (Success/Error)
```

---

### 2. Admin Authentication Workflow

1. **Frontend**: The admin enters their email and password in the login form.
2. **API Call**: The credentials are sent to the backend via a POST request to `/api/v1/admin`.
3. **Backend**: The backend checks the credentials against the environment variables (`adminEmail` and `adminPassword`).
4. **Response**: If the credentials are valid, the backend sends a success response. Otherwise, it sends an error response.

**Pictorial Representation**:

```plaintext
Admin Input
   ↓
Frontend (React)
   ↓
POST /api/v1/admin
   ↓
Backend (Express.js)
   ↓
Environment Variables (Validation)
   ↓
Response (Success/Error)
```

---

### 3. Fetching Feedback Details Workflow

1. **Frontend**: The admin navigates to the feedback dashboard.
2. **API Call**: A GET request is sent to `/api/v1/feedback` to fetch all feedback.
3. **Backend**: The backend retrieves the feedback data from the MongoDB database.
4. **Response**: The backend sends the feedback data to the frontend, which displays it in the dashboard.

**Pictorial Representation**:

```plaintext
Admin Request
   ↓
Frontend (React)
   ↓
GET /api/v1/feedback
   ↓
Backend (Express.js)
   ↓
MongoDB (Retrieve Feedback)
   ↓
Response (Feedback Data)
```

---

## API Endpoints

### Feedback Routes

| Method | Endpoint               | Description             |
| ------ | ---------------------- | ----------------------- |
| GET    | `/api/v1/feedback`     | Retrieve all feedbacks. |
| POST   | `/api/v1/feedback/add` | Submit a new feedback.  |

### Admin Routes

| Method | Endpoint        | Description               |
| ------ | --------------- | ------------------------- |
| POST   | `/api/v1/admin` | Admin login.              |
| GET    | `/api/v1/admin` | Check admin login status. |

---

## Project Structure

```plaintext
backend/
├── index.js                # Entry point of the application
├── lib/
│   └── conn.js             # MongoDB connection logic
├── model/
│   └── feedback.model.js   # Feedback schema definition
├── router/
│   ├── admin.router.js     # Admin routes
│   └── feedback.router.js  # Feedback routes

frontend/
├── src/
│   ├── main.tsx            # React entry point
│   ├── App.tsx             # Main application component
│   ├── components/
│   │   ├── InputForm.tsx   # Feedback submission form
│   │   ├── LoginForm.tsx   # Admin login form
│   │   ├── Header.tsx      # Header component
│   │   └── FeedbackPage.tsx # Admin feedback dashboard
```

---

## How to Run

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd Feedback-Portal
   ```

2. Set up the backend:

   ```bash
   cd backend
   npm install
   ```

3. Create a `.env` file in the `backend` directory with the following variables:

   ```env
   PORT=3000
   MONGO_URI=<your-mongodb-uri>
   adminEmail=<admin-email>
   adminPassword=<admin-password>
   ```

4. Start the backend server:

   ```bash
   npm run dev
   ```

5. Set up the frontend:

   ```bash
   cd ../frontend
   npm install
   ```

6. Start the frontend development server:

   ```bash
   npm run dev
   ```

7. Open the application in your browser at `http://localhost:5173`.

---

## Example API Requests

### Submit Feedback

```http
POST /api/v1/feedback/add
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Great platform!"
}
```

### Admin Login

```http
POST /api/v1/admin
Content-Type: application/json

{
  "email": "admin@example.com",
  "password": "password123"
}
```

---

## License

This project is licensed under the MIT License.
