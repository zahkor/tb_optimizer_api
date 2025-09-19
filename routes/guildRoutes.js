const express = require('express');
const router = express.Router();
const guildController = require('../controllers/guildController');
const memberRoutes = require('./membersRoutes');

// GET /guild/:id
router.get('/:id', guildController.getGuildById);

// GET /guild/:id/stats
router.get('/:id/galacticpower', guildController.getGalacticPowerStats);

router.get('/:id/name', guildController.getGuildNameById);

router.use('/:id/members', memberRoutes);

module.exports = router;
