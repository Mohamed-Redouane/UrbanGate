import User from '../models/users.js';

export default async function updateBroker(req, res) {
    try {
        const user = await User.findById(req.body.userID);
        if (!user) {return res.status(500).json({popup: "Not signed in"})}
        const email = req.body.email;
        const emailAlreadyThere =  await User.findOne({email});
        if (user.email===req.body.email) {
            if (user.name === req.body.name && user.password === req.body.password) {
                return res.status(500).json({popup: "Nothing changed"})
            }
            user.name = req.body.name;
            user.email = req.body.email;
            user.password = req.body.password;
            await user.save();
            return res.status(200).json({popup: "Update Success"});
        }
        if (emailAlreadyThere) {return res.status(500).json({popup: "Email already in use"});}
        user.name = req.body.name;
        user.email = req.body.email;
        user.password = req.body.password;
        await user.save();
        return res.status(200).json({popup: "Update Success"});
    }
    catch (err) {
        return res.status(500).json(err);
    }
}