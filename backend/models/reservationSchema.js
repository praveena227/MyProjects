import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must contain at least 3 characters!"],
        maxLength: [30, "First name must not exceed 30 characters!"],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last name must contain at least 3 characters!"],
        maxLength: [30, "Last name must not exceed 30 characters!"],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid Email"],
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, "Phone number must contain only 10 digits!"],
        maxLength: [10, "Phone number must contain only 10 digits!"],
    },
    time: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/.test(value); // Ensures HH:MM format
            },
            message: "Invalid time format! Use HH:MM (24-hour clock).",
        },
    },
    date: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return /^\d{4}-\d{2}-\d{2}$/.test(value); // Ensures ISO date format (YYYY-MM-DD)
            },
            message: "Invalid date format! Use YYYY-MM-DD.",
        },
    },
    preference: {
        type: String,
        required: true,
    },
    members: {
        type: String,
        required: true,
    },
    notes: {
        type: String,
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
