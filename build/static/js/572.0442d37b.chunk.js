"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[572],{572:function(r,e,a){a.r(e),a.d(e,{default:function(){return z}});var t=a(2791),n=a(4554),i=a(890),o=a(493),s=a(2465),c=a(4942),l=a(1572),d=a(6934),u=a(3967),h=a(5403),f=a(184),m=(0,d.ZP)(l.ZP)((function(r){var e=r.theme;return(0,c.Z)({"& .MuiInputBase-input":{transition:"all 600ms linear"},"& .MuiInputBase-input::placeholder":{color:"#fff"},":hover":{backgroundColor:e.palette.secondary.light},backgroundColor:e.palette.secondary.main,transition:"all 300ms ease-in-out",borderRadius:e.spacing(.5),paddingLeft:e.spacing(3),paddingRight:e.spacing(2),paddingTop:e.spacing(.5),paddingBottom:e.spacing(.5),color:"#fff",maxWidth:"100%"},e.breakpoints.up(e.breakpoints.values.md),{"& .MuiInputBase-input:focus":{width:"350px"}})})),x=function(){var r=(0,u.Z)();return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(n.Z,{sx:{backgroundColor:r.palette.secondary.dark,px:3,py:1,mb:1,borderRadius:1},children:(0,f.jsx)(m,{placeholder:"Search",endAdornment:(0,f.jsx)(h.Z,{htmlColor:"#EAEAEA"})})})})},p=a(6786),v=a(7689),g=a(2627),Z=a(6259),j=a(1918),b=a(772),w=a(2686),k=function(r){var e=r.name,a=r.date_created,t=r.slug,o=r.read_time,s=r.tags,c=r.isLast,l=(0,v.s0)();return(0,f.jsx)(g.Z,{divider:!c,onClick:function(){l("/blog/".concat(t,"/"))},children:(0,f.jsxs)(Z.Z,{children:[(0,f.jsx)(i.Z,{variant:"h6",children:e}),(0,f.jsxs)(i.Z,{variant:"caption",color:"GrayText",sx:{display:"flex",flexDirection:"row",alignItems:"center",fontWeight:"600"},children:[(0,f.jsx)(b.Z,{}),(0,f.jsxs)(i.Z,{variant:"inherit",children:["\xa0",a," |\xa0"]}),(0,f.jsx)(w.Z,{}),(0,f.jsxs)(i.Z,{variant:"inherit",children:["\xa0",o," min read"]})]}),(0,f.jsx)(n.Z,{display:"flex",flexDirection:"row",py:1,flexWrap:"wrap",children:s.map((function(r,e){return(0,f.jsx)(j.Z,{label:r,size:"small",sx:{m:.5,ml:0}},e)}))})]})})},y=a(7896),z=function(){var r=(0,t.useContext)(p.xZ);return(0,f.jsx)(n.Z,{children:(0,f.jsx)(s.Z,{sx:{p:2},children:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(y.Z,{}),r.isLoading?(0,f.jsx)(i.Z,{children:"Loading"}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(x,{}),(0,f.jsx)(o.Z,{sx:{border:"1px solid rgba(0,0,0,.15)",padding:0},children:r.items.map((function(e,a){return(0,f.jsx)(k,{name:e.name,date_created:e.date_created,slug:e.slug,read_time:e.read_time,tags:e.tags,isLast:a===r.items.length-1},a)}))})]})]})})})}},7896:function(r,e,a){a.d(e,{Z:function(){return D}});var t=a(2791),n=a(4554),i=a(9439),o=a(3366),s=a(7462),c=a(8182),l=a(4419),d=a(6934),u=a(1402),h=a(9201),f=a(184),m=(0,h.Z)((0,f.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),x=a(5878),p=a(1217);function v(r){return(0,p.Z)("MuiAvatar",r)}(0,x.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var g=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],Z=(0,d.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(r,e){var a=r.ownerState;return[e.root,e[a.variant],a.colorDefault&&e.colorDefault]}})((function(r){var e=r.theme,a=r.ownerState;return(0,s.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===a.variant&&{borderRadius:(e.vars||e).shape.borderRadius},"square"===a.variant&&{borderRadius:0},a.colorDefault&&(0,s.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]}))})),j=(0,d.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(r,e){return e.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),b=(0,d.ZP)(m,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(r,e){return e.fallback}})({width:"75%",height:"75%"});var w=t.forwardRef((function(r,e){var a=(0,u.Z)({props:r,name:"MuiAvatar"}),n=a.alt,d=a.children,h=a.className,m=a.component,x=void 0===m?"div":m,p=a.imgProps,w=a.sizes,k=a.src,y=a.srcSet,z=a.variant,A=void 0===z?"circular":z,S=(0,o.Z)(a,g),M=null,C=function(r){var e=r.crossOrigin,a=r.referrerPolicy,n=r.src,o=r.srcSet,s=t.useState(!1),c=(0,i.Z)(s,2),l=c[0],d=c[1];return t.useEffect((function(){if(n||o){d(!1);var r=!0,t=new Image;return t.onload=function(){r&&d("loaded")},t.onerror=function(){r&&d("error")},t.crossOrigin=e,t.referrerPolicy=a,t.src=n,o&&(t.srcset=o),function(){r=!1}}}),[e,a,n,o]),l}((0,s.Z)({},p,{src:k,srcSet:y})),_=k||y,D=_&&"error"!==C,L=(0,s.Z)({},a,{colorDefault:!D,component:x,variant:A}),R=function(r){var e=r.classes,a={root:["root",r.variant,r.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,l.Z)(a,v,e)}(L);return M=D?(0,f.jsx)(j,(0,s.Z)({alt:n,src:k,srcSet:y,sizes:w,ownerState:L,className:R.img},p)):null!=d?d:_&&n?n[0]:(0,f.jsx)(b,{className:R.fallback}),(0,f.jsx)(Z,(0,s.Z)({as:x,ownerState:L,className:(0,c.Z)(R.root,h),ref:e},S,{children:M}))})),k=a(890),y=a(3400),z=a(6310),A=a(1880),S=a(2093),M=a(4668),C=a(5758),_=a.p+"static/media/mugshot.0d43f29a6459c3bb79ed.jpg",D=function(){return(0,f.jsxs)(n.Z,{display:"flex",flexDirection:"row",p:3,children:[(0,f.jsx)(w,{alt:"Arafat",src:_,sx:{height:150,width:150}}),(0,f.jsxs)(n.Z,{px:3,children:[(0,f.jsx)(k.Z,{variant:"h5",children:(0,f.jsx)("b",{children:(0,f.jsx)("u",{children:"Mohammad Arafat Zaman"})})}),(0,f.jsx)(k.Z,{sx:{mt:1},children:(0,f.jsx)("i",{children:'"Technophile"'})}),(0,f.jsxs)(n.Z,{display:"flex",flexDirection:"row",children:[(0,f.jsx)(y.Z,{sx:{color:"#0072b1"},href:"https://www.linkedin.com/in/m-arafatzaman/",target:"_blank",children:(0,f.jsx)(z.Z,{})}),(0,f.jsx)(y.Z,{sx:{color:"#d62976"},href:"https://www.instagram.com/mohammadarafatzaman/",target:"_blank",children:(0,f.jsx)(A.Z,{})}),(0,f.jsx)(y.Z,{sx:{color:"#3b5998"},href:"https://www.facebook.com/mdarafatzaman01/",target:"_blank",children:(0,f.jsx)(S.Z,{})}),(0,f.jsx)(y.Z,{sx:{color:"#00acee"},href:"https://twitter.com/mdarafatzaman11",target:"_blank",children:(0,f.jsx)(M.Z,{})}),(0,f.jsx)(y.Z,{sx:{color:"#171515"},href:"https://github.com/M-ArafatZaman",target:"_blank",children:(0,f.jsx)(C.Z,{})})]})]})]})}},6786:function(r,e,a){a.d(e,{Fr:function(){return o},QX:function(){return d},X6:function(){return s},Y:function(){return i},i5:function(){return l},xZ:function(){return c}});var t=a(1413),n=a(2791),i="UPDATE_ITEMS",o="UPDATE_IS_LOADING",s="DELETE_DATA",c=(0,n.createContext)({}),l=function(r,e){switch(e.type){case i:return{isLoading:!1,items:e.payload.items};case o:return(0,t.Z)((0,t.Z)({},r),{},{isLoading:e.payload.isLoading});case s:return{isLoading:!0,items:[]};default:return(0,t.Z)({},r)}},d={isLoading:!0,items:[]}},2465:function(r,e,a){var t=a(3433),n=(a(2791),a(4554)),i=a(1901),o=a(184);e.Z=function(r){var e=r.children,a=r.sx,s={backgroundColor:"#fff",borderRadius:"12px",boxShadow:i.f.shadows[3],position:"relative",overflow:"hidden"};return(0,o.jsx)(n.Z,{sx:[s].concat((0,t.Z)(Array.isArray(a)?a:[a])),children:e})}},772:function(r,e,a){var t=a(4836);e.Z=void 0;var n=t(a(5649)),i=a(184),o=(0,n.default)((0,i.jsx)("path",{d:"M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"}),"CalendarMonth");e.Z=o},5403:function(r,e,a){var t=a(4836);e.Z=void 0;var n=t(a(5649)),i=a(184),o=(0,n.default)((0,i.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");e.Z=o},2686:function(r,e,a){var t=a(4836);e.Z=void 0;var n=t(a(5649)),i=a(184),o=(0,n.default)((0,i.jsx)("path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"}),"WatchLater");e.Z=o}}]);
//# sourceMappingURL=572.0442d37b.chunk.js.map