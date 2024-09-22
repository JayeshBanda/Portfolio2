// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { firstName, lastName, email, phone, message } = req.body;

//     // Create a transporter object using SMTP
//     const transporter = nodemailer.createTransport({
//       service: 'gmail', // or use another service
//       auth: {
//         user: process.env.EMAIL_USER, // Use the environment variable
//         pass: process.env.EMAIL_PASS, // Use the environment variable
//       },
//     });

//     // Setup email data
//     const mailOptions = {
//       from: email, // Sender address
//       to: 'jayeshbanda4567@gmail.com', // Your email address
//       subject: 'New Contact Form Submission',
//       text: `You've received a new message from ${firstName} ${lastName}.
      
//       Email: ${email}
//       Phone: ${phone}
      
//       Message: ${message}`,
//     };

//     // Send the email
//     try {
//       await transporter.sendMail(mailOptions);
//       res.status(200).json({ success: true, message: 'Email sent successfully!' });
//     } catch (error) {
//       res.status(500).json({ success: false, message: 'Error sending email.', error });
//     }
//   } else {
//     res.status(405).json({ success: false, message: 'Only POST method allowed' });
//   }
// }


import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { firstName, lastName, email, phone, message } = await req.json();

    // Nodemailer transport configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: email,
      to: process.env.GMAIL_USER, // Your email
      subject: `New message from ${firstName} ${lastName}`,
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

