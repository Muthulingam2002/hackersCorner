import pool from "../db.js";
import * as dotenv from "dotenv";
import express from "express";

const router = express.Router();
dotenv.config();

router.get("/fetchPost", async (req, res) => {
    try {
        const data = await pool.query(
            "select users.avatar,users.name,posts.id,posts.caption,posts.image,posts.isliked from posts join users on posts.user_id=users.id"
        );
        res.json({
            data: data.rows,
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post("/addPost", async (req, res) => {
    const { user_id, image, caption } = req.body;
    try {
        const data = await pool.query(
            "insert into posts (user_id,image,caption) values ($1,$2,$3) returning *",
            [user_id, image, caption]
        );
        const post = data.rows[0];
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
        res.json({
            data: data.rows,
        });
    } catch (err) {
        res.status(400).send(err);
    }
});

router.post("/delete", async (req, res) => {
    console.log("delete");
    const { id } = req.body;
    console.log(id);
    try {
        const data = await pool.query(
            "delete from posts where id=$1 returning *",
            [id]
        );
        console.log(data.rows);
        res.json({
            data: data.rows,
        });
    } catch (err) {
        res.status(400).send(err);
    }
});
export default router;
