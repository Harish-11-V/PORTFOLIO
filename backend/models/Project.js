const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters'],
  },
  description: {
    type: String,
    required: [true, 'Project description is required'],
    maxlength: [500, 'Description cannot be more than 500 characters'],
  },
  technologies: [{
    type: String,
    required: true,
  }],
  githubUrl: {
    type: String,
    validate: {
      validator: function(v) {
        return !v || /^https?:\/\/.+/.test(v);
      },
      message: 'Please provide a valid URL',
    },
  },
  liveUrl: {
    type: String,
    validate: {
      validator: function(v) {
        return !v || /^https?:\/\/.+/.test(v);
      },
      message: 'Please provide a valid URL',
    },
  },
  category: {
    type: String,
    enum: ['fullstack', 'frontend', 'backend', 'mobile', 'other'],
    default: 'other',
  },
  featured: {
    type: Boolean,
    default: false,
  },
  imageUrl: {
    type: String,
  },
  order: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

// Index for faster queries
projectSchema.index({ category: 1, featured: -1, order: 1 });

module.exports = mongoose.model('Project', projectSchema);
