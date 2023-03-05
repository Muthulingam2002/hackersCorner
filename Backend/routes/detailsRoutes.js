const router = require("express").Router();
const pool = require("../db.js");
const dotenv = require("dotenv").config();

router.post("/fetch", async (req, res) => {
    const { id } = req.body;
    const data = await pool.query("select * from users where id=$1", [id]);
    try {
        console.log(data.rows);
        res.json(data.rows);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post("/edit", async (req, res) => {
    const {
        id,
        avatar,
        leetcodeid,
        position,
        institution,
        description,
        skills,
    } = req.body;
    try {
        const data = await pool.query(
            "update users set leetcodeid=$1,avatar=$3,position=$4,institution=$5,description=$6,skills=$7 where id=$2 returning *",
            [leetcodeid, id, avatar, position, institution, description, skills]
        );
        console.log(data.rows);
        res.json(data.rows[0]);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
