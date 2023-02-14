"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[572],{7796:function(r,e,n){n(2791);var t=n(9658),a=n(7317),i=n(3967),o=n(184);e.Z=function(r){var e=r.message,n=(0,i.Z)();return(0,o.jsxs)(t.Z,{severity:"error",variant:"standard",sx:{boxShadow:n.shadows[1]},children:[(0,o.jsx)(a.Z,{children:"Error"}),e]})}},572:function(r,e,n){n.r(e),n.d(e,{default:function(){return M}});var t=n(2791),a=n(4554),i=n(493),o=n(7047),s=n(2465),l=n(4942),c=n(1572),d=n(6934),u=n(3967),h=n(5403),f=n(184),m=(0,d.ZP)(c.ZP)((function(r){var e=r.theme;return(0,l.Z)({"& .MuiInputBase-input":{transition:"all 600ms linear"},"& .MuiInputBase-input::placeholder":{color:"#fff"},":hover":{backgroundColor:e.palette.secondary.light},backgroundColor:e.palette.secondary.main,transition:"all 300ms ease-in-out",borderRadius:e.spacing(.5),paddingLeft:e.spacing(3),paddingRight:e.spacing(2),paddingTop:e.spacing(.5),paddingBottom:e.spacing(.5),color:"#fff",maxWidth:"100%"},e.breakpoints.up(e.breakpoints.values.md),{"& .MuiInputBase-input:focus":{width:"350px"}})})),v=function(){var r=(0,u.Z)();return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(a.Z,{sx:{backgroundColor:r.palette.secondary.dark,px:3,py:1,mb:1,borderRadius:1},children:(0,f.jsx)(m,{placeholder:"Search",endAdornment:(0,f.jsx)(h.Z,{htmlColor:"#EAEAEA"})})})})},p=n(7796),g=n(6786),x=n(7689),Z=n(2627),b=n(6259),w=n(890),j=n(1918),k=n(772),y=n(2686),S=function(r){var e=r.name,n=r.date_created,t=r.slug,i=r.read_time,o=r.tags,s=r.isLast,l=(0,x.s0)();return(0,f.jsx)(Z.Z,{divider:!s,onClick:function(){l("/blog/".concat(t,"/"))},children:(0,f.jsxs)(b.Z,{children:[(0,f.jsx)(w.Z,{variant:"h6",children:e}),(0,f.jsxs)(w.Z,{variant:"caption",color:"GrayText",sx:{display:"flex",flexDirection:"row",alignItems:"center",fontWeight:"600"},children:[(0,f.jsx)(k.Z,{}),(0,f.jsxs)(w.Z,{variant:"inherit",children:["\xa0",n," |\xa0"]}),(0,f.jsx)(y.Z,{}),(0,f.jsxs)(w.Z,{variant:"inherit",children:["\xa0",i," min read"]})]}),(0,f.jsx)(a.Z,{display:"flex",flexDirection:"row",py:1,flexWrap:"wrap",children:o.map((function(r,e){return(0,f.jsx)(j.Z,{label:r,size:"small",sx:{m:.5,ml:0}},e)}))})]})})},C=n(7896),M=function(){var r=(0,t.useContext)(g.xZ);return(0,f.jsx)(a.Z,{children:(0,f.jsx)(s.Z,{sx:{p:2},children:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(C.Z,{}),r.isLoading?[1,2,3].map((function(r){return(0,f.jsx)(a.Z,{p:2,children:(0,f.jsx)(o.Z,{variant:"rounded",height:100})},r)})):r.error?(0,f.jsx)(a.Z,{p:2,children:(0,f.jsx)(p.Z,{message:r.errorMessage})}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(v,{}),(0,f.jsx)(i.Z,{sx:{border:"1px solid rgba(0,0,0,.15)",padding:0},children:r.items.map((function(e,n){return(0,f.jsx)(S,{name:e.name,date_created:e.date_created,slug:e.slug,read_time:e.read_time,tags:e.tags,isLast:n===r.items.length-1},n)}))})]})]})})})}},7896:function(r,e,n){n.d(e,{Z:function(){return _}});var t=n(2791),a=n(4554),i=n(9439),o=n(3366),s=n(7462),l=n(8182),c=n(4419),d=n(6934),u=n(1402),h=n(9201),f=n(184),m=(0,h.Z)((0,f.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),v=n(5878),p=n(1217);function g(r){return(0,p.Z)("MuiAvatar",r)}(0,v.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var x=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],Z=(0,d.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(r,e){var n=r.ownerState;return[e.root,e[n.variant],n.colorDefault&&e.colorDefault]}})((function(r){var e=r.theme,n=r.ownerState;return(0,s.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===n.variant&&{borderRadius:(e.vars||e).shape.borderRadius},"square"===n.variant&&{borderRadius:0},n.colorDefault&&(0,s.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]}))})),b=(0,d.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(r,e){return e.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),w=(0,d.ZP)(m,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(r,e){return e.fallback}})({width:"75%",height:"75%"});var j=t.forwardRef((function(r,e){var n=(0,u.Z)({props:r,name:"MuiAvatar"}),a=n.alt,d=n.children,h=n.className,m=n.component,v=void 0===m?"div":m,p=n.imgProps,j=n.sizes,k=n.src,y=n.srcSet,S=n.variant,C=void 0===S?"circular":S,M=(0,o.Z)(n,x),A=null,R=function(r){var e=r.crossOrigin,n=r.referrerPolicy,a=r.src,o=r.srcSet,s=t.useState(!1),l=(0,i.Z)(s,2),c=l[0],d=l[1];return t.useEffect((function(){if(a||o){d(!1);var r=!0,t=new Image;return t.onload=function(){r&&d("loaded")},t.onerror=function(){r&&d("error")},t.crossOrigin=e,t.referrerPolicy=n,t.src=a,o&&(t.srcset=o),function(){r=!1}}}),[e,n,a,o]),c}((0,s.Z)({},p,{src:k,srcSet:y})),z=k||y,_=z&&"error"!==R,D=(0,s.Z)({},n,{colorDefault:!_,component:v,variant:C}),L=function(r){var e=r.classes,n={root:["root",r.variant,r.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,c.Z)(n,g,e)}(D);return A=_?(0,f.jsx)(b,(0,s.Z)({alt:a,src:k,srcSet:y,sizes:j,ownerState:D,className:L.img},p)):null!=d?d:z&&a?a[0]:(0,f.jsx)(w,{className:L.fallback}),(0,f.jsx)(Z,(0,s.Z)({as:v,ownerState:D,className:(0,l.Z)(L.root,h),ref:e},M,{children:A}))})),k=n(890),y=n(3400),S=n(6310),C=n(1880),M=n(2093),A=n(4668),R=n(5758),z=n.p+"static/media/mugshot.0d43f29a6459c3bb79ed.jpg",_=function(){return(0,f.jsxs)(a.Z,{display:"flex",flexDirection:"row",p:3,children:[(0,f.jsx)(j,{alt:"Arafat",src:z,sx:{height:150,width:150}}),(0,f.jsxs)(a.Z,{px:3,children:[(0,f.jsx)(k.Z,{variant:"h5",children:(0,f.jsx)("b",{children:(0,f.jsx)("u",{children:"Mohammad Arafat Zaman"})})}),(0,f.jsx)(k.Z,{sx:{mt:1},children:(0,f.jsx)("i",{children:'"Technophile"'})}),(0,f.jsxs)(a.Z,{display:"flex",flexDirection:"row",children:[(0,f.jsx)(y.Z,{sx:{color:"#0072b1"},href:"https://www.linkedin.com/in/m-arafatzaman/",target:"_blank",children:(0,f.jsx)(S.Z,{})}),(0,f.jsx)(y.Z,{sx:{color:"#d62976"},href:"https://www.instagram.com/mohammadarafatzaman/",target:"_blank",children:(0,f.jsx)(C.Z,{})}),(0,f.jsx)(y.Z,{sx:{color:"#3b5998"},href:"https://www.facebook.com/mdarafatzaman01/",target:"_blank",children:(0,f.jsx)(M.Z,{})}),(0,f.jsx)(y.Z,{sx:{color:"#00acee"},href:"https://twitter.com/mdarafatzaman11",target:"_blank",children:(0,f.jsx)(A.Z,{})}),(0,f.jsx)(y.Z,{sx:{color:"#171515"},href:"https://github.com/M-ArafatZaman",target:"_blank",children:(0,f.jsx)(R.Z,{})})]})]})]})}},6786:function(r,e,n){n.d(e,{Fr:function(){return s},QX:function(){return h},X6:function(){return l},Y:function(){return o},i5:function(){return u},pn:function(){return c},qh:function(){return i},xZ:function(){return d}});var t=n(1413),a=n(2791),i="INITIALIZE",o="UPDATE_ITEMS",s="UPDATE_IS_LOADING",l="DELETE_DATA",c="ERROR",d=(0,a.createContext)({}),u=function(r,e){switch(e.type){case o:var n;return{isLoading:!1,items:null===(n=e.payload)||void 0===n?void 0:n.items,error:!1,errorMessage:""};case s:var a;return(0,t.Z)((0,t.Z)({},r),{},{isLoading:null===(a=e.payload)||void 0===a?void 0:a.isLoading});case i:case l:return{isLoading:!0,items:[],error:!1,errorMessage:""};case c:var d;return(0,t.Z)((0,t.Z)({},r),{},{error:!0,errorMessage:(null===(d=e.payload)||void 0===d?void 0:d.errorMessage)||"An unknown error occured."});default:return(0,t.Z)({},r)}},h={isLoading:!0,items:[],error:!1,errorMessage:""}},2465:function(r,e,n){var t=n(3433),a=(n(2791),n(4554)),i=n(1901),o=n(184);e.Z=function(r){var e=r.children,n=r.sx,s={backgroundColor:"#fff",borderRadius:"12px",boxShadow:i.f.shadows[3],position:"relative",overflow:"hidden"};return(0,o.jsx)(a.Z,{sx:[s].concat((0,t.Z)(Array.isArray(n)?n:[n])),children:e})}},772:function(r,e,n){var t=n(4836);e.Z=void 0;var a=t(n(5649)),i=n(184),o=(0,a.default)((0,i.jsx)("path",{d:"M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"}),"CalendarMonth");e.Z=o},5403:function(r,e,n){var t=n(4836);e.Z=void 0;var a=t(n(5649)),i=n(184),o=(0,a.default)((0,i.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");e.Z=o},2686:function(r,e,n){var t=n(4836);e.Z=void 0;var a=t(n(5649)),i=n(184),o=(0,a.default)((0,i.jsx)("path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"}),"WatchLater");e.Z=o},7047:function(r,e,n){n.d(e,{Z:function(){return _}});var t=n(168),a=n(3366),i=n(7462),o=n(2791),s=n(8182),l=n(2554),c=n(4419);function d(r){return String(r).match(/[\d.\-+]*\s*(.*)/)[1]||""}function u(r){return parseFloat(r)}var h=n(2065),f=n(6934),m=n(1402),v=n(5878),p=n(1217);function g(r){return(0,p.Z)("MuiSkeleton",r)}(0,v.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var x,Z,b,w,j,k,y,S,C=n(184),M=["animation","className","component","height","style","variant","width"],A=(0,l.F4)(j||(j=x||(x=(0,t.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),R=(0,l.F4)(k||(k=Z||(Z=(0,t.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),z=(0,f.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(r,e){var n=r.ownerState;return[e.root,e[n.variant],!1!==n.animation&&e[n.animation],n.hasChildren&&e.withChildren,n.hasChildren&&!n.width&&e.fitContent,n.hasChildren&&!n.height&&e.heightAuto]}})((function(r){var e=r.theme,n=r.ownerState,t=d(e.shape.borderRadius)||"px",a=u(e.shape.borderRadius);return(0,i.Z)({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:(0,h.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===n.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(a).concat(t,"/").concat(Math.round(a/.6*10)/10).concat(t),"&:empty:before":{content:'"\\00a0"'}},"circular"===n.variant&&{borderRadius:"50%"},"rounded"===n.variant&&{borderRadius:(e.vars||e).shape.borderRadius},n.hasChildren&&{"& > *":{visibility:"hidden"}},n.hasChildren&&!n.width&&{maxWidth:"fit-content"},n.hasChildren&&!n.height&&{height:"auto"})}),(function(r){return"pulse"===r.ownerState.animation&&(0,l.iv)(y||(y=b||(b=(0,t.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),A)}),(function(r){var e=r.ownerState,n=r.theme;return"wave"===e.animation&&(0,l.iv)(S||(S=w||(w=(0,t.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),R,(n.vars||n).palette.action.hover)})),_=o.forwardRef((function(r,e){var n=(0,m.Z)({props:r,name:"MuiSkeleton"}),t=n.animation,o=void 0===t?"pulse":t,l=n.className,d=n.component,u=void 0===d?"span":d,h=n.height,f=n.style,v=n.variant,p=void 0===v?"text":v,x=n.width,Z=(0,a.Z)(n,M),b=(0,i.Z)({},n,{animation:o,component:u,variant:p,hasChildren:Boolean(Z.children)}),w=function(r){var e=r.classes,n=r.variant,t=r.animation,a=r.hasChildren,i=r.width,o=r.height,s={root:["root",n,t,a&&"withChildren",a&&!i&&"fitContent",a&&!o&&"heightAuto"]};return(0,c.Z)(s,g,e)}(b);return(0,C.jsx)(z,(0,i.Z)({as:u,ref:e,className:(0,s.Z)(w.root,l),ownerState:b},Z,{style:(0,i.Z)({width:x,height:h},f)}))}))}}]);
//# sourceMappingURL=572.32562739.chunk.js.map