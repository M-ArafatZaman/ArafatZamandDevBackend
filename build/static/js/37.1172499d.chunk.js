"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[37],{9478:function(n,t,e){e.d(t,{t:function(){return r}});var r="https://arafatzaman.pythonanywhere.com/"},4441:function(n,t,e){e.d(t,{US:function(){return i},lI:function(){return r}});var r="/projects/api/get_projects/",i="/projects/api/view_project/"},37:function(n,t,e){e.r(t);var r=e(9439),i=e(2791),a=e(7689),o=e(4554),c=e(1614),s=e(890),u=e(7924),f=e(4666),l=e(9478),d=e(4441),p=e(6666),y=e(184);t.default=function(){var n=(0,i.useReducer)(p.Xy,p.r_),t=(0,r.Z)(n,2),e=t[0],h=t[1];return(0,i.useEffect)((function(){var n=new AbortController,t=n.signal;return fetch("".concat(l.t).concat(d.lI),{method:"GET",mode:"cors",signal:t}).then((function(n){return n.json()})).then((function(n){"OK"===n.status&&h({type:p.Y,payload:{items:n.items}})})).finally((function(){h({type:p.Fr,payload:{isLoading:!1}})})),function(){h({type:p.PB,payload:{}}),n.abort()}}),[]),(0,y.jsxs)(c.Z,{sx:{py:2},children:[(0,y.jsxs)(o.Z,{display:"flex",alignItems:"center",justifyContent:"center",children:[(0,y.jsx)(f.Z,{fontSize:"large",sx:{mr:1}}),(0,y.jsx)(s.Z,{variant:"h4",children:"Projects"})]}),(0,y.jsx)(u.Z,{sx:{mt:1,mb:2}}),(0,y.jsx)(p.v5.Provider,{value:e,children:(0,y.jsx)(a.j3,{})})]})}},6666:function(n,t,e){e.d(t,{Fr:function(){return s},PB:function(){return u},Xy:function(){return f},Y:function(){return c},r_:function(){return a},v5:function(){return o}});var r=e(1413),i=e(2791),a={isLoading:!0,items:[]},o=(0,i.createContext)(a),c="UPDATE_ITEMS",s="UPDATE_IS_LOADING",u="DELETE_ITEMS",f=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:return(0,r.Z)((0,r.Z)({},n),{},{items:t.payload.items});case s:return(0,r.Z)((0,r.Z)({},n),{},{isLoading:t.payload.isLoading});case u:return{isLoading:!0,items:[]};default:return(0,r.Z)({},n)}}}}]);
//# sourceMappingURL=37.1172499d.chunk.js.map