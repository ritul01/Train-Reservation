const express = require('express');
const { getAvailableSeats, reserveSeats } = require('../controllers/seatController');
const router = express.Router();

router.get('/available', getAvailableSeats);
router.post('/reserve', reserveSeats);

module.exports = router;
