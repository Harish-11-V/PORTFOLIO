const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Contact = require('../models/Contact');
const { sendEmail } = require('../config/email');

// @route   POST /api/contact
// @desc    Submit contact form
// @access  Public
router.post(
  '/',
  [
    body('name')
      .trim()
      .notEmpty()
      .withMessage('Name is required')
      .isLength({ max: 100 })
      .withMessage('Name cannot be more than 100 characters'),
    body('email')
      .trim()
      .notEmpty()
      .withMessage('Email is required')
      .isEmail()
      .withMessage('Please provide a valid email address'),
    body('message')
      .trim()
      .notEmpty()
      .withMessage('Message is required')
      .isLength({ max: 1000 })
      .withMessage('Message cannot be more than 1000 characters'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        message: 'Validation error', 
        errors: errors.array().map(e => e.msg) 
      });
    }

    try {
      const { name, email, message } = req.body;
      
      // Save to database
      const contact = new Contact({
        name,
        email,
        message,
        ipAddress: req.ip || req.connection.remoteAddress,
      });

      await contact.save();

      // Send email notification
      try {
        await sendEmail({ name, email, message });
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Continue even if email fails - message is saved in DB
      }

      res.status(201).json({ 
        message: 'Thank you for your message! I will get back to you soon.',
        id: contact._id 
      });
    } catch (error) {
      console.error('Error processing contact form:', error);
      res.status(500).json({ message: 'Server error while processing your message' });
    }
  }
);

// @route   GET /api/contact
// @desc    Get all contact messages
// @access  Private (add authentication middleware in production)
router.get('/', async (req, res) => {
  try {
    const { status } = req.query;
    const query = status ? { status } : {};

    const contacts = await Contact.find(query).sort({ createdAt: -1 });

    res.json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ message: 'Server error while fetching messages' });
  }
});

// @route   PUT /api/contact/:id/status
// @desc    Update contact message status
// @access  Private (add authentication middleware in production)
router.put('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;

    if (!['new', 'read', 'replied'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status value' });
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!contact) {
      return res.status(404).json({ message: 'Contact message not found' });
    }

    res.json(contact);
  } catch (error) {
    console.error('Error updating contact status:', error);
    res.status(500).json({ message: 'Server error while updating status' });
  }
});

// @route   DELETE /api/contact/:id
// @desc    Delete a contact message
// @access  Private (add authentication middleware in production)
router.delete('/:id', async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({ message: 'Contact message not found' });
    }

    res.json({ message: 'Contact message deleted successfully' });
  } catch (error) {
    console.error('Error deleting contact:', error);
    res.status(500).json({ message: 'Server error while deleting message' });
  }
});

module.exports = router;
