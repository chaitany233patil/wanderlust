const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "wanderlustyourhome@gmail.com",
    pass: "yvcb oihm mbsq ncsc",
  },
});

async function sendEmail(userEmail, userName) {
  try {
    const info = await transporter.sendMail({
      from: '"Wanderlust 🏡" <wanderlustyourhome@gmail.com>',
      to: userEmail,
      subject: "Welcome to Wanderlust! 🌍",
      text: `
    Hello ${userName},
    
    ✨ Welcome to Wanderlust, your gateway to unique and unforgettable stays! ✨
    
    We are delighted to have you as part of our travel community. Whether you're dreaming of a serene mountain retreat, a chic urban escape, or a peaceful beach hideaway, we have something special waiting for you.
    
    🗺️ Start exploring our curated listings here: http://localhost:8080/listings
    
    If you have any questions or need help, our team is here for you.
    
    Wishing you incredible adventures,
    The Wanderlust Team 🌟
    
    P.S. Complete your profile for a personalized experience: http://localhost:8080/profile
    `,
      html: `
      <div style="font-family: Arial, sans-serif; color: #2C3E50; max-width: 600px; margin: auto; background-color: #F0F3F4; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        <h2 style="color: #E74C3C;">✨ Welcome to Wanderlust, ${userName}! 🌍</h2>
        <p style="font-size: 16px; color: #34495E;">We are thrilled to have you as part of our vibrant community of explorers and hosts.</p>
        <p style="font-size: 16px; color: #34495E;">
          🌄 Whether you're dreaming of a serene mountain retreat, a stylish city apartment, or a sunny beach escape,
          we have the perfect place just waiting for you.
        </p>
        <p style="font-size: 18px; color: #2980B9; font-weight: bold;">
          🗺️ <a href="http://localhost:8080/listings" style="color: #E67E22; text-decoration: none;">Start Exploring Our Listings</a>
        </p>
        <div style="padding: 15px; background-color: #ECF0F1; border-radius: 5px; margin-top: 10px;">
          <p style="font-size: 16px; color: #34495E;">If you have any questions, we're here to assist you every step of the way.</p>
          <p style="font-size: 16px; color: #2ECC71;">Happy travels and unforgettable experiences await you! ✈️</p>
          <p style="font-size: 16px; color: #E74C3C;">Warmest wishes,<br><strong>The Wanderlust Team 🌟</strong></p>
        </div>
        <hr style="border: none; border-top: 1px solid #BDC3C7; margin: 20px 0;">
        <p style="font-size: 12px; color: #7F8C8D;">
          P.S. Don't forget to <a href="http://localhost:8080/profile" style="color: #E67E22;">complete your profile</a> for a more personalized journey with Wanderlust.
        </p>
      </div>
      `,
    });
    console.log("Email sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

async function varifyEmail(userEmail, verificationCode) {
  try {
    const info = await transporter.sendMail({
      from: '"Wanderlust 🏡" <wanderlustyourhome@gmail.com>',
      to: userEmail,
      subject: "Your Wanderlust Verification Code 🔐",
      text: `
      Welcome to Wanderlust!
      
      To complete your sign-up, please use the following verification code:
      
      Verification Code: ${verificationCode}
      
      Enter this code on the verification page: http://localhost:8080/verify
      
      If you didn't request this email, please ignore it.
      
      Happy exploring,
      The Wanderlust Team 🌟
      
      P.S. Your journey to discovering unique stays starts here!
      `,
      html: `
        <div style="font-family: Arial, sans-serif; color: #2C3E50; max-width: 600px; margin: auto; background: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
          <h2 style="text-align: center; color: #E74C3C;">Welcome to Wanderlust! 🌍</h2>
          <p style="font-size: 16px; color: #34495E; text-align: center;">
            We're excited to have you join our community! To continue your sign-up, please verify your email address.
          </p>
          <div style="text-align: center; margin: 20px 0;">
            <p style="font-size: 18px; color: #2980B9; font-weight: bold;">Your Verification Code:</p>
            <div style="font-size: 24px; color: #E74C3C; font-weight: bold; background-color: #ECF0F1; padding: 10px 20px; border-radius: 5px; display: inline-block;">
              ${verificationCode}
            </div>
          </div>
          <p style="text-align: center; font-size: 16px; color: #34495E;">
            Enter this code on the <a href="http://localhost:8080/verify" style="color: #E67E22; text-decoration: none; font-weight: bold;">verification page</a> to complete your registration.
          </p>
          <div style="padding: 15px; background-color: #ECF0F1; border-radius: 10px; margin-top: 20px; text-align: center;">
            <p style="font-size: 16px; color: #2ECC71;">If you didn't request this email, please ignore it.</p>
          </div>
          <p style="font-size: 14px; color: #7F8C8D; text-align: center; margin-top: 20px;">
            Happy exploring,<br><strong>The Wanderlust Team 🌟</strong>
          </p>
          <hr style="border: none; border-top: 1px solid #BDC3C7; margin: 20px 0;">
          <p style="font-size: 12px; color: #7F8C8D; text-align: center;">
            P.S. Your journey to discovering unique stays starts here!
          </p>
        </div>
        `,
    });
  } catch (err) {
    console.error("Error sending email:", err);
  }
}

async function sendPaymentReceiptEmail(
  userEmail,
  userName,
  amount,
  checkInDate,
  checkOutDate,
  propertyName
) {
  try {
    const info = await transporter.sendMail({
      from: '"Wanderlust 🏡" <wanderlustyourhome@gmail.com>',
      to: userEmail,
      subject: "Your Payment Receipt - Wanderlust Booking Confirmation 🧾",
      text: `
    Hello ${userName},

    🎉 Thank you for your booking at Wanderlust! Your payment of ${amount} has been successfully processed.

    Here are your booking details:
    🏠 Property: ${propertyName}
    📅 Check-In Date: ${checkInDate}
    📅 Check-Out Date: ${checkOutDate}
    💵 Amount Paid: ${amount}

    We hope you have an amazing stay! If you have any questions or need assistance, please don't hesitate to reach out to us.

    Wishing you wonderful experiences,
    The Wanderlust Team 🌟

    P.S. You can view your booking details and more at: http://localhost:8080/bookings
    `,
      html: `
      <div style="font-family: Arial, sans-serif; color: #2C3E50; max-width: 600px; margin: auto; background-color: #F0F3F4; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        <h2 style="color: #E74C3C;">🎉 Booking Confirmation for ${userName}! 🧾</h2>
        <p style="font-size: 16px; color: #34495E;">Thank you for your payment of <strong>&#8377;${amount}</strong>. We are excited to host you at Wanderlust!</p>
        <div style="padding: 15px; background-color: #ECF0F1; border-radius: 5px; margin-top: 10px;">
          <h3 style="color: #3498DB;">Your Booking Details:</h3>
          <ul style="list-style-type: none; padding: 0;">
            <li style="font-size: 16px; color: #34495E;"><strong>🏠 Property:</strong> ${propertyName}</li>
            <li style="font-size: 16px; color: #34495E;"><strong>📅 Check-In Date:</strong> ${checkInDate}</li>
            <li style="font-size: 16px; color: #34495E;"><strong>📅 Check-Out Date:</strong> ${checkOutDate}</li>
            <li style="font-size: 16px; color: #34495E;"><strong>💵 Amount Paid:</strong> &#8377;${amount}</li>
          </ul>
        </div>
        <p style="font-size: 16px; color: #34495E;">We hope you have a memorable stay! If you have any questions, feel free to reach out to us anytime.</p>
        <p style="font-size: 16px; color: #2ECC71;">Safe travels and enjoy your stay! ✈️</p>
        <p style="font-size: 16px; color: #E74C3C;">Warm regards,<br><strong>The Wanderlust Team 🌟</strong></p>
        <hr style="border: none; border-top: 1px solid #BDC3C7; margin: 20px 0;">
        <p style="font-size: 12px; color: #7F8C8D;">
          P.S. View your booking and manage your stay: <a href="http://localhost:8080/bookings" style="color: #E67E22;">Your Bookings</a>
        </p>
      </div>
      `,
    });
    console.log("Payment receipt email sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending payment receipt email:", error);
  }
}

module.exports = { sendEmail, varifyEmail, sendPaymentReceiptEmail };
