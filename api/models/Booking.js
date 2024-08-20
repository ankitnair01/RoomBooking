// api/models/Booking.js

module.exports = {
  attributes: {
    id: {
      type: 'number',
      autoIncrement: true,
      columnName: 'id',
      unique: true,
      isInteger: true,
    },
    employeeid: {
      type: 'number',
      required: true,
    },
    startDate: {
      type: 'string',
      columnType: 'date',
      required: true,
    },
    startTime: {
      type: 'string',
      required: true,
    },
    endDate: {
      type: 'string',
      columnType: 'date',
      required: true,
    },
    endTime: {
      type: 'string',
      required: true,
    },
    preferredFloor: {
      type: 'string',
      required: true,
    },
    preferredRoom: {
      type: 'string',
      required: true,
    },
    snacks: {
      type: 'json',
      defaultsTo: [],
    },
    highTea: {
      type: 'json',
      defaultsTo: [],
    },
    lunch: {
      type: 'json',
      defaultsTo: [],
    },
    meetingRoom: {
      type: 'string',
      allowNull: true,
    },
    status: {
      type: 'string',
      defaultsTo: 'Pending', // Status can be 'Pending', 'Approved', 'Denied'
    },
  },
  primaryKey: 'id', // Define the primary key
};
