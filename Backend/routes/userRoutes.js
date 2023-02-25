const router = require("express").Router();
const pool = require("../db.js");

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const data = await pool.query("select * from users where email=$1", [
            email,
        ]);
        console.log(data.rows);
        if (data.rows.length>0) {
            const savedPassword = await pool.query(
                "select password from users where email=$1",
                [email]
            );
            console.log(savedPassword.rows[0].password,password)
            res.send(password === savedPassword.rows[0].password);
        } else {
            res.json(data.rows);
        }
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    console.log(username);
    try {
        console.log(req.body, "inside");
        const data = await pool.query(
            "insert into users (name,email,password) values ($1,$2,$3) returning *",
            [username, email, password]
        );
        console.log(data);
        res.status(500).json(data);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
