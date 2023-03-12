import express from "express" 
import pool from "../db.js";
import bcrypt from "bcryptjs"
import JWT from "jsonwebtoken";
import * as dotenv from 'dotenv'
const router=express.Router()
dotenv.config()

router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const userExist = await pool.query(
            "select * from users where email=$1",
            [email]
        );
        if (userExist.rows.length > 0) {
            res.status(400).send("user with this email already exists");
        } else {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            const data = await pool.query(
                "insert into users (name,email,password) values ($1,$2,$3) returning *",
                [username, email, hashedPassword]
            );
            const user = data.rows[0];
            console.log("registered user", user);
            const token = JWT.sign({ email }, process.env.jwt_secret, {
                expiresIn: 360000,
            });
            res.json(user);
        }
    } catch (err) {
        res.status(400).send(err);
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const data = await pool.query("select * from users where email=$1", [
            email,
        ]);
        if (data.rows.length === 0) {
            res.status(400).send("user with this email does not exists");
        } else {
            const user = data.rows[0];
            let isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                res.status(404).send("invalid credentials");
            } else {
                const token =  JWT.sign(
                    { email },
                    process.env.jwt_secret,
                    {
                        expiresIn: 360000,
                    }
                );
            res.json(user);
            }
        }
    } catch (err) {
        res.status(400).json(err);
    }
});



export default router;
