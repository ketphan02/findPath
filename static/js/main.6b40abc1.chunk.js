(this["webpackJsonptik-tak-too"]=this["webpackJsonptik-tak-too"]||[]).push([[0],{48:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(7),c=n.n(a),o=n(31),i=n(11),l=n(65),s=n(67),u=n(66),d=n(2),b=Object(l.a)((function(e){return{square:{backgroundColor:e.palette.background.default,borderRadius:e.shape.borderRadius,borderColor:"black",borderStyle:"solid",borderWidth:"0.2px",margin:function(e){var t=e.length;return window.innerHeight/(20*t)},width:function(e){var t=e.length;return window.innerHeight/(1.3*t)},height:function(e){var t=e.length;return window.innerHeight/(1.3*t)},"&:hover":{backgroundColor:function(t){var n=t.x,r=t.y,a=t.grids,c=t.turn;return null===a[n][r].current?0===c?e.palette.secondary.main:1===c?e.palette.primary.main:e.palette.common.black:0===a[n][r].current?e.palette.secondary.main:1===a[n][r].current?e.palette.primary.main:e.palette.common.black}}},cur:{backgroundColor:e.palette.secondary.main},tar:{backgroundColor:e.palette.primary.main},obs:{backgroundColor:e.palette.common.black}}})),g=function(e){var t=e.length,n=e.x,a=e.y,c=e.grids,o=e.turn,l=b({length:t,x:n,y:a,grids:c,turn:o}),s=r.useState(""),g=Object(i.a)(s,2),p=g[0],m=g[1];return Object(d.jsx)(u.a,{elevation:0,className:"".concat(l.square," ").concat(p),onClick:function(){null===c[n][a].current&&(0===o?(c[n][a].current=0,m(l.cur)):1===o?(c[n][a].current=1,m(l.tar)):(c[n][a].current=2,m(l.obs)))}})},p=Object(l.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",backgroundColor:e.palette.background.paper,padding:"".concat(e.spacing(1)," ").concat(e.spacing(3))},row:{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}})),m=function(e){var t=e.length,n=e.turn,a=p(),c=Array.from({length:t},(function(){return Array.from({length:t},(function(){return r.useRef(null)}))}));return Object(d.jsx)("div",{className:a.root,children:c.map((function(e,r){return Object(d.jsx)("div",{className:a.row,children:e.map((function(e,a){return Object(d.jsx)(g,{length:t,x:r,y:a,grids:c,turn:n})}))})}))})},j=n(68),h=n(69),x=Object(l.a)((function(e){return{root:{flexGrow:1,margin:e.spacing(2)},paper:{padding:e.spacing(2),margin:"auto","&:hover":{backgroundColor:e.palette.grey.A200}},focusedPaper:{padding:e.spacing(2),margin:"auto",backgroundColor:e.palette.grey.A200},image:{display:"inline-block",width:"100%",height:"100%",backgroundColor:function(t){var n=t.color;return"red"===n?e.palette.secondary.main:"blue"===n?e.palette.primary.main:e.palette.common.black}},classes:{margin:"auto",display:"block",maxWidth:"100%",maxHeight:"100%"}}})),f=function(e){var t=e.colorName,n=e.color,r=e.isChoosed,a=e.onClick,c=x({color:n});return Object(d.jsx)("div",{className:c.root,children:Object(d.jsx)(u.a,{className:r?c.focusedPaper:c.paper,onClick:a,children:Object(d.jsxs)(s.a,{container:!0,spacing:2,children:[Object(d.jsx)(s.a,{item:!0,xs:4,children:Object(d.jsx)(h.a,{className:c.image})}),Object(d.jsx)(s.a,{item:!0,xs:8,sm:!0,container:!0,children:Object(d.jsx)(j.a,{variant:"body1",align:"center",style:{margin:"auto"},children:t})})]})})})},O=Object(l.a)((function(){return{wrapper:{display:"flex",height:"100%",flexGrow:1},title:{marginTop:"1rem"}}})),k=function(e){var t=e.card,n=e.setCard,r=O();return Object(d.jsx)(s.a,{container:!0,spacing:2,className:r.wrapper,children:Object(d.jsxs)(s.a,{item:!0,xs:12,children:[Object(d.jsx)(s.a,{item:!0,xs:12,children:Object(d.jsx)(j.a,{variant:"h3",color:"textPrimary",align:"center",className:r.title,children:"MENU"})}),Object(d.jsxs)(s.a,{item:!0,xs:12,children:[Object(d.jsx)(f,{colorName:"Current position",color:"red",isChoosed:0===t,onClick:function(){return n(0)}}),Object(d.jsx)(f,{colorName:"Target",color:"blue",isChoosed:1===t,onClick:function(){return n(1)}}),Object(d.jsx)(f,{colorName:"Obstacles",color:"black",isChoosed:2===t,onClick:function(){return n(2)}})]})]})})},C=Object(l.a)((function(e){return{gamepad:{padding:e.spacing(1)},menu:{justifyContent:"space-between",alignItems:"center",backgroundColor:e.palette.background.paper}}})),y=function(){var e=C(),t=r.useState(0),n=Object(i.a)(t,2),a=n[0],c=n[1];return Object(d.jsxs)(s.a,{container:!0,sm:!0,children:[Object(d.jsx)(s.a,{item:!0,xs:3,className:e.menu,children:Object(d.jsx)(k,{card:a,setCard:c})}),Object(d.jsx)(s.a,{item:!0,xs:9,className:e.gamepad,children:Object(d.jsx)(m,{length:20,turn:a})})]})},v=function(){return Object(d.jsx)(o.a,{maxSnack:3,children:Object(d.jsx)(y,{})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))};c.a.render(Object(d.jsx)(r.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),w()}},[[48,1,2]]]);
//# sourceMappingURL=main.6b40abc1.chunk.js.map