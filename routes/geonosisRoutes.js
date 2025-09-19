const express = require('express');
const router = express.Router();
const geonosisController = require('../controllers/geonosisController');

// GET /guild/:id
router.get('/:guildId/geonosiansOver6', geonosisController.getNumberOfGeoOver6Stars);
router.get('/:guildId/dookuAndAsajjOver6And16k5', geonosisController.getNumberOfDookuAndAsajjOver6StarAnd16k5GP);
router.get('/:guildId/grievousTeamAt7Stars', geonosisController.getGGTeamAt7Stars);
router.get('/:guildId/dookuAndTeamOver7And16K5', geonosisController.getDookuAndTeamOver7And16K5);

module.exports = router;
