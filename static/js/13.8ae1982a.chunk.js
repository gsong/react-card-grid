(this["webpackJsonpreact-listitem-grid"]=this["webpackJsonpreact-listitem-grid"]||[]).push([[13],{1481:function(t,e,n){"use strict";var r=n(95),i=n(10),c=n.n(i),o=n(1485),a=n(1486),u=n(25),s=a.a.div({display:"flex",flexDirection:"column",flexGrow:1,":hover":{cursor:"pointer"}}),l={textAlign:"center",width:"100%"},d=a.a.h2([l,{fontSize:14,lineHeight:"1.35em",marginBottom:6,display:"-webkit-box",overflow:"hidden",WebkitBoxOrient:"vertical",WebkitLineClamp:2}]),b=a.a.div({alignItems:"baseline",display:"flex",justifyContent:"space-between"}),m=a.a.button({backgroundColor:"transparent",border:"none",color:"hsl(0, 0%, 40%)",fontWeight:900,letterSpacing:"0.15em",padding:6,":hover":{cursor:"pointer"},":hover, :focus":{color:"orange",textShadow:"0 0 5px orange"}}),f=function(){var t,e=c.a.useRef();return[e,{onMouseDown:function(){return t=Date.now()},onMouseUp:function(){var n;Date.now()-t<200&&(null===(n=e.current)||void 0===n||n.click())}}]};e.a=function(t){var e=t.contentType,n=t.handleMore,i=t.image,a=t.itemWidth,p=t.subTitle,O=t.title,j=t.url,h=f(),g=Object(r.a)(h,2),v=g[0],x=g[1];return Object(u.c)(c.a.Fragment,null,Object(u.c)(s,Object.assign({},x,{css:{order:1}}),Object(u.c)("header",{css:{margin:"auto 6px 6px",order:1,paddingTop:6}},Object(u.c)(d,null,Object(u.c)("a",{ref:v,href:j,css:{color:"hsl(0, 0%, 25%)",textDecoration:"none"}},O)),Object(u.c)("p",{css:l},p)),Object(u.c)("img",{src:i.url,alt:i.alt?i.alt:"",css:{height:9*(a-2)/16,objectFit:"cover",width:a-2}})),Object(u.c)(b,null,Object(u.c)("div",{"aria-hidden":!0,css:{margin:6}},e),Object(u.c)(o.a,null,"Content type is ",e),Object(u.c)(m,{onClick:n,"aria-label":"More actions for ".concat(O)},"\u2022\u2022\u2022")))}},1482:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={display:"flex",flexDirection:"column",border:"1px solid hsl(0, 0%, 85%)",borderRadius:8,color:"hsl(0, 0%, 40%)",fontSize:12,listStyleType:"none",":hover":{boxShadow:"0 0 10px orange"}}},1484:function(t,e,n){},1487:function(t,e,n){},1491:function(t,e,n){var r=n(96),i=n(1492),c=n(210),o=Math.max,a=Math.min;t.exports=function(t,e,n){var u,s,l,d,b,m,f=0,p=!1,O=!1,j=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function h(e){var n=u,r=s;return u=s=void 0,f=e,d=t.apply(r,n)}function g(t){return f=t,b=setTimeout(x,e),p?h(t):d}function v(t){var n=t-m;return void 0===m||n>=e||n<0||O&&t-f>=l}function x(){var t=i();if(v(t))return w(t);b=setTimeout(x,function(t){var n=e-(t-m);return O?a(n,l-(t-f)):n}(t))}function w(t){return b=void 0,j&&u?h(t):(u=s=void 0,d)}function y(){var t=i(),n=v(t);if(u=arguments,s=this,m=t,n){if(void 0===b)return g(m);if(O)return clearTimeout(b),b=setTimeout(x,e),h(m)}return void 0===b&&(b=setTimeout(x,e)),d}return e=c(e)||0,r(n)&&(p=!!n.leading,l=(O="maxWait"in n)?o(c(n.maxWait)||0,e):l,j="trailing"in n?!!n.trailing:j),y.cancel=function(){void 0!==b&&clearTimeout(b),f=0,u=m=s=b=void 0},y.flush=function(){return void 0===b?d:w(i())},y}},1492:function(t,e,n){var r=n(209);t.exports=function(){return r.Date.now()}},1503:function(t,e,n){"use strict";n.r(e);var r={};function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n.r(r),n.d(r,"itemCount",(function(){return f.a})),n.d(r,"alignment",(function(){return p})),n.d(r,"border",(function(){return O})),n.d(r,"padding",(function(){return j})),n.d(r,"width",(function(){return h})),n.d(r,"columnGap",(function(){return g})),n.d(r,"maxRows",(function(){return v})),n.d(r,"rowGap",(function(){return x})),n.d(r,"maxItemWidth",(function(){return w})),n.d(r,"minItemWidth",(function(){return y}));var u=n(95),s=n(10),l=n.n(s),d=n(1491),b=n.n(d),m=n(25),f=n(130),p="center",O=1,j=20,h=80,g=16,v=2,x=16,w=350,y=150,R=l.a.createContext(r),I=n(1483),C=n(1481),W=n(1482),M=function(t){var e,n=t.observeMaxRows,r=c(t,["observeMaxRows"]),i=l.a.useContext(R),o=i.alignment,u=i.border,s=i.itemCount,d=i.padding,b=(i.rowGap,i.width),m=c(i,["alignment","border","itemCount","padding","rowGap","width"]),f=Object(I.d)(a(a({},m),r)),p=n&&0!==f.desiredItemCount&&null!==(e=f.desiredItemCount)&&void 0!==e?e:s,O=G(a(a(a({},f),m),{},{count:p,itemCount:s,observeMaxRows:n})),j=O.cards,h=O.adjustedItemWidth,g=l.a.useMemo((function(){return[{border:"".concat(u,"px solid lightgray"),margin:"auto",padding:d,width:"".concat(b,"%")},"left"===o?{marginLeft:0}:"right"===o?{marginRight:0}:{}]}),[o,u,d,b]);return a(a(a({},i),f),{},{count:p,containerStyle:g,cards:j,adjustedItemWidth:h})},G=function(t){var e=t.columnGap,n=t.containerWidth,r=t.count,i=t.itemCount,c=t.maxItemWidth,o=t.observeMaxRows,a=t.rowCount,s=l.a.useState([]),d=Object(u.a)(s,2),b=d[0],m=d[1];return l.a.useEffect((function(){fetch("/api/cards/".concat(o?"":"init/","?count=").concat(r)).then((function(t){return t.json()})).then((function(t){var e=t.cards;return m(e)}))}),[r,o,i]),{cards:b,adjustedItemWidth:Object(I.c)({columnGap:e,containerWidth:n,itemCount:b.length,maxItemWidth:c,rowCount:a})}},P=(n(1487),function(t){var e=t.maximizeItemsPerRow,n=void 0!==e&&e,r=t.observeMaxRows,i=M({maximizeItemsPerRow:n,isFlex:!0,observeMaxRows:void 0!==r&&r}),c=i.adjustedItemWidth,o=i.cards,a=i.columnGap,u=i.containerRef,s=i.containerStyle,l=i.rowGap;return Object(m.c)("section",null,Object(m.c)("h3",null,"Flex (",c,"px)"),Object(m.c)(I.a.Container,Object.assign({columnGap:a,rowGap:l},{css:s,ref:u}),o.map((function(t){return Object(m.c)(I.a.Item,Object.assign({columnGap:a,itemWidth:c,rowGap:l},{css:W.a,key:t.id}),Object(m.c)(C.a,Object.assign({},t,{itemWidth:c})))}))))}),S=(n(1484),function(t){var e=t.maximizeItemsPerRow,n=void 0!==e&&e,r=t.observeMaxRows,i=M({maximizeItemsPerRow:n,observeMaxRows:void 0!==r&&r}),c=i.adjustedItemWidth,o=i.cards,a=i.columnGap,u=i.containerRef,s=i.containerStyle,l=i.rowGap;return Object(m.c)("section",null,Object(m.c)("h3",null,"Grid (",c,"px)"),Object(m.c)(I.b.Container,Object.assign({columnGap:a,itemWidth:c,rowGap:l},{css:s,ref:u}),o.map((function(t){return Object(m.c)(I.b.Item,{css:W.a,key:t.id},Object(m.c)(C.a,Object.assign({},t,{itemWidth:c})))}))))}),k=(e.default=function(){var t=k(),e=t.state,n=t.updateState;return Object(m.c)(l.a.Fragment,null,Object(m.c)(T,{state:e,updateState:n}),Object(m.c)(R.Provider,{value:e},Object(m.c)("section",null,Object(m.c)("h2",null,"Max Item Width"),Object(m.c)(P,null),Object(m.c)(S,null)),Object(m.c)("hr",null),Object(m.c)("section",null,Object(m.c)("h2",null,"Max Item Width (observe maxRows)"),Object(m.c)(P,{observeMaxRows:!0}),Object(m.c)(S,{observeMaxRows:!0})),Object(m.c)("hr",null),Object(m.c)("section",null,Object(m.c)("h2",null,"Max Items Per Row"),Object(m.c)(P,{maximizeItemsPerRow:!0}),Object(m.c)(S,{maximizeItemsPerRow:!0})),Object(m.c)("hr",null),Object(m.c)("section",null,Object(m.c)("h2",null,"Max Items Per Row (observe maxRows)"),Object(m.c)(P,{maximizeItemsPerRow:!0,observeMaxRows:!0}),Object(m.c)(S,{maximizeItemsPerRow:!0,observeMaxRows:!0}))))},function(){var t=l.a.useReducer((function(t,e){return a(a({},t),e)}),r),e=Object(u.a)(t,2);return{state:e[0],updateState:e[1]}}),T=function(t){return Object(m.c)("form",{css:E},Object(m.c)("fieldset",null,Object(m.c)("legend",null,"Container"),Object(m.c)(z,Object.assign({input:"width",unit:"%"},t)),Object(m.c)(z,Object.assign({input:"border"},t)),Object(m.c)(z,Object.assign({input:"padding"},t)),Object(m.c)(z,Object.assign({input:"alignment",unit:""},t),Object(m.c)("select",{defaultValue:t.state.alignment,onChange:function(e){return t.updateState({alignment:e.currentTarget.value})}},Object(m.c)("option",{value:"left"},"Left"),Object(m.c)("option",{value:"center"},"Center"),Object(m.c)("option",{value:"right"},"Right")))),Object(m.c)("fieldset",null,Object(m.c)("legend",null,"Grid"),Object(m.c)(z,Object.assign({input:"itemCount",unit:""},t)),Object(m.c)(z,Object.assign({input:"maxRows",unit:""},t)),Object(m.c)(z,Object.assign({input:"columnGap"},t)),Object(m.c)(z,Object.assign({input:"rowGap"},t)),Object(m.c)(z,Object.assign({input:"minItemWidth"},t)),Object(m.c)(z,Object.assign({input:"maxItemWidth"},t))))},z=function(t){var e=t.input,n=t.unit,o=void 0===n?"px":n,a=t.state,u=t.updateState,s=t.children,d=void 0===s?void 0:s,f=c(t,["input","unit","state","updateState","children"]),p=l.a.useCallback(b()((function(t){return u(i({},e,""===t?r[e]:Number(t)))}),500),[e,u]);return Object(m.c)("label",Object.assign({css:{display:"flex",justifyContent:"flex-end",alignItems:"center",fontSize:"inherit","> *":{margin:".2em"}}},f),Object(m.c)("div",{css:{marginLeft:0}},e,":"),Object(m.c)(D,{defaultValue:a[e],update:p},d),Object(m.c)("div",{css:{width:"1em"}},o))},D=function(t){var e=t.defaultValue,n=t.update,r=t.children,i=void 0===r?void 0:r;return i||Object(m.c)("input",Object.assign({type:"number",pattern:"[0-9]*",min:0,required:!0,onChange:function(t){return n(t.currentTarget.value)}},{defaultValue:e},{css:{width:"4em"}}))},E={backgroundColor:"white",borderBottom:"1px solid lightGray",display:"flex",margin:"0 -8px 0 -8px",padding:".5em",fontSize:"clamp(12px, 3.5vw, 1rem)","@media (min-height: 670px)":{position:"sticky",top:0}}}}]);
//# sourceMappingURL=13.8ae1982a.chunk.js.map