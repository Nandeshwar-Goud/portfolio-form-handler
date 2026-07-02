const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Enable CORS so your frontend eg:-GitHub Pages site can access this backend
app.use(cors({
    origin: process.env.ORIGINCORS || 'https://rngs.in' // In production, replace '*' with your actual frontend URL
}));

// built in middleware for the json of the body that we get from frontend
app.use(express.json());

// Set up the mailing engine using your environment variables
const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS  
    }
});

// Test route to check if server is awake
app.get('/', (req, res) => {
    res.status(200).send('Portfolio backend is running successfully!');
});

// The main route that your FrontEnd form will fetch
app.post('/api/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Validation checks
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    const mailOptions = {
        from: process.env.EMAIL_USER,
        replyTo: email, 
        to: process.env.PERSONAL_EMAIL, // Your personal email address
        subject: `💼 New Portfolio Message from ${name}`,
        text: `You received a new inquiry from your website portfolio:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };

    const clientMailOptions = {
        from: process.env.EMAIL_USER,
        replyTo: process.env.EMAIL_USER, 
        to: email, // 👈 Sends directly to the client's provided email address
        subject: `✉️ Thank You For Contacting Us!`,
        text: `Hi ${name},\n\nThank you for reaching out through my portfolio website! I have successfully received your message and will get back to you as soon as possible.\n\nFor your records, here is a copy of your message:\n"${message}"\n\nBest regards,\nrngs.in`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            
            return res.status(500).json({ success: false, message: 'Could not send email.' });
        }
        transporter.sendMail(clientMailOptions, (clientError, clientInfo) => {
            if (clientError) {
                
            }
        res.status(200).json({ success: true, message: 'Message delivered to inbox!' });
        });
    });
});


// configure the port in env varibles 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));