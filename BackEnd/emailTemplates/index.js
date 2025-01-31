function accountVerification(name, token) { 
  const verificationLink = `${process.env.BACKEND}/verify/${token}`;

  return (`
    <html>
    <head>
      <style>
        /* Add CSS styles for better email formatting */
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          text-align: center;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        h1 {
          color: #333;
        }
        p {
          font-size: 16px;
        }
        a {
          display: inline-block;
          padding: 10px 20px;
          margin: 20px 0;
          background-color: #007BFF;
          color: #fff !important;
          text-decoration: none;
          border-radius: 5px;
        }
        .note {
          font-size: 14px;
          color: #777;
        }
        .footer {
          background-color: #f4f4f4;
          padding: 10px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Hello ${name},</h1>
        <p>Thank you for signing up with AnimeHub! To get started, please verify your email by clicking the button below:</p>
        <a href="${verificationLink}">Verify Your Email</a>
        <p>If the button above doesn't work, you can also copy and paste the following link into your web browser:</p>
        <p><a href="${verificationLink}">${verificationLink}</a></p>
        <p>If you didn't sign up for an AnimeHub account, please disregard this email.</p>
      </div>
      <div class="footer">
        <p class="note">Note: This email was sent to ${name} at ${process.env.EMAIL}. If you did not sign up for an AnimeHub account, please ignore this message.</p>
      </div>
    </body>
    </html>
  `);
}

module.exports = {
  accountVerification
}
