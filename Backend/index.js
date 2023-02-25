const express = require("express");
const cors = require("cors");
const axios = require("axios");
const pool = require("./db");
const userRoutes = require("./routes/userRoutes.js");
const oppRoutes = require("./routes/oppurtunityRoutes.js");
const app = express();
console.log("exp", typeof express);
console.log("app", typeof app);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/users", userRoutes);
app.use("/opportunities", oppRoutes);

app.get("/", async (req, res) => {
    const data = await pool.query("select * from users");
    console.log(data.rows);
    res.json(data.rows);
});


app.get("/leetcode", async (req, res) => {
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
        referrer: "https://leetcode.com/Muthulingam/",
        body: '{"query":"\\n    query userProblemsSolved($username: String!) {\\n  allQuestionsCount {\\n    difficulty\\n    count\\n  }\\n  matchedUser(username: $username) {\\n    problemsSolvedBeatsStats {\\n      difficulty\\n      percentage\\n    }\\n    submitStatsGlobal {\\n      acSubmissionNum {\\n        difficulty\\n        count\\n      }\\n    }\\n  }\\n}\\n    ","variables":{"username":"Muthulingam"}}',
        method: "POST",
        mode: "cors",
    });
    const data = await response.json();
    res.json(data.submitStatsGlobal);
});

app.get("/hackathons", async (req, res) => {
    try {
        const response = await axios.get("https://devpost.com/api/hackathons");
        res.json(response.data);
    } catch (err) {
        res.send(err);
    }
});

app.get("/add/:name", async (req, res) => {
    const { name } = req.params;
    const data = await pool.query(
        "insert into profile (name,age) values ($1,$2) returning *",
        [name, 20]
    );
    res.send(data.rows);
});

app.listen(5000, (req, res) => {
    console.log("app is running in 5000");
});
