const express = require("express");

const { getList } = require("../../controllers/list");

const router = express.Router();

router.get("/", getList);

module.exports = router;
