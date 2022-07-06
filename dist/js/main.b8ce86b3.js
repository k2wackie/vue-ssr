"use strict";(self["webpackChunkvue_ssr"]=self["webpackChunkvue_ssr"]||[]).push([[179],{479:function(t,e,o){var s=o(144),n=function(){var t=this,e=t._self._c;return e("v-app",[e("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[e("div",{staticClass:"d-flex align-center"},[e("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),e("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),e("v-spacer"),e("v-btn",{attrs:{to:"/"}},[t._v("Home")]),e("v-btn",{attrs:{to:"/about"}},[t._v("About")])],1),e("v-main",[e("router-view")],1),e("vue-progress-bar")],1)},r=[],i={name:"App",data:()=>({}),beforeCreate(){console.log("APP.vue beforeCreate")},created(){console.log("APP.vue created ssrContext : ",this.$ssrContext)},beforeMount(){console.log("APP.vue beforeMount")},mounted(){console.log("APP.vue mounted")},serverPrefetch(){return console.log("APP.vue serverPrefetch"),new Promise(((t,e)=>{console.log("APP.vue serverPrefetch Promise"),t()}))}},a=i,l=o(1001),c=(0,l.Z)(a,n,r,!1,null,null,null),u=c.exports,v=o(8345),f=function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("토스트 테스트")]),e("div",[e("v-btn",{on:{click:t.toastTest1}},[t._v("토스트 Info")]),e("v-btn",{on:{click:t.toastTest2}},[t._v("토스트 Success")]),e("v-btn",{on:{click:t.toastTest3}},[t._v("토스트 Error")]),e("v-btn",{on:{click:t.toastTest4}},[t._v("토스트 Warning")]),e("v-btn",{on:{click:t.toastTest5}},[t._v("전역에러")])],1),e("h1",[t._v("프로그래스 테스트")]),e("div",[e("v-btn",{on:{click:t.barTest1}},[t._v("Start")]),e("v-btn",{on:{click:t.barTest2}},[t._v("Finish")]),e("v-btn",{on:{click:t.barTest3}},[t._v("Fail")])],1),e("h1",[t._v("Notify 테스트")]),e("div",[e("v-btn",{on:{click:t.notifyTest1}},[t._v("Alert")]),e("v-btn",{on:{click:t.notifyTest2}},[t._v("Confirm")]),e("v-btn",{on:{click:t.notifyTest3}},[t._v("Prompt")])],1)])},p=[],d=(o(1703),{name:"Home",data(){return{title:"My App"}},title(){return console.log("Home.vue title mixin"),this.title},beforeCreate(){console.log("Home.vue beforeCreate")},created(){console.log("Home.vue created ssrContext : ",this.$ssrContext)},beforeMount(){console.log("Home.vue beforeMount")},mounted(){console.log("Home.vue mounted")},serverPrefetch(){return console.log("Home.vue serverPrefetch"),new Promise(((t,e)=>{console.log("Home.vue serverPrefetch Promise"),t()}))},methods:{toastTest1(){this.$toast.info("Hello Info")},toastTest2(){this.$toast.success("Hello success")},toastTest3(){this.$toast.error("Hello error")},toastTest4(){this.$toast.warning("Hello warning")},toastTest5(){throw new Error("전역 에러")},barTest1(){this.$Progress.start()},barTest2(){this.$Progress.finish()},barTest3(){this.$Progress.fail()},async notifyTest1(){const t=await this.$ezNotify.alert("테스트 내용입니다.","안내",{icon:"mdi-video-4k-box"});console.log(t)},async notifyTest2(){const t=await this.$ezNotify.confirm("테스트 내용입니다.");console.log(t)},async notifyTest3(){const t=await this.$ezNotify.prompt("테스트 내용입니다.","프롬프트",{width:200});console.log(t)}}}),h=d,m=(0,l.Z)(h,f,p,!1,null,null,null),g=m.exports;s["default"].use(v.Z);const y=[{path:"/",name:"home",component:g},{path:"/about",name:"about",component:()=>o.e(443).then(o.bind(o,6040))}];function b(){const t=new v.Z({mode:"history",base:"/",routes:y});return t.beforeEach(((t,e,o)=>{console.log("router.js beforeEach"),o()})),t.afterEach(((t,e)=>{console.log("router.js afterEach")})),t}var _=o(629);function w(){const t=new _.ZP.Store({state:{},mutations:{},actions:{},modules:{}});return t}s["default"].use(_.ZP);var k=o(3678),x=o(5464),T=o.n(x);o(8556);s["default"].use(T());var P=new(T())({});o(6981);function $(t){const{title:e}=t.$options;if(e)return"function"===typeof e?e.call(t):e}const C={mounted(){const t=$(this);t&&(document.title=t)}};var A=C;function H(t){console.log("main.js createApp");const e=b(),o=w();(0,k.Z)(o,e),s["default"].mixin(A);const n=new s["default"]({data:{url:t?t.url:""},router:e,store:o,vuetify:P,render:t=>t(u)});return{app:n,router:e,store:o}}s["default"].config.productionTip=!1;var N=o(1151);const I={position:"bottom-center",timeout:3e3};s["default"].config.errorHandler=t=>{console.error(t),s["default"].$toast&&s["default"].$toast.error(t.message)},s["default"].use(N.ZP,I);var Z=o(5334),j=o.n(Z);const z={color:"rgb(143, 255, 199)",failedColor:"red",thickness:"3px"};s["default"].use(j(),z);var E=function(){var t=this,e=t._self._c;return e("div",[e("ez-notify-component",{ref:"notify",attrs:{opt:t.options}})],1)},S=[],M=function(){var t=this,e=t._self._c;return e("v-dialog",{attrs:{"max-width":t.options.width,persistent:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e("v-card",[t.title?e("v-toolbar",{attrs:{color:"primary",dark:""}},[e("v-toolbar-title",[t._v(t._s(t.title))])],1):t._e(),e("v-card-text",{staticClass:"pt-4"},[t.options.icon?e("v-icon",{staticClass:"mr-2",attrs:{large:"",color:t.options.iconColor}},[t._v(t._s(t.options.icon))]):t._e(),t._v(" "+t._s(t.content)+" "),"prompt"===t.options.type?e("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e("v-text-field",{attrs:{rules:[t=>!!t||"필수 입력입니다."]},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1):t._e()],1),e("v-card-actions",{staticClass:"justify-end"},["alert"!==t.options.type?e("v-btn",{on:{click:t.cancle}},[t._v("취소")]):t._e(),e("v-btn",{attrs:{color:"primary"},on:{click:t.ok}},[t._v("확인")])],1)],1)],1)},L=[],O={name:"ezNotifyComponent",props:["opt"],data(){return{dialog:!1,title:"타이틀",content:"내용입니다.",text:"사용자 답변",valid:!0,options:this.opt,promise:null}},methods:{show(t,e,o){return new Promise(((s,n)=>{this.dialog&&this.close(),this.$nextTick((()=>{this.promise={resolve:s,reject:n},this.content=t,this.title=e,this.options=o,this.text=o.text,this.dialog=!0}))}))},close(t){this.promise.resolve(t),this.dialog=!1,this.promise=null,this.content="",this.title="",this.text="",this.valid=!0,this.options=this.opt},ok(){"prompt"===this.options.type?(this.$refs.form.validate(),this.$nextTick((()=>{this.valid&&this.close(this.text)}))):this.close(!0)},cancle(){this.close(!1)}}},F=O,R=(0,l.Z)(F,M,L,!1,null,null,null),V=R.exports,B={components:{ezNotifyComponent:V},name:"ezNotifyInterface",methods:{alert(t,e="",o={}){return this.$refs.notify.show(t,e,{...this.options,...o,type:"alert"})},confirm(t,e="",o){return this.$refs.notify.show(t,e,{...this.options,...o,type:"confirm"})},prompt(t,e="",o){return this.$refs.notify.show(t,e,{...this.options,...o,type:"prompt"})}}},W=B,q=(0,l.Z)(W,E,S,!1,null,null,null),D=q.exports;const G={width:400,icon:"",iconColor:"orange",type:"alert",text:""};var J={install(t,e,o){const s=t.extend(D),n=new s({vuetify:e,data:{options:Object.assign(G,o)}});t.prototype.$nextTick((()=>{t.prototype.$ezNotify=n.$mount(),document.getElementById("app").appendChild(n.$el)}))}};const K={iconColor:"red"};s["default"].use(J,P,K);const{app:Q,router:U,store:X}=H();window.__INITIAL_STATE__&&X.replaceState(window.__INITIAL_STATE__),U.onReady((()=>{console.log("entry-client.js onReady"),Q.$mount("#app")}))}},function(t){var e=function(e){return t(t.s=e)};t.O(0,[736],(function(){return e(479)}));t.O()}]);
//# sourceMappingURL=main.b8ce86b3.js.map