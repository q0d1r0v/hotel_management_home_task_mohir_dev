/**
 * @swagger
 * /api/v1/reservations:
 *   post:
 *     tags: ['Reservations Service']
 *     summary: Create a new reservation
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               guest_id:
 *                 type: string
 *                 description: The guest ID for the reservation
 *                 example: "123e4567-e89b-12d3-a456-426614174000"
 *               room_id:
 *                 type: string
 *                 description: The room ID for the reservation
 *                 example: "101"
 *               check_in_date:
 *                 type: string
 *                 format: date
 *                 description: The check-in date for the reservation
 *                 example: "2024-01-01"
 *               check_out_date:
 *                 type: string
 *                 format: date
 *                 description: The check-out date for the reservation
 *                 example: "2024-01-07"
 *               status:
 *                 type: string
 *                 description: The status of the reservation (e.g., "confirmed", "pending")
 *                 example: "confirmed"
 *     responses:
 *       201:
 *         description: Reservation created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       description: Reservation ID
 *                       example: "123e4567-e89b-12d3-a456-426614174001"
 *                     guest_id:
 *                       type: string
 *                       description: Guest ID
 *                       example: "123e4567-e89b-12d3-a456-426614174000"
 *                     room_id:
 *                       type: string
 *                       description: Room ID
 *                       example: "101"
 *                     check_in_date:
 *                       type: string
 *                       format: date
 *                       description: Check-in date
 *                       example: "2024-01-01"
 *                     check_out_date:
 *                       type: string
 *                       format: date
 *                       description: Check-out date
 *                       example: "2024-01-07"
 *                     status:
 *                       type: string
 *                       description: Status of the reservation
 *                       example: "confirmed"
 *       400:
 *         description: Bad request. Missing required fields
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
 *                   example: "Send please guest_id, room_id, check_in_date, check_out_date, status!"
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
 * /api/v1/reservations:
 *   put:
 *     tags: ['Reservations Service']
 *     summary: Update an existing reservation
 *     parameters:
 *       - in: query
 *         name: reservation_id
 *         description: The reservation ID to update
 *         required: true
 *         schema:
 *           type: string
 *           example: "123e4567-e89b-12d3-a456-426614174001"
 *       - in: query
 *         name: guest_id
 *         description: The guest ID for the reservation
 *         required: true
 *         schema:
 *           type: string
 *           example: "123e4567-e89b-12d3-a456-426614174000"
 *       - in: query
 *         name: room_id
 *         description: The room ID for the reservation
 *         required: true
 *         schema:
 *           type: string
 *           example: "101"
 *       - in: query
 *         name: check_in_date
 *         description: The check-in date for the reservation
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *           example: "2024-01-01"
 *       - in: query
 *         name: check_out_date
 *         description: The check-out date for the reservation
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *           example: "2024-01-07"
 *       - in: query
 *         name: status
 *         description: The status of the reservation
 *         required: true
 *         schema:
 *           type: string
 *           example: "confirmed"
 *     responses:
 *       200:
 *         description: Reservation updated successfully
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
 *                   example: "Reservation with ID 123e4567-e89b-12d3-a456-426614174001 has been updated"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "123e4567-e89b-12d3-a456-426614174001"
 *                     guest_id:
 *                       type: string
 *                       example: "123e4567-e89b-12d3-a456-426614174000"
 *                     room_id:
 *                       type: string
 *                       example: "101"
 *                     check_in_date:
 *                       type: string
 *                       format: date
 *                       example: "2024-01-01"
 *                     check_out_date:
 *                       type: string
 *                       format: date
 *                       example: "2024-01-07"
 *                     status:
 *                       type: string
 *                       example: "confirmed"
 *       400:
 *         description: Bad request. Missing required fields
 *       404:
 *         description: Reservation not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/reservations:
 *   delete:
 *     tags: ['Reservations Service']
 *     summary: Delete a reservation
 *     parameters:
 *       - in: query
 *         name: reservation_id
 *         description: The reservation ID to delete
 *         required: true
 *         schema:
 *           type: string
 *           example: "123e4567-e89b-12d3-a456-426614174001"
 *     responses:
 *       200:
 *         description: Reservation deleted successfully
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
 *                   example: "Reservation with ID 123e4567-e89b-12d3-a456-426614174001 has been deleted"
 *       404:
 *         description: Reservation not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/reservations:
 *   get:
 *     tags: ['Reservations Service']
 *     summary: Get reservations within a specific date range
 *     parameters:
 *       - in: query
 *         name: from_date
 *         description: The start date of the period to filter reservations by
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *           example: "2024-01-01"
 *       - in: query
 *         name: to_date
 *         description: The end date of the period to filter reservations by
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *           example: "2024-12-31"
 *     responses:
 *       200:
 *         description: Reservations found for the specified date range
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
 *                         example: "123e4567-e89b-12d3-a456-426614174001"
 *                       guest_id:
 *                         type: string
 *                         example: "123e4567-e89b-12d3-a456-426614174000"
 *                       room_id:
 *                         type: string
 *                         example: "101"
 *                       check_in_date:
 *                         type: string
 *                         format: date
 *                         example: "2024-01-01"
 *                       check_out_date:
 *                         type: string
 *                         format: date
 *                         example: "2024-01-07"
 *                       status:
 *                         type: string
 *                         example: "confirmed"
 *       404:
 *         description: No reservations found for the specified date range
 *       500:
 *         description: Internal server error
 */
const { query } = require("../database/db");
const { v4: uuidv4 } = require("uuid");

const createReservations = async (req, res) => {
  try {
    const { guest_id, room_id, check_in_date, check_out_date, status } =
      req.body;

    if (guest_id && room_id && check_in_date && check_out_date && status) {
      const reservations = await query(
        "insert into reservations(id, guest_id, room_id, check_in_date, check_out_date, status) values ($1, $2, $3, $4, $5, $6  ) returning *",
        [uuidv4(), guest_id, room_id, check_in_date, check_out_date, status]
      );
      res.status(201).send({
        data: reservations.rows[0],
      });
    } else {
      res.status(400).send({
        status_code: 400,
        message:
          "Send please guest_id, room_id, check_in_date, check_out_date, status !",
      });
    }
  } catch (err) {
    res.status(500).send({
      status_code: 500,
      message: "Internal server error!",
    });
  }
};

const updateReservations = async (req, res) => {
  try {
    const {
      reservation_id,
      guest_id,
      room_id,
      check_in_date,
      check_out_date,
      status,
    } = req.query;

    if (
      guest_id &&
      room_id &&
      check_in_date &&
      check_out_date &&
      status &&
      reservation_id
    ) {
      const result = await query(
        "update reservations set guest_id = $1, room_id = $2, check_in_date = $3, check_out_date = $4, status = $5 where id = $6 returning *",
        [
          guest_id,
          room_id,
          check_in_date,
          check_out_date,
          status,
          reservation_id,
        ]
      );
      if (result.rowCount > 0) {
        res.status(200).json({
          status: "success",
          message: `Reservation with ID ${reservation_id} has been updated`,
          data: result.rows[0],
        });
      } else {
        res.status(404).json({
          status: "error",
          message: `Reservation with ID ${reservation_id} not found`,
        });
      }
    } else {
      res.status(400).send({
        status_code: 400,
        message:
          "Send please reservation_id, guest_id, room_id, check_in_date, check_out_date, status !",
      });
    }
  } catch (err) {
    res.status(500).send({
      status_code: 500,
      message: "Internal server error!",
    });
  }
};
const deleteReservation = async (req, res) => {
  try {
    const { reservation_id } = req.query;
    const result = await query(
      "delete from reservations where id = $1 returning *",
      [reservation_id]
    );

    if (result.rowCount > 0) {
      res.status(200).json({
        status: "success",
        message: `Reservation with ID ${reservation_id} has been deleted`,
      });
    } else {
      res.status(404).json({
        status: "error",
        message: `Reservation with ID ${reservation_id} not found`,
      });
    }
  } catch (err) {
    res.status(500).send({
      status_code: 500,
      message: "Internal server error!",
    });
  }
};
const getReservations = async (req, res) => {
  try {
    const { from_date, to_date } = req.query;
    const result = await query(
      "select * from reservations where check_in_date between $1 and $2",
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
        message: "No reservations found within the specified date range",
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
  createReservations,
  updateReservations,
  deleteReservation,
  getReservations,
};
