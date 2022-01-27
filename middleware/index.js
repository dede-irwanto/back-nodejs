const express = require("express");
var auth = require("./auth");
const router = express.Router();

// daftarkan menu registrasi
router.post("/api/v1/register", auth.registrasi);

module.exports = router;
