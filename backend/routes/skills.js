const express = require('express');
const router = express.Router();
const Skill = require('../models/Skill');

// @route   GET /api/skills
// @desc    Get all skills
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    const query = category ? { category } : {};

    const skills = await Skill.find(query).sort({ category: 1, order: 1 });

    res.json(skills);
  } catch (error) {
    console.error('Error fetching skills:', error);
    res.status(500).json({ message: 'Server error while fetching skills' });
  }
});

// @route   GET /api/skills/:id
// @desc    Get skill by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);

    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }

    res.json(skill);
  } catch (error) {
    console.error('Error fetching skill:', error);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Skill not found' });
    }
    res.status(500).json({ message: 'Server error while fetching skill' });
  }
});

// @route   POST /api/skills
// @desc    Create a new skill
// @access  Private (add authentication middleware in production)
router.post('/', async (req, res) => {
  try {
    const skill = new Skill(req.body);
    await skill.save();
    res.status(201).json(skill);
  } catch (error) {
    console.error('Error creating skill:', error);
    if (error.name === 'ValidationError') {
      return res.status(400).json({ 
        message: 'Validation error', 
        errors: Object.values(error.errors).map(e => e.message) 
      });
    }
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Skill already exists' });
    }
    res.status(500).json({ message: 'Server error while creating skill' });
  }
});

// @route   PUT /api/skills/:id
// @desc    Update a skill
// @access  Private (add authentication middleware in production)
router.put('/:id', async (req, res) => {
  try {
    const skill = await Skill.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }

    res.json(skill);
  } catch (error) {
    console.error('Error updating skill:', error);
    if (error.name === 'ValidationError') {
      return res.status(400).json({ 
        message: 'Validation error', 
        errors: Object.values(error.errors).map(e => e.message) 
      });
    }
    res.status(500).json({ message: 'Server error while updating skill' });
  }
});

// @route   DELETE /api/skills/:id
// @desc    Delete a skill
// @access  Private (add authentication middleware in production)
router.delete('/:id', async (req, res) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);

    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }

    res.json({ message: 'Skill deleted successfully' });
  } catch (error) {
    console.error('Error deleting skill:', error);
    res.status(500).json({ message: 'Server error while deleting skill' });
  }
});

module.exports = router;
