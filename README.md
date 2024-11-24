# Travel Booking CMS - Backend

The backend for the Travel Booking CMS application is built using Node.js, Express.js, and MongoDB. It provides RESTful APIs for managing travel packages, bookings, and authentication.

## Features
- **Admin Authentication:** Secure admin login using JSON Web Tokens (JWT).
- **CRUD for Travel Packages:** Create, read, update, and delete travel packages.
- **CRUD for Bookings:** Manage customer bookings with status updates.
- **CORS Support:** Configurable allowed origins for secure cross-origin requests.

## Technology Stack
- **Node.js**: Server-side runtime.
- **Express.js**: Web framework.
- **MongoDB**: NoSQL database for storing data.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB.
- **JWT**: Secure authentication mechanism.

## Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or cloud-based, e.g., MongoDB Atlas)

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/eklavyabhargava/travel-booking-cms-backend.git
cd travel-booking-cms-backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
```bash
PORT=5000
JWT_SECRET=your-secret-key
MONGO_URI=your-mongo-connection-url
ALLOWED_ORIGIN=your-client-app-url/http://localhost:3000
```

### 4. Start the Server
```bash
npm run serve
```