
const { createTransport } = require('nodemailer');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const formAnswers = JSON.parse(event.body);

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

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'Portfolio Form Submission',
      text: emailContent,
    });

    return { statusCode: 200, body: 'Form submitted successfully' };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: 'An error occurred' };
  }
};
