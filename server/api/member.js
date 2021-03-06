const router = require("express").Router();
const memberModel = require("./_model/memberModel");
const { modelCall } = require("../../util/lib");
const passport = require("passport");
const jwt = require("../plugins/jwt");

// /api/member/duplicateCheck/mb_id/abcd
// MVC
router.get("/duplicateCheck/:field/:value", async (req, res) => {
  console.log(req.params);
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
  passport.authenticate("local", function (err, member, info) {
    if (info) {
      res.json({ err: info });
    } else {
      req.login(member, { session: false }, (err) => {
        if (err) {
          console.log("loginLocal", err);
          res.json({ err });
        } else {
          const token = jwt.getToken(member);
          const data = memberModel.loginMember(req);
          member.mb_login_at = data.mb_login_at;
          member.mb_login_ip = data.mb_login_ip;
          res.json({ token, member });
        }
      });
    }
  })(req, res);
});

module.exports = router;
