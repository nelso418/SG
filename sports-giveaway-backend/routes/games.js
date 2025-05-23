const express = require('express');
const router = express.Router();
const Game = require('../models/Game');

router.get('/', async (req, res) => {
  const { date, team, league } = req.query;
  let query = {};
  if (date) query.date = new Date(date);
  if (team) query.$or = [{ homeTeam: team }, { awayTeam: team }];
  if (league) query.league = league;
  const games = await Game.find(query).populate('giveaway');
  res.json(games);
});

module.exports = router;