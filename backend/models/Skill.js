const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Skill name is required'],
    trim: true,
    unique: true,
    maxlength: [50, 'Skill name cannot be more than 50 characters'],
  },
  category: {
    type: String,
    required: [true, 'Skill category is required'],
    enum: ['Frontend', 'Backend', 'Database', 'DevOps', 'Tools', 'Other'],
  },
  proficiency: {
    type: Number,
    required: [true, 'Proficiency level is required'],
    min: [0, 'Proficiency cannot be less than 0'],
    max: [100, 'Proficiency cannot be more than 100'],
  },
  icon: {
    type: String,
    default: '⚡',
  },
  order: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

// Index for faster queries
skillSchema.index({ category: 1, order: 1 });

module.exports = mongoose.model('Skill', skillSchema);
