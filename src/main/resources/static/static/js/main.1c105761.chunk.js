(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{48:function(e,t,a){e.exports=a(83)},53:function(e,t,a){},54:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(26),o=a.n(c),s=(a(53),a(2)),i=a(3),l=a(6),m=a(4),u=a(7),p=(a(54),a(8)),d=a(5),h=a(9),f=a.n(h),v=a(14),b=a(12),E=a.n(b),j=function(e,t){return function(){var a=Object(v.a)(f.a.mark(function a(r){return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,E.a.post("/api/project",e);case 3:t.push("/dashboard"),console.log("Try to create project"),r({type:"GET_ERRORS",payload:{}}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),r({type:"GET_ERRORS",payload:a.t0.response.data});case 11:case"end":return a.stop()}},a,null,[[0,8]])}));return function(e){return a.apply(this,arguments)}}()},g=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).onDeleteClick=function(e){a.props.deleteProject(e)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.project;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"card card-body bg-light mb-4"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-8 col-md-8 col-sm-8"},n.a.createElement("h3",null,e.projectName),n.a.createElement("p",null,e.description),n.a.createElement("div",{className:"locate-bottom"},n.a.createElement("p",null,"Start date: ",e.start_date))),n.a.createElement("div",{className:"col-md-4 col-sm-4 d-md-block"},n.a.createElement("ul",{className:"list-group"},n.a.createElement(p.b,{to:"/projectBoard/".concat(e.projectIdentifier)},n.a.createElement("li",{className:"list-group-item board"},n.a.createElement("i",{className:"fa fa-flag-checkered pr-1"}," Assignment Board "))),n.a.createElement(p.b,{to:"/updateProject/".concat(e.projectIdentifier)},n.a.createElement("li",{className:"list-group-item update"},n.a.createElement("i",{className:"fa fa-edit pr-1"}," Update Assignment Info"))),n.a.createElement("li",{className:"list-group-item delete",onClick:this.onDeleteClick.bind(this,e.projectIdentifier)},n.a.createElement("i",{className:"fa fa-minus-circle pr-1"}," Delete Assignment")))))))}}]),t}(r.Component),y=Object(d.b)(null,{deleteProject:function(e){return function(){var t=Object(v.a)(f.a.mark(function t(a){return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.confirm("Are you sure want to delete project? This will delete all the data related to it")){t.next=4;break}return t.next=3,E.a.delete("/api/project/".concat(e));case 3:a({type:"DELETE_PROJECT",payload:e});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(g),N=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(p.b,{to:"/addAssignment",className:"btn btn-lg btn-info"},"Create an Assignment"))},O=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getProjects()}},{key:"render",value:function(){var e=this.props.project.projects;return n.a.createElement("div",{className:"projects main-container"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 dashboard-content"},n.a.createElement("h1",{className:"display-4 text-center"},"Assignment list"),n.a.createElement("br",null),n.a.createElement(N,null),n.a.createElement("br",null),n.a.createElement("hr",null),e.map(function(e){return n.a.createElement(y,{key:e.id,project:e})})))))}}]),t}(r.Component),k=Object(d.b)(function(e){return{project:e.project}},{getProjects:function(){return function(){var e=Object(v.a)(f.a.mark(function e(t){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Try to get projects"),console.log(localStorage.getItem("jwtToken")),e.next=4,E()("/api/project/all");case 4:a=e.sent,t({type:"GET_PROJECTS",payload:a.data});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(O),C=function(e){e?(E.a.defaults.headers.common.Authorization=e,console.log(E.a.defaults.headers)):delete E.a.defaults.headers.common.Authorization},w=a(28),S=a.n(w),_=function(){return function(e){localStorage.removeItem("jwtToken"),C(!1),e({type:"SET_CURRENT_USER",payload:{}})}},T=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"logout",value:function(){this.props.logout(),window.location.href="/"}},{key:"render",value:function(){var e,t=this.props.security,a=t.validToken,r=t.user,c=n.a.createElement("div",{id:"mobile-nav"},n.a.createElement("ul",{className:"navbar-nav"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{className:"nav-link",to:"/dashboard"},"Dashboard")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{className:"nav-link",to:"/dashboard"},n.a.createElement("i",{className:"fas fa-user-circle mr1"}),r.fullName)),n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{className:"nav-link",to:"/dashboard",onClick:this.logout.bind(this)},"Logout")))),o=n.a.createElement("div",{id:"mobile-nav"},n.a.createElement("ul",{className:"navbar-nav"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{className:"nav-link",to:"/"},"Main")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{className:"nav-link",to:"/register"},"Sign Up")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{className:"nav-link",to:"/login"},"Login"))));return e=a&&r?c:o,n.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-header menubar"},n.a.createElement("div",{className:"container"},n.a.createElement(p.b,{className:"navbar-brand",to:"/"},"Daily Management Tool"),e))}}]),t}(r.Component),x=Object(d.b)(function(e){return{security:e.security}},{logout:_})(T),P=(a(81),a(82),a(24)),R=a(13),D=a(1),I=a(10),A=a.n(I),U=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={projectName:"",projectIdentifier:"",description:"",start_date:"",end_date:"",errors:{}},e.onChange=e.onChange.bind(Object(D.a)(Object(D.a)(e))),e.onSubmit=e.onSubmit.bind(Object(D.a)(Object(D.a)(e))),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"onChange",value:function(e){var t=e.target,a=t.name,r=t.value;this.setState(function(){return Object(R.a)({},a,r)})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={projectName:this.state.projectName,projectIdentifier:this.state.projectIdentifier,description:this.state.description,start_date:this.state.start_date,end_date:this.state.end_date};this.props.createProject(t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",null,n.a.createElement("div",{className:"project"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h5",{className:"display-4 text-center"},"Create Project form"),n.a.createElement("hr",null),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:A()("form-control form-control-lg ",{"is-invalid":e.projectName}),placeholder:"Project Name",name:"projectName",value:this.state.projectName,onChange:this.onChange}),e.projectName&&n.a.createElement("div",{className:"invalid-feedback"},e.projectName)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:A()("form-control form-control-lg ",{"is-invalid":e.projectIdentifier}),placeholder:"Unique Project ID",name:"projectIdentifier",value:this.state.projectIdentifier,onChange:this.onChange}),e.projectIdentifier&&n.a.createElement("div",{className:"invalid-feedback"},e.projectIdentifier)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:A()("form-control form-control-lg ",{"is-invalid":e.description}),placeholder:"Project Description",name:"description",value:this.state.description,onChange:this.onChange}),e.description&&n.a.createElement("div",{className:"invalid-feedback"},e.description)),n.a.createElement("h6",null,"Start Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"start_date",value:this.state.start_date,onChange:this.onChange})),n.a.createElement("h6",null,"Estimated End Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"end_date",value:this.state.end_date,onChange:this.onChange})),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"})))))))}}]),t}(r.Component),G=Object(d.b)(function(e){return{errors:e.errors}},{createProject:j})(U),B=a(19),L=a(45),M={},W=a(20),q={projects:[],project:{}},J={project_tasks:[],project_task:{}},F={user:{},validToken:!1},K=Object(B.c)({errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}},project:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PROJECTS":return console.log(e),Object(W.a)({},e,{projects:t.payload});case"GET_PROJECT":return Object(W.a)({},e,{project:t.payload});case"DELETE_PROJECT":return Object(W.a)({},e,{projects:e.projects.filter(function(e){return e.projectIdentifier!==t.payload})});default:return e}},backlog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_BACKLOG":return Object(W.a)({},e,{project_tasks:t.payload});case"GET_PROJECT_TASK":return Object(W.a)({},e,{project_task:t.payload});case"DELETE_PROJECT_TASK":return Object(W.a)({},e,{project_tasks:e.project_tasks.filter(function(e){return e.projectSequence!==t.payload})});default:return e}},security:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_CURRENT_USER":return console.log(a.payload),Object(W.a)({},t,{validToken:(e=a.payload,!!e),user:a.payload});default:return t}}}),H={},X=[L.a],z=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),V=window.navigator.userAgent.includes("Chrome")&&z?Object(B.e)(K,H,Object(B.d)(B.a.apply(void 0,X),z)):Object(B.e)(K,H,Object(B.d)(B.a.apply(void 0,X))),Y=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={id:"",projectName:"",projectIdentifier:"",description:"",start_date:"",end_date:"",errors:{}},e.onChange=e.onChange.bind(Object(D.a)(Object(D.a)(e))),e.onSubmit=e.onSubmit.bind(Object(D.a)(Object(D.a)(e))),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors});var t=e.project,a=t.id,r=t.projectName,n=t.projectIdentifier,c=t.description,o=t.start_date,s=t.end_date;this.setState({id:a,projectName:r,projectIdentifier:n,description:c,start_date:o,end_date:s})}},{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getProject(e,this.props.history)}},{key:"onChange",value:function(e){this.setState(Object(R.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={id:this.state.id,projectName:this.state.projectName,projectIdentifier:this.state.projectIdentifier,description:this.state.description,start_date:this.state.start_date,end_date:this.state.end_date};this.props.createProject(t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"project"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h5",{className:"display-4 text-center"},"Update Project form"),n.a.createElement("hr",null),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:A()("form-control form-control-lg ",{"is-invalid":e.projectName}),placeholder:"Project Name",name:"projectName",value:this.state.projectName,onChange:this.onChange}),e.projectName&&n.a.createElement("div",{className:"invalid-feedback"},e.projectName)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Unique Project ID",name:"projectIdentifier",value:this.state.projectIdentifier,onChange:this.onChange,disabled:!0})),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:A()("form-control form-control-lg ",{"is-invalid":e.description}),placeholder:"Project Description",name:"description",value:this.state.description,onChange:this.onChange}),e.description&&n.a.createElement("div",{className:"invalid-feedback"},e.description)),n.a.createElement("h6",null,"Start Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"start_date",value:this.state.start_date,onChange:this.onChange})),n.a.createElement("h6",null,"Estimated End Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"end_date",value:this.state.end_date,onChange:this.onChange})),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"}))))))}}]),t}(r.Component),$=Object(d.b)(function(e){return{project:e.project.project,errors:e.errors}},{getProject:function(e,t){return function(){var a=Object(v.a)(f.a.mark(function a(r){var n;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,E.a.get("/api/project/".concat(e));case 3:n=a.sent,r({type:"GET_PROJECT",payload:n.data}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),t.push("/dashboard");case 10:case"end":return a.stop()}},a,null,[[0,7]])}));return function(e){return a.apply(this,arguments)}}()},createProject:j})(Y),Q=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"onDeleteClick",value:function(e,t){this.props.deleteProjectTask(e,t)}},{key:"render",value:function(){var e,t,a=this.props.project_task;return 1===a.priority&&(t="bg-danger text-light",e="HIGH"),2===a.priority&&(t="bg-warning text-light",e="MEDIUM"),3===a.priority&&(t="bg-info text-light",e="LOW"),n.a.createElement("div",{className:"card mb-1 bg-light"},n.a.createElement("div",{className:"card-header text-primary ".concat(t)},"ID: ",a.projectSequence," -- Priority: ",e),n.a.createElement("div",{className:"card-body bg-light"},n.a.createElement("h5",{className:"card-title"},a.summary),n.a.createElement("p",{className:"card-text text-truncate "},a.acceptanceCriteria),n.a.createElement(p.b,{to:"/updateProjectTask/".concat(a.projectIdentifier,"/").concat(a.projectSequence),className:"btn btn-primary"},"View / Update"),n.a.createElement("button",{className:"btn btn-danger ml-4",onClick:this.onDeleteClick.bind(this,a.projectIdentifier,a.projectSequence)},"Delete")))}}]),t}(r.Component),Z=Object(d.b)(null,{deleteProjectTask:function(e,t){return function(){var a=Object(v.a)(f.a.mark(function a(r){return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!window.confirm("You are deleting proje ct task ".concat(t,", this action can not be undone"))){a.next=4;break}return a.next=3,E.a.delete("/api/backlog/".concat(e,"/").concat(t));case 3:r({type:"DELETE_PROJECT_TASK",payload:t});case 4:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}})(Q),ee=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){for(var e=this.props.project_tasks_prop.map(function(e){return n.a.createElement(Z,{key:e.id,project_task:e})}),t=[],a=[],r=[],c=0;c<e.length;c++)"TO_DO"===e[c].props.project_task.status?t.push(e[c]):"IN_PROGRESS"===e[c].props.project_task.status&&a.push(e[c]),"DONE"===e[c].props.project_task.status&&r.push(e[c]);return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-secondary text-white"},n.a.createElement("h3",null,"TO DO"))),t),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-primary text-white"},n.a.createElement("h3",null,"In Progress"))),a),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header bg-success text-white"},n.a.createElement("h3",null,"Done"))),r)))}}]),t}(r.Component),te=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={errors:{}},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getBacklog(e)}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e,t=this.props.match.params.id,a=this.props.backlog.project_tasks;return e=function(e,t){return t.length<1?e.projectNotFound?n.a.createElement("div",{className:"alert alert-danger text-center",role:"alert"},e.projectNotFound):n.a.createElement("div",{className:"alert alert-info text-center",role:"alert"},"No Project Tasks on this board"):n.a.createElement(ee,{project_tasks_prop:t})}(this.state.errors,a),n.a.createElement("div",{className:"container"},n.a.createElement(p.b,{to:"/addProjectTask/".concat(t),className:"btn btn-primary mb-3"},n.a.createElement("i",{className:"fas fa-plus-circle"}," Create Task")),n.a.createElement("br",null),n.a.createElement("hr",null),e)}}]),t}(r.Component),ae=Object(d.b)(function(e){return{backlog:e.backlog,errors:e.errors}},{getBacklog:function(e){return function(){var t=Object(v.a)(f.a.mark(function t(a){var r;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.a.get("/api/backlog/".concat(e));case 3:r=t.sent,a({type:"GET_BACKLOG",payload:r.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:"GET_ERRORS",payload:t.t0.response.data});case 10:case"end":return t.stop()}},t,null,[[0,7]])}));return function(e){return t.apply(this,arguments)}}()}})(te),re=function(e){function t(e){var a;Object(s.a)(this,t);var r=(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).props.match.params.id;return a.state={summary:"",acceptanceCriteria:"",status:"",priority:0,dueDate:"",projectIdentifier:r,errors:{}},a.onChange=a.onChange.bind(Object(D.a)(Object(D.a)(a))),a.onSubmit=a.onSubmit.bind(Object(D.a)(Object(D.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"onChange",value:function(e){this.setState(Object(R.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={summary:this.state.summary,acceptanceCriteria:this.state.acceptanceCriteria,status:this.state.status,priority:this.state.priority,dueDate:this.state.dueDate};this.props.addProjectTask(this.state.projectIdentifier,t,this.props.history)}},{key:"render",value:function(){var e=this.props.match.params.id,t=this.state.errors;return n.a.createElement("div",{className:"add-PBI"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement(p.b,{to:"/projectBoard/".concat(e),className:"btn btn-light"},"Back to Project Board"),n.a.createElement("h4",{className:"display-4 text-center"},"Add Project Task"),n.a.createElement("p",{className:"lead text-center"},"Project Name + Project Code"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:A()("form-control form-control-lg",{"is-invalid":t.summary}),name:"summary",placeholder:"Project Task summary",value:this.state.summary,onChange:this.onChange}),t.summary&&n.a.createElement("div",{className:"invalid-feedback"},t.summary)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:"form-control form-control-lg",placeholder:"Acceptance Criteria",name:"acceptanceCriteria",value:this.state.acceptanceCriteria,onChange:this.onChange})),n.a.createElement("h6",null,"Due Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"dueDate",value:this.state.dueDate,onChange:this.onChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"priority",value:this.state.priority,onChange:this.onChange},n.a.createElement("option",{value:0},"Select Priority"),n.a.createElement("option",{value:1},"High"),n.a.createElement("option",{value:2},"Medium"),n.a.createElement("option",{value:3},"Low"))),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"status",value:this.state.status,onChange:this.onChange},n.a.createElement("option",{value:""},"Select Status"),n.a.createElement("option",{value:"TO_DO"},"TO DO"),n.a.createElement("option",{value:"IN_PROGRESS"},"IN PROGRESS"),n.a.createElement("option",{value:"DONE"},"DONE"))),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"}))))))}}]),t}(r.Component),ne=Object(d.b)(function(e){return{errors:e.errors}},{addProjectTask:function(e,t,a){return function(){var r=Object(v.a)(f.a.mark(function r(n){return f.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,E.a.post("/api/backlog/".concat(e),t);case 3:a.push("/projectBoard/".concat(e)),n({type:"GET_ERRORS",payload:{}}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),n({type:"GET_ERRORS",payload:r.t0.response.data});case 10:case"end":return r.stop()}},r,null,[[0,7]])}));return function(e){return r.apply(this,arguments)}}()}})(re),ce=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={id:"",projectSequence:"",summary:"",acceptanceCriteria:"",status:"",priority:"",dueDate:"",projectIdentifier:"",created_At:""},e.onChange=e.onChange.bind(Object(D.a)(Object(D.a)(e))),e.onSubmit=e.onSubmit.bind(Object(D.a)(Object(D.a)(e))),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors});var t=e.project_task,a=t.id,r=t.projectSequence,n=t.summary,c=t.acceptanceCriteria,o=t.status,s=t.priority,i=t.dueDate,l=t.projectIdentifier,m=t.created_At;this.setState({id:a,projectSequence:r,summary:n,acceptanceCriteria:c,status:o,priority:s,dueDate:i,projectIdentifier:l,created_At:m})}},{key:"componentDidMount",value:function(){var e=this.props.match.params,t=e.backlog_id,a=e.pt_id;console.log(this.props),this.props.getProjectTask(t,a,this.props.history)}},{key:"onChange",value:function(e){this.setState(Object(R.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={id:this.state.id,projectSequence:this.state.projectSequence,summary:this.state.summary,acceptanceCriteria:this.state.acceptanceCriteria,status:this.state.status,priority:this.state.priority,dueDate:this.state.dueDate,projectIdentifier:this.state.projectIdentifier,created_At:this.state.created_At};this.props.updateProjectTask(this.state.projectIdentifier,this.state.projectSequence,t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return console.log(e),n.a.createElement("div",{className:"add-PBI"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement(p.b,{to:"/projectBoard/".concat(this.state.projectIdentifier),className:"btn btn-light"},"Back to Project Board"),n.a.createElement("h4",{className:"display-4 text-center"},"Update Project Task"),n.a.createElement("p",{className:"lead text-center"},"Project Name: ",this.state.projectIdentifier," + Project Task ID: "," "," | ",this.state.projectSequence," "),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:A()("form-control form-control-lg",{"is-invalid":e}),name:"summary",placeholder:"Project Task summary",value:this.state.summary,onChange:this.onChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:"form-control form-control-lg",placeholder:"Acceptance Criteria",name:"acceptanceCriteria",value:this.state.acceptanceCriteria,onChange:this.onChange})),n.a.createElement("h6",null,"Due Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"dueDate",value:this.state.dueDate,onChange:this.onChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"priority",value:this.state.priority,onChange:this.onChange},n.a.createElement("option",{value:0},"Select Priority"),n.a.createElement("option",{value:1},"High"),n.a.createElement("option",{value:2},"Medium"),n.a.createElement("option",{value:3},"Low"))),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"status",value:this.state.status,onChange:this.onChange},n.a.createElement("option",{value:""},"Select Status"),n.a.createElement("option",{value:"TO_DO"},"TO DO"),n.a.createElement("option",{value:"IN_PROGRESS"},"IN PROGRESS"),n.a.createElement("option",{value:"DONE"},"DONE"))),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4"}))))))}}]),t}(r.Component),oe=Object(d.b)(function(e){return{project_task:e.backlog.project_task,errors:e.errors}},{getProjectTask:function(e,t,a){return function(){var r=Object(v.a)(f.a.mark(function r(n){var c;return f.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,E.a.get("/api/backlog/".concat(e,"/").concat(t));case 3:c=r.sent,n({type:"GET_PROJECT_TASK",payload:c.data}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),a.push("/dashboard");case 10:case"end":return r.stop()}},r,null,[[0,7]])}));return function(e){return r.apply(this,arguments)}}()},updateProjectTask:function(e,t,a,r){return function(){var n=Object(v.a)(f.a.mark(function n(c){return f.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,E.a.patch("/api/backlog/".concat(e,"/").concat(t),a);case 3:r.push("/projectBoard/".concat(e)),c({type:"GET_ERRORS",payload:{}}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),c({type:"GET_ERRORS",payload:n.t0.response.data});case 10:case"end":return n.stop()}},n,null,[[0,7]])}));return function(e){return n.apply(this,arguments)}}()}})(ce),se=a(46),ie=a.n(se),le=["You are not responsible for the programming you received in childhood. But as an adult, you are 100% responsible for fixing it.","When you blame others, you give up your power to change. / Robert Anthony","When writing the story of your life, don\u2019t let anyone else hold the pen.","Taking responsibility for your beliefs and judgments gives you the power to change them. / Byron Katie","Your actions are your only true belongings. / Allan Lokos","Actions speak louder than words, but not nearly as often. / Mark Twain","Freedom is the will to be responsible to ourselves. / Friedrich Nietzsche","Stay committed in your decisions, but stay flexible in your approach. / Tom Robbins","Never let your sense of morals prevent you from doing what\u2019s right. / Isaac Asimov","Happiness is not something ready made. It comes from your own actions. / Dalai Lama","When you learn, teach. When you get, give. / Maya Angelou","Life is a choice. / Unknown"],me=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"render",value:function(){return n.a.createElement("div",{id:"landing"},n.a.createElement("div",{className:"container landing-container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 text-center"},n.a.createElement("h1",{className:"display-3 mb-4"},"Daily Management Tool"),n.a.createElement("p",{className:"lead"},"Create your account to join Assignment or start your own"),n.a.createElement("hr",null),n.a.createElement(p.b,{className:"btn btn-lg btn-green mr-2",to:"/register"},"Sign Up"),n.a.createElement(p.b,{className:"btn btn-lg btn-primary mr-2",to:"/login"},"Login"))),n.a.createElement("div",{id:"typewriter"},n.a.createElement(ie.a,{options:{strings:le.map(function(e){return le[Math.floor(Math.random()*le.length)]}),autoStart:!0,loop:!0,delay:100,deleteSpeed:10}}))))}}]),t}(r.Component),ue=Object(d.b)(function(e){return{security:e.security}})(me),pe=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={username:"",fullName:"",password:"",confirmPassword:"",errors:{}},e.onChange=e.onChange.bind(Object(D.a)(Object(D.a)(e))),e.onSubmit=e.onSubmit.bind(Object(D.a)(Object(D.a)(e))),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,fullName:this.state.fullName,password:this.state.password,confirmPassword:this.state.confirmPassword};this.props.createNewUser(t,this.props.history)}},{key:"onChange",value:function(e){this.setState(Object(R.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"register  main-container"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h1",{className:"display-4 text-center"},"Sign Up"),n.a.createElement("p",{className:"lead text-center"},"Create your Account"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:A()("form-control form-control-lg",{"is-invalid":e.fullName}),placeholder:"Full Name",name:"fullName",value:this.state.fullName,onChange:this.onChange}),e.fullName&&n.a.createElement("div",{className:"invalid-feedback"},e.fullName)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"email",className:A()("form-control form-control-lg",{"is-invalid":e.username}),placeholder:"Email Address (Username)",name:"username",value:this.state.username,onChange:this.onChange}),e.username&&n.a.createElement("div",{className:"invalid-feedback"},e.username)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:A()("form-control form-control-lg",{"is-invalid":e.password}),placeholder:"Password",name:"password",value:this.state.password,onChange:this.onChange}),e.password&&n.a.createElement("div",{className:"invalid-feedback"},e.password)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:A()("form-control form-control-lg",{"is-invalid":e.confirmPassword}),placeholder:"Confirm Password",name:"confirmPassword",value:this.state.confirmPassword,onChange:this.onChange}),e.confirmPassword&&n.a.createElement("div",{className:"invalid-feedback"},e.confirmPassword)),n.a.createElement("input",{type:"submit",className:"btn btn-info btn-block mt-4"}))))))}}]),t}(r.Component),de=Object(d.b)(function(e){return{errors:e.errors}},{createNewUser:function(e,t){return function(){var a=Object(v.a)(f.a.mark(function a(r){return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,E.a.post("/api/users/register",e);case 3:t.push("/login"),r({type:"GET_ERRORS",payload:{}}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),r({type:"GET_ERRORS",payload:a.t0.response.data});case 10:case"end":return a.stop()}},a,null,[[0,7]])}));return function(e){return a.apply(this,arguments)}}()}})(pe),he=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).onSubmit=function(t){t.preventDefault();var a={username:e.state.username,password:e.state.password};e.props.login(a)},e.state={username:"",password:"",errors:""},e.onChange=e.onChange.bind(Object(D.a)(Object(D.a)(e))),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"onChange",value:function(e){this.setState(Object(R.a)({},e.target.name,e.target.value))}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.security.validToken&&this.props.history.push("/dashboard")}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"login main-container"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h1",{className:"display-4 text-center"},"Log In"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:A()("form-control form-control-lg",{"is-invalid":e.username}),placeholder:"Email Address",name:"username",value:this.state.username,onChange:this.onChange}),e.username&&n.a.createElement("div",{className:"invalid-feedback"},e.username)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:A()("form-control form-control-lg",{"is-invalid":e.password}),placeholder:"Password",name:"password",value:this.state.password,onChange:this.onChange}),e.password&&n.a.createElement("div",{className:"invalid-feedback"},e.password)),n.a.createElement("input",{type:"submit",onSubmit:this.onSubmit,className:"btn btn-info btn-block mt-4"}))))))}}]),t}(r.Component),fe=Object(d.b)(function(e){return{security:e.security,errors:e.errors}},{login:function(e){return function(){var t=Object(v.a)(f.a.mark(function t(a){var r,n,c;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.a.post("/api/users/login",e);case 3:r=t.sent,n=r.data.token,localStorage.setItem("jwtToken",n),C(n),c=S()(n),a({type:"SET_CURRENT_USER",payload:c}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:"GET_ERRORS",payload:t.t0.response.data});case 14:case"end":return t.stop()}},t,null,[[0,11]])}));return function(e){return t.apply(this,arguments)}}()}})(he),ve=a(47),be=Object(d.b)(function(e){return{security:e.security}})(function(e){var t=e.component,a=e.security,r=Object(ve.a)(e,["component","security"]);return n.a.createElement(P.b,Object.assign({},r,{render:function(e){return!0===a.validToken?n.a.createElement(t,e):n.a.createElement(P.a,{to:"/login"})}}))}),Ee=localStorage.jwtToken;if(Ee){C(Ee);var je=S()(Ee);V.dispatch({type:"SET_CURRENT_USER",payload:je});var ge=Date.now()/1e3;je.exp<ge&&(V.dispatch(_()),window.location.href="/")}var ye=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(d.a,{store:V},n.a.createElement(p.a,null,n.a.createElement("div",{className:"app"},n.a.createElement(x,null),n.a.createElement(P.b,{exact:!0,path:"/",component:ue}),n.a.createElement(P.b,{exact:!0,path:"/register",component:de}),n.a.createElement(P.b,{exact:!0,path:"/login",component:fe}),n.a.createElement(P.d,null,n.a.createElement(be,{exact:!0,path:"/dashboard",component:k}),n.a.createElement(be,{exact:!0,path:"/addAssignment",component:G}),n.a.createElement(be,{exact:!0,path:"/updateProject/:id",component:$}),n.a.createElement(be,{exact:!0,path:"/projectBoard/:id",component:ae}),n.a.createElement(be,{exact:!0,path:"/addProjectTask/:id",component:ne}),n.a.createElement(be,{exact:!0,path:"/updateProjectTask/:backlog_id/:pt_id",component:oe})))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(ye,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[48,1,2]]]);
//# sourceMappingURL=main.1c105761.chunk.js.map