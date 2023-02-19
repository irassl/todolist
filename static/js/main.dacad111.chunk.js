(this.webpackJsonptodo16v2=this.webpackJsonptodo16v2||[]).push([[0],{131:function(t,e,n){},132:function(t,e,n){},158:function(t,e,n){"use strict";n.r(e);var a,i,c,o=n(0),r=n.n(o),s=n(33),l=n.n(s),d=(n(131),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,224)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),a(t),i(t),c(t),o(t)}))}),u=(n(132),n(22)),j=n(16),b=n(17),O=n(104),f=n.n(O).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"524e0318-1cf6-4d4c-b0a7-084d6b518c22"}}),h=function(){return f.get("todo-lists")},T=function(t){return f.post("todo-lists",{title:t})},m=function(t){return f.delete("todo-lists/".concat(t))},p=function(t,e){return f.put("todo-lists/".concat(t),{title:e})},g=function(t){return f.get("todo-lists/".concat(t,"/tasks"))},v=function(t,e){return f.delete("todo-lists/".concat(t,"/tasks/").concat(e))},x=function(t,e){return f.post("todo-lists/".concat(t,"/tasks"),{title:e})},k=function(t,e,n){return f.put("todo-lists/".concat(t,"/tasks/").concat(e),n)},I=function(t){return f.post("/auth/login",t)},S=function(){return f.get("/auth/me")};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(a||(a={})),function(t){t[t.OK=0]="OK",t[t.ERROR=1]="ERROR",t[t.CAPTCHA=10]="CAPTCHA"}(i||(i={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(c||(c={}));var C={status:"idle",error:null,isInitialized:!1},E=function(t){return{type:"APP/SET-ERROR",error:t}},y=function(t){return{type:"APP/SET-STATUS",status:t}},A=function(t){return{type:"APP/INITIALIZED",isInitialized:t}},D=[],L=n(3),w=function(t,e){t.messages.length?e(E(t.messages[0])):e(E("Some error occurred")),e(y("failed"))},P=function(t,e){e(E(t.message?t.message:"Some error occurred")),e(y("failed"))},R={},N=function(t,e,n){return function(a,i){var c=i().tasks[n].find((function(e){return e.id===t}));if(c){var o=Object(j.a)({deadline:c.deadline,description:c.description,priority:c.priority,startDate:c.startDate,title:c.title,status:c.status},e);k(n,t,o).then((function(i){if(0===i.data.resultCode){var c=function(t,e,n){return{type:"UPDATE-TASK",model:e,todolistId:n,taskId:t}}(t,e,n);a(c)}else w(i.data,a)})).catch((function(t){P(t,a)}))}else console.warn("task not found in the state")}},F=n(212),K=n(220),G=n(10),H=n(205),M=n(213),U=n(201),B=n(1),V=r.a.memo((function(t){var e=t.addItem,n=t.disabled,a=void 0!==n&&n;console.log("AddItemForm called");var i=Object(o.useState)(""),c=Object(G.a)(i,2),r=c[0],s=c[1],l=Object(o.useState)(null),d=Object(G.a)(l,2),u=d[0],j=d[1],b=function(){""!==r.trim()?(e(r),s("")):j("Title is required")};return Object(B.jsxs)("div",{children:[Object(B.jsx)(H.a,{variant:"outlined",disabled:a,error:!!u,value:r,onChange:function(t){s(t.currentTarget.value)},onKeyPress:function(t){null!==u&&j(null),13===t.charCode&&b()},label:"Title",helperText:u}),Object(B.jsx)(M.a,{color:"primary",onClick:b,disabled:a,children:Object(B.jsx)(U.a,{})})]})})),z=n(112),Z=r.a.memo((function(t){console.log("EditableSpan called");var e=Object(o.useState)(!1),n=Object(G.a)(e,2),a=n[0],i=n[1],c=Object(o.useState)(t.value),r=Object(G.a)(c,2),s=r[0],l=r[1];return a?Object(B.jsx)(H.a,{value:s,onChange:function(t){l(t.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),t.onChange(s)}}):Object(B.jsx)("span",{onDoubleClick:function(){i(!0),l(t.value)},children:t.value})})),q=n(214),Y=n(202),J=n(207),_=r.a.memo((function(t){var e=Object(o.useCallback)((function(){return t.removeTask(t.task.id,t.todolistId)}),[t.task.id,t.todolistId]),n=Object(o.useCallback)((function(e){var n=e.currentTarget.checked;t.changeTaskStatus(t.task.id,n?a.Completed:a.New,t.todolistId)}),[t.task.id,t.todolistId]),i=Object(o.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]);return Object(B.jsxs)("div",{className:t.task.status===a.Completed?"is-done":"",children:[Object(B.jsx)(J.a,{checked:t.task.status===a.Completed,color:"primary",onChange:n}),Object(B.jsx)(Z,{value:t.task.title,onChange:i}),Object(B.jsx)(M.a,{onClick:e,children:Object(B.jsx)(Y.a,{})})]},t.task.id)})),$=r.a.memo((function(t){var e=t.demo,n=void 0!==e&&e,i=Object(z.a)(t,["demo"]);console.log("Todolist called");var c=Object(u.b)();Object(o.useEffect)((function(){if(!n){var t,e=(t=i.todolist.id,function(e){e(y("loading")),g(t).then((function(n){var a=n.data.items;e(function(t,e){return{type:"SET-TASKS",tasks:t,todolistId:e}}(a,t)),e(y("succeeded"))}))});c(e)}}),[]);var r=Object(o.useCallback)((function(t){i.addTask(t,i.todolist.id)}),[i.addTask,i.todolist.id]),s=Object(o.useCallback)((function(t){i.changeTodolistTitle(i.todolist.id,t)}),[i.todolist.id,i.changeTodolistTitle]),l=Object(o.useCallback)((function(){return i.changeFilter("all",i.todolist.id)}),[i.todolist.id,i.changeFilter]),d=Object(o.useCallback)((function(){return i.changeFilter("active",i.todolist.id)}),[i.todolist.id,i.changeFilter]),j=Object(o.useCallback)((function(){return i.changeFilter("completed",i.todolist.id)}),[i.todolist.id,i.changeFilter]),b=i.tasks;return"active"===i.todolist.filter&&(b=i.tasks.filter((function(t){return t.status===a.New}))),"completed"===i.todolist.filter&&(b=i.tasks.filter((function(t){return t.status===a.Completed}))),Object(B.jsxs)("div",{children:[Object(B.jsxs)("h3",{children:[Object(B.jsx)(Z,{value:i.todolist.title,onChange:s}),Object(B.jsx)(M.a,{onClick:function(){i.removeTodolist(i.todolist.id)},disabled:"loading"===i.todolist.entityStatus,children:Object(B.jsx)(Y.a,{})})]}),Object(B.jsx)(V,{addItem:r,disabled:"loading"===i.todolist.entityStatus}),Object(B.jsx)("div",{children:b.map((function(t){return Object(B.jsx)(_,{task:t,todolistId:i.todolist.id,removeTask:i.removeTask,changeTaskTitle:i.changeTaskTitle,changeTaskStatus:i.changeTaskStatus},t.id)}))}),Object(B.jsxs)("div",{style:{paddingTop:"10px"},children:[Object(B.jsx)(q.a,{variant:"all"===i.todolist.filter?"outlined":"text",onClick:l,color:"inherit",children:"All"}),Object(B.jsx)(q.a,{variant:"active"===i.todolist.filter?"outlined":"text",onClick:d,color:"primary",children:"Active"}),Object(B.jsx)(q.a,{variant:"completed"===i.todolist.filter?"outlined":"text",onClick:j,color:"secondary",children:"Completed"})]})]})})),Q=n(13),W=function(t){var e=t.demo,n=void 0!==e&&e,a=Object(u.c)((function(t){return t.todolists})),i=Object(u.c)((function(t){return t.tasks})),c=Object(u.c)((function(t){return t.auth.isLoggedIn})),r=Object(u.b)();Object(o.useEffect)((function(){if(!n&&c){var t=function(t){t(y("loading")),h().then((function(e){t({type:"SET-TODOLISTS",todolists:e.data}),t(y("succeeded"))}))};r(t)}}),[]);var s=Object(o.useCallback)((function(t,e){var n=function(t,e){return function(n){v(e,t).then((function(a){var i=function(t,e){return{type:"REMOVE-TASK",taskId:t,todolistId:e}}(t,e);n(i)}))}}(t,e);r(n)}),[]),l=Object(o.useCallback)((function(t,e){var n=function(t,e){return function(n){n(y("loading")),x(e,t).then((function(t){if(0===t.data.resultCode){var e={type:"ADD-TASK",task:t.data.data.item};n(e),n(y("succeeded"))}else w(t.data,n)})).catch((function(t){P(t,n)}))}}(t,e);r(n)}),[]),d=Object(o.useCallback)((function(t,e,n){var a=N(t,{status:e},n);r(a)}),[]),j=Object(o.useCallback)((function(t,e,n){var a=N(t,{title:e},n);r(a)}),[]),b=Object(o.useCallback)((function(t,e){var n={type:"CHANGE-TODOLIST-FILTER",id:e,filter:t};r(n)}),[]),O=Object(o.useCallback)((function(t){var e,n=(e=t,function(t){t(y("loading")),t({type:"CHANGE-TODOLIST-ENTITY-STATUS",id:e,status:"loading"}),m(e).then((function(n){t(function(t){return{type:"REMOVE-TODOLIST",id:t}}(e)),t(y("succeeded"))}))});r(n)}),[]),f=Object(o.useCallback)((function(t,e){var n=function(t,e){return function(n){p(t,e).then((function(a){n(function(t,e){return{type:"CHANGE-TODOLIST-TITLE",id:t,title:e}}(t,e))}))}}(t,e);r(n)}),[]),g=Object(o.useCallback)((function(t){var e=function(t){return function(e){e(y("loading")),T(t).then((function(t){e({type:"ADD-TODOLIST",todolist:t.data.data.item}),e(y("succeeded"))}))}}(t);r(e)}),[r]);return c?Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(F.a,{container:!0,style:{padding:"20px"},children:Object(B.jsx)(V,{addItem:g})}),Object(B.jsx)(F.a,{container:!0,spacing:3,children:a.map((function(t){var e=i[t.id];return Object(B.jsx)(F.a,{item:!0,children:Object(B.jsx)(K.a,{style:{padding:"10px"},children:Object(B.jsx)($,{todolist:t,tasks:e,removeTask:s,changeFilter:b,addTask:l,changeTaskStatus:d,removeTodolist:O,changeTaskTitle:j,changeTodolistTitle:f,demo:n})})},t.id)}))})]}):Object(B.jsx)(Q.a,{to:"/login"})},X=n(216),tt=n(217),et=n(215),nt=n(219),at=n(218),it=n(204),ct=n(209),ot=n(208),rt=r.a.forwardRef((function(t,e){return Object(B.jsx)(ot.a,Object(j.a)({elevation:6,ref:e,variant:"filled"},t))}));function st(){var t=Object(u.c)((function(t){return t.app.error})),e=Object(u.b)(),n=function(t,n){"clickaway"!==n&&e(E(null))};return Object(B.jsx)(ct.a,{open:null!==t,autoHideDuration:6e3,onClose:n,children:Object(B.jsx)(rt,{onClose:n,severity:"error",sx:{width:"100%"},children:t})})}var lt=n(210),dt=n(222),ut=n(221),jt=n(199),bt=n(111),Ot={isLoggedIn:!1},ft=function(t){return{type:"login/SET-IS-LOGGED-IN",value:t}},ht=function(){var t=Object(u.b)(),e=Object(u.c)((function(t){return t.auth.isLoggedIn})),n=Object(bt.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(t){var e={};return t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)||(e.email="Invalid email address"):e.email="Required",t.password?t.password.length<3&&(e.password="bad Password"):e.password="Required",e},onSubmit:function(e){var a;t((a=e,function(t){t(y("loading")),I(a).then((function(e){e.data.resultCode===i.OK?(t(ft(!0)),t(y("succeeded"))):w(e.data,t)})).catch((function(e){P(e,t)})).finally((function(){t(y("idle"))}))})),n.resetForm()}});return e?Object(B.jsx)(Q.a,{to:"/"}):Object(B.jsx)(F.a,{container:!0,justifyContent:"center",children:Object(B.jsx)(F.a,{item:!0,justifyContent:"center",children:Object(B.jsx)("form",{onSubmit:n.handleSubmit,children:Object(B.jsxs)(lt.a,{children:[Object(B.jsxs)(jt.a,{children:[Object(B.jsxs)("p",{children:["To log in get registered",Object(B.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",children:" here"})]}),Object(B.jsx)("p",{children:"or use common test account credentials:"}),Object(B.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(B.jsx)("p",{children:"Password: free"})]}),Object(B.jsxs)(ut.a,{children:[Object(B.jsx)(H.a,Object(j.a)(Object(j.a)({label:"Email",margin:"normal"},n.getFieldProps("email")),{},{onBlur:n.handleBlur})),n.errors.email?Object(B.jsxs)("div",{style:{color:"red"},children:[" ",n.errors.email]}):null,Object(B.jsx)(H.a,Object(j.a)(Object(j.a)({type:"password",label:"Password",margin:"normal"},n.getFieldProps("password")),{},{onBlur:n.handleBlur})),n.errors.password?Object(B.jsxs)("div",{style:{color:"red"},children:[" ",n.errors.password]}):null,Object(B.jsx)(dt.a,{label:"Remember me",control:Object(B.jsx)(J.a,{name:"rememberMe"}),onChange:n.handleChange,value:n.values.rememberMe}),Object(B.jsx)(q.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})]})})})})},Tt=n(223);var mt=function(t){var e=t.demo,n=void 0!==e&&e,a=Object(u.c)((function(t){return t.app.status})),c=Object(u.c)((function(t){return t.app.isInitialized})),r=(Object(u.c)((function(t){return t.auth.isLoggedIn})),Object(u.b)());return Object(o.useEffect)((function(){r((function(t){S().then((function(e){e.data.resultCode===i.OK?(t(ft(!0)),t(A(!0))):w(e.data,t)})).catch((function(e){P(e,t)})).finally((function(){t(A(!0))}))}))}),[]),c?Object(B.jsxs)("div",{className:"App",children:[Object(B.jsx)(st,{}),Object(B.jsxs)(X.a,{position:"static",children:[Object(B.jsxs)(tt.a,{children:[Object(B.jsx)(M.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(B.jsx)(it.a,{})}),Object(B.jsx)(et.a,{variant:"h6",children:"News"}),Object(B.jsx)(q.a,{color:"inherit",children:"Login"})]}),"loading"===a&&Object(B.jsx)(at.a,{})]}),Object(B.jsx)(nt.a,{fixed:!0,children:Object(B.jsxs)(Q.d,{children:[Object(B.jsx)(Q.b,{path:"/",element:Object(B.jsx)(W,{demo:n})}),Object(B.jsx)(Q.b,{path:"login",element:Object(B.jsx)(ht,{})}),Object(B.jsx)(Q.b,{path:"/404",element:Object(B.jsx)("h1",{children:"404: PAGE NOT FOUND"})}),Object(B.jsx)(Q.b,{path:"*",element:Object(B.jsx)(Q.a,{to:"/404"})})]})})]}):Object(B.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(B.jsx)(Tt.a,{})})},pt=n(74),gt=n(110),vt=Object(pt.b)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TASK":return Object(j.a)(Object(j.a)({},t),{},Object(L.a)({},e.todolistId,t[e.todolistId].filter((function(t){return t.id!==e.taskId}))));case"ADD-TASK":return Object(j.a)(Object(j.a)({},t),{},Object(L.a)({},e.task.todoListId,[e.task].concat(Object(b.a)(t[e.task.todoListId]))));case"UPDATE-TASK":return Object(j.a)(Object(j.a)({},t),{},Object(L.a)({},e.todolistId,t[e.todolistId].map((function(t){return t.id===e.taskId?Object(j.a)(Object(j.a)({},t),e.model):t}))));case"ADD-TODOLIST":return Object(j.a)(Object(j.a)({},t),{},Object(L.a)({},e.todolist.id,[]));case"REMOVE-TODOLIST":var n=Object(j.a)({},t);return delete n[e.id],n;case"SET-TODOLISTS":var a=Object(j.a)({},t);return e.todolists.forEach((function(t){a[t.id]=[]})),a;case"SET-TASKS":return Object(j.a)(Object(j.a)({},t),{},Object(L.a)({},e.todolistId,e.tasks));default:return t}},todolists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!==e.id}));case"ADD-TODOLIST":return[Object(j.a)(Object(j.a)({},e.todolist),{},{filter:"all",entityStatus:"idle"})].concat(Object(b.a)(t));case"CHANGE-TODOLIST-TITLE":return t.map((function(t){return t.id===e.id?Object(j.a)(Object(j.a)({},t),{},{title:e.title}):t}));case"CHANGE-TODOLIST-FILTER":return t.map((function(t){return t.id===e.id?Object(j.a)(Object(j.a)({},t),{},{filter:e.filter}):t}));case"CHANGE-TODOLIST-ENTITY-STATUS":return t.map((function(t){return t.id===e.id?Object(j.a)(Object(j.a)({},t),{},{entityStatus:e.status}):t}));case"SET-TODOLISTS":return e.todolists.map((function(t){return Object(j.a)(Object(j.a)({},t),{},{filter:"all",entityStatus:"idle"})}));default:return t}},app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"APP/SET-STATUS":return Object(j.a)(Object(j.a)({},t),{},{status:e.status});case"APP/SET-ERROR":return Object(j.a)(Object(j.a)({},t),{},{error:e.error});case"APP/INITIALIZED":return Object(j.a)(Object(j.a)({},t),{},{isInitialized:e.isInitialized});default:return Object(j.a)({},t)}},auth:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"login/SET-IS-LOGGED-IN":return Object(j.a)(Object(j.a)({},t),{},{isLoggedIn:e.value});default:return t}}}),xt=Object(pt.c)(vt,Object(pt.a)(gt.a));window.store=xt;var kt=n(56);l.a.render(Object(B.jsx)(kt.a,{children:Object(B.jsx)(u.a,{store:xt,children:Object(B.jsx)(mt,{})})}),document.getElementById("root")),d()}},[[158,1,2]]]);
//# sourceMappingURL=main.dacad111.chunk.js.map