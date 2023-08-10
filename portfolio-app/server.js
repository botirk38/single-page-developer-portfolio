import express, { json } from 'express';
import { createTransport } from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv'; 
import process from 'process'; 

dotenv.config(); 

const app = express();
const PORT = 3001; 

app.use(json());
app.use(cors());

console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASSWORD);

app.post('/submit-form', (req, res) => { 
    const formAnswers = req.body;

    const transporter = createTransport({
        service: 'gmail', 
        auth: {
            user: process.env.EMAIL_USER, 
            pass: process.env.EMAIL_PASSWORD, 
        },
    });

    const emailContent = `
        Form Answers:
        Full Name: ${formAnswers.fullName}
        Email: ${formAnswers.email}
        Message: ${formAnswers.message}
    `;

    transporter.sendMail({
        from: process.env.EMAIL_USER, 
        to: process.env.EMAIL_USER, 
        subject: 'Portfolio Form Submission',
        text: emailContent,
    }, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('An error occurred');
        } else {
            res.status(200).send('Form submitted successfully');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
