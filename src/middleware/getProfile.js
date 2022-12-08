import {Profile} from '../model/index.js';

const getProfile = async (req, res, next) => {
    const id  = req.headers['profile_id'] || 0;
    const profile = await Profile.findOne({ where: { id }});
    if (!profile) return res.status(401);
    req.profile = profile.dataValues;
    next();
};

export { getProfile };
