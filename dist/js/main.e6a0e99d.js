(self["webpackChunkvue_ssr"]=self["webpackChunkvue_ssr"]||[]).push([[179],{52616:function(t,e,o){"use strict";o.d(e,{Z:function(){return u}});var n=function(){var t=this,e=t._self._c;return e("v-btn",{staticClass:"px-0, text-none text-h6",attrs:{to:"/",text:"",plain:""}},[t._v(" "+t._s(t.title)+" ")])},r=[],s=o(20629),i={name:"SiteTitle",computed:{...(0,s.rn)({title:t=>t.config.title})}},a=i,l=o(1001),c=(0,l.Z)(a,n,r,!1,null,null,null),u=c.exports},98882:function(t,e,o){"use strict";var n=o(20144),r=function(){var t=this,e=t._self._c;return e("v-app",[e("v-navigation-drawer",{attrs:{app:"",width:t.drawerWidth},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e("site-navi",{on:{close:t.toggleDrawer}})],1),e("v-app-bar",{attrs:{app:"",color:"primary",dark:"","hide-on-scroll":""}},[e("v-app-bar-nav-icon",{on:{click:t.toggleDrawer}}),e("site-title"),e("v-spacer"),e("site-user")],1),e("v-main",[e("router-view")],1),e("site-footer"),e("vue-progress-bar")],1)},s=[],i=function(){var t=this,e=t._self._c;return e("v-footer",{staticClass:"justify-center",attrs:{app:"",dark:"",absolute:""}},[t._v(" © "+t._s((new Date).getFullYear())+" "+t._s(t.footer)+" ")])},a=[],l=o(20629),c={name:"SiteFooter",computed:{...(0,l.rn)({footer:t=>t.config.footer})}},u=c,p=o(1001),d=(0,p.Z)(u,i,a,!1,null,null,null),m=d.exports,v=o(52616),f=function(){var t=this,e=t._self._c;return e("div",[t.isLg?t._e():e("v-app-bar",{attrs:{dark:"",color:"primary"}},[e("v-app-bar-title",[e("site-title")],1),e("v-spacer"),e("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$emit("close")}}},[e("v-icon",[t._v("mdi-close")])],1)],1),e("v-list",[e("nested-menu",{attrs:{items:t.items}})],1)],1)},h=[],b=function(){var t=this,e=t._self._c;return e("div",{style:{"padding-left":2*t.depth+"px"}},t._l(t.items,(function(o,n){return e("div",{key:`${n}${o.title}`},[o.subItems&&o.subItems.length>0?e("v-list-group",{attrs:{"prepend-icon":0===t.depth?o.icon:"","no-action":"","sub-group":t.depth>0,"append-icon":""},scopedSlots:t._u([{key:"activator",fn:function(){return[e("v-list-item-title",[t._v(t._s(o.title))]),e("v-btn",{attrs:{icon:"",plain:"",disabled:!o.to},on:{click:function(e){return e.stopPropagation(),t.goUrl(o)}}},[e("v-icon",[t._v("mdi-arrow-top-right")])],1),e("v-icon",{style:t.activeStyle(o.active)},[t._v("mdi-chevron-down")])]},proxy:!0}],null,!0),model:{value:o.active,callback:function(e){t.$set(o,"active",e)},expression:"item.active"}},[e("nested-menu",{attrs:{items:o.subItems,depth:t.depth+1}})],1):e("v-list-item",t._b({},"v-list-item",t.getLink(o),!1),[0===t.depth?e("v-list-item-icon",[e("v-icon",[t._v(t._s(o.icon))])],1):t._e(),e("v-list-item-title",{style:{"padding-left":1==t.depth?"16px":"0px"}},[e("div",[t._v(t._s(o.title))])])],1)],1)})),0)},_=[],g={name:"NestedMenu",props:{items:{type:Array,required:!0},depth:{type:Number,default:0}},methods:{getLink(t){return t.newTab?{href:t.to,target:"_blank"}:{to:t.to}},activeStyle(t){return{trasnform:t?"rotate(180dep)":"rotate(360dep)"}},goUrl(t){t.newTab?window.open(t.to,"_blank"):t.to!=this.$route.path&&this.$router.push(t.to)}}},y=g,k=(0,p.Z)(y,b,_,!1,null,null,null),w=k.exports,x=o(10109),T={components:{NestedMenu:w,SiteTitle:v.Z},name:"SiteNavi",data(){return{items:[]}},computed:{...(0,l.rn)({menu:t=>t.config.menu}),isLg(){const{lg:t,xl:e}=this.$vuetify.breakpoint;return t||e}},created(){this.initMenu()},methods:{initMenu(){const t=(0,x.deepCopy)(this.menu);this.findActiveItem(t,null),this.items=t},findActiveItem(t,e){e&&(e.active=!1);for(const o of t)o.subItems&&o.subItems.length>0?this.findActiveItem(o.subItems,o):e&&this.$route.path.startsWith(o.to)&&(o.active=!0),e&&o.active&&(e.active=!0)}}},$=T,E=(0,p.Z)($,f,h,!1,null,null,null),M=E.exports,I=function(){var t=this,e=t._self._c;return t.isLoading?e("v-progress-circular",{attrs:{indeterminate:""}}):e("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:o,attrs:n}){return[e("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",n,!1),o),[e("display-avatar",{attrs:{member:t.member}})],1)]}}])},[e("v-card",[e("v-card-text",[e("v-switch",{attrs:{label:"Dark Theme","input-value":t.darkMode},on:{change:function(e){return t.setDarkMode(e)}}})],1),[t.member?e("member-menu",{attrs:{member:t.member}}):e("no-member-menu")]],2)],1)},S=[],A=function(){var t=this,e=t._self._c;return e("v-avatar",{attrs:{color:"accent",size:"32"}},[t.member?[t.hasImage?e("v-img",{attrs:{src:`/upload/memberPhoto/${t.member.mb_id}.jpg?w=32&h=32`},on:{error:t.imageError}}):e("div",[t._v(t._s(t.member.mb_name[0]))])]:e("v-icon",[t._v("mdi-account")])],2)},C=[],P={name:"DisplayAvatar",props:{member:{type:Object,default:null}},data(){return{hasImage:!0}},methods:{imageError(){this.hasImage=!1}}},N=P,Z=(0,p.Z)(N,A,C,!1,null,null,null),j=Z.exports,L=function(){var t=this,e=t._self._c;return e("div",[e("v-card-actions",[e("v-btn",{attrs:{color:"primary",block:""}},[t._v("회원정보수정")])],1),e("v-card-actions",[e("v-btn",{attrs:{color:"secondary",block:""}},[t._v("로그아웃")])],1)],1)},D=[],O={name:"MemberMenu",props:{member:{type:Object,default:null}}},R=O,U=(0,p.Z)(R,L,D,!1,null,null,null),z=U.exports,H=function(){var t=this,e=t._self._c;return e("div",[e("v-card-actions",[e("v-btn",{attrs:{to:"/login",color:"primary",block:""}},[t._v("로그인")])],1),e("v-card-actions",[e("v-btn",{attrs:{to:"/join",color:"secondary",block:""}},[t._v("회원가입")])],1)],1)},F=[],V={name:"NoMemberMenu"},B=V,W=(0,p.Z)(B,H,F,!1,null,null,null),q=W.exports,J={components:{DisplayAvatar:j,NoMemberMenu:q,MemberMenu:z},name:"SiteUser",data(){return{isLoading:!1}},computed:{...(0,l.rn)({member:t=>t.user.member}),darkMode(){return this.$vuetify.theme.dark}},mounted(){this.getDarkMode()},methods:{setDarkMode(t){this.$vuetify.theme.dark=t,localStorage.setItem("darkMode",t?"dark":"light")},getDarkMode(){const t="dark"===localStorage.getItem("darkMode");this.$vuetify.theme.dark=t}}},X=J,Y=(0,p.Z)(X,I,S,!1,null,null,null),G=Y.exports,K={components:{SiteTitle:v.Z,SiteFooter:m,SiteNavi:M,SiteUser:G},name:"App",data(){return{drawer:!1}},computed:{drawerWidth(){return this.$vuetify.breakpoint.xs?"100%":"360"}},methods:{toggleDrawer(){this.drawer=!this.drawer}},beforeCreate(){},created(){},beforeMount(){},mounted(){},serverPrefetch(){return new Promise(((t,e)=>{t()}))}},Q=K,tt=(0,p.Z)(Q,r,s,!1,null,null,null),et=tt.exports,ot=o(78345),nt=function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("토스트 테스트")]),e("div",[e("v-btn",{on:{click:t.toastTest1}},[t._v("토스트 Info")]),e("v-btn",{on:{click:t.toastTest2}},[t._v("토스트 Success")]),e("v-btn",{on:{click:t.toastTest3}},[t._v("토스트 Error")]),e("v-btn",{on:{click:t.toastTest4}},[t._v("토스트 Warning")]),e("v-btn",{on:{click:t.toastTest5}},[t._v("전역에러")])],1),e("h1",[t._v("프로그래스 테스트")]),e("div",[e("v-btn",{on:{click:t.barTest1}},[t._v("Start")]),e("v-btn",{on:{click:t.barTest2}},[t._v("Finish")]),e("v-btn",{on:{click:t.barTest3}},[t._v("Fail")])],1),e("h1",[t._v("Notify 테스트")]),e("div",[e("v-btn",{on:{click:t.notifyTest1}},[t._v("Alert")]),e("v-btn",{on:{click:t.notifyTest2}},[t._v("Confirm")]),e("v-btn",{on:{click:t.notifyTest3}},[t._v("Prompt")])],1),e("h1",[t._v("Axios 테스트")]),e("div",[e("v-btn",{on:{click:t.axiosTest1}},[t._v("TEST")]),e("v-btn",{on:{click:t.axiosTest2}},[t._v("Error")])],1)])},rt=[],st=(o(21703),{name:"Home",data(){return{title:"My App"}},title(){return this.title},beforeCreate(){},created(){},beforeMount(){},mounted(){},serverPrefetch(){return new Promise(((t,e)=>{t()}))},methods:{toastTest1(){this.$toast.info("Hello Info")},toastTest2(){this.$toast.success("Hello success")},toastTest3(){this.$toast.error("Hello error")},toastTest4(){this.$toast.warning("Hello warning")},toastTest5(){throw new Error("전역 에러")},barTest1(){this.$Progress.start()},barTest2(){this.$Progress.finish()},barTest3(){this.$Progress.fail()},async notifyTest1(){const t=await this.$ezNotify.alert("테스트 내용입니다.","안내",{icon:"mdi-video-4k-box"});console.log(t)},async notifyTest2(){const t=await this.$ezNotify.confirm("테스트 내용입니다.");console.log(t)},async notifyTest3(){const t=await this.$ezNotify.prompt("테스트 내용입니다.","프롬프트",{width:200});console.log(t)},async axiosTest1(){const t=await this.$axios.get("/api/member/test");console.log(t)},async axiosTest2(){const t=await this.$axios.get("/api/err");console.log(t)}}}),it=st,at=(0,p.Z)(it,nt,rt,!1,null,null,null),lt=at.exports;const ct=[{path:"/",name:"home",component:lt},{path:"/about",name:"About",component:()=>o.e(443).then(o.bind(o,16040))},{path:"/login",name:"NoAuthLogin",component:()=>o.e(535).then(o.bind(o,52240))},{path:"/join",name:"NoAuthJoin",component:()=>Promise.all([o.e(736),o.e(49)]).then(o.bind(o,72280))},{path:"*",name:"Error",component:()=>o.e(41).then(o.bind(o,74365))}];var ut=ct;function pt(){const t=new ot.Z({mode:"history",base:"/",routes:ut});return t.beforeEach(((t,e,o)=>{o()})),t.afterEach(((t,e)=>{})),t}n["default"].use(ot.Z);var dt=o(85931);function mt(){const t=new l.ZP.Store({state:{config:{title:"ezCode",footer:"ezCode allright reserved.",menu:[{title:"Home",icon:"mdi-home",to:"/",grant:0,newTab:!1,subItems:[{title:"Menu1",icon:"",to:"/menu1",grant:0,newTab:!0,subItems:[{title:"Menu1-1",icon:"",to:"/menu1-1",grant:0,newTab:!1,subItems:[]},{title:"Menu1-2",icon:"",to:"/menu1-2",grant:0,newTab:!1,subItems:[]}]},{title:"Menu2",icon:"",to:"/menu2",grant:0,newTab:!1,subItems:[]}]},{title:"About",icon:"mdi-help",to:"/about",grant:0,newTab:!1,subItems:[]}]}},mutations:{},actions:{},modules:dt["default"]});return t}n["default"].use(l.ZP);var vt=o(83678),ft=o(9669),ht=o.n(ft);let bt={baseURL:{NODE_ENV:"production",VUE_APP_SERVER_PORT:"4000",BASE_URL:"/"}.baseURL||{NODE_ENV:"production",VUE_APP_SERVER_PORT:"4000",BASE_URL:"/"}.apiUrl||"",timeout:6e4,proxy:{host:"localhost",port:"4000"}};const _t=ht().create(bt);_t.interceptors.request.use((function(t){const{$Progress:e}=n["default"].prototype;return e&&e.start(),t}),(function(t){return Promise.reject(t)})),_t.interceptors.response.use((function(t){const{$Progress:e,$toast:o}=n["default"].prototype,{data:r,status:s}=t;let i="";return console.log("AJAX",t),200!=s&&(i="서버접속 실패"),r&&r.err&&(i=r.err),i?(o&&o.error(i),e&&e.fail(),console.warn(i),!1):(e&&e.finish(),r)}),(function(t){return Promise.reject(t)}));const gt={install:function(t,e){t.axios=_t,Object.defineProperties(t.prototype,{axios:{get(){return _t}},$axios:{get(){return _t}}})}};n["default"].use(gt);var yt=o(55464),kt=o.n(yt),wt=(o(8556),o(26562));n["default"].use(kt());var xt=new(kt())({lang:{locales:{ko:wt.ko,en:wt.en},current:"ko"}});o(26981);function Tt(t){const{title:e}=t.$options;if(e)return"function"===typeof e?e.call(t):e}const $t={mounted(){const t=Tt(this);t&&(document.title=t)}};var Et=$t;function Mt(t){const e=pt(),o=mt();(0,vt.Z)(o,e),n["default"].mixin(Et);const r=new n["default"]({data:{url:t?t.url:""},router:e,store:o,vuetify:xt,render:t=>t(et)});return{app:r,router:e,store:o}}n["default"].config.productionTip=!1;var It=o(41151);const St={position:"bottom-center",timeout:3e3};n["default"].config.errorHandler=t=>{console.error(t),n["default"].$toast&&n["default"].$toast.error(t.message)},n["default"].use(It.ZP,St);var At=o(95334),Ct=o.n(At);const Pt={color:"rgb(143, 255, 199)",failedColor:"red",thickness:"3px"};n["default"].use(Ct(),Pt);var Nt=function(){var t=this,e=t._self._c;return e("div",[e("ez-notify-component",{ref:"notify",attrs:{opt:t.options}})],1)},Zt=[],jt=function(){var t=this,e=t._self._c;return e("v-dialog",{attrs:{"max-width":t.options.width,persistent:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e("v-card",[t.title?e("v-toolbar",{attrs:{color:"primary",dark:""}},[e("v-toolbar-title",[t._v(t._s(t.title))])],1):t._e(),e("v-card-text",{staticClass:"pt-4"},[t.options.icon?e("v-icon",{staticClass:"mr-2",attrs:{large:"",color:t.options.iconColor}},[t._v(t._s(t.options.icon))]):t._e(),t._v(" "+t._s(t.content)+" "),"prompt"===t.options.type?e("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e("v-text-field",{attrs:{rules:[t=>!!t||"필수 입력입니다."]},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1):t._e()],1),e("v-card-actions",{staticClass:"justify-end"},["alert"!==t.options.type?e("v-btn",{on:{click:t.cancle}},[t._v("취소")]):t._e(),e("v-btn",{attrs:{color:"primary"},on:{click:t.ok}},[t._v("확인")])],1)],1)],1)},Lt=[],Dt={name:"ezNotifyComponent",props:["opt"],data(){return{dialog:!1,title:"타이틀",content:"내용입니다.",text:"사용자 답변",valid:!0,options:this.opt,promise:null}},methods:{show(t,e,o){return new Promise(((n,r)=>{this.dialog&&this.close(),this.$nextTick((()=>{this.promise={resolve:n,reject:r},this.content=t,this.title=e,this.options=o,this.text=o.text,this.dialog=!0}))}))},close(t){this.promise.resolve(t),this.dialog=!1,this.promise=null,this.content="",this.title="",this.text="",this.valid=!0,this.options=this.opt},ok(){"prompt"===this.options.type?(this.$refs.form.validate(),this.$nextTick((()=>{this.valid&&this.close(this.text)}))):this.close(!0)},cancle(){this.close(!1)}}},Ot=Dt,Rt=(0,p.Z)(Ot,jt,Lt,!1,null,null,null),Ut=Rt.exports,zt={components:{ezNotifyComponent:Ut},name:"ezNotifyInterface",methods:{alert(t,e="",o={}){return this.$refs.notify.show(t,e,{...this.options,...o,type:"alert"})},confirm(t,e="",o){return this.$refs.notify.show(t,e,{...this.options,...o,type:"confirm"})},prompt(t,e="",o){return this.$refs.notify.show(t,e,{...this.options,...o,type:"prompt"})}}},Ht=zt,Ft=(0,p.Z)(Ht,Nt,Zt,!1,null,null,null),Vt=Ft.exports;const Bt={width:400,icon:"",iconColor:"orange",type:"alert",text:""};var Wt={install(t,e,o){const n=t.extend(Vt),r=new n({vuetify:e,data:{options:Object.assign(Bt,o)}});t.prototype.$nextTick((()=>{t.prototype.$ezNotify=r.$mount(),document.getElementById("app").appendChild(r.$el)}))}};const qt={iconColor:"red"};n["default"].use(Wt,xt,qt);const{app:Jt,router:Xt,store:Yt}=Mt();window.__INITIAL_STATE__&&Yt.replaceState(window.__INITIAL_STATE__),Xt.onReady((()=>{Jt.$mount("#app")}))},85931:function(t,e,o){"use strict";o.r(e);var n=o(68929),r=o.n(n);const s=o(26372),i={};s.keys().forEach((t=>{if("./index.js"!==t){const e=r()(t.replace(/(\.\/|\.js)/g,""));i[e]={namespaced:!0,...s(t)}}})),e["default"]=i},49416:function(t,e,o){"use strict";o.r(e),o.d(e,{actions:function(){return a},getters:function(){return i},mutations:function(){return s},state:function(){return r}});var n=o(20144);const r=()=>({member:null}),s={SET_MEMBER(t,e){t.member=e}},i={},a={async duplicateCheck(t,{field:e,value:o}){const{$axios:r}=n["default"].prototype,s=await r.get(`/api/member/duplicateCheck/${e}/${o}`);return s},async createMember(t,e){const{$axios:o}=n["default"].prototype,r=await o.post("/api/member/",e);return r},async signInLocal({commit:t},e){const{$axios:o}=n["default"].prototype,r=await o.post("/api/member/loginLocal",e);return r&&t("SET_MEMBER",r.member),r}}},10109:function(t){const e={deepCopy(t){if(null===t||"object"!==typeof t)return t;const o=Array.isArray(t)?[]:{};for(const n of Object.keys(t))o[n]=e.deepCopy(t[n]);return o},async modelCall(t,...e){try{const o=await t(...e);return o}catch(o){return console.trace(o),{err:o.message}}},getIp(t){return t.ip.replace("::ffff:","")}};t.exports=e},26372:function(t,e,o){var n={"./index.js":85931,"./user.js":49416};function r(t){var e=s(t);return o(e)}function s(t){if(!o.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=s,t.exports=r,r.id=26372}},function(t){var e=function(e){return t(t.s=e)};t.O(0,[736],(function(){return e(98882)}));t.O()}]);
//# sourceMappingURL=main.e6a0e99d.js.map