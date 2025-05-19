# 🍦 Ice Cream Parlor – A Delightful MERN Stack App

Welcome to the **Ice Cream Parlor** – a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) to deliver a seamless and delicious user experience. Whether you're placing orders, managing inventory, or browsing the menu, this system has it all!

---

## 🚀 Tech Stack

| Layer         | Tech            |
| ------------- | --------------- |
| Frontend      | React.js        |
| Backend       | Node.js + Express.js |
| Database      | MongoDB         |
| Styling       | CSS / Bootstrap |
| API Testing   | Postman (optional) |

---

## 🎯 Key Features

- 🍨 **Dynamic Menu**: Browse a rich catalog of ice cream flavors and varieties.
- 🛒 **Order System**: Place and manage customer orders easily.
- 📦 **Inventory Management**: Track available stock and update items.
- 👩‍💼 **Admin Panel**: Secure access to monitor and manage the parlor's operations.
- 🧾 **Real-Time Updates**: View and manage orders with up-to-date data.
- 📱 **Responsive Design**: Optimized for both desktop and mobile users.

---

## 🔧 Setup Instructions

Follow these steps to run the project locally:
Add your MONGODB connection string in the Config folder db.js file

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/ice-cream-parlor.git
cd ice-cream-parlor
```
### 2. Install Dependencies

```bash
cd backend
npm install
```
```bash
cd ../frontend
npm install
```
### 3. MongoDB Configuration (IMP)
```bash
// backend/config/config.js
export const MONGO_URI = "your-mongodb-connection-string";
```
Note: Never share your connection string publicly. Use environment variables or .env in production.

### 4. Run the Application
```bash
cd backend
npm run server
```
```bash
cd ../frontend
npm start
```
