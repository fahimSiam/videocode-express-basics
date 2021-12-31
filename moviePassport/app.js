var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

///////////GITHUB AUTH
const session = require("express-session");
const passport = require("passport");
const GitHubStrategy = require("passport-github").Strategy;

var indexRouter = require("./routes/index");
//var usersRouter = require('./routes/users');

var app = express();
const helmet = require("helmet");
app.use(helmet());

/////////////////GITHUB AUTH
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    //cookie: { secure: true }
  })
);

app.use(passport.initialize());
app.use(passport.session());

const passportConfig = require("./config");

passport.use(
  new GitHubStrategy(passportConfig, function (
    accessToken,
    refreshToken,
    profile,
    callback
  ) {
    /* User.findOrCreate({ githubId: profile.id }, function (err, user) {
      return callback(err, user);
    }); */
    //console.log(profile);
    return callback(null, profile);
  })
);
passport.serializeUser((user, callback) => {
  callback(null, user);
});
passport.deserializeUser((user, callback) => {
  callback(null, user);
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
//app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
