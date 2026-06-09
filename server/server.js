const express =
require("express");

const dotenv =
require("dotenv");

const cors =
require("cors");

const connectDB =
require("./config/db");



// ======================
// ENV CONFIG
// ======================

dotenv.config();



// ======================
// CONNECT DATABASE
// ======================

connectDB();



// ======================
// APP
// ======================

const app =
express();



// ======================
// CORS
// ======================

app.use(

  cors({

    origin:
    "https://tradingjournal-git-main-ashwiniguptaji-6091s-projects.vercel.app",

    credentials:true

  })

);



// ======================
// MIDDLEWARE
// ======================

app.use(

  express.json()

);



// ======================
// STATIC UPLOADS
// ======================

app.use(

  "/uploads",

  express.static(

    "uploads"

  )

);



// ======================
// ROOT API
// ======================

app.get(

  "/",

  (req,res)=>{

    res.send(

      "🚀 Trading Journal API Running"

    );

  }

);



// ======================
// TEST API
// ======================

app.get(

  "/api",

  (req,res)=>{

    res.json({

      success:true,

      message:
      "Trading Journal API Running ✅",

    });

  }

);



// ======================
// AUTH ROUTES
// ======================

const authRoutes =
require("./routes/authRoutes");

app.use(

  "/api/auth",

  authRoutes

);



// ======================
// TRADE ROUTES
// ======================

const tradeRoutes =
require("./routes/tradeRoutes");

app.use(

  "/api/trades",

  tradeRoutes

);



// ======================
// JOURNAL ROUTES
// ======================

const journalRoutes =
require("./routes/journalRoutes");

app.use(

  "/api/journals",

  journalRoutes

);



// ======================
// PROFILE ROUTES
// ======================

const profileRoutes =
require("./routes/profileRoutes");

app.use(

  "/api/profile",

  profileRoutes

);



// ======================
// PAYMENT ROUTES
// ======================

const paymentRoutes =
require("./routes/paymentRoutes");

app.use(

  "/api/payment",

  paymentRoutes

);



// ======================
// SUBSCRIPTION ROUTES
// ======================

const subscriptionRoutes =
require("./routes/subscriptionRoutes");

app.use(

  "/api/subscription",

  subscriptionRoutes

);



// ======================
// ANALYTICS ROUTES
// ======================

const analyticsRoutes =
require("./routes/analyticsRoutes");

app.use(

  "/api/analytics",

  analyticsRoutes

);



// ======================
// 404 ROUTE
// ======================

app.use(

  (req,res)=>{

    res.status(404).json({

      success:false,

      message:
      "Route Not Found",

    });

  }

);



// ======================
// SERVER
// ======================

const PORT =
process.env.PORT || 5000;

app.listen(

  PORT,

  ()=>{

    console.log(

      `🚀 Server running on port ${PORT}`

    );

  }

);