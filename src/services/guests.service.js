/**
 * @swagger
 * tags:
 *   name: Guests
 *   description: API for managing hotel guests
 */

/**
 * @swagger
 * /api/v1/guests-in-room:
 *   get:
 *     tags: ['Guests']
 *     summary: Get all guests who stayed in a specific room during a given period
 *     parameters:
 *       - in: query
 *         name: room_number
 *         description: The room number to filter guests by
 *         required: true
 *         schema:
 *           type: string
 *           example: "101"
 *       - in: query
 *         name: from_date
 *         description: The start date of the period to filter guests by
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *           example: "2024-01-01"
 *       - in: query
 *         name: to_date
 *         description: The end date of the period to filter guests by
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *           example: "2024-12-31"
 *     responses:
 *       200:
 *         description: Guests found for the specified room and date range
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
 *                       guest_id:
 *                         type: string
 *                         description: The unique ID of the guest
 *                         example: "123e4567-e89b-12d3-a456-426614174000"
 *                       name:
 *                         type: string
 *                         description: The name of the guest
 *                         example: "John Doe"
 *                       contact_info:
 *                         type: object
 *                         description: The contact information of the guest
 *                         example: { "phone": "1234567890", "email": "john@example.com" }
 *                       room_number:
 *                         type: string
 *                         description: The room number where the guest stayed
 *                         example: "101"
 *                       room_type:
 *                         type: string
 *                         description: The type of the room
 *                         example: "Single"
 *                       check_in_date:
 *                         type: string
 *                         format: date
 *                         description: The check-in date of the guest
 *                         example: "2024-01-01"
 *                       check_out_date:
 *                         type: string
 *                         format: date
 *                         description: The check-out date of the guest
 *                         example: "2024-01-07"
 *       400:
 *         description: Bad request. Missing required query parameters (room_number, from_date, to_date).
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
 *                   example: "Please send room_number, from_date and to_date!"
 *       404:
 *         description: No guests found for the specified room and date range
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
 *                   example: "No guests found for the specified room and date range"
 *                 data:
 *                   type: array
 *                   items: {}
 *                   example: []
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
 * /api/v1/guests:
 *   get:
 *     tags: [Guests]
 *     summary: Get all guests
 *     description: Returns a list of all guests in the hotel
 *     responses:
 *       200:
 *         description: List of all guests
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
 *                       name:
 *                         type: string
 *                         example: "John Doe"
 *                       contact_info:
 *                         type: object
 *                         properties:
 *                           phone:
 *                             type: string
 *                             example: "+998901234567"
 *                           email:
 *                             type: string
 *                             example: "johndoe@example.com"
 *                           address:
 *                             type: string
 *                             example: "Tashkent, Uzbekistan"
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
 * /api/v1/guests:
 *   post:
 *     tags: [Guests]
 *     summary: Create a new guest
 *     description: Adds a new guest to the hotel system
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - contact_info
 *             properties:
 *               name:
 *                 type: string
 *                 example: "John Doe"
 *               contact_info:
 *                 type: object
 *                 required:
 *                   - phone
 *                   - email
 *                   - address
 *                 properties:
 *                   phone:
 *                     type: string
 *                     example: "+998901234567"
 *                   email:
 *                     type: string
 *                     example: "johndoe@example.com"
 *                   address:
 *                     type: string
 *                     example: "Tashkent, Uzbekistan"
 *     responses:
 *       201:
 *         description: Guest created successfully
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
 *                     name:
 *                       type: string
 *                       example: "John Doe"
 *                     contact_info:
 *                       type: object
 *                       properties:
 *                         phone:
 *                           type: string
 *                           example: "+998901234567"
 *                         email:
 *                           type: string
 *                           example: "johndoe@example.com"
 *                         address:
 *                           type: string
 *                           example: "Tashkent, Uzbekistan"
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
 *                   example: "Send please name, contact_info!"
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/v1/guests:
 *   delete:
 *     tags: [Guests]
 *     summary: Delete a guest by ID
 *     description: Deletes a guest by their unique ID
 *     parameters:
 *       - in: query
 *         name: guest_id
 *         required: true
 *         schema:
 *           type: string
 *           example: "e9a1234d-567f-1234-a345-b6789cdef012"
 *     responses:
 *       200:
 *         description: Guest deleted successfully
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
 *                   example: "Guest with ID e9a1234d-567f-1234-a345-b6789cdef012 has been deleted"
 *       404:
 *         description: Guest not found
 *       500:
 *         description: Internal Server Error
 */

const { v4: uuidv4 } = require("uuid");
const { query } = require("../database/db");

const getAllGuests = async (req, res) => {
  const guests = await query("select * from guests");
  res.send({
    data: guests.rows,
  });
};
const getGuestsInRoomDuringPeriod = async (req, res) => {
  try {
    const { room_number, from_date, to_date } = req.query;

    if (!room_number || !from_date || !to_date) {
      return res.status(400).json({
        status: "error",
        message: "Please send room_number, from_date and to_date !",
      });
    }
    const result = await query(
      `SELECT g.id AS guest_id, g.name, g.contact_info, r.room_number, r.room_type, res.check_in_date, res.check_out_date
              FROM reservations res
              JOIN guests g ON res.guest_id = g.id
              JOIN rooms r ON res.room_id = r.id
              WHERE r.room_number = $1
              AND (res.check_in_date BETWEEN $2 AND $3 OR res.check_out_date BETWEEN $2 AND $3)`,
      [room_number, from_date, to_date]
    );
    if (result.rowCount > 0) {
      res.status(200).json({
        status: "success",
        data: result.rows,
      });
    } else {
      res.status(404).json({
        status: "error",
        message: "No guests found for the specified room and date range",
        data: [],
      });
    }
  } catch (err) {
    res.status(500).send({
      status_code: 500,
      message: "Internal server error!",
    });
  }
};
const deleteGuest = async (req, res) => {
  try {
    const { guest_id } = req.query;
    const result = await query("delete from guests where id = $1 returning *", [
      guest_id,
    ]);

    if (result.rowCount > 0) {
      res.status(200).json({
        status: "success",
        message: `Guest with ID ${guest_id} has been deleted`,
      });
    } else {
      res.status(404).json({
        status: "error",
        message: `Guest with ID ${guest_id} not found`,
      });
    }
  } catch (err) {
    res.status(500).send({
      status_code: 500,
      message: "Internal server error!",
    });
  }
};
const createGuest = async (req, res) => {
  try {
    const { name, contact_info } = req.body;

    if (name && contact_info) {
      const rooms = await query(
        "insert into guests(id, name, contact_info) values ($1, $2, $3 ) returning *",
        [uuidv4(), name, contact_info]
      );
      res.status(201).send({
        data: rooms.rows[0],
      });
    } else {
      res.status(400).send({
        status_code: 400,
        message: "Send please name, contact_info !",
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
  getAllGuests,
  createGuest,
  deleteGuest,
  getGuestsInRoomDuringPeriod,
};
