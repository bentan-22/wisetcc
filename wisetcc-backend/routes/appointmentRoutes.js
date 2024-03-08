const express = require('express');
const router = express.Router();
const { createAppointment } = require('../controllers/appointmentController');

router.post('/', createAppointment);

module.exports = router;