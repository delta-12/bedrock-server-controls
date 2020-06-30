(this["webpackJsonpbedrock-controls"]=this["webpackJsonpbedrock-controls"]||[]).push([[0],{47:function(e,t,a){e.exports=a(83)},52:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),l=a.n(o),s=(a(52),a(2)),c=a(3),i=a(5),u=a(4),d=a(12),m=a(6),p=a(13),h=a(14),v=a(44),f=a(20),E=a(57),b={isAuthenticated:!1,user:{},loading:!1},g={},O=Object(h.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(f.a)(Object(f.a)({},e),{},{isAuthenticated:!E(t.payload),user:t.payload});case"USER_LOADING":return Object(f.a)(Object(f.a)({},e),{},{loading:!0});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}}}),w=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||h.d,j=Object(h.e)(O,{},w(Object(h.a)(v.a))),y=a(24),k=a.n(y),C=a(18),S=a.n(C),N=function(e){e?S.a.defaults.headers.common.Authorization=e:delete S.a.defaults.headers.common.Authorization},R=function(e){return{type:"SET_CURRENT_USER",payload:e}},U=function(){return function(e){localStorage.removeItem("jwtToken"),N(!1),e(R({}))}},A=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"appDiv"},r.a.createElement("h1",{className:"headerStyle"},"Bedrock Server Controls"),r.a.createElement("div",{className:"landing"},r.a.createElement(d.b,{className:"link",to:"/login"},"Login"),r.a.createElement(d.b,{className:"link",to:"/register"},"Register")))}}]),a}(r.a.Component),D=a(17),x=a(15),L=a.n(x),T=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).onChange=function(t){e.setState(Object(D.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={username:e.state.username,email:e.state.email,password:e.state.password,password2:e.state.password2};e.props.registerUser(a,e.props.history)},e.state={username:"",email:"",password:"",password2:"",errors:{}},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",{className:"appDiv"},r.a.createElement("h1",{className:"headerStyle"},"Bedrock Server Controls"),r.a.createElement("div",{className:"login"},r.a.createElement("h1",null,"Register New User"),r.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},r.a.createElement("span",{className:"red-text"},e.username),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{className:L()("",{invalid:e.username}),onChange:this.onChange,value:this.state.username,placeholder:"Username",error:e.username,id:"username",type:"text"})),r.a.createElement("span",{className:"red-text"},e.email),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{className:L()("",{invalid:e.email}),onChange:this.onChange,value:this.state.email,placeholder:"Email",error:e.email,id:"email",type:"email"})),r.a.createElement("span",{className:"red-text"},e.password),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{className:L()("",{invalid:e.password}),onChange:this.onChange,value:this.state.password,placeholder:"Password",error:e.password,id:"password",type:"password"})),r.a.createElement("span",{className:"red-text"},e.password2),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{className:L()("",{invalid:e.password2}),onChange:this.onChange,value:this.state.password2,placeholder:"Confirm Password",error:e.password2,id:"password2",type:"password"})),r.a.createElement("p",null,"Already have an account? ",r.a.createElement(d.b,{className:"otherLink",to:"/login"},"Login")),r.a.createElement("input",{type:"submit",value:"Register"}))))}}]),a}(r.a.Component),_=Object(p.b)((function(e){return{auth:e.auth,errors:e.errors}}),{registerUser:function(e,t){return function(a){S.a.post("/api/users/register",e).then((function(e){return t.push("/login")})).catch((function(e){return a({type:"GET_ERRORS",payload:e.response.data})}))}}})(Object(m.g)(T)),P=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).onChange=function(t){e.setState(Object(D.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={username:e.state.username,password:e.state.password};e.props.loginUser(a)},e.state={username:"",password:"",errors:{}},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.auth.isAuthenticated&&this.props.history.push("/dashboard"),e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",{className:"appDiv"},r.a.createElement("h1",{className:"headerStyle"},"Bedrock Server Controls"),r.a.createElement("div",{className:"login"},r.a.createElement("h1",null,"Server Login"),r.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},r.a.createElement("span",{className:"red-text"},e.username,e.usernamenotfound),r.a.createElement("span",{className:"red-text"},e.password,e.passwordincorrect),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{onChange:this.onChange,value:this.state.username,error:e.username,id:"username",type:"text",placeholder:"Username",className:L()("",{invalid:e.username||e.usernamenotfound})})),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password",placeholder:"Password",className:L()("",{invalid:e.password||e.passwordincorrect})})),r.a.createElement("p",null,"Don't have an account? ",r.a.createElement(d.b,{className:"otherLink",to:"/register"},"Register")),r.a.createElement("input",{type:"submit",value:"Login"}))))}}]),a}(r.a.Component),W=Object(p.b)((function(e){return{auth:e.auth,errors:e.errors}}),{loginUser:function(e){return function(t){S.a.post("/api/users/login",e).then((function(e){var a=e.data.token;localStorage.setItem("jwtToken",a),N(a);var n=k()(a);t(R(n))})).catch((function(e){return t({type:"GET_ERRORS",payload:e.response.data})}))}}})(P),B=a(46),M=Object(p.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,a=e.auth,n=Object(B.a)(e,["component","auth"]);return r.a.createElement(m.b,Object.assign({},n,{render:function(e){return!0===a.isAuthenticated?r.a.createElement(t,e):r.a.createElement(m.a,{to:"/login"})}}))})),I=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"headerCard"},r.a.createElement("h1",null,this.props.name))}}]),a}(r.a.Component),G=a(23),V=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={started:null},e.handlestarted=e.handlestarted.bind(Object(G.a)(e)),e}return Object(c.a)(a,[{key:"componentsDidMount",value:function(){return null}},{key:"handlestarted",value:function(){this.setState((function(){return this.state.started?{started:!1}:{started:!0}}))}},{key:"render",value:function(){return this.state.started?r.a.createElement("div",null,r.a.createElement("button",{className:"stopButton",onClick:this.handlestarted},r.a.createElement("h3",null,"Stop"))):r.a.createElement("div",null,r.a.createElement("button",{className:"startButton",onClick:this.handlestarted},r.a.createElement("h3",null,"Start")))}}]),a}(r.a.Component),z=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h2",null,"Status")),r.a.createElement("code",null,this.props.status),r.a.createElement(V,null))}}]),a}(r.a.Component),J=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Address"),r.a.createElement("code",null,this.props.address),r.a.createElement("h2",null,"Port"),r.a.createElement("code",null,this.props.port))}}]),a}(r.a.Component),X=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Players"),r.a.createElement("code",null,this.props.players))}}]),a}(r.a.Component),q=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Software"),r.a.createElement("code",null,this.props.software),r.a.createElement("h2",null,"Version"),r.a.createElement("code",null,this.props.version))}}]),a}(r.a.Component),H=a(45),$=a.n(H),F=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h2",null,"Share this app")),r.a.createElement("div",null,r.a.createElement($.a,{id:"qr-code",value:this.props.baseURL,size:120,level:"H",includeMargin:!0})))}}]),a}(r.a.Component),K=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onLogoutClick=function(t){t.preventDefault(),e.props.logoutUser()},e.onProfileClick=function(e){e.preventDefault(),alert("Profile Click")},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.auth.user;return r.a.createElement("div",{className:"appDiv"},r.a.createElement("nav",{className:"navtop"},r.a.createElement("div",null,r.a.createElement("h1",null,"Bedrock Server Controls"),r.a.createElement("button",{onClick:this.onProfileClick},r.a.createElement("i",{className:"fas fa-user-circle"}),e.username),r.a.createElement("button",{onClick:this.onLogoutClick},r.a.createElement("i",{className:"fas fa-sign-out-alt"}),"Logout"))),r.a.createElement("div",{className:"headerCards"},r.a.createElement(I,{name:"Server"})),r.a.createElement("div",{className:"cards"},r.a.createElement(z,{status:"Offline"}),r.a.createElement(J,{address:"192.168.0.100",port:"19132"}),r.a.createElement(X,{players:"3/10 Online"}),r.a.createElement(q,{software:"Bedrock",version:"1.16"}),r.a.createElement(F,{baseURL:"http://3.128.29.141"})))}}]),a}(r.a.Component),Q=Object(p.b)((function(e){return{auth:e.auth}}),{logoutUser:U})(K);if(localStorage.jwtToken){var Y=localStorage.jwtToken;N(Y);var Z=k()(Y);j.dispatch(R(Z));var ee=Date.now()/1e3;Z.exp<ee&&(j.dispatch(U()),window.location.href="./login")}var te=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,{store:j},r.a.createElement(d.a,null,r.a.createElement("div",{className:"appDiv"},r.a.createElement(m.b,{exact:!0,path:"/",component:A}),r.a.createElement(m.b,{exact:!0,path:"/login",component:W}),r.a.createElement(m.b,{exact:!0,path:"/register",component:_}),r.a.createElement(m.d,null,r.a.createElement(M,{exact:!0,path:"/dashboard",component:Q})))))}}]),a}(r.a.Component),ae=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ne(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(te,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");ae?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ne(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ne(t,e)}))}}()}},[[47,1,2]]]);
//# sourceMappingURL=main.bd2aca70.chunk.js.map