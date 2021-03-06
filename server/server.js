require("dotenv").config();
const express = require("express");
const http = require("http");
const path = require("path");
const fs = require("fs");

// 앱 초기화
const app = express();
const port = process.env.VUE_APP_SERVER_PORT || 3000;
const webServer = http.createServer(app);

// 파비콘 요청 제거
app.use((req, res, next) => {
  if (req.path.indexOf("favicon.ico") > -1) {
    const favicon = fs.readFileSync(
      path.join(__dirname, "../dist/favicon.ico")
    );
    res.status(200).end(favicon);
    return;
  }
  next();
});

// 파서
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const fileUpload = require("express-fileupload");
app.use(fileUpload());
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// 글로벌 세팅
global.MEMBER_PHOTO_PATH = path.join(__dirname, "./upload/memberPhoto");
fs.mkdirSync(MEMBER_PHOTO_PATH, { recursive: true });

// Passport
const passport = require("./plugins/passport");
passport(app);

// 이미지 업로드
const thumbnail = require("./plugins/thumbnail");
app.use("/upload/:_path", thumbnail(path.join(__dirname, "./upload")));

// 정적 폴더
app.use(express.static(path.join(__dirname, "../dist")));

// API 라우터
const memeberRouter = require("./api/member");
app.use("/api/member", memeberRouter);
app.use("/api/*", (req, res) => {
  res.json({ err: "요청하신 API가 없습니다. 요청 URL : " + req.url });
});

// Vue SSR
const { createBundleRenderer } = require("vue-server-renderer");
const template = fs.readFileSync(
  path.join(__dirname, "index.template.html"),
  "utf-8"
);
const serverBundle = require(path.join(
  __dirname,
  "../dist/vue-ssr-server-bundle.json"
));
const clientManifest = require(path.join(
  __dirname,
  "../dist/vue-ssr-client-manifest.json"
));

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template,
  clientManifest,
});

app.get("*", (req, res) => {
  // console.log("server.js * router");
  const ctx = {
    url: req.url,
    title: "Vue SSR App",
    metas: `<!-- inject more metas -->`,
  };

  const stream = renderer.renderToStream(ctx);

  stream
    .on("end", () => {
      console.log("스트림 렌더 종료");
    })
    .pipe(res);
});

// 서버 응답
webServer.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
