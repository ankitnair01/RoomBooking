// config/session.js
module.exports.session = {
  secret: 'your_secret_key',
  cookie: {
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  },
  resave: false,
  saveUninitialized: false
};
