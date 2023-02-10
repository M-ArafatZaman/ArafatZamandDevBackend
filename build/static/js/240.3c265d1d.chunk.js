"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[240],{2465:function(n,e,t){var i=t(3433),r=(t(2791),t(4554)),o=t(1901),s=t(184);e.Z=function(n){var e=n.children,t=n.sx,c={backgroundColor:"#fff",borderRadius:"12px",boxShadow:o.f.shadows[3],position:"relative",overflow:"hidden"};return(0,s.jsx)(r.Z,{sx:[c].concat((0,i.Z)(Array.isArray(t)?t:[t])),children:e})}},4441:function(n,e,t){t.d(e,{US:function(){return o},lI:function(){return r},tH:function(){return i}});var i="http://localhost:8000",r="/projects/api/get_projects/",o="/projects/api/view_project/"},6240:function(n,e,t){t.r(e);var i=t(9439),r=t(2791),o=t(7689),s=t(4554),c=t(890),a=t(7924),d=t(1889),l=t(6151),u=t(5524),h=t(7394),f=t(4441),x=t(2465),v=t(3712),j=t(3540),Z=t(6920),p=t(184);e.default=function(){var n=(0,o.UO)().slug,e=(0,r.useState)(!0),t=(0,i.Z)(e,2),m=t[0],w=t[1],g=(0,r.useState)(!1),y=(0,i.Z)(g,2),b=y[0],S=y[1],k=(0,r.useState)(),C=(0,i.Z)(k,2),A=C[0],E=C[1],H=(0,r.useState)(),T=(0,i.Z)(H,2),I=T[0],U=T[1],_=(0,r.useState)(window.innerWidth),z=(0,i.Z)(_,2),G=z[0],L=z[1];(0,r.useEffect)((function(){var n=function(){L(window.innerWidth)};return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[]);var P=(0,o.TH)(),V=(0,o.s0)();return(0,r.useEffect)((function(){var e=new AbortController,t=e.signal;return w(!0),S(!1),fetch("".concat(f.tH).concat(f.US).concat(n,"/"),{method:"GET",mode:"cors",signal:t}).then((function(n){return n.json()})).then((function(n){"OK"===n.status&&(E(n.item),S(!0),U((0,j.ZP)((0,v.TU)(n.item.content))))})).finally((function(){w(!1)})),function(){U(void 0),E(void 0),S(!1),w(!0),e.abort()}}),[P.pathname]),(0,r.useEffect)((function(){setTimeout((function(){Z.Z.highlightAll()}),500)}),[I]),(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(d.ZP,{container:!0,spacing:2,direction:G<=900?"column-reverse":"row",children:m?(0,p.jsx)(c.Z,{children:"LOADING..."}):b?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(d.ZP,{item:!0,xs:12,md:9,children:(0,p.jsxs)(x.Z,{sx:{p:2},children:[(0,p.jsxs)(s.Z,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",children:[(0,p.jsx)(u.Z,{}),(0,p.jsx)(c.Z,{variant:"h4",sx:{ml:1},children:null===A||void 0===A?void 0:A.name})]}),(0,p.jsx)(a.Z,{sx:{my:1}}),(0,p.jsx)(s.Z,{p:1,children:I}),(0,p.jsx)(a.Z,{sx:{my:1}}),(0,p.jsx)(s.Z,{children:(0,p.jsx)(l.Z,{startIcon:(0,p.jsx)(h.Z,{}),variant:"contained",color:"error",onClick:function(){V("/projects/")},children:"Go back"})})]})}),(0,p.jsx)(d.ZP,{item:!0,xs:12,md:3,children:(0,p.jsxs)(s.Z,{sx:{width:"100%",p:2,justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"},children:[(0,p.jsx)("img",{src:null===A||void 0===A?void 0:A.imageURL,style:{objectFit:"contain",width:"100%",maxHeight:"300px",borderRadius:"8px"}}),(0,p.jsx)(c.Z,{sx:{mt:1,fontSize:12},variant:"body2",color:"GrayText",children:null===A||void 0===A?void 0:A.short_description})]})})]}):(0,p.jsx)(c.Z,{children:(0,p.jsx)("b",{children:"Not found"})})})})}},5524:function(n,e,t){var i=t(4836);e.Z=void 0;var r=i(t(5649)),o=t(184),s=(0,r.default)((0,o.jsx)("path",{d:"M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3z"}),"AccountTree");e.Z=s}}]);
//# sourceMappingURL=240.3c265d1d.chunk.js.map