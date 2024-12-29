const pool = require('../models/db');

const getAvailableSeats = async (req, res) => {
  const seats = await pool.query('SELECT * FROM seats WHERE is_reserved = FALSE');
  res.json(seats.rows);
};

const reserveSeats = async (req, res) => {
  const { seatCount } = req.body;
  const seats = await pool.query('SELECT * FROM seats WHERE is_reserved = FALSE LIMIT $1', [seatCount]);
  if (seats.rows.length < seatCount) {
    return res.status(400).json({ error: 'Not enough seats available' });
  }

  for (let seat of seats.rows) {
    await pool.query('UPDATE seats SET is_reserved = TRUE WHERE id = $1', [seat.id]);
  }
  res.json({ message: 'Seats reserved successfully', reservedSeats: seats.rows });
};

module.exports = { getAvailableSeats, reserveSeats };
