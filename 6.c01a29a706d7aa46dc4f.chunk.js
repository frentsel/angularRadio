webpackJsonp([6],{QN5q:function(n,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=l("WT6e"),u=l("Km6A"),o=function(){function n(n){this.http=n,this.countries=[],this.http.getJSON("https://frentsel.github.io/angularRadio/assets/stations.json").then(this.preparingData.bind(this))}return n.prototype.preparingData=function(n){var t=this;this.countries=n.reduce(function(n,t){return n[t.country]||(n[t.country]=0),n[t.country]+=1,n},{}),this.countries=Object.keys(this.countries).map(function(n){return{country:n,count:t.countries[n]}})},n}(),i=function(){},r=l("bfOx"),c=l("Xjw4"),a=e["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{padding:20px;display:block}h1[_ngcontent-%COMP%]{font-size:20px;padding:0 0 14px;color:#358}.label-list-item[_ngcontent-%COMP%]{text-decoration:none;background:#509895;color:#fff;padding:4px 8px;margin:0 5px 5px 0;display:inline-block;border-radius:3px;font-size:14px}"]],data:{}});function d(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,2,"a",[["class","label-list-item"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,t,l){var u=!0;return"click"===t&&(u=!1!==e["\u0275nov"](n,1).onClick(l.button,l.ctrlKey,l.metaKey,l.shiftKey)&&u),u},null,null)),e["\u0275did"](1,671744,null,0,r.m,[r.k,r.a,c.g],{routerLink:[0,"routerLink"]},null),(n()(),e["\u0275ted"](2,null,["\n    "," - ","\n  "]))],function(n,t){n(t,1,0,e["\u0275inlineInterpolate"](1,"/list/country/",t.context.$implicit.country,""))},function(n,t){n(t,0,0,e["\u0275nov"](t,1).target,e["\u0275nov"](t,1).href),n(t,2,0,t.context.$implicit.country,t.context.$implicit.count)})}function s(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\n  "])),(n()(),e["\u0275and"](16777216,null,null,1,null,d)),e["\u0275did"](3,802816,null,0,c.i,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),e["\u0275ted"](-1,null,["\n"]))],function(n,t){n(t,3,0,t.component.countries)},null)}function p(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Country List"])),(n()(),e["\u0275ted"](-1,null,["\n"])),(n()(),e["\u0275and"](16777216,null,null,1,null,s)),e["\u0275did"](4,16384,null,0,c.j,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,t){n(t,4,0,t.component.countries)},null)}var f=e["\u0275ccf"]("ng-component",o,function(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,p,a)),e["\u0275did"](1,49152,null,0,o,[u.a],null,null)],null,null)},{},{},[]);l.d(t,"CountriesModuleNgFactory",function(){return m});var m=e["\u0275cmf"](i,[],function(n){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[f]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,c.l,c.k,[e.LOCALE_ID,[2,c.p]]),e["\u0275mpd"](512,c.b,c.b,[]),e["\u0275mpd"](512,r.n,r.n,[[2,r.s],[2,r.k]]),e["\u0275mpd"](512,i,i,[]),e["\u0275mpd"](1024,r.i,function(){return[[{path:"**",component:o}]]},[])])})}});