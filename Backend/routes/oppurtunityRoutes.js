const router = require("express").Router();
const axios =require('axios')

router.get("/jobs", async (req, res) => {
    try {
        const response = await axios.get(
            "https://unstop.com/api/public/opportunity/search-result?opportunity=jobs&page=1&per_page=15&types=oppstatus,job_type,job_timing,working_days,eligible,category,location&filters=,,,,,,"
        );
        res.json(response.data);
    } catch (err) {
        res.send(err);
    }
});

router.get("/hackathons", async (req, res) => {
    try {
        const response = await axios.get("https://devpost.com/api/hackathons");
        res.json(response.data);
    } catch (err) {
        res.send(err);
    }
});

module.exports = router;
