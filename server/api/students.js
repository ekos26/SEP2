const router = require('express').Router();
const { Student, Campus } = require('../db');

//get all students
router.get('/', async (req, res, next) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    next(error);
  }
});

router.get('/:studentId', async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.studentId, {
      include: [{ model: Campus }],
    });
    res.json(student);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
