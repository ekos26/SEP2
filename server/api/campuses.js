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

router.get('/:campusId', async (req, res, next) => {
  try {
    const campus = await Campus.findById(req.params.campusId, {
      include: [{ model: Student }],
    });
    res.json(campus);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
