const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController');
const locationController = require('./controllers/locationController');

router.get('/localites', locationController.locationList)
router.get('/localites/:id', locationController.location)

router.use(mainController.notFound);
router.use(mainController.errorServer);

module.exports = router;