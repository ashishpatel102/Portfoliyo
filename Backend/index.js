const express = require('express');
const cors = require('cors');
const { auth } = require('./routers/auth');
const app = express();
const fs = require('fs');
const path = require('path');
const connectDB = require('./config/connectDB');
const verify = require('./middelweres/verify');
const cookieParser = require('cookie-parser');




connectDB();
// app.use(cors({
//     credentials: true,
//     origin:'http://localhost:3000' 
// }));
app.use(cors({
  origin:'https://portfoliyo-hlll.onrender.com',
  credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("✅ Backend is Live and Working!");
});

app.get("/api/verify",verify, (req, res) => {

    res.json({ success: true, user: req.user });
});


app.use('/auth', auth);




const PORT = process.env.PORT || 3000 
app.listen(PORT, (error) => {
    if (error) return console.error("Server Error:", error);
    console.log("Server listening on PORT:", PORT);
});

// app.listen(PORT, '0.0.0.0', (error) => {
//     if (error) return console.error("Server Error:", error);
//     console.log("Server listening on PORT:", PORT);
// });
