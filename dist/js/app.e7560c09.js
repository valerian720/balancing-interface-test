(function(){"use strict";var e={6437:function(e,t,o){var s=o(9242),a=o(3396);function n(e,t){const o=(0,a.up)("router-link"),s=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("nav",null,[(0,a.Wm)(o,{to:"/"},{default:(0,a.w5)((()=>[(0,a.Uk)("Home")])),_:1}),(0,a.Uk)(" | ")]),(0,a.Wm)(s)],64)}var r=o(89);const l={},i=(0,r.Z)(l,[["render",n]]);var c=i,d=o(5431);(0,d.z)("/balancing-interface-test/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var u=o(2483);const h={class:"home"};function f(e,t,o,s,n,r){const l=(0,a.up)("Ballancing");return(0,a.wg)(),(0,a.iD)("div",h,[(0,a.Wm)(l,{msg:"Welcome to Your Vue.js + TypeScript App"})])}var p=o(6520),m=o(7139);const v={class:""},g=(0,a._)("div",{class:"px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"},[(0,a._)("h1",{class:"display-4"},"Баллансировка"),(0,a._)("p",{class:"lead"}," Выберите в левой колонке пункты и их количество что бы в правой колонке появился итоговый балланс ")],-1),b={class:"row m-5 p-1"},y={class:"col m-1 p-1"},w={class:"card mb-4 box-shadow"},_=(0,a._)("div",{class:"card-header"},[(0,a._)("h4",{class:"my-0 font-weight-normal"},"Элементы")],-1),B={class:"card-body"},S={class:"list-unstyled mt-3 mb-4"},k={class:"row"},O={class:"col"},j=["onClick"],x=["onClick"],D=(0,a._)("hr",null,null,-1),P={class:"col m-1 p-1"},Z={class:"card mb-4 box-shadow"},C=(0,a._)("div",{class:"card-header"},[(0,a._)("h4",{class:"my-0 font-weight-normal"},"Итоговый баланс")],-1),z={class:"card-body"},H={class:"list-unstyled mt-3 mb-4"},R={class:"progress"},T=["aria-valuenow"],Y=["aria-valuenow"],A=["aria-valuenow"],E={class:"card mb-4 box-shadow"},F=(0,a._)("div",{class:"card-header"},[(0,a._)("h4",{class:"my-0 font-weight-normal"},"Информация")],-1),K={class:"card-body"},M={class:"list-unstyled mt-3 mb-4"},W={class:"list-unstyled"},N={class:"list-unstyled"},I=(0,a._)("hr",null,null,-1);function U(e,t,o,s,n,r){return(0,a.wg)(),(0,a.iD)("div",v,[g,(0,a._)("div",b,[(0,a._)("div",y,[(0,a._)("div",w,[_,(0,a._)("div",B,[(0,a._)("ul",S,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.armor,((t,o)=>((0,a.wg)(),(0,a.iD)("li",{key:o,class:"list-unstyled"},[(0,a._)("ul",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t,((e,t)=>((0,a.wg)(),(0,a.iD)("li",{key:t,class:"list-unstyled"},(0,m.zw)(t)+": "+(0,m.zw)(e),1)))),128))]),(0,a._)("div",k,[(0,a._)("div",O,[(0,a._)("button",{type:"button",onClick:o=>{t.IncreaseCount(),e.recalculateBallanse()},class:"btn btn-primary m-1 col-1"}," + ",8,j),(0,a._)("button",{type:"button",onClick:o=>{t.DecreaseCount(),e.recalculateBallanse()},class:"btn btn-primary m-1 col-1"}," - ",8,x)])]),D])))),128))])])])]),(0,a._)("div",P,[(0,a._)("div",Z,[C,(0,a._)("div",z,[(0,a._)("ul",H,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.displayedStatistics,((e,t)=>((0,a.wg)(),(0,a.iD)("li",{key:t,class:"list-unstyled"},(0,m.zw)(t)+" : "+(0,m.zw)(e.toFixed(2)),1)))),128))]),(0,a._)("div",R,[(0,a._)("div",{class:"progress-bar bg-danger",role:"progressbar",style:(0,m.j5)("width:"+e.displayedStatistics.healthBoost+"%"),"aria-valuenow":e.displayedStatistics.healthBoost,"aria-valuemin":"0","aria-valuemax":"100"},null,12,T),(0,a._)("div",{class:"progress-bar bg-success",role:"progressbar",style:(0,m.j5)("width:"+e.displayedStatistics.damageBoost+"%"),"aria-valuenow":e.displayedStatistics.damageBoost,"aria-valuemin":"0","aria-valuemax":"100"},null,12,Y),(0,a._)("div",{class:"progress-bar bg-info",role:"progressbar",style:(0,m.j5)("width:"+e.displayedStatistics.speedBoost+"%"),"aria-valuenow":e.displayedStatistics.speedBoost,"aria-valuemin":"0","aria-valuemax":"100"},null,12,A)])])]),(0,a._)("div",E,[F,(0,a._)("div",K,[(0,a._)("ul",M,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.armor,((e,t)=>((0,a.wg)(),(0,a.iD)("li",{key:t,class:"list-unstyled"},[(0,a._)("ul",null,[(0,a._)("li",W," Наименование : "+(0,m.zw)(e.name),1),(0,a._)("li",N," Количество : "+(0,m.zw)(e.amountSelected),1)]),I])))),128))])])])])])])}var q=o(7327),V=function(e,t,o,s){var a,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,o,s);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(r=(n<3?a(r):n>3?a(t,o,r):a(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};class G{constructor(e,t,o,s){(0,q.Z)(this,"name",void 0),(0,q.Z)(this,"healthBoost",void 0),(0,q.Z)(this,"damageBoost",void 0),(0,q.Z)(this,"speedBoost",void 0),(0,q.Z)(this,"amountSelected",void 0),this.amountSelected=0,this.name=e,[this.healthBoost,this.damageBoost,this.speedBoost]=[t,o,s]}IncreaseCount(){this.amountSelected++}DecreaseCount(){this.amountSelected>0&&this.amountSelected--}}class J{constructor(){(0,q.Z)(this,"totalPoints",100)}calc(e){let t={healthBoost:1,damageBoost:1,speedBoost:1};for(let s of e)t.healthBoost+=s.healthBoost*s.amountSelected,t.damageBoost+=s.damageBoost*s.amountSelected,t.speedBoost+=s.speedBoost*s.amountSelected;let o=t.damageBoost+t.healthBoost+t.speedBoost;return t.healthBoost=t.healthBoost/o*this.totalPoints,t.damageBoost=t.damageBoost/o*this.totalPoints,t.speedBoost=t.speedBoost/o*this.totalPoints,t}}let L=class extends p.w3{constructor(...e){super(...e),(0,q.Z)(this,"armor",void 0),(0,q.Z)(this,"statistics",void 0),(0,q.Z)(this,"displayedStatistics",{healthBoost:100/3,damageBoost:100/3,speedBoost:100/3}),(0,q.Z)(this,"msg",void 0)}data(){return{armor:[new G("alfa",1,2,1),new G("beta",0,0,2),new G("gamma",0,2,0),new G("delta",3,0,0)],statistics:new J}}recalculateBallanse(){this.displayedStatistics=this.statistics.calc(this.armor)}};L=V([(0,p.Ei)({props:{msg:String}})],L);var Q=L;const X=(0,r.Z)(Q,[["render",U]]);var $=X,ee=function(e,t,o,s){var a,n=arguments.length,r=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,o,s);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(r=(n<3?a(r):n>3?a(t,o,r):a(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r};let te=class extends p.w3{};te=ee([(0,p.Ei)({components:{Ballancing:$}})],te);var oe=te;const se=(0,r.Z)(oe,[["render",f]]);var ae=se;const ne=[{path:"/",name:"home",component:ae}],re=(0,u.p7)({history:(0,u.PO)("/balancing-interface-test/"),routes:ne});var le=re,ie=o(65),ce=(0,ie.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});o(2166);(0,s.ri)(c).use(ce).use(le).mount("#app")}},t={};function o(s){var a=t[s];if(void 0!==a)return a.exports;var n=t[s]={exports:{}};return e[s](n,n.exports,o),n.exports}o.m=e,function(){var e=[];o.O=function(t,s,a,n){if(!s){var r=1/0;for(d=0;d<e.length;d++){s=e[d][0],a=e[d][1],n=e[d][2];for(var l=!0,i=0;i<s.length;i++)(!1&n||r>=n)&&Object.keys(o.O).every((function(e){return o.O[e](s[i])}))?s.splice(i--,1):(l=!1,n<r&&(r=n));if(l){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[s,a,n]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,s){var a,n,r=s[0],l=s[1],i=s[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(a in l)o.o(l,a)&&(o.m[a]=l[a]);if(i)var d=i(o)}for(t&&t(s);c<r.length;c++)n=r[c],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(d)},s=self["webpackChunkbalancing_interface_test"]=self["webpackChunkbalancing_interface_test"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=o.O(void 0,[998],(function(){return o(6437)}));s=o.O(s)})();
//# sourceMappingURL=app.e7560c09.js.map