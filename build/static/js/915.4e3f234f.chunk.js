"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[915],{5232:function(n,t,e){e.d(t,{Zq:function(){return o},fx:function(){return i},tH:function(){return r}});var r="http://localhost:8000",i="/blogs/api/get_blogs/",o="/blogs/api/read_blog/"},8915:function(n,t,e){e.r(t);var r=e(9439),i=e(2791),o=e(7689),s=e(4554),a=e(1614),u=e(890),c=e(7924),f=e(3427),l=e(5232),d=e(6786),p=e(184);t.default=function(){var n=(0,i.useReducer)(d.i5,d.QX),t=(0,r.Z)(n,2),e=t[0],g=t[1];return(0,i.useEffect)((function(){var n=new AbortController,t=n.signal;return fetch("".concat(l.tH).concat(l.fx),{method:"GET",mode:"cors",signal:t}).then((function(n){return n.json()})).then((function(n){"OK"===n.status&&g({type:d.Y,payload:{items:n.response}})})).finally((function(){g({type:d.Fr,payload:{isLoading:!1}})})),function(){g({type:d.X6,payload:{}}),n.abort()}}),[]),(0,p.jsxs)(a.Z,{sx:{py:2},children:[(0,p.jsxs)(s.Z,{display:"flex",alignItems:"center",justifyContent:"center",children:[(0,p.jsx)(f.Z,{fontSize:"large",sx:{mr:1}}),(0,p.jsx)(u.Z,{variant:"h4",children:"Blogs"})]}),(0,p.jsx)(c.Z,{sx:{mt:1,mb:2}}),(0,p.jsx)(d.xZ.Provider,{value:e,children:(0,p.jsx)(o.j3,{})})]})}},6786:function(n,t,e){e.d(t,{Fr:function(){return s},QX:function(){return f},X6:function(){return a},Y:function(){return o},i5:function(){return c},xZ:function(){return u}});var r=e(1413),i=e(2791),o="UPDATE_ITEMS",s="UPDATE_IS_LOADING",a="DELETE_DATA",u=(0,i.createContext)({}),c=function(n,t){switch(t.type){case o:return{isLoading:!1,items:t.payload.items};case s:return(0,r.Z)((0,r.Z)({},n),{},{isLoading:t.payload.isLoading});case a:return{isLoading:!0,items:[]};default:return(0,r.Z)({},n)}},f={isLoading:!0,items:[]}}}]);
//# sourceMappingURL=915.4e3f234f.chunk.js.map