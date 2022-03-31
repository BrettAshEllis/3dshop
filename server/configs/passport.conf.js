const passport = require("passport");
const { Strategy } = require("passport-jwt");
const query = require("./mysql.conf")

const cookieJWTExtractor = (req) => {
    if (req && req.cookies) {
        return req.cookies.access_token;
    }
    return null;
};

const jwtOptions = {
    secretOrKey: process.env.SECRET_KEY,
    jwtFromRequest: cookieJWTExtractor,
};

passport.use(
    "jwt",
    new Strategy(jwtOptions, async function (jwt_payload, done) {
        try {
            if (!jwt_payload || !jwt_payload.id) {
                return done(null, false, "Bad credentials");
            }
            const [user] = await query(
                "SELECT id, username FROM users WHERE users.id = ?",
                [jwt_payload.id]
            );
            if (!user) {
                return done(null, false, "Bad creds bro");
            }
            return done(null, user);

        } catch (err) {
            return done(true, false, "Something broke, contact an admin")
        }
    })
);

module.exports = passport;