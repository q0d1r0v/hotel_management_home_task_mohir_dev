/**
 * @swagger
 * tags:
 *   name: Rooms
 *   description: API for managing hotel rooms
 */

/**
 * @swagger
 * /api/v1/rooms:
 *   get:
 *     tags: [Rooms]
 *     summary: Get all rooms
 *     description: Returns a list of all rooms in the hotel
 *     responses:
 *       200:
 *         description: List of all rooms
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: "e9a1234d-567f-1234-a345-b6789cdef012"
 *                       room_number:
 *                         type: string
 *                         example: "101"
 *                       room_type:
 *                         type: string
 *                         example: "Deluxe"
 *                       price_per_night:
 *                         type: number
 *                         example: 150
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-12-01T12:00:00Z"
 *                       updated_at:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-12-01T12:00:00Z"
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/v1/rooms:
 *   post:
 *     tags: [Rooms]
 *     summary: Create a new room
 *     description: Adds a new room to the hotel system
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - room_number
 *               - room_type
 *               - price_per_night
 *             properties:
 *               room_number:
 *                 type: string
 *                 example: "101"
 *               room_type:
 *                 type: string
 *                 example: "Deluxe"
 *               price_per_night:
 *                 type: number
 *                 example: 150
 *     responses:
 *       201:
 *         description: Room created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "e9a1234d-567f-1234-a345-b6789cdef012"
 *                     room_number:
 *                       type: string
 *                       example: "101"
 *                     room_type:
 *                       type: string
 *                       example: "Deluxe"
 *                     price_per_night:
 *                       type: number
 *                       example: 150
 *                     created_at:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-12-01T12:00:00Z"
 *                     updated_at:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-12-01T12:00:00Z"
 *       400:
 *         description: Bad Request (Missing required fields)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status_code:
 *                   type: integer
 *                   example: 400
 *                 message:
 *                   type: string
 *                   example: "Send please room_number, room_type, price_per_night!"
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/v1/rooms:
 *   get:
 *     tags: ['Rooms']
 *     summary: Get rooms within a specified date range or all rooms
 *     parameters:
 *       - in: query
 *         name: from_date
 *         description: The start date of the date range (YYYY-MM-DD)
 *         required: false
 *         schema:
 *           type: string
 *           example: "2024-12-01"
 *       - in: query
 *         name: to_date
 *         description: The end date of the date range (YYYY-MM-DD)
 *         required: false
 *         schema:
 *           type: string
 *           example: "2024-12-31"
 *     responses:
 *       200:
 *         description: List of rooms within the specified date range or all rooms
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         description: Unique ID of the room
 *                         example: "123e4567-e89b-12d3-a456-426614174000"
 *                       room_number:
 *                         type: string
 *                         description: Room number
 *                         example: "101"
 *                       room_type:
 *                         type: string
 *                         description: Type of the room
 *                         example: "Single"
 *                       price_per_night:
 *                         type: number
 *                         format: float
 *                         description: Price per night for the room
 *                         example: 100.00
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *                         description: The creation date of the room
 *                         example: "2024-11-01T12:00:00Z"
 *       404:
 *         description: No rooms found within the specified date range
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string
 *                   example: "No rooms found within the specified date range"
 *                 data:
 *                   type: array
 *                   items: []
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status_code:
 *                   type: integer
 *                   example: 500
 *                 message:
 *                   type: string
 *                   example: "Internal server error!"
 */

/**
 * @swagger
 * /api/v1/rooms:
 *   delete:
 *     tags: [Rooms]
 *     summary: Delete a room by ID
 *     description: Deletes a room by its unique ID
 *     parameters:
 *       - in: query
 *         name: room_id
 *         required: true
 *         schema:
 *           type: string
 *           example: "e9a1234d-567f-1234-a345-b6789cdef012"
 *     responses:
 *       200:
 *         description: Room deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 message:
 *                   type: string
 *                   example: "Room with ID e9a1234d-567f-1234-a345-b6789cdef012 has been deleted"
 *       404:
 *         description: Room not found
 *       500:
 *         description: Internal Server Error
 */

const { v4: uuidv4 } = require("uuid");
const { query } = require("../database/db");

const getRooms = async (req, res) => {
  try {
    const { from_date, to_date } = req.query;
    if (from_date && to_date) {
      const result = await query(
        "select * from rooms where created_at between $1 and $2",
        [from_date, to_date]
      );
      if (result.rowCount > 0) {
        res.status(200).json({
          status: "success",
          data: result.rows,
        });
      } else {
        res.status(404).json({
          status: "error",
          message: "No rooms found within the specified date range",
          data: [],
        });
      }
    } else {
      const result = await query("select * from rooms");
      res.status(200).json({
        status: "success",
        data: result.rows,
      });
    }
  } catch (err) {
    res.status(500).send({
      status_code: 500,
      message: "Internal server error!",
    });
  }
};
const deleteRoom = async (req, res) => {
  try {
    const { room_id } = req.query;
    const result = await query("delete from rooms where id = $1 returning *", [
      room_id,
    ]);

    if (result.rowCount > 0) {
      res.status(200).json({
        status: "success",
        message: `Room with ID ${room_id} has been deleted`,
      });
    } else {
      res.status(404).json({
        status: "error",
        message: `Room with ID ${room_id} not found`,
      });
    }
  } catch (err) {
    res.status(500).send({
      status_code: 500,
      message: "Internal server error!",
    });
  }
};
const createRoom = async (req, res) => {
  try {
    const { room_number, room_type, price_per_night } = req.body;

    if (room_number && room_type && price_per_night) {
      const rooms = await query(
        "insert into rooms(id, room_number, room_type, price_per_night) values ($1, $2, $3, $4 ) returning *",
        [uuidv4(), room_number, room_type, price_per_night]
      );
      res.status(201).send({
        data: rooms.rows[0],
      });
    } else {
      res.status(400).send({
        status_code: 400,
        message: "Send please room_number, room_type, price_per_night !",
      });
    }
  } catch (err) {
    res.status(500).send({
      status_code: 500,
      message: "Internal server error!",
    });
  }
};

module.exports = {
  getRooms,
  createRoom,
  deleteRoom,
};
