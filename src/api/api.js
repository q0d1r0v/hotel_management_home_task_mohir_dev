const express = require("express");

const {
  createRoom,
  deleteRoom,
  getRooms,
} = require("../services/rooms.service");
const {
  createGuest,
  getAllGuests,
  deleteGuest,
  getGuestsInRoomDuringPeriod,
} = require("../services/guests.service");
const {
  createReservations,
  updateReservations,
  deleteReservation,
  getReservations,
} = require("../services/reservations.service");

const api = express.Router();

api.post("/api/v1/create/room", createRoom);
api.get("/api/v1/get/rooms", getRooms);
api.delete("/api/v1/delete/room", deleteRoom);

api.post("/api/v1/create/guest", createGuest);
api.get("/api/v1/get/guests", getAllGuests);
api.get("/api/v1/get/guests-in-room", getGuestsInRoomDuringPeriod);
api.delete("/api/v1/delete/guest", deleteGuest);

api.post("/api/v1/create/reservations", createReservations);
api.get("/api/v1/get/reservations", getReservations);
api.put("/api/v1/update/reservations", updateReservations);
api.delete("/api/v1/delete/reservation", deleteReservation);

module.exports = {
  api,
};
