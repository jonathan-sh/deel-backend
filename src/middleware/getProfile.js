import {Profile} from '../model/index.js';

const getProfile = async (req, res, next) => {
    const { profile_id: id } = req.headers;
    const profile = await Profile.findOne({ where: { id }});
    if (!profile) return res.status(401);
    req.profile = profile.dataValues;
    next();
};

export { getProfile };
