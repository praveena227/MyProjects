import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

const send_reservation = async (req, res, next) => {
  const { firstName, lastName, email, date, time, phone, preference, members, notes } = req.body;

  if (!firstName || !lastName || !email || !date || !time || !phone || !preference || !members || !notes) {
    return next(new ErrorHandler("Please Fill Full Reservation Form!", 400));
  }

  try {
    const today = new Date();
    const reservationDate = new Date(date);
    
    // Check if the date is in the past
    if (reservationDate < today.setHours(0, 0, 0, 0)) {
      return next(new ErrorHandler("Cannot book for past dates!", 400));
    }

    // Check for valid time slots
    const [hours, minutes] = time.split(":").map(Number);

    // If booking for the present date
    if (reservationDate.toDateString() === today.toDateString()) {
      const currentHours = today.getHours();
      const currentMinutes = today.getMinutes();

      // Reject if time is earlier than the current time
      if (hours < currentHours || (hours === currentHours && minutes <= currentMinutes)) {
        return next(new ErrorHandler("Cannot book for a past or already completed time today!", 400));
      }
    }

    // Ensure time is within the valid booking range (06:00 to 23:00)
    if (hours < 6 || hours > 23 || (hours === 23 && minutes > 0)) {
      return next(new ErrorHandler("Invalid time slot! Bookings are allowed only between 06:00 and 23:00.", 400));
    }

    // Save reservation to the database
    await Reservation.create({ firstName, lastName, email, date, time, phone, preference, members, notes });

    res.status(201).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });
  } catch (error) {
    // Handle Mongoose validation errors
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(", "), 400));
    }

    // Handle other errors
    return next(error);
  }
};

export default send_reservation;
