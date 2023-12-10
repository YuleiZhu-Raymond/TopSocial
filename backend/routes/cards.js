const express = require('express');
const { getCardById, postCard, deleteCardById } = require('../controllers/cardsController');

const cardsRouter = express.Router();

//GET /api/cards?id=1 get card by id
cardsRouter.get('/', getCardById);
//POST /api/cards post a card
cardsRouter.post('/', postCard);
//DELETE /api/cards/:card_id delete a card
cardsRouter.delete('/:card_id', deleteCardById);
module.exports = cardsRouter;