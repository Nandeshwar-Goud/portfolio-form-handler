# Portfolio Backend API

A lightweight, production-ready Node.js and Express backend service designed to handle contact form submissions from static portfolio websites (like GitHub Pages). It uses the Resend API to instantly route client messages to a personal inbox while firing an automatic receipt back to the client.

## 🚀 Features
* **Zero Page Reloads:** Handles inputs asynchronously via JavaScript Fetch API.
* **Dual Routing:** Delivers client inquiries to your inbox and auto-replies to the sender simultaneously.
* **Inbox Delivery Guarantee:** Bypasses Gmail SMTP filters using professional email infrastructure (Resend).
* **Secure Architecture:** Keeps sensitive API keys hidden safely using `dotenv`.

## 🛠️ Tech Stack
* **Runtime Environment:** Node.js
* **Backend Framework:** Express.js
* **Email Delivery:** Resend SDK
* **Security & Configuration:** Cors, Dotenv

## ⚙️ Local Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   cd YOUR_REPO_NAME
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory:
   ```env
    EMAIL_USER=email to sendmails
    EMAIL_PASS=16 digit key for Gmail
    PERSONAL_EMAIL=mail to receive from the foam
    PORT=5000
   ```

4. **Run the server:**
   ```bash
   npm start
   ```
   The backend will launch locally on `http://localhost:5000`.
