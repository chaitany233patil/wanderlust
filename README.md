# 🌍 Wanderlust - Travel & Stay Platform

A full-stack web application for discovering and booking unique accommodations worldwide. Built with modern web technologies, Wanderlust provides a seamless platform for travelers to find their perfect stay and for hosts to showcase their properties.

![Wanderlust](https://img.shields.io/badge/Wanderlust-Travel%20Platform-blue)
![Node.js](https://img.shields.io/badge/Node.js-v14+-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen)
![License](https://img.shields.io/badge/License-ISC-yellow)

## 🏠 About

Wanderlust is a property rental platform inspired by Airbnb, allowing users to:
- **Discover** unique accommodations across different locations
- **Book** stays with secure payment processing  
- **Review** and rate properties and hosts
- **Host** properties and manage bookings
- **Connect** with a community of travelers and hosts

## ✨ Features

### 🔐 User Authentication & Authorization
- Secure user registration and login
- Password encryption and session management
- Email verification system
- Profile management with photo uploads

### 🏡 Property Management
- Create, edit, and delete property listings
- Multiple image uploads per property
- Detailed property descriptions and amenities
- Location mapping and search
- Price management and availability

### 💳 Booking & Payments
- Secure booking system
- Stripe payment integration
- Payment receipt emails
- Booking history and management

### ⭐ Reviews & Ratings
- Star rating system
- Written reviews for properties
- Host and guest review system
- Review moderation

### 🛡️ Security & Performance
- Input validation and sanitization
- CSRF protection
- Rate limiting
- Error handling and logging
- Responsive design for all devices

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Frontend
- **EJS** - Templating engine
- **HTML5 & CSS3** - Markup and styling
- **JavaScript** - Client-side functionality
- **Bootstrap** - Responsive design framework

### Authentication & Security
- **Passport.js** - Authentication middleware
- **bcrypt** - Password hashing
- **express-session** - Session management
- **connect-flash** - Flash messages

### File Upload & Storage
- **Multer** - File upload handling
- **Cloudinary** - Cloud image storage and manipulation

### Payment Processing
- **Stripe** - Payment gateway integration

### Email Services
- **Nodemailer** - Email sending functionality

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- Cloudinary account (for image uploads)
- Stripe account (for payments)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/chaitany233patil/wanderlust.git
   cd wanderlust
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Copy the example environment file and configure it with your credentials:
   ```bash
   cp .env.example .env
   ```
   
   Then edit `.env` with your actual configuration values:
   ```env
   # Database
   MONGO_URL=mongodb://127.0.0.1:27017/PropertyHubDB
   # or for MongoDB Atlas:
   # MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/wanderlust

   # Cloudinary Configuration
   CLOUD_NAME=your_cloud_name
   CLOUD_API_KEY=your_api_key
   CLOUD_API_SECRET=your_api_secret

   # Stripe Configuration
   STRIPE_SECRET_KEY=your_stripe_secret_key

   # Session Secret
   SESSION_SECRET=your_session_secret_key
   ```
   
   **Note**: Email configuration is currently hardcoded in `mail.js`. For production deployment, consider moving email credentials to environment variables.

4. **Set up the database**
   ```bash
   # Start MongoDB service (if running locally)
   mongod

   # Initialize sample data (optional)
   node init/index.js
   ```

5. **Start the application**
   ```bash
   # Make sure MongoDB is running and environment variables are set
   npm start
   # or for development with nodemon (install with: npm install -g nodemon)
   npm run dev
   ```

   **Note**: The application requires all environment variables to be properly configured before starting. If you encounter authentication errors, double-check your `.env` file configuration.

6. **Access the application**
   Open your browser and navigate to `http://localhost:8080`

## 📁 Project Structure

```
wanderlust/
├── models/                 # Database schemas
│   ├── listing.js         # Property listing model
│   ├── review.js          # Review model
│   ├── user.js            # User model
│   └── usercart.js        # Shopping cart model
├── views/                 # EJS templates
│   ├── includes/          # Partial templates
│   ├── layout/            # Layout templates
│   ├── index.ejs          # Home page
│   ├── show.ejs           # Property details
│   ├── new.ejs            # Create listing
│   └── ...
├── public/                # Static assets
│   ├── css/               # Stylesheets
│   ├── js/                # Client-side JavaScript
│   ├── img/               # Images
│   └── icons/             # Icon files
├── utils/                 # Utility functions
│   ├── ExpressError.js    # Custom error handling
│   └── wrapAsync.js       # Async error wrapper
├── init/                  # Database initialization
│   ├── index.js           # Database seeder
│   └── data.js            # Sample data
├── app.js                 # Main application file
├── middleware.js          # Custom middleware
├── cloudConfig.js         # Cloudinary configuration
└── package.json           # Dependencies and scripts
```

## 🔌 API Routes

### Main Routes
- `GET /` - Home page with property listings
- `GET /signup` - User registration page
- `POST /signup` - Handle user registration
- `GET /login` - User login page
- `POST /login` - Handle user authentication
- `GET /logout` - User logout

### Property Routes
- `GET /listings` - Browse all properties
- `GET /listings/new` - Create new property form
- `POST /listings` - Create new property
- `GET /listings/:id` - View property details
- `PUT /listings/:id` - Update property
- `DELETE /listings/:id` - Delete property

### Payment Routes
- `POST /create-checkout-session` - Initiate Stripe payment
- `GET /payment/success` - Payment success page
- `GET /payment/cancel` - Payment cancellation page

### User Routes
- `GET /user/profile` - User profile page
- `POST /verify-code` - Email verification

## 📸 Screenshots

*Coming soon - Screenshots will be added to showcase the application's interface and features.*

## 🔗 Live Demo

*A live demo will be available soon. For now, you can run the application locally following the installation instructions above.*

## 🔥 Key Features in Detail

### Property Listings
- **Rich Media Support**: Upload multiple high-quality images for each property
- **Detailed Descriptions**: Comprehensive property information including amenities
- **Location Integration**: Interactive maps and location-based search
- **Pricing Management**: Flexible pricing options and availability calendar

### User Experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Intuitive Navigation**: Easy-to-use interface for browsing and booking
- **Search & Filter**: Advanced search options by location, price, and amenities
- **Wishlist**: Save favorite properties for later viewing

### Security & Trust
- **Secure Authentication**: Email verification and secure password handling
- **Payment Security**: PCI-compliant payment processing through Stripe
- **Data Protection**: Input validation and sanitization
- **Review System**: Transparent reviews and ratings for trust building

## 🔧 Configuration

### Database Setup
The application uses MongoDB as the primary database. You can use either:
- **Local MongoDB**: Install MongoDB locally and use the default connection string
- **MongoDB Atlas**: Create a cloud database and update the connection string in `.env`

### Cloudinary Setup
1. Create an account at [Cloudinary](https://cloudinary.com/)
2. Get your cloud name, API key, and API secret
3. Add these credentials to your `.env` file

### Stripe Setup
1. Create an account at [Stripe](https://stripe.com/)
2. Get your secret key from the dashboard
3. Add the secret key to your `.env` file

## 🚨 Troubleshooting

### Common Issues

**MongoDB Connection Error**
- Ensure MongoDB is running on your system
- Check if the connection string in `.env` is correct
- For Atlas users, verify your IP address is whitelisted

**Cloudinary Authentication Error**
- Double-check your Cloudinary credentials in `.env`
- Ensure there are no extra spaces in the environment variables
- Verify your Cloudinary account is active

**Stripe Payment Issues**
- Use test API keys for development
- Check that your Stripe account is properly set up
- Ensure you're using the correct secret key format

**Email Not Sending**
- The app currently uses hardcoded Gmail credentials
- For production, update `mail.js` to use environment variables
- Use app-specific passwords for Gmail accounts

### Performance Optimization
- Enable MongoDB indexing for better search performance
- Optimize images before uploading to Cloudinary
- Use compression middleware for production deployment

## 🎯 Usage

### For Travelers
1. **Sign up** for a new account or **log in**
2. **Browse** available properties by location
3. **View** detailed property information and photos
4. **Book** your desired dates
5. **Pay** securely through Stripe
6. **Leave reviews** after your stay

### For Hosts
1. **Create an account** and complete your profile
2. **Add a new listing** with photos and details
3. **Set pricing** and availability
4. **Manage bookings** through your dashboard
5. **Respond to reviews** and build your reputation

## 🔐 Environment Variables

Create a `.env` file with the following variables:

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGO_URL` | MongoDB connection string | Yes |
| `CLOUD_NAME` | Cloudinary cloud name | Yes |
| `CLOUD_API_KEY` | Cloudinary API key | Yes |
| `CLOUD_API_SECRET` | Cloudinary API secret | Yes |
| `STRIPE_SECRET_KEY` | Stripe secret key | Yes |
| `SESSION_SECRET` | Secret key for session encryption | Recommended |

**Note**: Email configuration is currently hardcoded in `mail.js`. For production deployment, consider moving email credentials to environment variables.

## 🤝 Contributing

We welcome contributions to Wanderlust! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow existing code style and conventions
- Write clear, descriptive commit messages
- Test your changes thoroughly
- Update documentation as needed

## 🐛 Bug Reports

If you find a bug, please create an issue with:
- Clear description of the problem
- Steps to reproduce the issue
- Expected vs actual behavior
- Screenshots if applicable
- Environment details (OS, browser, Node.js version)

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Chaitanya Patil** - *Full Stack Developer*
- GitHub: [@chaitany233patil](https://github.com/chaitany233patil)

## 🙏 Acknowledgments

- Inspired by Airbnb's user experience and design
- Built using modern web development best practices
- Special thanks to the open-source community for the amazing tools and libraries

## 📞 Support

If you need help or have questions:
- Create an issue on GitHub
- Check the existing documentation
- Review the FAQ section

---

**Happy Traveling with Wanderlust! 🌟**