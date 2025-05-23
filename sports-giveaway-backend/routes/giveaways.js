const express = require('express');
const router = express.Router();
const Giveaway = require('../models/Giveaway');

router.post('/', async (req, res) => {
  const giveaway = new Giveaway(req.body);
  await giveaway.save();
  res.status(201).json(giveaway);
});

router.get('/', async (req, res) => {
  const giveaways = await Giveaway.find();
  res.json(giveaways);
});

module.exports = router;