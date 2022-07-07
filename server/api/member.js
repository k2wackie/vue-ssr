const router = require("express").Router();
const memberModel = require("./_model/memberModel");
const { modelCall } = require("../../util/lib");

// /api/member/duplicateCheck/mb_id/abcd
// MVC
router.get("/duplicateCheck/:field/:value", async (req, res) => {
  // console.log(req.params);
  const result = await modelCall(memberModel.duplicateCheck, req.params);
  res.json(result);
});

router.post("/", async (req, res) => {
  // console.log(req.body);
  const result = await modelCall(memberModel.createMember, req);

  res.json(result);
});

// 로그인
router.post("/loginLocal", async (req, res) => {
  res.json(req.body);
});

module.exports = router;
