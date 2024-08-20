// api/controllers/AuthController.js
module.exports = {
  login: async function (req, res) {
    const { username, password } = req.body;

    if (username === 'admin' && password === 'password') {
      req.session.authenticated = true;
      return res.redirect('/admin/dashboard');
    } else {
      return res.view('booking/adminLogin', { error: 'Invalid credentials' });
    }
  }
};
