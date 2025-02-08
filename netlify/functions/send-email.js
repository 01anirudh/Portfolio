 nodemailer = require("nodemailer");

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL, // update with your Gmail address
    pass: process.env.PASSWORD, // update with your Gmail app password
  },
});

exports.handler = async (event) => {
  const { firstName, lastName, email, phone, message } = JSON.parse(event.body);

  const name = `${firstName} ${lastName}`;

  const mail = {
    from: name,
    to: process.env.EMAIL, // update with your email address
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  try {
    await contactEmail.sendMail(mail);
    return {
      statusCode: 200,
      body: JSON.stringify({ code: 200, status: "Message Sent" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ code: 500, status: "Internal Server Error" }),
    };
  }
};
