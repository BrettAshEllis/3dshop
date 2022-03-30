const query = require("../configs/mysql.conf");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

async function login(res, username, password) {
    try {
        const [user] = await query("SELECT * FROM users WHERE users.username = ?", [username,]);
        if (!user) {
            return res.send({
                data: null,
                success: false,
                error: "Invalid Uname or Pword",
            });
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.send({
                data: null,
                success: false,
                error: "Invalid Uname or Pword",
            });
        }
        const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY);
        return res.cookie("access_token", token, {
            httpOnly: true,
        })
            .send({
                data: { username: user.username },
                success: true,
                error: null,
            });
    } catch (err) {
        return res.send({
            data: null,
            success: true,
            error: "Something went wrong",
        });
    }
}

