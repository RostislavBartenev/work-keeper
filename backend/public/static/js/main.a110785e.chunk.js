(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{163:function(e,t,a){e.exports=a(254)},168:function(e,t,a){},169:function(e,t,a){},218:function(e,t){},242:function(e,t){},244:function(e,t){},252:function(e,t,a){},253:function(e,t,a){},254:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),l=a.n(c),o=(a(168),a(169),a(17)),i=a.n(o),u=a(26),s=a(15),m=a(6),d=a(12),p=a(297),f=a(314),E=a(134),b=a.n(E),g=a(54),O=a(312),j=a(299),h=a(295),v=a(292),y=a(16),N=a(8),k=function(e){return console.log("ACTION_CREATOR_REGISTRATION",e),{type:"REGISTRATION",payload:Object(m.a)({},e)}},I=function(e){return{type:"LOGIN",payload:Object(m.a)({},e)}},S=Object(v.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1),fontSize:20},submit:{margin:e.spacing(3,0,2)}}})),D=function(e){var t,a=e.title,c=e.isReg,l=S(),o=Object(y.g)(),E=r.a.useRef(),v=Object(n.useState)({}),D=Object(d.a)(v,2),x=D[0],_=D[1],w=Object(n.useState)(""),C=Object(d.a)(w,2),R=C[0],T=C[1],A=Object(N.b)();function M(e){var t=e.target,a=t.value,n=t.name;_(Object(m.a)(Object(m.a)({},x),{},Object(s.a)({},n,a)))}function F(){return(F=Object(u.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(x),e.prev=2,e.next=5,fetch("".concat("http://localhost:3006","/user/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(x)});case 5:return a=e.sent,e.next=8,a.json();case 8:n=e.sent,console.log("LOGIN",n),a.ok?(A(I(n)),A({type:"IS_ME",payload:{}}),_({email:"",password:""}),o.push("/")):T(n.message),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,13]])})))).apply(this,arguments)}function G(){return(G=Object(u.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(x),e.prev=2,e.next=5,fetch("".concat("http://localhost:3006","/user/registration"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(x)});case 5:return a=e.sent,e.next=8,a.json();case 8:n=e.sent,console.log("REGISTRATION",n),a.ok?(A(k(n)),A({type:"IS_ME",payload:{}}),_({name:"",email:"",password:""}),o.push("/")):T(n.message),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,13]])})))).apply(this,arguments)}return r.a.createElement(h.a,{component:"main",maxWidth:"xs"},r.a.createElement(p.a,null),r.a.createElement("div",{className:l.paper},r.a.createElement(f.a,{className:l.avatar},r.a.createElement(b.a,null)),r.a.createElement(g.a,{component:"h1",variant:"h5"},a),r.a.createElement("form",{ref:E,onSubmit:c?function(e){return G.apply(this,arguments)}:function(e){return F.apply(this,arguments)},className:l.form,noValidate:!0},c&&r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,Object(s.a)({variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"name",label:"\u0418\u043c\u044f",id:"name",autoComplete:"current-password",onChange:M,autoFocus:!0},"required",!0)),r.a.createElement(O.a,Object(s.a)({variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"surname",label:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",id:"surname",autoComplete:"current-password",onChange:M},"required",!0))),r.a.createElement(O.a,(t={variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",autoComplete:"email",onChange:M},Object(s.a)(t,"required",!0),Object(s.a)(t,"autoFocus",!0),t)),r.a.createElement(O.a,Object(s.a)({variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",id:"password",autoComplete:"current-password",onChange:M},"required",!0)),r.a.createElement("span",{style:{color:"red",fontSize:"small"}},R),r.a.createElement(j.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:l.submit,onClick:function(){return E.current.reportValidity()}},a))))},x=function(){return r.a.createElement(D,{title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",isReg:!0})};var _=function(){return r.a.createElement(D,{title:"\u0412\u043e\u0439\u0442\u0438"})},w=a(150);var C=function(e){var t=e.children,a=Object(w.a)(e,["children"]),n=Object(N.c)((function(e){return e.aboutMe}));return console.log(n),r.a.createElement(y.b,Object.assign({},a,{render:function(e){var a=e.location;return n.isMe?t:r.a.createElement(y.a,{to:{pathname:"/user/login",state:{from:a}}})}}))},R=a(86),T=a.n(R),A=a(44),M=function(e,t){switch(t.type){case"JOINED":return Object(m.a)(Object(m.a)({},e),{},{joined:!0,userName:t.payload.userName,roomId:t.payload.roomId});case"SET_DATA":return Object(m.a)(Object(m.a)({},e),{},{users:t.payload.users,messages:t.payload.messages});case"SET_USERS":return Object(m.a)(Object(m.a)({},e),{},{users:t.payload});case"NEW_MESSAGE":return Object(m.a)(Object(m.a)({},e),{},{messages:[].concat(Object(A.a)(e.messages),[t.payload])});default:return e}};var F=function(e){var t=e.users,a=e.messages,c=e.userName,l=e.roomId,o=e.onAddMessage,i=e.socketRef,u=r.a.useState(""),s=Object(d.a)(u,2),m=s[0],p=s[1],f=r.a.useRef(null);return Object(n.useEffect)((function(){f.current.scrollTo(0,99999)}),[a]),r.a.createElement("div",{className:"chat"},r.a.createElement("div",{className:"chat-users"},r.a.createElement("b",null,"\u041e\u043d\u043b\u0430\u0439\u043d (",t.length,"):"),r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement("li",{key:e+t},e)})))),r.a.createElement("div",{className:"chat-messages"},r.a.createElement("div",{ref:f,className:"messages"},a.map((function(e,t){return r.a.createElement("div",{key:t,className:"message"},r.a.createElement("p",null,e.text),r.a.createElement("div",null,r.a.createElement("span",null,e.userName)))}))),r.a.createElement("form",null,r.a.createElement("textarea",{value:m,onChange:function(e){return p(e.target.value)},className:"form-control",rows:"3"}),r.a.createElement("button",{onClick:function(){i.current.emit("ROOM:NEW_MESSAGE",{userName:c,roomId:l,text:m}),o({userName:c,text:m}),p("")},type:"button",className:"btn btn-primary"},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"))))},G=a(73),P=a.n(G);var z=function(){var e=Object(N.c)((function(e){return e.user})),t=e.name,a=e.surname;console.log("123");var c=Object(n.useRef)(),l=Object(n.useReducer)(M,{joined:!1,roomId:null,userName:null,users:[],messages:[]}),o=Object(d.a)(l,2),s=o[0],m=o[1],p={roomId:"123",userName:t+" "+a};Object(n.useEffect)((function(){return c.current=P.a.connect("/"),Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.post("/rooms",p);case 2:return m({type:"JOINED",payload:p}),console.log("room join"),c.current.emit("ROOM:JOIN",p),e.next=7,T.a.get("/rooms/".concat(p.roomId));case 7:t=e.sent,a=t.data,m({type:"SET_DATA",payload:a});case 10:case"end":return e.stop()}}),e)})))(),function(){console.log("disc"),c.current.disconnect()}}),[]);var f=function(e){m({type:"SET_USERS",payload:e})},E=function(e){m({type:"NEW_MESSAGE",payload:e})};return Object(n.useEffect)((function(){c.current.on("ROOM:SET_USERS",f),c.current.on("ROOM:NEW_MESSAGE",E)}),[]),r.a.createElement(F,Object.assign({},s,{socketRef:c,onAddMessage:E}))},J=a(87),W=a.n(J),B=a(135),q=a.n(B),L=a(136),U=a.n(L),V=a(137),K=a.n(V),Y=a(138),X=a.n(Y),H=(a(252),function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){e.peer.on("stream",(function(e){t.current.srcObject=e}))}),[]),r.a.createElement("video",{autoPlay:!0,ref:t})}),Q=function(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),c=a[0],l=a[1],o=Object(n.useRef)(),i=Object(n.useRef)(),u=Object(n.useRef)([]),s=e.match.params.roomID,p=Object(n.useRef)(),f=Object(n.useState)(!0),E=Object(d.a)(f,2),b=E[0],g=E[1],O=Object(n.useState)(!1),j=Object(d.a)(O,2),h=j[0],v=j[1];return Object(n.useEffect)((function(){return o.current=P.a.connect("/"),navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){i.current.srcObject=e,p.current=e,p.current.getAudioTracks()[0].enabled=h,o.current.emit("join room",s),o.current.on("all users",(function(t){var a=[];t.forEach((function(t){var n=function(e,t,a){var n=new W.a({initiator:!0,trickle:!1,stream:a});return n.on("signal",(function(a){o.current.emit("sending signal",{userToSignal:e,callerID:t,signal:a})})),n}(t,o.current.id,e);u.current.push({peerID:t,peer:n}),a.push({peerID:t,peer:n})})),l(a)})),o.current.on("user joined",(function(t){var a=function(e,t,a){var n=new W.a({initiator:!1,trickle:!1,stream:a});return n.on("signal",(function(e){o.current.emit("returning signal",{signal:e,callerID:t})})),n.signal(e),n}(t.signal,t.callerID,e);console.log(u.current),u.current.push({peerID:t.callerID,peer:a});var n={peer:a,peerID:t.callerID};console.log(u.current,n,"!!!!!!!"),console.log(n.peer._id,"peer id"),l((function(e){return e.map((function(e){return e.peerID!==n.peerID?Object(m.a)({},e):Object(m.a)({},n)}))}))})),o.current.on("receiving returned signal",(function(e){u.current.find((function(t){return t.peerID===e.id})).peer.signal(e.signal)})),o.current.on("user left",(function(e){var t=u.current.find((function(t){return t.peerID===e}));t&&t.peer.destroy();var a=u.current.filter((function(t){return t.peerID!==e}));u.current=a,l(a)}))})),function(){p.current.getTracks().forEach((function(e){return e.stop()})),o.current.close()}}),[]),Object(n.useEffect)((function(){p.current&&p.current.getVideoTracks()[0]&&p.current.getVideoTracks()[0].enabled!==b&&(p.current.getVideoTracks()[0].enabled=b),p.current&&p.current.getAudioTracks()[0]&&p.current.getAudioTracks()[0].enabled!==h&&(p.current.getAudioTracks()[0].enabled=h)}),[b,h]),console.log(c),r.a.createElement("div",{className:"videochat-container"},r.a.createElement("div",{className:"videochat-user"},r.a.createElement("video",{muted:!0,ref:i,autoPlay:!0}),r.a.createElement("div",{className:"videochat-user-buttons"},h?r.a.createElement("button",{onClick:function(){return v((function(e){return!e}))}},r.a.createElement(q.a,null)," "):r.a.createElement("button",{className:"red",onClick:function(){return v((function(e){return!e}))}},r.a.createElement(U.a,null)," "),b?r.a.createElement("button",{onClick:function(){return g((function(e){return!e}))}},r.a.createElement(K.a,null)," "):r.a.createElement("button",{className:"red",onClick:function(){return g((function(e){return!e}))}},r.a.createElement(X.a,null)," "))),r.a.createElement("div",{className:"videochat-companions"},c.map((function(e){return r.a.createElement(H,{key:e.peerID,peer:e.peer})}))))},Z=a(300),$=a(304),ee=a(302),te=a(303),ae=a(301),ne=function(e,t){return{type:"DEP_TO_ORG",payload:{orgID:e,depID:t}}},re=function(e,t){return{type:"DEP_ADD_DEP",payload:{orgID:e,depObject:t}}},ce=function(e){return{type:"DEP_ARR_AT_DEP",payload:e}};function le(e){var t=e.open,a=e.handleClose,c=Object(n.useState)(""),l=Object(d.a)(c,2),o=l[0],p=l[1],f=Object(N.b)(),E=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,r,c,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(),t=JSON.parse(localStorage.getItem("redux")),n=t.user.userID,console.log(n),e.prev=3,r={nameOrg:o,userID:n},e.next=7,fetch("".concat("http://localhost:3006","/organization"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 7:return c=e.sent,e.next=10,c.json();case 10:l=e.sent,console.log("\u041f\u041e\u0421\u041b\u0415 \u0414\u041e\u0411\u0410\u0412\u041b\u0415\u041d\u0418\u042f \u041e\u0420\u0413",l),c.ok&&(f((i=l,{type:"ORG_ADD_ORG",payload:Object(m.a)({},i)})),f({type:"ORG_KEY_IN_DEP",payload:{orgID:l._id}})),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),console.log(e.t0);case 18:case"end":return e.stop()}var i}),e,null,[[3,15]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(Z.a,{open:t,onClose:a,"aria-labelledby":"form-dialog-title"},r.a.createElement(ae.a,{id:"form-dialog-title"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044e"),r.a.createElement(ee.a,null,r.a.createElement(te.a,null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0432\u0430\u0448\u0435\u0439 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438/\u043f\u0440\u0435\u0434\u043f\u0440\u0438\u044f\u0442\u0438\u044f:"),r.a.createElement("form",null,r.a.createElement(O.a,Object(s.a)({autoFocus:!0,margin:"dense",id:"name",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",type:"text",fullWidth:!0,onChange:function(e){return p(e.target.value)}},"autoFocus",!0)))),r.a.createElement($.a,null,r.a.createElement(j.a,{onClick:a,color:"primary"},"\u041e\u0442\u043c\u0435\u043d\u0430"),r.a.createElement(j.a,{onClick:E,color:"primary"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")))}var oe=a(19),ie=function(e){var t=e.name;return r.a.createElement("div",null,t)},ue=function(){console.log("RENDER profile");var e=Object(N.c)((function(e){return e.organizations})),t=r.a.useState(!1),a=Object(d.a)(t,2),n=a[0],c=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"profile__page"},r.a.createElement(j.a,{variant:"outlined",color:"primary",onClick:function(){c(!0)}},"+ \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044e"),n&&r.a.createElement(le,{open:n,handleClose:function(){c(!1)}})),r.a.createElement("div",null,e.length?r.a.createElement("ul",{className:"org-list "},e.map((function(e){return r.a.createElement(oe.b,{to:"/organization/".concat(e._id),key:e._id},r.a.createElement("li",{className:"org-list-task"},r.a.createElement(ie,e)))}))):r.a.createElement("p",null,"\u041d\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0439")))},se=a(3),me=a(28),de=a(313),pe=a(305),fe=a(306),Ee=a(298),be=a(308),ge=a(307),Oe=a(139),je=a.n(Oe),he=a(141),ve=a.n(he),ye=a(140),Ne=a.n(ye),ke=a(309),Ie=a(310),Se=a(311),De=a(142),xe=a.n(De),_e=a(147),we=a.n(_e),Ce=a(148),Re=a.n(Ce),Te=a(146),Ae=a.n(Te),Me=a(145),Fe=a.n(Me),Ge=a(143),Pe=a.n(Ge),ze=a(144),Je=a.n(ze),We=(a(253),Object(v.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:240,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(s.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(m.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)}}})));function Be(e){var t,a,n=e.children,c=Object(N.c)((function(e){return e.aboutMe})),l=Object(N.c)((function(e){return e.user})),o=l.userID,i=(l.name,l.surname,Object(N.b)()),u=We(),m=Object(me.a)(),f=r.a.useState(!1),E=Object(d.a)(f,2),b=E[0],g=E[1];return r.a.createElement("div",{className:u.root},r.a.createElement(p.a,null),r.a.createElement(pe.a,{position:"fixed",className:Object(se.a)(u.appBar,Object(s.a)({},u.appBarShift,b))},r.a.createElement(fe.a,null,r.a.createElement(ge.a,{color:"inherit","aria-label":"open drawer",onClick:function(){g(!0)},edge:"start",className:Object(se.a)(u.menuButton,Object(s.a)({},u.hide,b))},r.a.createElement(je.a,null)))),r.a.createElement(de.a,{variant:"permanent",className:Object(se.a)(u.drawer,(t={},Object(s.a)(t,u.drawerOpen,b),Object(s.a)(t,u.drawerClose,!b),t)),classes:{paper:Object(se.a)((a={},Object(s.a)(a,u.drawerOpen,b),Object(s.a)(a,u.drawerClose,!b),a))}},r.a.createElement("div",{className:u.toolbar},r.a.createElement(ge.a,{onClick:function(){g(!1)}},"rtl"===m.direction?r.a.createElement(Ne.a,null):r.a.createElement(ve.a,null))),r.a.createElement(be.a,null),r.a.createElement(Ee.a,null,r.a.createElement(oe.b,{to:"/",className:"nav-link"},r.a.createElement(ke.a,{button:!0},r.a.createElement(Ie.a,null,r.a.createElement(xe.a,null)),r.a.createElement(Se.a,null,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"))),c.isMe?r.a.createElement(r.a.Fragment,null,r.a.createElement(oe.b,{to:"/videochat",className:"nav-link"},r.a.createElement(ke.a,{button:!0},r.a.createElement(Ie.a,null,r.a.createElement(Pe.a,null)),r.a.createElement(Se.a,null,"\u0412\u0438\u0434\u0435\u043e"))),r.a.createElement(oe.b,{to:"/global-chat",className:"nav-link"},r.a.createElement(ke.a,{button:!0},r.a.createElement(Ie.a,null,r.a.createElement(Je.a,null)),r.a.createElement(Se.a,null,"\u0427\u0430\u0442")))):""),r.a.createElement(be.a,null),r.a.createElement(Ee.a,null,c.isMe?r.a.createElement(r.a.Fragment,null,r.a.createElement(oe.b,{to:"/profile/".concat(o),className:"nav-link"},r.a.createElement(ke.a,{button:!0},r.a.createElement(Ie.a,null,r.a.createElement(Fe.a,null)),r.a.createElement(Se.a,null,"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"))),r.a.createElement(oe.b,{to:"/user/registration",className:"nav-link",onClick:function(){i({type:"LOGOUT",payload:{}}),i({type:"IS_NOT_ME",payload:{}}),localStorage.clear()}},r.a.createElement(ke.a,{button:!0},r.a.createElement(Ie.a,null,r.a.createElement(Ae.a,null)),r.a.createElement(Se.a,null,"\u0412\u044b\u0439\u0442\u0438")))):r.a.createElement(r.a.Fragment,null,r.a.createElement(oe.b,{className:"nav-link",to:"/user/registration"},r.a.createElement(ke.a,{button:!0},r.a.createElement(Ie.a,null,r.a.createElement(we.a,null)),r.a.createElement(Se.a,null,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"))),r.a.createElement(oe.b,{className:"nav-link",to:"/user/login"},r.a.createElement(ke.a,{button:!0},r.a.createElement(Ie.a,null,r.a.createElement(Re.a,null)),r.a.createElement(Se.a,null,"\u0412\u043e\u0439\u0442\u0438")))))),r.a.createElement("main",{className:u.content},r.a.createElement("div",{className:u.toolbar}),n))}var qe=function(){var e=Object(N.c)((function(e){return e.user})).userID;return Object(n.useEffect)((function(){Object(u.a)(i.a.mark((function t(){var a,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat("http://localhost:3006","/organization/?userID=").concat(e));case 3:return a=t.sent,t.next=6,a.json();case 6:n=t.sent,console.log("INFO_FOR_MAIN_PAGE",n),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"),r.a.createElement("p",null,"\u0412\u0430\u0448\u0438 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438:"),r.a.createElement("div",null))},Le=function(e){var t=e.name;return r.a.createElement("div",null,t)};function Ue(e){var t=e.open,a=e.handleClose,c=e.orgID,l=Object(n.useState)(""),o=Object(d.a)(l,2),s=o[0],m=o[1],p=Object(N.b)(),f=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,r,l,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(),t=JSON.parse(localStorage.getItem("redux")),n=t.user.userID,console.log(n),e.prev=3,r={nameDepart:s,userID:n,orgID:c},e.next=7,fetch("".concat("http://localhost:3006","/department"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 7:return l=e.sent,e.next=10,l.json();case 10:o=e.sent,console.log("\u041f\u041e\u0421\u041b\u0415 \u0414\u041e\u0411\u0410\u0412\u041b\u0415\u041d\u0418\u042f \u0414\u0415\u041f\u0410\u0420\u0422\u041c\u0415\u041d\u0422\u0410",o),l.ok&&(p(re(c,o)),p(ne(c,o._id)),p(ce(o))),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(Z.a,{open:t,onClose:a,"aria-labelledby":"form-dialog-title"},r.a.createElement(ae.a,{id:"form-dialog-title"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u0442\u0434\u0435\u043b"),r.a.createElement(ee.a,null,r.a.createElement(te.a,null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043e\u0442\u0434\u0435\u043b\u0430/\u043f\u043e\u0434\u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f:"),r.a.createElement("form",null,r.a.createElement(O.a,{margin:"dense",id:"name",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",type:"text",fullWidth:!0,onChange:function(e){return m(e.target.value)},autoFocus:!0}))),r.a.createElement($.a,null,r.a.createElement(j.a,{onClick:a,color:"primary"},"\u041e\u0442\u043c\u0435\u043d\u0430"),r.a.createElement(j.a,{onClick:f,color:"primary"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")))}var Ve=function(e){var t=e.organizations;console.log("RENDER OrgINFO"),console.log(t);var a=Object(y.h)().id,c=Object(n.useState)({}),l=Object(d.a)(c,2),o=l[0],i=l[1],u=Object(y.g)(),s=r.a.useState(!1),p=Object(d.a)(s,2),f=p[0],E=p[1],b=Object(N.c)((function(e){return e.departments[a]}))||[];console.log("depArray",b),Object(n.useEffect)((function(){var e=t.find((function(e){return e._id===a}));console.log("FFFFFFFFFF",e),e&&i(Object(m.a)({},e))}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438"),Object.keys(o).length?r.a.createElement("div",{className:"d-flex flex-column align-items-center"},r.a.createElement("h1",null,o.name),r.a.createElement("p",null,"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043e\u0442\u0434\u0435\u043b\u044b/\u043f\u043e\u0434\u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0432\u0430\u0448\u0435\u0439 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 "),r.a.createElement(j.a,{variant:"outlined",color:"primary",onClick:function(){E(!0)}},"+ \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u0442\u0434\u0435\u043b"),f&&r.a.createElement(Ue,{open:f,handleClose:function(){E(!1)},orgID:o._id}),r.a.createElement("div",null,b.length?r.a.createElement("ul",{className:"org-list "},b.map((function(e){return console.log(">>>>>>>>>>",e),r.a.createElement(oe.b,{to:"/department/".concat(e._id),key:e._id},r.a.createElement("li",{className:"org-list-task"},r.a.createElement(Le,e)))}))):r.a.createElement("p",null,"\u041d\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u043e\u0442\u0434\u0435\u043b\u043e\u0432")),r.a.createElement("button",{onClick:function(){u.goBack()},type:"button",className:"btn btn-primary mt-5"},"Back")):null)};function Ke(e){var t=e.handleClose,a=e._id,c=e.open;console.log(a);var l=Object(n.useState)(""),o=Object(d.a)(l,2),s=o[0],m=o[1],p=Object(N.b)(),f=function(){var e=Object(u.a)(i.a.mark((function e(){var n,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(),e.prev=1,n={worker:s,depID:a},e.next=5,fetch("".concat("http://localhost:3006","/department"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 5:return r=e.sent,e.next=8,r.json();case 8:c=e.sent,console.log("\u041f\u041e\u0421\u041b\u0415 \u0414\u041e\u0411\u0410\u0412\u041b\u0415\u041d\u0418\u042f \u0414\u0415\u041f\u0410\u0420\u0422\u041c\u0415\u041d\u0422\u0410",c),r.ok&&(p(re(a,c)),p(ne(a,c._id)),p(ce(c))),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(Z.a,{open:c,onClose:t,"aria-labelledby":"form-dialog-title"},r.a.createElement(ae.a,{id:"form-dialog-title"},"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 email \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430"),r.a.createElement(ee.a,null,r.a.createElement("form",null,r.a.createElement(O.a,{margin:"dense",id:"name",label:"Email",type:"text",fullWidth:!0,onChange:function(e){return m(e.target.value)},autoFocus:!0}))),r.a.createElement($.a,null,r.a.createElement(j.a,{onClick:t,color:"primary"},"\u041e\u0442\u043c\u0435\u043d\u0430"),r.a.createElement(j.a,{onClick:f,color:"primary"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")))}var Ye=function(e){var t=e.organizations;console.log("RENDER DepartmentInfo");var a=Object(N.c)((function(e){return e.departments})),c=Object(y.h)().id,l=Object(n.useState)({}),o=Object(d.a)(l,2),i=o[0],u=o[1],s=Object(y.g)(),m=r.a.useState(!1),p=Object(d.a)(m,2),f=p[0],E=p[1],b=Object(N.c)((function(e){return e.departments[c]}))||[];console.log("depArray",b),Object(n.useEffect)((function(){var e=t.find((function(e){return e.departments.find((function(e){return e===c}))}))._id;e&&u(a[e].find((function(e){return e._id=c})))}),[]);return console.log(i),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043e\u0442\u0434\u0435\u043b\u0430"),Object.keys(i).length?r.a.createElement("div",{className:"d-flex flex-column align-items-center"},r.a.createElement("h1",null,i.name),r.a.createElement(j.a,{variant:"outlined",color:"primary",onClick:function(){E(!0)}},"+ \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430"),f&&r.a.createElement(Ke,Object.assign({open:f,handleClose:function(){E(!1)}},i)),r.a.createElement("div",null,i.length?r.a.createElement("ul",{className:"org-list "},i.map((function(e){return console.log(">>>>>>>>>>",e),r.a.createElement(oe.b,{to:"/department/".concat(e._id),key:e._id},r.a.createElement("li",{className:"org-list-task"},r.a.createElement(Le,e)))}))):r.a.createElement("p",null,"\u041d\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432")),r.a.createElement("button",{onClick:function(){s.goBack()},type:"button",className:"btn btn-primary mt-5"},"Back")):null)};var Xe=function(){var e=Object(N.c)((function(e){return e.aboutMe})),t=(Object(N.c)((function(e){return e.user})),Object(N.c)((function(e){return e.organizations})));return r.a.createElement("div",{className:"App"},r.a.createElement(Be,null,r.a.createElement(y.d,null,r.a.createElement(y.b,{exact:!0,path:"/user/registration"},r.a.createElement(x,null)),r.a.createElement(y.b,{exact:!0,path:"/user/login"},r.a.createElement(_,null)),r.a.createElement(y.b,{exact:!0,path:"/organization/:id"},r.a.createElement(Ve,{organizations:t})),r.a.createElement(y.b,{exact:!0,path:"/department/:id"},r.a.createElement(Ye,{organizations:t})),r.a.createElement(y.b,{exact:!0,path:"/videochat",component:Q}),r.a.createElement(C,{exact:!0,path:"/profile/:id"},r.a.createElement(ue,null)),r.a.createElement(y.b,{exact:!0,path:"/"},e.isMe?r.a.createElement(qe,null):r.a.createElement(y.a,{to:"/user/registration"})),r.a.createElement(y.b,{exact:!0,path:"/global-chat"},r.a.createElement(z,null)))))},He=a(41),Qe=function(){return JSON.parse(localStorage.getItem("redux"))||{aboutMe:{},user:{},organizations:[],departments:{}}},Ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTRATION":case"LOGIN":return Object(m.a)(Object(m.a)({},e),t.payload);case"LOGOUT":return{};default:return e}},$e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_ME":return Object(m.a)(Object(m.a)({},e),{},{isMe:!0});case"IS_NOT_ME":return Object(m.a)(Object(m.a)({},e),{},{isMe:!1});default:return e}},et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ORG_ADD_ORG":return[].concat(Object(A.a)(e),[Object(m.a)({},t.payload)]);case"DEP_TO_ORG":return e.map((function(e){return e._id===t.payload.orgID?Object(m.a)(Object(m.a)({},e),{},{departments:[].concat(Object(A.a)(e.departments),[t.payload.depID])}):e}));default:return e}},tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DEP_ADD_DEP":return Object(m.a)(Object(m.a)({},e),{},Object(s.a)({},t.payload.orgID,[].concat(Object(A.a)(e[t.payload.orgID]),[t.payload.depObject])));case"ORG_KEY_IN_DEP":return Object(m.a)(Object(m.a)({},e),{},Object(s.a)({},t.payload.orgID,[]));default:return e}},at=Object(He.combineReducers)({user:Ze,aboutMe:$e,organizations:et,departments:tt}),nt=a(149),rt=Object(nt.composeWithDevTools)(),ct=Object(He.createStore)(at,Qe(),rt);ct.subscribe((function(){localStorage.setItem("redux",JSON.stringify(ct.getState()))}));var lt=ct;l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N.a,{store:lt},r.a.createElement(oe.a,null,r.a.createElement(Xe,null)))),document.getElementById("root"))}},[[163,1,2]]]);
//# sourceMappingURL=main.a110785e.chunk.js.map