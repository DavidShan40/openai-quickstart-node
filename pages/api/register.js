const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);
const User = mongoose.model("users", {
    email: { type: String },
    password: { type: String },
});
export default async function (req, res) {
    const email = req.body.email || '';
    const password = req.body.password || '';
    if (email.trim().length === 0 || password.trim().length === 0) {
        res.status(400).json({
            error: {
                message: "Please enter a valid email and password",
            }
        });
        return;
    }
    // Creating a new dummy user document
    const newUser = new User({
        email,
        password,
    });
    // Saving the user to the database
    const user = await newUser.save();
    user.password = undefined;
    res.status(200).json({ result: user });
}