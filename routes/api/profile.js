const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route GET api/profile/me
// @desc Get current user profile
// @access Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await await Profile.findOne({
      user: req.user.id,
    }).populate('user', ['name', 'avatar']);
    if (!profile) {
      return res.status(400).json({
        msg: 'Profile does not exisist',
      });
    }
    res.send(profile);
  } catch (error) {
    console.error(error);
    res.status(400).send('Server error');
  }
});

module.exports = router;
