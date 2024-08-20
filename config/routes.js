// config/routes.js

module.exports.routes = {
  '/': { view: 'pages/homepage' },
  
  'GET /booking/meetingRoom': 'BookingController.meetingRoom',
  'POST /booking/submitMeetingRoom': 'BookingController.submitMeetingRoom',

  // Form routes
  'GET /booking/meetingRoomForm': 'BookingController.meetingRoomForm',
  'GET /booking/appetizersForm': 'BookingController.appetizersForm',
  'GET /booking/meetingRoomCumAppetizersForm': 'BookingController.meetingRoomCumAppetizersForm',

  // Booking routes
  'POST /booking/submitMeetingRoom': 'BookingController.submitMeetingRoom',
  'POST /booking/submitAppetizers': 'BookingController.submitAppetizers',
  'POST /booking/submitMeetingRoomCumAppetizers': 'BookingController.submitMeetingRoomCumAppetizers',

  // Admin routes
  'GET /admin': 'AdminController.loginPage',
  'POST /admin/login': 'AuthController.login',
  'GET /admin/dashboard': 'AdminController.dashboard',
  'POST /admin/logout': 'AdminController.logout',
  'POST /admin/updateBooking': 'AdminController.updateBooking',
  'GET /admin/getBookings': 'AdminController.getBookings',
  'POST /admin/approveBooking/:type/:id': 'AdminController.approveBooking',
  'POST /admin/declineBooking/:type/:id': 'AdminController.declineBooking'
};
