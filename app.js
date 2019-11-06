const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cookieParser = require("cookie-parser");
const compression = require("compression");

const userRouter = require("./routes/userRoutes");
const stateRouter = require("./routes/location/stateRoutes");
const cityRouter = require("./routes/location/cityRoutes");
const locationRouter = require("./routes/location/locationRoutes");
const companyBranchRouter = require("./routes/company/companyBranchRoutes");
const employeeRouter = require("./routes/company/employeeRoutes");
const userTypeRouter = require("./routes/userTypeRoutes");
const supplierRouter = require("./routes/supplier/supplierRoutes");
const supplierBranchRoutes = require("./routes/supplier/supplierBranchRoutes");
const customerBranchRoutes = require("./routes/customer/customerBranchRoute");
const customerRoutes = require("./routes/customer/customerRoutes");
const categoryRoutes = require("./routes/customer/categoryRoutes.js");
const warrantyRoutes = require("./routes/product/warrantyRoutes");
const productRoutes = require("./routes/product/productRoutes");
const productDetailRoutes = require("./routes/product/productDetailRoutes");

const app = express();

const DB =
  "mongodb+srv://kamran:<PASSWORD>@cluster0-fvxek.mongodb.net/test?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB Connected"));

// *********************GLOBAL MIDDLEWARES*******************************

//set security http headers
app.use(helmet());

//development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Limit request from same IP
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!"
});
app.use("/api", limiter);

//body parser, reading data into req.body
app.use(express.json({ limit: "10kb" }));

//Cookie Parser
app.use(cookieParser());

//Data sanitization against Nosql query injections
app.use(mongoSanitize());

//Data sanitization against XSS(cross site scripting attacks)
app.use(xss());

//Prevent Paramter Pollution
app.use(
  hpp({
    // whitelist: [
    //   "duration",
    //   "ratingsQuantity",
    //   "ratingsAverage",
    //   "maxGroupSize",
    //   "difficulty",
    //   "price"
    // ]
  })
);

app.use(compression());

//***************************/ROUTES***********************************

app.use("/api/user", userRouter);
app.use("/api/state", stateRouter);
app.use("/api/city", cityRouter);
app.use("/api/location", locationRouter);
app.use("/api/company-branch", companyBranchRouter);
app.use("/api/employee", employeeRouter);
app.use("/api/user-type", userTypeRouter);
app.use("/api/supplier", supplierRouter);
app.use("/api/supplierBranch", supplierBranchRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/customer", customerRoutes);
app.use("/api/customerBranch", customerBranchRoutes);
app.use("/api/warranty", warrantyRoutes);
app.use("/api/product", productRoutes);
app.use("/api/productDetail", productDetailRoutes);

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
