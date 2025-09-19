const express = require('express');
const router = express.Router({ mergeParams: true });
const memberController = require('../controllers/membersController');

router.get('/', memberController.getMembers);

module.exports = router;
