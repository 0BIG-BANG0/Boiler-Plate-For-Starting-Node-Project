import express from "express";
import productRouter from "./src/routes/products.routes.js";

import path from "path";
import expressLayout from "express-ejs-layouts";
import userRouter from "./src/routes/user.routes.js";
import session from 'express-session'
import {auth} from "./src/middlewares/auth.middleware.js";
//Create an instance of express app
const app = express();

//for static file like css and js
app.use(express.static("public"));

// COnfiguring Session
app.use(session({
    secret: 'SecretKey',
    resave: false,
    saveUninitialized: true,
    cookies: {secure:true} // when http the secure also when https secure true
}))

//BodyParser
app.use(express.urlencoded({ extended: true }));

//Setting up the view Engine (ejs in this case) use set
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src", "views"));

//Using Express-ejs-Layout for Layout support
app.use(expressLayout);

//Serving static Files from 'src/views' directory
app.use(express.static("src/views"));

// Using the productRouter for handling routes starting from "/"
app.use("/", productRouter);
app.use('/',userRouter)

export default app;
