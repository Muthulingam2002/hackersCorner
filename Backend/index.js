const express = require("express");
const cors = require("cors");
const axios = require("axios");
const pool = require("./db");
const userRoutes = require("./routes/userRoutes.js");
const oppRoutes = require("./routes/oppurtunityRoutes.js");
const postRoutes = require("./routes/postRoutes");
const detailsRoutes = require("./routes/detailsRoutes");
const app = express();

app.use(
    cors({
        origin: ["http://localhost:3000", "https://hackers-corner.vercel.app"],
    })
);
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));

app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/opportunities", oppRoutes);
app.use("/details", detailsRoutes);

app.get("/", async (req, res) => {
    const data = await pool.query("select * from users");
    res.json(data.rows);
});



app.get("/leetcode/:user", async (req, res) => {
    const { user } = req.params;
    try {
        const response = await fetch("https://leetcode.com/graphql/", {
            credentials: "include",
            headers: {
                "User-Agent":
                    "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/109.0",
                Accept: "*/*",
                "Accept-Language": "en-US,en;q=0.5",
                "content-type": "application/json",
                "x-csrftoken":
                    "fYSCkFO4xZhy0YinTZEpzKBPnOTtqOBlfDrS7VxHjsWb3dmkArMg6rxdkyIQtmWE",
                authorization: "",
                "random-uuid": "3911bd24-023e-ae0f-c720-417a2bc3f772",
                "sentry-trace":
                    "bbee96bdf4784058b03deae523e785d9-ba830a8f42adde38-0",
                baggage:
                    "sentry-environment=production,sentry-release=a62fcd749e16cf2c2db008ee833a3cd7afd8052d,sentry-transaction=%2Fu%2F%5Busername%5D,sentry-public_key=2a051f9838e2450fbdd5a77eb62cc83c,sentry-trace_id=bbee96bdf4784058b03deae523e785d9,sentry-sample_rate=0.004",
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-origin",
            },
            referrer: `https://leetcode.com/${user}/`,
            body: `{"query":"\\n    query userProblemsSolved($username: String!) {\\n  allQuestionsCount {\\n    difficulty\\n    count\\n  }\\n  matchedUser(username: $username) {\\n    problemsSolvedBeatsStats {\\n      difficulty\\n      percentage\\n    }\\n    submitStatsGlobal {\\n      acSubmissionNum {\\n        difficulty\\n        count\\n      }\\n    }\\n  }\\n}\\n    ","variables":{"username":"${user}"}}`,
            method: "POST",
            mode: "cors",
        });

        const data = await response.json();
        const submissionDetail = {
            total: data.data.allQuestionsCount,
            userCount: data.data.matchedUser.submitStatsGlobal.acSubmissionNum,
        };
        res.json(submissionDetail);
    } catch (err) {
        res.status(404).json("user not found");
    }
});

app.listen(5000, (req, res) => {
    console.log("app is running in");
});
