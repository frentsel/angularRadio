webpackJsonp([11],{NIAE:function(n,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var e=t("WT6e"),u=t("bfOx"),i=t("Km6A"),o=function(){function n(n,l){this.route=n,this.httpAppService=l}return n.prototype.filterAlbums=function(){this.albums=this.albums.filter(function(n){return"(null)"!==n.name&&n.image[2]["#text"]})},n.prototype.loadAlbums=function(){var n=this;this.route.parent.params.subscribe(function(){n.artist=window.location.pathname.split("/").slice(2,3)[0],n.httpAppService.getJSON("http://ws.audioscrobbler.com/2.0/",{method:"artist.gettopalbums",artist:n.artist,api_key:"02ec4e9d3a6dec29749f9d0a2cf3f598",limit:50,format:"json"}).then(function(l){n.albums=l.topalbums.album,n.filterAlbums()})})},n.prototype.ngOnInit=function(){this.loadAlbums()},n}(),a=function(){},r=t("Xjw4"),c=t("7vIb"),p=t("F2YG"),d=e["\u0275crt"]({encapsulation:0,styles:[["h1[_ngcontent-%COMP%]{font-size:20px;color:#358}.albums__wrapper[_ngcontent-%COMP%]{margin:15px 0;clear:both}.albums__wrapper[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%]{font-size:20px;margin-bottom:10px}.albums[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.albums__item[_ngcontent-%COMP%]{font-size:12px;background:#f9f9f9;border-radius:10px;padding:10px;width:110px;text-align:center;overflow:hidden;-webkit-box-shadow:0 1px 3px 1px #ece7e7;box-shadow:0 1px 3px 1px #ece7e7;margin-bottom:10px}.albums__item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-top:8px;float:left;max-width:100%;border-radius:50%;border:1px solid #fff}.albums__item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inherit;color:#4f7197;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-transform:uppercase;text-decoration:none}"]],data:{}});function m(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,11,"div",[["class","albums__item"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\n        "])),(n()(),e["\u0275eld"](2,0,null,null,2,"a",[],[[8,"title",0],[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e["\u0275nov"](n,3).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},null,null)),e["\u0275did"](3,671744,null,0,u.m,[u.k,u.a,r.g],{routerLink:[0,"routerLink"]},null),(n()(),e["\u0275ted"](4,null,["",""])),(n()(),e["\u0275ted"](-1,null,["\n        "])),(n()(),e["\u0275eld"](6,0,null,null,4,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e["\u0275nov"](n,7).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},null,null)),e["\u0275did"](7,671744,null,0,u.m,[u.k,u.a,r.g],{routerLink:[0,"routerLink"]},null),(n()(),e["\u0275ted"](-1,null,["\n          "])),(n()(),e["\u0275eld"](9,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\n        "])),(n()(),e["\u0275ted"](-1,null,["\n      "]))],function(n,l){n(l,3,0,e["\u0275inlineInterpolate"](2,"/artist/",l.context.$implicit.artist.name,"/album/",l.context.$implicit.name,"")),n(l,7,0,e["\u0275inlineInterpolate"](2,"/artist/",l.context.$implicit.artist.name,"/album/",l.context.$implicit.name,""))},function(n,l){n(l,2,0,e["\u0275inlineInterpolate"](1,"",l.context.$implicit.name,""),e["\u0275nov"](l,3).target,e["\u0275nov"](l,3).href),n(l,4,0,l.context.$implicit.name),n(l,6,0,e["\u0275nov"](l,7).target,e["\u0275nov"](l,7).href),n(l,9,0,e["\u0275inlineInterpolate"](1,"",l.context.$implicit.image[2]["#text"],""))})}function s(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,16,null,null,null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\n  "])),(n()(),e["\u0275eld"](2,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),e["\u0275ted"](3,null,["All Albums of ",""])),(n()(),e["\u0275ted"](-1,null,["\n  "])),(n()(),e["\u0275eld"](5,0,null,null,7,"div",[["class","albums__wrapper"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\n    "])),(n()(),e["\u0275eld"](7,0,null,null,4,"div",[["class","albums"]],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["\n      "])),(n()(),e["\u0275and"](16777216,null,null,1,null,m)),e["\u0275did"](10,802816,null,0,r.i,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),e["\u0275ted"](-1,null,["\n    "])),(n()(),e["\u0275ted"](-1,null,["\n  "])),(n()(),e["\u0275ted"](-1,null,["\n  "])),(n()(),e["\u0275eld"](14,0,null,null,1,"app-comments",[],null,null,null,c.b,c.a)),e["\u0275did"](15,638976,null,0,p.a,[],null,null),(n()(),e["\u0275ted"](-1,null,["\n"]))],function(n,l){n(l,10,0,l.component.albums),n(l,15,0)},function(n,l){n(l,3,0,l.component.artist)})}function f(n){return e["\u0275vid"](0,[(n()(),e["\u0275and"](16777216,null,null,1,null,s)),e["\u0275did"](1,16384,null,0,r.j,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275ted"](-1,null,["\n"]))],function(n,l){var t=l.component;n(l,1,0,null==t.albums?null:t.albums.length)},null)}var b=e["\u0275ccf"]("ng-component",o,function(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,f,d)),e["\u0275did"](1,114688,null,0,o,[u.a,i.a],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),x=t("NOoU"),g=t("fFl2");t.d(l,"AlbumsModuleNgFactory",function(){return h});var h=e["\u0275cmf"](a,[],function(n){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[b]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,r.l,r.k,[e.LOCALE_ID,[2,r.p]]),e["\u0275mpd"](4608,i.a,i.a,[x.d]),e["\u0275mpd"](512,r.b,r.b,[]),e["\u0275mpd"](512,g.a,g.a,[]),e["\u0275mpd"](512,u.n,u.n,[[2,u.s],[2,u.k]]),e["\u0275mpd"](512,a,a,[]),e["\u0275mpd"](1024,u.i,function(){return[[{path:"**",component:o}]]},[])])})}});