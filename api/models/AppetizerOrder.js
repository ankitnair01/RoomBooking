// api/models/AppetizerOrder.js

module.exports = {
  attributes: {
    id: {
      type: 'number',
      autoIncrement: true,
      columnName: 'id',
      unique: true,
      isInteger: true,
    },
    orderName: {
      type: 'string',
      required: true,
    },
    quantity: {
      type: 'number',
      required: true,
    },
    notes: {
      type: 'string',
      allowNull: true,
    },
    booking: {
      model: 'booking', // Reference to the Booking model if applicable
      required: true,
    },
    status: {
      type: 'string',
      defaultsTo: 'Pending', // Status can be 'Pending', 'Approved', 'Denied'
    },
  },
  primaryKey: 'id', // Define the primary key
};
