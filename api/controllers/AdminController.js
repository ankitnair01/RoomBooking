// api/controllers/AdminController.js
module.exports = {
  loginPage: function (req, res) {
    return res.view('booking/adminLogin', { messages: req.flash('error') });
  },

  login: function (req, res) {
    // Replace with your actual login logic
    const { username, password } = req.body;
    if (username === 'admin' && password === 'password') {
      req.session.authenticated = true;
      req.flash('success', 'Login successful');
      return res.redirect('/admin/dashboard');
    } else {
      req.flash('error', 'Invalid username or password');
      return res.redirect('/admin');
    }
  },

  dashboard: async function (req, res) {
    if (!req.session.authenticated) {
      req.flash('error', 'You must be logged in to view this page');
      return res.redirect('/admin');
    }

    try {
      const bookings = await Booking.find();
      return res.view('booking/adminDashboard', { bookings, messages: req.flash('success') });
    } catch (err) {
      return res.serverError(err);
    }
  },

  updateBooking: async function (req, res) {
    try {
      const { id, action, roomNumber, time } = req.body;

      if (action === 'accept') {
        await Booking.updateOne({ id }).set({ status: 'Accepted', meetingRoom: roomNumber, startTime: time });
      } else if (action === 'reject') {
        await Booking.updateOne({ id }).set({ status: 'Rejected' });
      }

      req.flash('success', 'Booking updated successfully');
      res.redirect('/admin/dashboard');
    } catch (err) {
      req.flash('error', 'An error occurred while updating the booking');
      res.redirect('/admin/dashboard');
    }
  },

  logout: function (req, res) {
    req.session.authenticated = false;
    req.flash('success', 'Logged out successfully');
    res.redirect('/admin');
  }
};
