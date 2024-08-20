// config/http.js
module.exports.http = {
  middleware: {
    order: [
      'cookieParser',
      'session',
      'flash',
      'bodyParser',
      'compress',
      'poweredBy',
      'router',
      'www',
      'favicon'
    ],

    session: (function () {
      const session = require('express-session');
      return session({
        secret: 'your_secret_key',
        resave: false,
        saveUninitialized: false
      });
    })(),

    flash: (function () {
      const flash = require('connect-flash');
      return flash();
    })()
  }
};
