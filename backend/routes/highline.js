const express = require('express');
const {getHighline} = require('../controllers/highlineController');
const highlineRouter = express.Router();

module.exports = highlineRouter;
highlineRouter.get('/', getHighline)

module.exports = highlineRouter;