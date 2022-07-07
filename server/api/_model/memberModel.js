const db = require("../../plugins/mysql");
const sqlHelper = require("../../../util/sqlHelper");
const TABLE = require("../../../util/TABLE");
const { LV } = require("../../../util/level");
const moment = require("../../../util/moment");
const { getIp } = require("../../../util/lib");

async function getDefaultMemberLevel() {
  const sql = sqlHelper.SelectSimple(TABLE.MEMBER, null, ["COUNT(*) AS cnt"]);
  const [[{ cnt }]] = await db.execute(sql.query);
  return cnt == 0 ? LV.SUPER : LV.MEMBER;
}

const memberModel = {
  async duplicateCheck({ field, value }) {
    // SELECT COUNT(*) AS cnt FROM member WHERE mb_id=?
    const sql = sqlHelper.SelectSimple(TABLE.MEMBER, { [field]: value }, [
      "COUNT(*) AS cnt",
    ]);
    // console.log(sql);
    const [[row]] = await db.execute(sql.query, sql.values);
    console.log(row);
    return row;
  },
  async createMember(req) {
    console.log("createMember", req.body);

    const at = moment().format("LT");
    const ip = getIp(req);
    // console.log('IP', ip, at);

    const payload = {
      ...req.body,
      // mb_password : 암호화
      mb_level: await getDefaultMemberLevel(),
      mb_create_at: at,
      mb_create_ip: ip,
      mb_update_at: at,
      mb_update_ip: ip,
    };
    const sql = sqlHelper.Insert(TABLE.MEMBER, payload);
    // console.log(sql);
    return req.body;
  },
};

module.exports = memberModel;
