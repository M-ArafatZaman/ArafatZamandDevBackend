"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[915],{5232:function(r,e,n){n.d(e,{Zq:function(){return o},fx:function(){return t}});var t="/blogs/api/get_blogs/",o="/blogs/api/read_blog/"},8915:function(r,e,n){n.r(e);var t=n(9439),o=n(2791),a=n(7689),s=n(4554),i=n(1614),u=n(890),c=n(7924),l=n(3427),d=n(9478),f=n(5232),p=n(6786),g=n(184);e.default=function(){var r=(0,o.useReducer)(p.i5,p.QX),e=(0,t.Z)(r,2),n=e[0],y=e[1];return(0,o.useEffect)((function(){var r=new AbortController,e=r.signal;return y({type:p.qh}),fetch("".concat(d.t).concat(f.fx),{method:"GET",mode:"cors",signal:e}).then((function(r){return r.json()})).then((function(r){"OK"===r.status?y({type:p.Y,payload:{items:r.response}}):y({type:p.pn,payload:{errorMessage:"Sorry, an uncaught server error occured."}})})).catch((function(){y({type:p.pn,payload:{errorMessage:"Sorry, an uncaught error occured."}})})).finally((function(){y({type:p.Fr,payload:{isLoading:!1}})})),function(){y({type:p.X6}),r.abort()}}),[]),(0,g.jsxs)(i.Z,{sx:{py:2},children:[(0,g.jsxs)(s.Z,{display:"flex",alignItems:"center",justifyContent:"center",children:[(0,g.jsx)(l.Z,{fontSize:"large",sx:{mr:1}}),(0,g.jsx)(u.Z,{variant:"h4",children:"Blogs"})]}),(0,g.jsx)(c.Z,{sx:{mt:1,mb:2}}),(0,g.jsx)(p.xZ.Provider,{value:n,children:(0,g.jsx)(a.j3,{})})]})}},6786:function(r,e,n){n.d(e,{Fr:function(){return i},QX:function(){return f},X6:function(){return u},Y:function(){return s},i5:function(){return d},pn:function(){return c},qh:function(){return a},xZ:function(){return l}});var t=n(1413),o=n(2791),a="INITIALIZE",s="UPDATE_ITEMS",i="UPDATE_IS_LOADING",u="DELETE_DATA",c="ERROR",l=(0,o.createContext)({}),d=function(r,e){switch(e.type){case s:var n;return{isLoading:!1,items:null===(n=e.payload)||void 0===n?void 0:n.items,error:!1,errorMessage:""};case i:var o;return(0,t.Z)((0,t.Z)({},r),{},{isLoading:null===(o=e.payload)||void 0===o?void 0:o.isLoading});case a:case u:return{isLoading:!0,items:[],error:!1,errorMessage:""};case c:var l;return(0,t.Z)((0,t.Z)({},r),{},{error:!0,errorMessage:(null===(l=e.payload)||void 0===l?void 0:l.errorMessage)||"An unknown error occured."});default:return(0,t.Z)({},r)}},f={isLoading:!0,items:[],error:!1,errorMessage:""}}}]);
//# sourceMappingURL=915.f82c89e7.chunk.js.map