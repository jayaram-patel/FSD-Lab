const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User');

router.get('/', async (req, res) => {
  try {
    const users = await User.find({}, '-password').sort({ createdAt: -1 });
    res.json(users);
  } catch (e) {
    res.status(500).json({ error: 'server_error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { username, password, email, bio, phone } = req.body;
    if (!username || !password || !email) {
      return res.status(400).json({ error: 'missing_fields' });
    }
    const existing = await User.findOne({ $or: [{ username }, { email }] });
    if (existing) {
      return res.status(409).json({ error: 'user_exists' });
    }
    const user = new User({ username, password, email, bio: bio || '', phone: phone || '' });
    await user.save();
    res.status(201).json(user.toSafeObject());
  } catch (e) {
    res.status(500).json({ error: 'server_error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) return res.status(400).json({ error: 'invalid_id' });
    const user = await User.findById(id, '-password');
    if (!user) return res.status(404).json({ error: 'not_found' });
    res.json(user);
  } catch (e) {
    res.status(500).json({ error: 'server_error' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) return res.status(400).json({ error: 'invalid_id' });
    const updates = {};
    const { bio, email, phone, password } = req.body;
    if (bio !== undefined) updates.bio = bio;
    if (email !== undefined) updates.email = email;
    if (phone !== undefined) updates.phone = phone;
    if (password) updates.password = password;

    let user = await User.findById(id);
    if (!user) return res.status(404).json({ error: 'not_found' });
    Object.assign(user, updates);
    await user.save();
    res.json(user.toSafeObject());
  } catch (e) {
    res.status(500).json({ error: 'server_error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) return res.status(400).json({ error: 'invalid_id' });
    const user = await User.findByIdAndDelete(id);
    if (!user) return res.status(404).json({ error: 'not_found' });
    res.json({ deleted: true });
  } catch (e) {
    res.status(500).json({ error: 'server_error' });
  }
});

module.exports = router;

