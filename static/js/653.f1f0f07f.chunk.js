"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[653],{760:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var r=n(861),i=n(439),u=n(757),o=n.n(u),a=n(791),s=n(87),c=n(689),l="Movies_Movies__aJ6Ku",f=n(184),h="115673062d9a805a3df250beb0ca2927",m=function(){var t,e=(0,a.useState)({}),n=(0,i.Z)(e,2),u=n[0],m=n[1],v=(0,s.lr)(""),d=(0,i.Z)(v,2),p=d[0],g=d[1],x=(0,a.useState)(""),_=(0,i.Z)(x,2),b=_[0],y=_[1],w=(0,a.useState)(""),j=(0,i.Z)(w,2),k=j[0],Z=j[1],P=(0,c.TH)(),S=null!==(t=p.get("moviesId"))&&void 0!==t?t:"",N=function(){var t=(0,r.Z)(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),g({moviesId:k}),null===(S=p.get("moviesId"))){t.next=10;break}if(y(S.trim()),""!==S.trim()&&null!==S.trim()){t.next=10;break}return alert("please enter name movies"),m([]),""===S&&g({}),t.abrupt("return");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,a.useEffect)((function(){""!==S&&fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(h,"&query=").concat(S)).then((function(t){return t.json()})).then((function(t){0!==t.results.length?m(t.results):alert("Not found movies with this name! Please, try again.")})).catch((function(t){return alert(t)}))}),[S]),(0,a.useEffect)((function(){null!==b&&""!==b&&fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(h,"&query=").concat(b)).then((function(t){return t.json()})).then((function(t){0!==t.results.length?m(t.results):alert("Not found movies with this name! Please, try again.")})).catch((function(t){return alert(t)}))}),[b]),(0,f.jsxs)("main",{className:l,children:[(0,f.jsxs)("form",{onSubmit:N,children:[(0,f.jsx)("input",{type:"text",value:k,onChange:function(t){return Z(t.target.value)}}),(0,f.jsx)("button",{type:"submit",children:"Search"})]}),u.length>0&&(0,f.jsx)("ul",{children:u.map((function(t){return(0,f.jsx)("li",{children:(0,f.jsx)(s.rU,{to:"/movies/".concat(t.id),state:{from:P},children:t.title})},t.id)}))}),0===u.length&&(0,f.jsx)("p",{children:"Not found movies with this name! Please, try again."})]})}},861:function(t,e,n){function r(t,e,n,r,i,u,o){try{var a=t[u](o),s=a.value}catch(c){return void n(c)}a.done?e(s):Promise.resolve(s).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,u){var o=t.apply(e,n);function a(t){r(o,i,u,a,s,"next",t)}function s(t){r(o,i,u,a,s,"throw",t)}a(void 0)}))}}n.d(e,{Z:function(){return i}})}}]);
//# sourceMappingURL=653.f1f0f07f.chunk.js.map