(function(e){function t(t){for(var c,a,l=t[0],r=t[1],i=t[2],u=0,b=[];u<l.length;u++)a=l[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&b.push(o[a][0]),o[a]=0;for(c in r)Object.prototype.hasOwnProperty.call(r,c)&&(e[c]=r[c]);d&&d(t);while(b.length)b.shift()();return s.push.apply(s,i||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],c=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(c=!1)}c&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var c={},a={app:0},o={app:0},s=[];function l(e){return r.p+"js/"+({}[e]||e)+"."+{"chunk-1f107140":"584d6e90","chunk-6203ffeb":"9a34a696","chunk-00016e03":"c2710dbe","chunk-0045a524":"4f128123","chunk-06a600cd":"f374209c","chunk-0bdb83b2":"634929bc","chunk-2542e4b8":"27d22a11","chunk-2d0c7742":"8d2cc82f","chunk-3c09b457":"396ac5c9","chunk-3f18affa":"8f706499","chunk-444aeb76":"2df0f1a9","chunk-44cb69f2":"1e4f9a10","chunk-455bff20":"3292b8ab","chunk-457d38ac":"fad7addb","chunk-508d52be":"08c1b835","chunk-5a84a08a":"de0943cf","chunk-5ff1ff24":"c36a3f81","chunk-6a425216":"85f93681","chunk-6b0c1b67":"7c69ef07","chunk-6daab55b":"edc99c47","chunk-962308a6":"1ed9036c","chunk-a63994b0":"b1387bcb","chunk-e21965d4":"bc093d33"}[e]+".js"}function r(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(e){var t=[],n={"chunk-1f107140":1,"chunk-0045a524":1,"chunk-6a425216":1,"chunk-6b0c1b67":1,"chunk-962308a6":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var c="css/"+({}[e]||e)+"."+{"chunk-1f107140":"8e0b7fc6","chunk-6203ffeb":"31d6cfe0","chunk-00016e03":"31d6cfe0","chunk-0045a524":"65d18ea0","chunk-06a600cd":"31d6cfe0","chunk-0bdb83b2":"31d6cfe0","chunk-2542e4b8":"31d6cfe0","chunk-2d0c7742":"31d6cfe0","chunk-3c09b457":"31d6cfe0","chunk-3f18affa":"31d6cfe0","chunk-444aeb76":"31d6cfe0","chunk-44cb69f2":"31d6cfe0","chunk-455bff20":"31d6cfe0","chunk-457d38ac":"31d6cfe0","chunk-508d52be":"31d6cfe0","chunk-5a84a08a":"31d6cfe0","chunk-5ff1ff24":"31d6cfe0","chunk-6a425216":"6be402e0","chunk-6b0c1b67":"49347e09","chunk-6daab55b":"31d6cfe0","chunk-962308a6":"58e85026","chunk-a63994b0":"31d6cfe0","chunk-e21965d4":"31d6cfe0"}[e]+".css",o=r.p+c,s=document.getElementsByTagName("link"),l=0;l<s.length;l++){var i=s[l],u=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(u===c||u===o))return t()}var b=document.getElementsByTagName("style");for(l=0;l<b.length;l++){i=b[l],u=i.getAttribute("data-href");if(u===c||u===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var c=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=c,delete a[e],d.parentNode.removeChild(d),n(s)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[e]=0})));var c=o[e];if(0!==c)if(c)t.push(c[2]);else{var s=new Promise((function(t,n){c=o[e]=[t,n]}));t.push(c[2]=s);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.src=l(e);var b=new Error;i=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",b.name="ChunkLoadError",b.type=c,b.request=a,n[1](b)}o[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(t)},r.m=e,r.c=c,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(n,c,function(t){return e[t]}.bind(null,c));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/wefix-admin-gp/",r.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var b=0;b<i.length;b++)t(i[b]);var d=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},"13f8":function(e,t,n){"use strict";n("eb16")},"1b3d":function(e,t,n){"use strict";n.r(t);const c=()=>({authorized:!1,roles:[],id:null,username:null,fullName:null}),a=c(),o={user:e=>e},s={RESET(e){const t=c();Object.keys(e).forEach(n=>{e[n]=t[n]})},SET_STATE(e,t){e=Object.assign(e,t)}},l={reset({commit:e}){e("RESET")},setUser({commit:e},t){e("SET_STATE",{id:t.id,username:t.username,fullName:t.fullName,roles:t.roles,authorized:!0}),localStorage.setItem("authToken",t.token),localStorage.setItem("user",JSON.stringify({id:t.id,username:t.username,fullName:t.fullName,roles:t.roles}))},loadCurrentAccount({commit:e}){const t=JSON.parse(localStorage.getItem("user"));t&&e("SET_STATE",{id:t.id,username:t.username,fullName:t.fullName,roles:t.roles,authorized:!0})},logout({commit:e}){e("SET_STATE",c()),localStorage.clear()}};t["default"]={namespaced:!0,state:a,getters:o,mutations:s,actions:l}},2971:function(e,t,n){},"32c5":function(e,t,n){"use strict";n("8414")},4360:function(e,t,n){"use strict";var c=n("5502");const a=n("7067"),o={};a.keys().forEach(e=>{const t=e.replace(/\.\/|\.store\.js/g,"").replace(/^\w/,e=>e.toUpperCase());o[t]=a(e).default||a(t)});var s=o;t["a"]=Object(c["a"])({modules:s,actions:{reset({commit:e}){Object.keys(s).forEach(t=>{e(t+"/RESET")})}}})},4678:function(e,t,n){var c={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}a.keys=function(){return Object.keys(c)},a.resolve=o,e.exports=a,a.id="4678"},"526c":function(e,t,n){"use strict";n.r(t);const c=()=>({isMobileView:!1,isMobileMenuOpen:!1,isTabletView:!1,isMenuCollapsed:!1}),a=c(),o={settings:e=>e},s={CHANGE_SETTING(e,t){e[t.setting]=t.value},RESET(e){const t=c();Object.keys(e).forEach(n=>{e[n]=t[n]})}},l={reset({commit:e}){e("RESET")},changeSetting({commit:e},t){e("CHANGE_SETTING",t)}};t["default"]={namespaced:!0,state:a,getters:o,mutations:s,actions:l}},"56d7":function(e,t,n){"use strict";n.r(t);n("6ba6");var c=n("5efb"),a=(n("f2ef"),n("3af3")),o=(n("5704"),n("b558")),s=(n("1a62"),n("98c5")),l=(n("fbd8"),n("55f1")),r=(n("55ec"),n("a79d")),i=(n("6d2a"),n("9571")),u=(n("ab9e"),n("2c92")),b=(n("af3d"),n("27fd")),d=(n("9d5c"),n("a600")),f=(n("c68a"),n("0020")),m=(n("b97c3"),n("7571")),j=(n("2ef0"),n("9839")),p=(n("cd17"),n("ed3b")),h=(n("9a33"),n("f933")),O=(n("eb14"),n("39ab")),k=(n("922d"),n("09d9")),g=(n("dc5a"),n("56cd")),v=(n("7f6b"),n("8592")),y=(n("06f4"),n("fc25")),C=(n("d88f"),n("fe2b")),w=(n("5783"),n("59a5")),E=n("7a23"),S=n("323e"),M=n.n(S),N=n("0192");function B(e,t,n,c,a,o){const s=Object(E["resolveComponent"])("router-view");return Object(E["openBlock"])(),Object(E["createBlock"])(s)}var V=n("6605"),x=n("5502"),P=n("4328"),_=n.n(P),z={name:"App",setup(){const e=Object(V["c"])(),t=Object(V["d"])(),n=Object(x["b"])(),c=Object(E["computed"])(()=>e.meta.title),a=Object(E["computed"])(()=>n.getters["User/user"].authorized),o=Object(E["computed"])(()=>e);return Object(E["onMounted"])(()=>{n.dispatch("User/loadCurrentAccount")}),Object(E["watch"])(c,e=>{document.title=(e+" | "||!1)+"WeFixCBS Admin"}),Object(E["watch"])(a,n=>{if(n){const n=_.a.parse(o.value.fullPath.split("?")[1],{ignoreQueryPrefix:!0});n.redirect?t.push(n.redirect):"/auth/login"!==e.path&&"/auth/login/"!==e.path||t.push("/")}}),{authorized:a}}},T=n("d959"),I=n.n(T);const D=I()(z,[["render",B]]);var U=D,L=n("a18c"),A=n("4360");n("f284");const F=Object(E["createApp"])(U);F.use(A["a"]).use(L["a"]),F.use(c["a"]).use(a["a"]).use(o["a"]).use(s["a"]).use(l["a"]).use(r["a"]).use(i["a"]).use(u["a"]).use(b["a"]).use(d["a"]).use(f["a"]).use(m["a"]).use(j["b"]).use(p["a"]).use(h["a"]).use(O["a"]).use(k["a"]).use(g["a"]).use(v["a"]).use(y["a"]).use(C["a"]).use(w["a"]),F.use(N["a"]),F.config.globalProperties.$nprogress=M.a,F.config.globalProperties.$notification=g["a"],F.config.globalProperties.$modal=p["a"],F.mount("#app")},"69ff":function(e,t,n){"use strict";n("94b4")},7067:function(e,t,n){var c={"./settings.store.js":"526c","./user.store.js":"1b3d"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}a.keys=function(){return Object.keys(c)},a.resolve=o,e.exports=a,a.id="7067"},"776e":function(e,t,n){},8414:function(e,t,n){},"8a3e":function(e,t,n){"use strict";n("776e")},"923e":function(e,t,n){"use strict";n("eb1b")},"94b4":function(e,t,n){},"9bdb":function(e,t,n){"use strict";n("2971")},a18c:function(e,t,n){"use strict";n("caad");var c=n("6605"),a=n("7a23");function o(e,t,n,c,o,s){const l=Object(a["resolveComponent"])("router-view");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",null,[Object(a["createVNode"])(l)])}var s={name:"AuthLayout"},l=n("d959"),r=n.n(l);const i=r()(s,[["render",o]]);var u=i;function b(e,t,n,c,o,s){const l=Object(a["resolveComponent"])("side-menu"),r=Object(a["resolveComponent"])("topbar"),i=Object(a["resolveComponent"])("a-layout-header"),u=Object(a["resolveComponent"])("router-view"),b=Object(a["resolveComponent"])("a-layout-content"),d=Object(a["resolveComponent"])("Footer"),f=Object(a["resolveComponent"])("a-layout-footer"),m=Object(a["resolveComponent"])("a-layout");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",null,[Object(a["createVNode"])(m,{class:"app__layout"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(l),Object(a["createVNode"])(m,{class:"app__right_layout"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(i,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(r)]),_:1}),Object(a["createVNode"])(b,{class:"app__layout__content"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(u,null,{default:Object(a["withCtx"])(({Component:e})=>[Object(a["createVNode"])(a["Transition"],{mode:"out-in",name:"slide-fadein-up"},{default:Object(a["withCtx"])(()=>[(Object(a["openBlock"])(),Object(a["createBlock"])(Object(a["resolveDynamicComponent"])(e)))]),_:2},1024)]),_:1})]),_:1}),Object(a["createVNode"])(f,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(d)]),_:1})]),_:1})]),_:1})])}var d=n("5502");const f=e=>(Object(a["pushScopeId"])("data-v-6a16d944"),e=e(),Object(a["popScopeId"])(),e),m={key:1},j=f(()=>Object(a["createElementVNode"])("i",{class:"fe fe-menu"},null,-1)),p=[j];function h(e,t,n,c,o,s){const l=Object(a["resolveComponent"])("menu-left"),r=Object(a["resolveComponent"])("a-drawer");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[c.settings.isMobileView?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createBlock"])(l,{key:0})),c.settings.isMobileView?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",m,[Object(a["createElementVNode"])("div",{class:"mobile-menu-toggler",onClick:t[0]||(t[0]=(...e)=>c.toggleMobileMenu&&c.toggleMobileMenu(...e))},p),Object(a["createVNode"])(r,{closable:!1,visible:c.settings.isMobileMenuOpen,placement:"left",onClose:c.toggleMobileMenu,"wrap-class-name":"mobile-menu"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(l)]),_:1},8,["visible","onClose"])])):Object(a["createCommentVNode"])("",!0)],64)}const O={class:"d-flex align-items-center justify-content-center"},k={key:0,class:"brand-text"},g={key:0,class:"fe fe-chevrons-left"},v={key:1,class:"fe fe-chevrons-right"},y={key:0,class:"category-divider"},C={class:"category-title"},w={class:"version-name"};function E(e,t,n,c,o,s){const l=Object(a["resolveComponent"])("a-menu-item-group"),r=Object(a["resolveComponent"])("item"),i=Object(a["resolveComponent"])("sub-menu"),u=Object(a["resolveComponent"])("a-menu"),b=Object(a["resolveComponent"])("perfect-scrollbar"),d=Object(a["resolveComponent"])("a-layout-sider");return Object(a["openBlock"])(),Object(a["createBlock"])(d,{class:"side-menu",width:c.menuWidth,collapsible:!c.settings.isMobileView,collapsed:c.settings.isMenuCollapsed&&!c.settings.isMobileView,trigger:null},{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(["menu-outer",{"menu-has-shadow":!c.settings.isMobileView}]),style:Object(a["normalizeStyle"])({width:c.menuWidth+"px"})},[Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(["logo-container d-flex",{"flex-column flex-column-reverse":c.settings.isMenuCollapsed}]),style:Object(a["normalizeStyle"])({height:c.getLogoContainerHeight+"px"})},[Object(a["createElementVNode"])("div",O,[Object(a["createElementVNode"])("img",{src:"resources/logo.png",alt:"WeFixCBS",class:"brand-logo",style:Object(a["normalizeStyle"])([c.settings.isMenuCollapsed&&{margin:"0px"}])},null,4),c.settings.isMenuCollapsed?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",k,"WeFixCBS"))]),c.settings.isMobileView?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{key:0,class:"menu-toggler",onClick:t[0]||(t[0]=(...e)=>c.onCollapse&&c.onCollapse(...e)),style:Object(a["normalizeStyle"])([c.settings.isMenuCollapsed&&{margin:"0px"}])},[c.settings.isMenuCollapsed?(Object(a["openBlock"])(),Object(a["createElementBlock"])("i",v)):(Object(a["openBlock"])(),Object(a["createElementBlock"])("i",g))],4))],6),Object(a["createVNode"])(b,{style:Object(a["normalizeStyle"])({height:`calc(100% - ${c.footerHeight+c.getLogoContainerHeight}px)`})},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(u,{class:"navigation",mode:"inline","inline-collapsed":!1,collapsed:c.settings.isMenuCollapsed,"open-keys":c.openKeys,"onUpdate:open-keys":t[1]||(t[1]=e=>c.openKeys=e),"selected-keys":c.selectedKeys},{default:Object(a["withCtx"])(()=>[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(c.menuData,(e,t)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],{key:e.key},[e.category&&c.checkRole(e)?(Object(a["openBlock"])(),Object(a["createBlock"])(l,{class:"item-category",key:t},Object(a["createSlots"])({default:Object(a["withCtx"])(()=>[c.settings.isMenuCollapsed?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",y)):Object(a["createCommentVNode"])("",!0)]),_:2},[c.settings.isMenuCollapsed?void 0:{name:"title",fn:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("span",C,Object(a["toDisplayString"])(e.title),1)])}]),1024)):!e.children&&c.checkRole(e)?(Object(a["openBlock"])(),Object(a["createBlock"])(r,{key:1,"menu-info":e},null,8,["menu-info"])):c.checkRole(e)?(Object(a["openBlock"])(),Object(a["createBlock"])(i,{"menu-info":e,key:e.key},null,8,["menu-info"])):Object(a["createCommentVNode"])("",!0)],64))),128))]),_:1},8,["collapsed","open-keys","selected-keys"])]),_:1},8,["style"]),Object(a["createElementVNode"])("div",{class:"menu-footer",style:Object(a["normalizeStyle"])({height:c.footerHeight+"px"})},[Object(a["createElementVNode"])("span",w,Object(a["toDisplayString"])(c.settings.isMenuCollapsed?"v":"Version ")+" 1.0.0 ",1)],4)],6)]),_:1},8,["width","collapsible","collapsed"])}n("13d5");var S=[{category:!0,title:"Menu  Utama"},{title:"Dashboard",key:"@dashboard",url:"/dashboard",icon:"fe fe-airplay"},{title:"Chat",key:"@chat",url:"/chatting",icon:"fe fe-message-square",roles:["Marketing","Pelayanan Pelanggan"]},{title:"Master Data",key:"@masterdata",url:"/masterdata",icon:"fe fe-database",roles:["Marketing"],children:[{title:"Kategori",key:"@category",url:"/categories"},{title:"Banner",key:"@banner",url:"/banners"},{title:"Feedback Question",key:"@feedbackQuestion",url:"/feedback-questions"}]},{title:"Offer",key:"@offer",url:"/offers",icon:"fe fe-arrow-up-circle",roles:["Pelayanan Pelanggan"]},{title:"Order",key:"@order",url:"/orders",icon:"fe fe-list",roles:["Pelayanan Pelanggan","Marketing","Teknisi"]},{category:!0,title:"User",roles:["Super User","Marketing","Pelayanan Pelanggan"]},{title:"Staff",key:"@staff",url:"/staffs",icon:"fe fe-users",roles:["Super User"]},{title:"Customer",key:"@customer",url:"/customers",icon:"fe fe-users",roles:["Marketing","Pelayanan Pelanggan"]}];const M=e=>(Object(a["pushScopeId"])("data-v-56deb3d1"),e=e(),Object(a["popScopeId"])(),e),N={key:0},B={class:"title"},V={key:1,style:{display:"flex","align-items":"center"}},x=M(()=>Object(a["createElementVNode"])("i",{class:"icon fa fa-circle",style:{"font-size":"5px"}},null,-1)),P={class:"title"},_={key:1},z={class:"title"};function T(e,t,n,c,o,s){const l=Object(a["resolveComponent"])("router-link"),r=Object(a["resolveComponent"])("a-menu-item");return Object(a["openBlock"])(),Object(a["createBlock"])(r,Object(a["mergeProps"])({key:n.menuInfo.key},e.$props,{disabled:n.menuInfo.disabled}),{default:Object(a["withCtx"])(()=>[n.menuInfo.url?(Object(a["openBlock"])(),Object(a["createBlock"])(l,{key:0,to:n.menuInfo.url},{default:Object(a["withCtx"])(()=>[n.menuInfo.icon?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",N,[n.menuInfo.icon?(Object(a["openBlock"])(),Object(a["createElementBlock"])("i",{key:0,class:Object(a["normalizeClass"])(["icon",n.menuInfo.icon])},null,2)):Object(a["createCommentVNode"])("",!0),Object(a["createElementVNode"])("span",B,Object(a["toDisplayString"])(n.menuInfo.title),1)])):(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",V,[x,Object(a["createElementVNode"])("span",P,Object(a["toDisplayString"])(n.menuInfo.title),1)]))]),_:1},8,["to"])):(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",_,[n.menuInfo.icon?(Object(a["openBlock"])(),Object(a["createElementBlock"])("i",{key:0,class:Object(a["normalizeClass"])(["icon",n.menuInfo.icon])},null,2)):Object(a["createCommentVNode"])("",!0),Object(a["createElementVNode"])("span",z,Object(a["toDisplayString"])(n.menuInfo.title),1)]))]),_:1},16,["disabled"])}n("fbd8");var I=n("55f1"),D={name:"Item",props:{...I["a"].Item.props,menuInfo:{type:Object,default:()=>{}},styles:{type:Object,default:()=>{}}}};n("13f8");const U=r()(D,[["render",T],["__scopeId","data-v-56deb3d1"]]);var L=U;const A={class:"title"};function F(e,t,n,c,o,s){const l=Object(a["resolveComponent"])("item"),r=Object(a["resolveComponent"])("sub-menu"),i=Object(a["resolveComponent"])("a-sub-menu");return Object(a["openBlock"])(),Object(a["createBlock"])(i,null,{title:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("span",null,[n.menuInfo.icon?(Object(a["openBlock"])(),Object(a["createElementBlock"])("i",{key:0,class:Object(a["normalizeClass"])(["icon",n.menuInfo.icon])},null,2)):Object(a["createCommentVNode"])("",!0),Object(a["createElementVNode"])("span",A,Object(a["toDisplayString"])(n.menuInfo.title),1)])]),default:Object(a["withCtx"])(()=>[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(n.menuInfo.children,e=>(Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[e.children||e.divider?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createBlock"])(l,{key:e.key,"menu-info":e},null,8,["menu-info"])),e.children?(Object(a["openBlock"])(),Object(a["createBlock"])(r,{key:e.key,"menu-info":e},null,8,["menu-info"])):Object(a["createCommentVNode"])("",!0)],64))),256))]),_:1})}var R={name:"SubMenu",components:{Item:L},isSubMenu:!0,props:{...I["a"].SubMenu.props,menuInfo:{type:Object,default:()=>{}},styles:{type:Object,default:()=>{}}}};const q=r()(R,[["render",F]]);var H=q,K={name:"MenuLeft",components:{Item:L,SubMenu:H},setup(){const e=256,t=80,n=60,o=100,s=50,l=Object(c["c"])(),r=Object(d["b"])(),i=Object(a["ref"])([]),u=Object(a["ref"])([]),b=Object(a["computed"])(()=>r.getters["Settings/settings"].isMenuCollapsed),f=Object(a["computed"])(()=>r.getters["Settings/settings"]),m=Object(a["computed"])(()=>l.path),j=Object(a["computed"])(()=>S),p=Object(a["computed"])(()=>b.value?t:e),h=Object(a["computed"])(()=>b.value?o:n),O=()=>{r.dispatch("Settings/changeSetting",{setting:"isMenuCollapsed",value:!b.value})},k=(e,t,n)=>{const c=n.replace(/^\/([^\/]*).*$/,"$1");for(let a of e){if(!a[t])continue;const e=a[t];if("/"+c===e)return a}},g=()=>{const e=(t,n)=>t.reduce((t,c)=>(t.push(c),Array.isArray(c[n])?t.concat(e(c[n],n)):t),[]),t=k(e(j.value,"children"),"url",m.value);t&&(u.value=[t.key])};Object(a["onMounted"])(()=>{g()}),Object(a["watch"])(m,()=>{g()}),Object(a["watch"])(b,()=>i.value=[]);const v=Object(a["computed"])(()=>r.getters["User/user"].roles),y=e=>!e.roles||e.roles.some(e=>v.value.includes(e));return{settings:f,leftMenuWidth:e,collapsedLeftMenuWidth:t,getLogoContainerHeight:h,footerHeight:s,openKeys:i,selectedKeys:u,menuData:j,menuWidth:p,onCollapse:O,checkRole:y}}};n("69ff");const W=r()(K,[["render",E],["__scopeId","data-v-23c1cfe4"]]);var $=W,G={components:{MenuLeft:$},name:"SideMenu",setup(){const e=Object(d["b"])(),t=Object(a["computed"])(()=>e.getters["Settings/settings"]),n=()=>{e.dispatch("Settings/changeSetting",{setting:"isMobileMenuOpen",value:!t.value["isMobileMenuOpen"]})};return{settings:t,toggleMobileMenu:n}}};n("32c5");const J=r()(G,[["render",h],["__scopeId","data-v-6a16d944"]]);var Q=J;const X={class:"topbar d-flex justify-content-end"};function Y(e,t,n,c,o,s){const l=Object(a["resolveComponent"])("user-menu");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",X,[Object(a["createVNode"])(l)])}const Z=e=>(Object(a["pushScopeId"])("data-v-33aa73c8"),e=e(),Object(a["popScopeId"])(),e),ee={class:"user-menu-dropdown"},te=Z(()=>Object(a["createElementVNode"])("i",{class:"fe fe-user"},null,-1)),ne=Z(()=>Object(a["createElementVNode"])("strong",null,"Hello, ",-1)),ce={style:{"white-space":"normal",width:"100%"}},ae=Z(()=>Object(a["createElementVNode"])("strong",null,"Role : ",-1)),oe=Z(()=>Object(a["createElementVNode"])("div",null,[Object(a["createElementVNode"])("i",{class:"fe fe-log-out mr-3"}),Object(a["createElementVNode"])("span",null,"Log out")],-1));function se(e,t,n,c,o,s){const l=Object(a["resolveComponent"])("a-avatar"),r=Object(a["resolveComponent"])("a-menu-item"),i=Object(a["resolveComponent"])("a-menu-divider"),u=Object(a["resolveComponent"])("a-menu"),b=Object(a["resolveComponent"])("a-dropdown");return Object(a["openBlock"])(),Object(a["createBlock"])(b,{trigger:"click",placement:"bottomRight"},{overlay:Object(a["withCtx"])(()=>[Object(a["createVNode"])(u,{class:"user-menu-overlay"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(r,null,{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("div",null,[ne,Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(c.user.fullName),1)]),Object(a["createElementVNode"])("div",ce,[ae,Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(c.roles),1)])]),_:1}),Object(a["createVNode"])(i),Object(a["createVNode"])(r,{onClick:c.logout},{default:Object(a["withCtx"])(()=>[oe]),_:1},8,["onClick"])]),_:1})]),default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("div",ee,[Object(a["createVNode"])(l,{shape:"square",size:"large",class:"avatar"},{icon:Object(a["withCtx"])(()=>[te]),_:1})])]),_:1})}var le={name:"UserMenu",setup(){const e=Object(d["b"])(),t=Object(c["d"])(),n=Object(a["computed"])(()=>e.getters["User/user"]),o=Object(a["computed"])(()=>n.value.roles.join(", ")),s=()=>{e.dispatch("User/logout"),t.push("/auth/login")};return{logout:s,user:n,roles:o}}};n("9bdb");const re=r()(le,[["render",se],["__scopeId","data-v-33aa73c8"]]);var ie=re,ue={components:{UserMenu:ie},name:"Topbar"};n("8a3e");const be=r()(ue,[["render",Y],["__scopeId","data-v-1531c368"]]);var de=be;const fe=e=>(Object(a["pushScopeId"])("data-v-90fb3aea"),e=e(),Object(a["popScopeId"])(),e),me={class:"footer"},je=fe(()=>Object(a["createElementVNode"])("div",{class:"footer-inner"},[Object(a["createElementVNode"])("div",{class:"mb-2 d-flex align-items-center"},[Object(a["createElementVNode"])("strong",{class:"mr-2"},"WeFixCBS"),Object(a["createElementVNode"])("span",{class:"text-gray-6"},"© 2021")])],-1)),pe=[je];function he(e,t,n,c,o,s){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",me,pe)}var Oe={name:"Footer"};n("923e");const ke=r()(Oe,[["render",he],["__scopeId","data-v-90fb3aea"]]);var ge=ke,ve={components:{SideMenu:Q,Topbar:de,Footer:ge},name:"MainLayout",setup(){const e=Object(d["b"])(),t=Object(a["computed"])(()=>e.getters["Settings/settings"]),n=Object(a["ref"])(0),c=Object(a["ref"])(!1),o=()=>{const n=!t.value.isMobileMenuOpen;e.dispatch("Settings/changeSetting",{setting:"isMobileMenuOpen",value:n})},s=(t=!1,n=!1)=>{e.dispatch("Settings/changeSetting",{setting:"isMobileView",value:t}),e.dispatch("Settings/changeSetting",{setting:"isTabletView",value:n}),t&&e.dispatch("Settings/changeSetting",{setting:"isMenuCollapsed",value:!1})},l=()=>{r(!1)},r=(n=!1)=>{const c=t.value.isMobileView,a=t.value.isTabletView,o=window.innerWidth,l={next:{mobile:o<768,tablet:o<992,desktop:!(o<768)&&!(o<992)},prev:{mobile:c,tablet:a,desktop:!c&&!a}};l.next.desktop&&(l.next.desktop!==l.prev.desktop||n)&&s(!1,!1),!l.next.tablet||l.next.mobile||l.next.tablet===l.prev.tablet&&!n||(s(!1,!0),e.dispatch("Settings/changeSetting",{setting:"isMenuCollapsed",value:!0})),l.next.mobile&&(l.next.mobile!==l.prev.mobile||n)&&s(!0,!1)},i=()=>{const e=e=>e.changedTouches?e.changedTouches[0]:e;document.addEventListener("touchstart",t=>{const a=e(t).clientX;n.value=a,c.value=a>70},{passive:!1}),document.addEventListener("touchmove",t=>{const a=e(t).clientX,s=n.value;a-s>50&&!c.value&&(o(),c.value=!0)},{passive:!1})};Object(a["onMounted"])(()=>i()),Object(a["onMounted"])(()=>r(!0)),Object(a["onMounted"])(()=>window.addEventListener("resize",l))}};const ye=r()(ve,[["render",b]]);var Ce=ye,we=n("4360");const Ee=Object(c["a"])({base:"/wefix-admin-gp/",history:Object(c["b"])(),routes:[{path:"/",name:"home",redirect:"/dashboard",component:Ce,meta:{authRequired:!0},children:[{path:"/dashboard",meta:{title:"Dashboard"},component:()=>Promise.all([n.e("chunk-6203ffeb"),n.e("chunk-962308a6")]).then(n.bind(null,"9406"))},{path:"/staffs",meta:{title:"Staff",roles:["Super User"]},component:()=>Promise.all([n.e("chunk-6203ffeb"),n.e("chunk-e21965d4")]).then(n.bind(null,"b97d"))},{path:"/staffs/new",meta:{title:"Tambah Staff",roles:["Super User"]},component:()=>Promise.all([n.e("chunk-6203ffeb"),n.e("chunk-0bdb83b2")]).then(n.bind(null,"d953"))},{path:"/staffs/view/:id",meta:{title:"Detail Staff",roles:["Super User"]},component:()=>Promise.all([n.e("chunk-6203ffeb"),n.e("chunk-455bff20")]).then(n.bind(null,"cf18")),props:!0},{path:"/categories",meta:{title:"Detail Kategori",roles:["Marketing"]},component:()=>Promise.all([n.e("chunk-6203ffeb"),n.e("chunk-5ff1ff24")]).then(n.bind(null,"a192"))},{path:"/categories/new",meta:{title:"Tambah Kategori",roles:["Marketing"]},component:()=>Promise.all([n.e("chunk-6203ffeb"),n.e("chunk-457d38ac")]).then(n.bind(null,"405f"))},{path:"/categories/view/:id",meta:{title:"Detail Kategori",roles:["Marketing"]},component:()=>Promise.all([n.e("chunk-6203ffeb"),n.e("chunk-444aeb76")]).then(n.bind(null,"7868")),props:!0},{path:"/customers",meta:{title:"Pelanggan",roles:["Marketing","Pelayanan Pelanggan"]},component:()=>Promise.all([n.e("chunk-6203ffeb"),n.e("chunk-2542e4b8")]).then(n.bind(null,"aedf"))},{path:"/customers/view/:id",meta:{title:"Detail Customer",roles:["Marketing","Pelayanan Pelanggan"]},component:()=>Promise.all([n.e("chunk-6203ffeb"),n.e("chunk-508d52be")]).then(n.bind(null,"fe97")),props:!0},{path:"/banners",meta:{title:"Banner",roles:["Marketing"]},component:()=>Promise.all([n.e("chunk-6203ffeb"),n.e("chunk-6daab55b")]).then(n.bind(null,"432a"))},{path:"/banners/new",meta:{title:"Banner",roles:["Marketing"]},component:()=>Promise.all([n.e("chunk-6203ffeb"),n.e("chunk-44cb69f2")]).then(n.bind(null,"92f3"))},{path:"/banners/view/:id",meta:{title:"Detail Banner",roles:["Marketing"]},component:()=>Promise.all([n.e("chunk-6203ffeb"),n.e("chunk-3f18affa")]).then(n.bind(null,"5205")),props:!0},{path:"/orders",meta:{title:"Orderan",roles:["Pelayanan Pelanggan","Marketing","Teknisi"]},component:()=>Promise.all([n.e("chunk-6203ffeb"),n.e("chunk-00016e03")]).then(n.bind(null,"634a"))},{path:"/orders/view/:id",meta:{title:"Detail Order",roles:["Pelayanan Pelanggan","Marketing","Teknisi"]},component:()=>Promise.all([n.e("chunk-6203ffeb"),n.e("chunk-6b0c1b67")]).then(n.bind(null,"aa19")),props:!0},{path:"/orders/new",meta:{title:"Buat Order",roles:["Pelayanan Pelanggan","Marketing","Teknisi"]},component:()=>Promise.all([n.e("chunk-6203ffeb"),n.e("chunk-3c09b457")]).then(n.bind(null,"cd3a"))},{path:"/feedback-questions",meta:{title:"Order Feedback Question",roles:["Marketing"]},component:()=>Promise.all([n.e("chunk-6203ffeb"),n.e("chunk-2d0c7742")]).then(n.bind(null,"514d"))},{path:"/offers",meta:{title:"Offer",roles:["Pelayanan Pelanggan"]},component:()=>Promise.all([n.e("chunk-6203ffeb"),n.e("chunk-5a84a08a")]).then(n.bind(null,"af1a"))},{path:"/offers/new",meta:{title:"Offer Baru",roles:["Pelayanan Pelanggan"]},component:()=>Promise.all([n.e("chunk-6203ffeb"),n.e("chunk-a63994b0")]).then(n.bind(null,"83c4"))},{path:"/offers/view/:id",meta:{title:"Detail Offer",roles:["Pelayanan Pelanggan"]},component:()=>Promise.all([n.e("chunk-6203ffeb"),n.e("chunk-06a600cd")]).then(n.bind(null,"ce6e")),props:!0},{path:"/chatting",meta:{title:"Chat",roles:["Marketing","Pelayanan Pelanggan"]},component:()=>Promise.all([n.e("chunk-6203ffeb"),n.e("chunk-0045a524")]).then(n.bind(null,"6f29"))}]},{path:"/auth",component:u,redirect:"/auth/login",children:[{path:"/auth/login",meta:{title:"Login"},component:()=>Promise.all([n.e("chunk-6203ffeb"),n.e("chunk-6a425216")]).then(n.bind(null,"a135"))}]},{path:"/system/404",name:"404NotFound",meta:{title:"Error 404"},component:()=>n.e("chunk-1f107140").then(n.bind(null,"af56"))},{path:"/:pathMatch(.*)*",redirect:{name:"404NotFound"}}]});Ee.beforeEach((e,t,n)=>{if("/auth/login"===e.path)we["a"].getters["User/user"].authorized?n({path:"/dashboard"}):n();else if(e.matched.some(e=>e.meta.authRequired))if(we["a"].getters["User/user"].authorized){const t=we["a"].getters["User/user"];if(e.meta.roles&&!e.meta.roles.some(e=>t.roles.includes(e)))return n({name:"404NotFound"});n()}else n({path:"/auth/login",query:{redirect:e.fullPath}});else n()});t["a"]=Ee},eb16:function(e,t,n){},eb1b:function(e,t,n){},f284:function(e,t,n){}});