"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[37],{4441:function(r,e,n){n.d(e,{US:function(){return o},lI:function(){return t}});var t="/projects/api/get_projects/",o="/projects/api/view_project/"},37:function(r,e,n){n.r(e);var t=n(9439),o=n(2791),a=n(7689),i=n(4554),s=n(1614),u=n(890),c=n(7924),d=n(4666),l=n(9478),p=n(4441),f=n(6666),v=n(184);e.default=function(){var r=(0,o.useReducer)(f.Xy,f.r_),e=(0,t.Z)(r,2),n=e[0],y=e[1];return(0,o.useEffect)((function(){var r=new AbortController,e=r.signal;return y({type:f.qh}),fetch("".concat(l.t).concat(p.lI),{method:"GET",mode:"cors",signal:e}).then((function(r){return r.json()})).then((function(r){"OK"===r.status?y({type:f.Y,payload:{items:r.items}}):y({type:f.pn,payload:{errorMessage:"Sorry, an unknown server error occured!"}})})).catch((function(){y({type:f.pn,payload:{errorMessage:"Sorry, an unknown server error occured!"}})})).finally((function(){y({type:f.Fr,payload:{isLoading:!1}})})),function(){y({type:f.PB,payload:{}}),r.abort()}}),[]),(0,v.jsxs)(s.Z,{sx:{py:2},children:[(0,v.jsxs)(i.Z,{display:"flex",alignItems:"center",justifyContent:"center",children:[(0,v.jsx)(d.Z,{fontSize:"large",sx:{mr:1}}),(0,v.jsx)(u.Z,{variant:"h4",children:"Projects"})]}),(0,v.jsx)(c.Z,{sx:{mt:1,mb:2}}),(0,v.jsx)(f.v5.Provider,{value:n,children:(0,v.jsx)(a.j3,{})})]})}},6666:function(r,e,n){n.d(e,{Fr:function(){return c},PB:function(){return d},Xy:function(){return p},Y:function(){return u},pn:function(){return l},qh:function(){return s},r_:function(){return a},v5:function(){return i}});var t=n(1413),o=n(2791),a={isLoading:!0,items:[],error:!1,errorMessage:""},i=(0,o.createContext)(a),s="INITIALIZE",u="UPDATE_ITEMS",c="UPDATE_IS_LOADING",d="DELETE_ITEMS",l="ERROR",p=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case u:var n;return(0,t.Z)((0,t.Z)({},r),{},{error:!1,items:null===(n=e.payload)||void 0===n?void 0:n.items});case c:var o;return(0,t.Z)((0,t.Z)({},r),{},{isLoading:null===(o=e.payload)||void 0===o?void 0:o.isLoading});case s:case d:return{isLoading:!0,items:[],error:!1,errorMessage:""};case l:var i;return(0,t.Z)((0,t.Z)({},r),{},{error:!0,errorMessage:(null===(i=e.payload)||void 0===i?void 0:i.errorMessage)||"An unknown error occured."});default:return(0,t.Z)({},r)}}}}]);
//# sourceMappingURL=37.ed356ddd.chunk.js.map