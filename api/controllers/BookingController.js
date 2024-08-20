// api/controllers/BookingController.js
module.exports = {
  meetingRoomForm: function (req, res) {
    return res.view('booking/meetingRoom', { messages: req.flash() });
  },

  appetizersForm: function (req, res) {
    return res.view('booking/appetizers', { messages: req.flash() });
  },

  meetingRoomCumAppetizersForm: function (req, res) {
    return res.view('booking/meetingRoomCumAppetizers', { messages: req.flash() });
  },

  submitMeetingRoom: async function (req, res) {
    try {
      await Booking.create({
        employeeid: req.body.employeeid,
        startDate: req.body.startDate,
        startTime: req.body.startTime,
        endDate: req.body.endDate,
        endTime: req.body.endTime,
        meetingRoom: req.body.meetingRoom
      });
      req.flash('success', 'Meeting Room booking successfully submitted');
      res.redirect('/booking/meetingRoomForm');
    } catch (err) {
      sails.log.error('Failed to submit Meeting Room booking', err);
      req.flash('error', 'Failed to submit Meeting Room booking');
      res.redirect('/booking/meetingRoomForm');
    }
  },

  submitAppetizers: async function (req, res) {
    try {
      await Booking.create({
        employeeid: req.body.employeeid,
        startDate: req.body.startDate,
        startTime: req.body.startTime,
        endDate: req.body.endDate,
        endTime: req.body.endTime,
        meetingRoom: req.body.meetingRoom,
        snacks: req.body.snacks
      });
      req.flash('success', 'Refreshment Booking successfully submitted');
      res.redirect('/booking/appetizersForm');
    } catch (err) {
      sails.log.error('Failed to submit Refreshment Booking', err);
      req.flash('error', 'Failed to submit Refreshment Booking');
      res.redirect('/booking/appetizersForm');
    }
  },

  submitMeetingRoomCumAppetizers: async function (req, res) {
    try {
      await Booking.create({
        employeeid: req.body.employeeid,
        startDate: req.body.startDate,
        startTime: req.body.startTime,
        endDate: req.body.endDate,
        endTime: req.body.endTime,
        meetingRoom: req.body.meetingRoom,
        snacks: req.body.snacks,
        highTea: req.body.highTea,
        lunch: req.body.lunch
      });
      req.flash('success', 'Meeting room and refreshments successfully submitted');
      res.redirect('/booking/meetingRoomCumAppetizersForm');
    } catch (err) {
      sails.log.error('Failed to submit Meeting room and refreshments', err);
      req.flash('error', 'Failed to submit Meeting room and refreshments');
      res.redirect('/booking/meetingRoomCumAppetizersForm');
    }
  }
};
