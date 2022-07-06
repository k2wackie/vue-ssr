const router = require("express").Router();

// /api/member/test
router.get("/test", (req, res) => {
  res.json("test connection");
});

module.exports = router;
