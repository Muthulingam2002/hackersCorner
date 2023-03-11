const router = require("express").Router();
const pool = require("../db.js");
const dotenv = require("dotenv").config();
const { cloudinary } = require("../utils/cloudinary.js");

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
    const { id, leetcodeid, position, institution, description, skills } =
        req.body;
    console.log("edit", {
        id,
        leetcodeid,
        position,
        institution,
        description,
        skills,
    });
    try {
        const data = await pool.query(
            "update users set leetcodeid=$1,position=$3,institution=$4,description=$5,skills=$6 where id=$2 returning *",
            [leetcodeid, id, position, institution, description, skills]
        );
        res.json(data.rows[0]);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.post("/upload", async (req, res) => {
    console.log("called");
    try {
        const fileStr = req.body.data;
        const id = req.body.id;
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: "zexonrda",
        });
        const data = await pool.query(
            "update users set avatar=$1 where id=$2 returning *",
            [uploadResponse.secure_url, id]
        );
        res.json(data.rows[0]);
    } catch (err) {
        res.status(500).json({ err: "Something went wrong" });
    }
});

module.exports = router;
