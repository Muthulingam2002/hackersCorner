const router = require("express").Router();
const pool = require("../db.js");

router.get("/fetchPost", async (req, res) => {
    try {
        const data = await pool.query("select * from posts ");
        console.log(data);
        res.json({
            data: data.rows,
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post("/addPost", async (req, res) => {
    const { user_id, name, avatar, image, caption } = req.body;
    try {
        const data = await pool.query(
            "insert into posts (user_id,name,avatar,image,caption) values ($1,$2,$3,$4,$5) returning *",
            [user_id, name, avatar, image, caption]
        );
        const post = data.rows[0];
        console.log("registered user", post);
        res.json(post);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.post("/alterLike", async (req, res) => {
    const { id, state } = req.body;
    try {
        const data = await pool.query(
            "update posts set isliked=$1 where id=$2 returning *",
            [state, id]
        );
        console.log(data.rows);
        res.json({
            data: data.rows,
        });
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
