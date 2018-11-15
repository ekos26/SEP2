const router = require('express').Router();
const { Student, Campus } = require('../db');

//get all campuses
router.get('/', async (req, res, next) => {
  try {
    const campuses = await Campus.findAll();
    res.json(campuses);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
