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
}