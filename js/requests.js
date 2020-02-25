(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{2174:function(e,t,n){"use strict";n.r(t);var a=n(28),r=n.n(a),c=n(236),o=n.n(c),i=n(3),l=n.n(i),s=n(0),u=n.n(s),p=n(1),d=n.n(p),m=n(23),f=n(15),b=n(60),y=n(257),g=n(4),h=n(250),E=n.n(h),v=n(251),O=n.n(v),q=n(259),j=n(245),T=n(237);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=Object(q.e)(),P=Object(q.a)(),C=Object(q.c)();function D(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:T.a,n="&limit=".concat(t.limit,"&offset=").concat(t.offset),a="&filter[name][contains_i]=".concat(e);return Object(q.b)().get("".concat(j.a,"/requests/?").concat(a).concat(n))}var k=function(e){return C.post("".concat(j.a,"/graphql"),{query:(t=e,'query {\n  requests (filter: { parent_id: "'.concat(t,'" } ) {\n    actions {\n      id\n      operation \n      comments \n      created_at \n      processed_by\n    }\n    id\n    name\n    number_of_children\n    decision\n    description\n    group_name\n    number_of_finished_children\n    parent_id\n    state\n    workflow_id\n  }\n}'))}).then((function(e){return e.data.requests}));var t};var S=function(e){return P.listActionsByRequest(e)},F=function(e){return Object(q.b)().get("".concat(j.a,"/requests/").concat(e,"/content"))};function _(e){return L.apply(this,arguments)}function L(){return(L=O()(E.a.mark((function e(t){var n,a,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.showRequest(t);case 2:if(!((n=e.sent).number_of_children>0)){e.next=10;break}return e.next=6,k(t);case 6:a=e.sent,n=R({},n,{children:a}),e.next=14;break;case 10:return e.next=12,S(t);case 12:r=e.sent,n=R({},n,{actions:r?r.data:[]});case 14:return e.abrupt("return",R({},n));case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e,t){return N.apply(this,arguments)}function N(){return(N=O()(E.a.mark((function e(t,n){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.createAction(t,n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=function(e,t){return{type:g.h,payload:D(e,t)}},V=function(e){return{type:g.i,payload:F(e)}},B=function(e,t,n){return{type:g.b,payload:A(t,n),meta:{notifications:{fulfilled:{variant:"success",title:"Success",description:"The ".concat(e," was successful.")},rejected:{variant:"danger",title:"".concat(e," error"),description:"The ".concat(e," action failed.")}}}}},K=n(42),M=n.n(K),U=n(276),G=n.n(U),H=n(470),z=n(19),J=n.n(z),Q=n(483),W=n(484),X=n(39),Y=n(107),Z=n(106),$=function(e){var t=e.input,n=e.options,a=e.isReadOnly,c=e.isDisabled,o=(e.FieldProvider,e.isRequired),i=M()(e,["input","options","isReadOnly","isDisabled","FieldProvider","isRequired"]);return u.a.createElement(Q.FormSelect,r()({},t,i,{isDisabled:c||a}),function(e,t,n){if(t&&n)return e;var a=J()(e);return a.find((function(e){return void 0===e.value}))?J()(a):[{label:n?"Please choose":"None"}].concat(J()(a))}(n,t.value,o).map((function(e){return u.a.createElement(W.FormSelectOption,r()({key:e.value||e.label},e,{label:e.label.toString()}))})))};$.propTypes={input:d.a.object.isRequired,options:d.a.arrayOf(d.a.shape({value:d.a.any,label:d.a.string.isRequired})).isRequired,isReadOnly:d.a.bool,isDisabled:d.a.bool,isRequired:d.a.bool,FieldProvider:d.a.any};var ee=function(e){e.componentType;var t=e.label,n=e.isRequired,a=e.helperText,c=e.meta,o=e.description,i=e.hideLabel,l=M()(e,["componentType","label","isRequired","helperText","meta","description","hideLabel"]),s=c.error,p=c.touched&&s;return u.a.createElement(X.FormGroup,{isRequired:n,label:!i&&t,fieldId:l.id,isValid:!p,helperText:a,helperTextInvalid:c.error},o&&u.a.createElement(Y.TextContent,null,u.a.createElement(Z.Text,{component:Z.TextVariants.small},o)),u.a.createElement($,r()({label:t,isValid:!p,isRequired:n},l)))};ee.propTypes={componentType:d.a.string,label:d.a.string,isRequired:d.a.bool,helperText:d.a.string,meta:d.a.object,description:d.a.string,hideLabel:d.a.bool};var te=ee;function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var re={default:{},modal:{buttonOrder:["cancel","reset","save"],buttonClassName:"modal-form-right-align"}},ce=function(e){var t=e.componentMapper,n=e.formContainer,a=M()(e,["componentMapper","formContainer"]);return u.a.createElement("div",{className:re[n].buttonClassName},u.a.createElement(G.a,r()({formFieldsMapper:ae({},H.formFieldsMapper,l()({componentMapper:t},U.componentTypes.SELECT,te)),layoutMapper:H.layoutMapper},re[n],a)))};ce.propTypes={componentMapper:d.a.object,formContainer:d.a.oneOf(["default","modal"])},ce.defaultProps={componentMapper:{},formContainer:"default"};var oe=ce,ie=n(64),le=n(252),se=n(30),ue=function(e){return{component:U.componentTypes.TEXTAREA_FIELD,name:"comments",type:"text",isRequired:e,label:e?"Reason":"Comment"}},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=ue(e);return e&&(t.validate=[{type:U.validatorTypes.REQUIRED}]),{fields:[t]}};function de(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?de(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):de(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var fe=function(e){var t=e.history.push,n=e.match.params.id,a=e.actionType,r=e.addNotification,c=e.createRequestAction,o=e.closeUrl,i=e.postMethod,l=function(){var e="Add Comment"===a?a:"".concat(a," Request");r({variant:"warning",title:e,dismissable:!0,description:"".concat(e," was cancelled by the user.")}),t(o)};return u.a.createElement(le.Modal,{isLarge:!0,title:"Add Comment"===a?"Request #".concat(n):"".concat(a," Request #").concat(n),isOpen:!0,onClose:l},u.a.createElement(oe,{schema:pe("Deny"===a),schemaType:"default",onSubmit:function(e){var r={"Add Comment":"memo",Approve:"approve",Deny:"deny"},l="Add Comment"===a?a:"".concat(a," Request");return i?c(l,n,me({operation:r[a]},e)).then((function(){return i()})).then((function(){return t(o)})):c(l,n,me({operation:r[a]},e)).then((function(){return t(o)}))},onCancel:l,formContainer:"modal"}))};fe.defaultProps={closeUrl:"/requests"},fe.propTypes={history:d.a.shape({push:d.a.func.isRequired}).isRequired,addNotification:d.a.func.isRequired,createRequestAction:d.a.func.isRequired,postMethod:d.a.func,id:d.a.string,actionType:d.a.string,closeUrl:d.a.string,match:d.a.object,location:d.a.object};var be=Object(f.o)(Object(m.connect)(null,(function(e){return Object(ie.a)({addNotification:se.addNotification,createRequestAction:B},e)}))(fe)),ye=n(34),ge=n(110),he=n(111),Ee=n(279),ve=n(241),Oe=n(534),qe=function(e){var t=e.title,n=void 0===t?"":t,a=e.detail,r=void 0===a?"":a;return u.a.createElement(Y.TextContent,null,u.a.createElement(Z.Text,{className:"data-table-detail heading",component:Z.TextVariants.small},n),u.a.createElement(Z.Text,{className:"data-table-detail content",component:Z.TextVariants.h5},r))};qe.propTypes={title:d.a.node,detail:d.a.node};var je=function(e){var t=e.id,n=e.number_of_children,a=e.state,r=e.reason,c=Object(ve.a)(a)&&!n,i=Object(s.useState)([]),l=o()(i,2),p=l[0],d=l[1],f=Object(s.useState)(!0),y=o()(f,2),g=y[0],h=y[1],E=Object(s.useState)(!1),v=o()(E,2),O=v[0],q=v[1],j=Object(m.useSelector)((function(e){return e.requestReducer.expandedRequests}));return Object(s.useEffect)((function(){!O&&g&&j.includes(t)&&(q(!0),F(t).then((function(e){d(e),h(!1)})).catch((function(){return h(!1)})))}),[j]),g?u.a.createElement(Ee.Bullseye,null,u.a.createElement(Oe.Spinner,null)):u.a.createElement(s.Fragment,null,u.a.createElement(ge.Level,null,u.a.createElement(he.LevelItem,null,u.a.createElement(qe,{title:"Product",detail:p?p.product:"Unknown"})),c&&u.a.createElement(he.LevelItem,null,u.a.createElement(ye.Link,{to:"/requests/approve/".concat(t),className:"pf-u-mr-md"},u.a.createElement(b.Button,{variant:"primary","aria-label":"Approve Request",isDisabled:!c},"Approve")),u.a.createElement(ye.Link,{to:"/requests/deny/".concat(t)},u.a.createElement(b.Button,{variant:"danger","aria-label":"Deny Request"},"Deny")))),u.a.createElement(ge.Level,null,u.a.createElement(he.LevelItem,null,u.a.createElement(qe,{title:"Portfolio",detail:p?p.portfolio:"Unknown"}),u.a.createElement(qe,{title:"Platform",detail:p?p.platform:"Unknown"}),u.a.createElement(qe,{title:"Reason",detail:r||""}))))};je.propTypes={id:d.a.string,content:d.a.object,number_of_children:d.a.number,uname:d.a.string,state:d.a.string,reason:d.a.string};var Te=je,we=function(e){return e.reduce((function(e,t,n){var a=t.id,r=t.name,c=t.requester_name,o=t.created_at,i=t.notified_at,l=t.finished_at,p=t.state,d=t.decision,m=t.reason,f=t.number_of_children;return[].concat(J()(e),[{id:a,isOpen:!1,state:p,number_of_children:f,cells:[u.a.createElement(s.Fragment,{key:a},u.a.createElement(ye.Link,{to:"/requests/detail/".concat(a)},u.a.createElement(b.Button,{variant:"link"}," ",r," "))),c,Object(ve.c)(o),l?Object(ve.c)(l):i?Object(ve.c)(i):Object(ve.c)(o),p,d]},{parent:2*n,fullWidth:!0,cells:[{title:u.a.createElement(Te,{id:a,number_of_children:f,state:p,reason:m})}]}])}),[])},Re=n(305),xe=n(67),Pe=n(43),Ce=n(94),De=(n(66),function(e){var t=e.request,n=e.requestContent;return u.a.createElement(Y.TextContent,null,u.a.createElement(Z.Text,{component:Z.TextVariants.small},"Product: ",u.a.createElement("br",null)),u.a.createElement(Z.Text,null,n?n.product:""),u.a.createElement(Z.Text,{component:Z.TextVariants.small},"Portfolio: ",u.a.createElement("br",null)),u.a.createElement(Z.Text,null,n?n.portfolio:""),u.a.createElement(Z.Text,{component:Z.TextVariants.small},"Platform: ",u.a.createElement("br",null)),u.a.createElement(Z.Text,null,n?n.platform:" "),u.a.createElement(Z.Text,{component:Z.TextVariants.small},"Requester: "),u.a.createElement(Z.Text,{component:Z.TextVariants.h6},t.requester_name),u.a.createElement(Z.Text,{component:Z.TextVariants.h6},"Order Parameters: ",u.a.createElement("br",null)," "),n.params&&Object.keys(n.params).map((function(e){return n.params[e]&&u.a.createElement(Z.Text,{key:e,component:Z.TextVariants.small},"".concat(e,": ").concat(n.params[e]))})))});De.propTypes={request:d.a.shape({requester_name:d.a.string}).isRequired,requestContent:d.a.object};var ke=De,Se=n(238),Fe=n(71),_e=n.n(Fe),Le=n(72),Ae=n.n(Le),Ne=n(73),Ie=n.n(Ne),Ve=n(74),Be=n.n(Ve),Ke=n(46),Me=n.n(Ke),Ue=n(75),Ge=n.n(Ue),He=n(2159),ze=n(37),Je=n(240),Qe=n(118),We=n.n(Qe),Xe=n(380),Ye=n.n(Xe),Ze=n(381),$e=n.n(Ze),et=n(384),tt=n.n(et),nt=n(117),at=n.n(nt),rt=n(385),ct=n.n(rt),ot={memo:"Comment from",approve:"Approved by",deny:"Denied by",notify:"Notified by",skip:"Skipped by",cancel:"Canceled by",start:"Started by"},it={memo:u.a.createElement(Ye.a,null),approve:u.a.createElement(We.a,{style:{color:"var(--pf-global--success-color--100)"}}),deny:u.a.createElement(tt.a,{style:{color:"var(--pf-global--danger-color--100)"}}),notify:u.a.createElement($e.a,null),skip:u.a.createElement(at.a,null),start:u.a.createElement(ct.a,null)},lt=function(e){var t=e.actionList;return u.a.createElement(Je.Stack,null,t.map((function(e){return u.a.createElement("div",{key:"".concat(e.id,"-action")},u.a.createElement(Y.TextContent,null,u.a.createElement(Z.Text,{key:"".concat(e.id,"-action-created_at"),style:{marginBottom:0},className:"data-table-detail content",component:Z.TextVariants.small},Object(ve.c)(e.created_at)),u.a.createElement(Z.Text,{key:"".concat(e.id,"-action-operation"),style:{marginBottom:0},className:"data-table-detail content"},it[e.operation]," ","".concat(ot[e.operation],"  ").concat(e.processed_by)),e.comments&&u.a.createElement(Z.Text,{key:"".concat(e.id,"-action-comments"),style:{marginBottom:0},className:"data-table-detail content",component:Z.TextVariants.h6},"".concat(e.comments))," "),u.a.createElement("br",null))})))},st=n(242),ut=n(53),pt=n(54),dt=n(56),mt=n(2160),ft=n(55),bt=n(2161),yt=n(122),gt=n(121),ht=n(11),Et=n(123),vt=function(e){function t(){var e,n;_e()(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return n=Ie()(this,(e=Be()(t)).call.apply(e,[this].concat(r))),l()(Me()(n),"state",{isKebabOpen:!1}),l()(Me()(n),"onKebabToggle",(function(e){n.setState({isKebabOpen:e})})),l()(Me()(n),"onKebabSelect",(function(){n.setState({isKebabOpen:!n.state.isKebabOpen})})),l()(Me()(n),"buildRequestActionKebab",(function(e){return u.a.createElement(gt.Dropdown,{position:ht.DropdownPosition.right,onSelect:n.onKebabSelect,toggle:u.a.createElement(Et.KebabToggle,{id:"request-request-dropdown-".concat(e.id),onToggle:n.onKebabToggle}),isOpen:n.state.isKebabOpen,dropdownItems:[u.a.createElement(yt.DropdownItem,{"aria-label":"Add Comment",key:"add_comment_".concat(e.id)},u.a.createElement(ye.Link,{id:"request-".concat(e.id,"-request-comment"),to:"/requests/detail/".concat(e.id,"/add_comment"),className:"pf-c-dropdown__menu-item"},"Comment"))],isPlain:!0})})),l()(Me()(n),"fetchRequestDetails",(function(e){return u.a.createElement(lt,{actionList:e.actions})})),n}return Ge()(t,e),Ae()(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.item,a=t.isExpanded,r=Object(ve.a)(n.state);return u.a.createElement(ut.DataListItem,{key:"request-".concat(n.id),"aria-labelledby":"check-request-".concat(n.id),isExpanded:a},u.a.createElement(pt.DataListItemRow,null,u.a.createElement(mt.DataListToggle,{onClick:function(){return e.props.toggleExpand("request-".concat(n.id))},isExpanded:a,id:"request-".concat(n.id),"aria-labelledby":"request-".concat(n.id," request-").concat(n.id),"aria-label":"Toggle details for"}),u.a.createElement(ft.DataListItemCells,{dataListCells:[u.a.createElement(dt.DataListCell,{key:n.id},u.a.createElement("span",{id:"".concat(n.id,"-name")},"".concat(this.props.idx+1,". ").concat(n.parent_id?n.group_name:n.name)," ")),u.a.createElement(dt.DataListCell,{key:"".concat(n.id,"-state")},u.a.createElement("span",{style:{textTransform:"capitalize"},id:"".concat(n.id,"-state")},"".concat(n.state)," ")),u.a.createElement(dt.DataListCell,{key:"".concat(n.id,"-action")},u.a.createElement(ge.Level,null,u.a.createElement(he.LevelItem,null,r&&u.a.createElement("div",null,u.a.createElement(ye.Link,{id:"approve-".concat(n.id),to:"/requests/detail/".concat(n.id,"/approve")},u.a.createElement(b.Button,{variant:"link","aria-label":"Approve Request"},"Approve")),u.a.createElement(ye.Link,{id:"deny-".concat(n.id),to:"/requests/detail/".concat(n.id,"/deny")},u.a.createElement(b.Button,{variant:"link",className:"destructive-color","aria-label":"Deny Request"},"Deny")))))),u.a.createElement(dt.DataListCell,{key:"request-".concat(n.id),className:"pf-c-data-list__action","aria-labelledby":"request-".concat(n.id," check-request-action").concat(n.id),id:"workflow-".concat(n.id),"aria-label":"Actions"},r&&this.buildRequestActionKebab(n))]})),u.a.createElement(bt.DataListContent,{"aria-label":"Request Content Details",isHidden:!a},u.a.createElement(Je.Stack,{gutter:"md"},u.a.createElement(st.StackItem,null,u.a.createElement(Y.TextContent,{component:Z.TextVariants.h6},this.fetchRequestDetails(n))))))}}]),t}(s.Component);vt.propTypes={isLoading:d.a.bool,item:d.a.shape({id:d.a.string,name:d.a.string,state:d.a.string,parent_id:d.a.string.isRequired,group_name:d.a.string.isRequired,requestActions:d.a.shape({data:d.a.array})}).isRequired,idx:d.a.number,isExpanded:d.a.bool.isRequired,toggleExpand:d.a.func.isRequired,noItems:d.a.string};var Ot=vt,qt=n(36),jt=function(e){function t(){var e,n;_e()(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return n=Ie()(this,(e=Be()(t)).call.apply(e,[this].concat(r))),l()(Me()(n),"state",{expanded:[]}),l()(Me()(n),"toggleExpand",(function(e){return n.setState((function(t){var n=t.expanded,a=n.indexOf(e);return{expanded:a>=0?[].concat(J()(n.slice(0,a)),J()(n.slice(a+1,n.length))):[].concat(J()(n),[e])}}))})),l()(Me()(n),"isExpanded",(function(e){return n.state.expanded.includes(e)})),n}return Ge()(t,e),Ae()(t,[{key:"render",value:function(){var e=this;return u.a.createElement(s.Fragment,null,u.a.createElement("div",null,this.props.isLoading&&u.a.createElement(s.Fragment,null,u.a.createElement(He.PageHeader,null,u.a.createElement(He.PageHeaderTitle,{title:this.props.noItems})),u.a.createElement(qt.b,null))),this.props.items.length>0&&u.a.createElement(ze.DataList,{"aria-label":"Expandable data list"},this.props.items.map((function(t,n){return u.a.createElement(Ot,{key:t.id,item:t,idx:n,isActive:0===n,isExpanded:e.isExpanded("request-".concat(t.id)),toggleExpand:e.toggleExpand})}))))}}]),t}(s.Component);jt.propTypes={isLoading:d.a.bool,items:d.a.array,noItems:d.a.string,active_request:d.a.number},jt.defaultProps={items:[]};var Tt=jt,wt=function(e){var t=e.request;return u.a.createElement(s.Fragment,null,u.a.createElement(Se.Title,{size:"sm",style:{paddingLeft:"32px"}}," Request transcript "),u.a.createElement(Tt,{items:t.children&&t.children.length>0?t.children:[t]}))};wt.propTypes={request:d.a.shape({content:d.a.object,children:d.a.array}).isRequired};var Rt=wt,xt=n(268);function Pt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var Ct={isFetching:!0},Dt=function(e,t){switch(t.type){case"setFetching":return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Pt(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{isFetching:t.payload});default:return e}},kt=function(){var e=Object(s.useReducer)(Dt,Ct),t=o()(e,2),n=t[0].isFetching,a=t[1],c=Object(m.useSelector)((function(e){var t=e.requestReducer,n=t.requestContent;return{selectedRequest:t.selectedRequest,requestContent:n}})),i=c.selectedRequest,l=c.requestContent,p=Object(f.m)().id,d=Object(f.l)(),b=Object(m.useDispatch)();Object(s.useEffect)((function(){var e;Promise.all([b((e=p,{type:g.g,payload:_(e)})),b(V(p))]).then((function(){return a({type:"setFetching",payload:!1})}))}),[]);return u.a.createElement(s.Fragment,null,u.a.createElement(f.d,{exact:!0,path:"/requests/detail/:id/add_comment",render:function(e){return u.a.createElement(be,r()({},e,{actionType:"Add Comment",closeUrl:d.url}))}}),u.a.createElement(f.d,{exact:!0,path:"/requests/detail/:id/approve",render:function(e){return u.a.createElement(be,r()({},e,{actionType:"Approve",closeUrl:d.url}))}}),u.a.createElement(f.d,{exact:!0,path:"/requests/detail/:id/deny",render:function(e){return u.a.createElement(be,r()({},e,{actionType:"Deny",closeUrl:d.url}))}}),u.a.createElement(xt.a,{breadcrumbs:[{title:"Request Queue",to:"/requests",id:"requests"}],paddingBottom:!0},u.a.createElement(xt.b,{title:"Request ".concat(p)})),u.a.createElement(Ce.Section,{type:"content"},u.a.createElement(xe.Grid,{gutter:"md"},n||!i||0===Object.keys(i).length?u.a.createElement(Ce.Section,{style:{backgroundColor:"white",minHeight:"100%"}},u.a.createElement(qt.c,null)):u.a.createElement(s.Fragment,null,u.a.createElement(Pe.GridItem,{md:2,className:"detail-pane"},u.a.createElement(ke,{request:i,requestContent:l})),u.a.createElement(Pe.GridItem,{md:10,className:"detail-pane"},u.a.createElement(Rt,{request:i,url:d.url}))))))},St=n(284),Ft=n(258),_t=n(536),Lt=n(303);function At(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Nt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?At(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):At(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var It=[{title:"Name",cellFormatters:[y.b]},"Requester","Opened","Updated","Status","Decision"],Vt=Object(Ft.a)((function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:T.a;n(!0),t(I(e,a)).then((function(){return n(!1)}))}),1e3),Bt={filterValue:"",isOpen:!1,isFetching:!0,isFiltering:!1},Kt=function(e,t){switch(t.type){case"setFetching":return Nt({},e,{isFetching:t.payload});case"setFilterValue":return Nt({},e,{filterValue:t.payload});case"setFilteringFlag":return Nt({},e,{isFiltering:t.payload});default:return e}},Mt=function(){var e=Object(s.useReducer)(Kt,Bt),t=o()(e,2),n=t[0],a=n.filterValue,c=n.isFetching,i=n.isFiltering,l=t[1],p=Object(m.useSelector)((function(e){return e.requestReducer.requests})),d=p.data,y=p.meta,h=Object(m.useDispatch)(),E=Object(f.k)();Object(s.useEffect)((function(){h(I(a,T.a)).then((function(){return l({type:"setFetching",payload:!1})})),Object(ve.b)()}),[]);var v=function(e){l({type:"setFilterValue",payload:e}),Vt(e,h,(function(e){return l({type:"setFilteringFlag",payload:e})}),Nt({},y,{offset:0}))},O=[{eventKey:0,title:"Request queue",name:"/requests"},{eventKey:1,title:"Approval processes",name:"/workflows"}],q=function(){return u.a.createElement(s.Fragment,null,u.a.createElement(f.d,{exact:!0,path:"/requests/add_comment/:id",render:function(e){return u.a.createElement(be,r()({},e,{actionType:"Add Comment",postMethod:I}))}}),u.a.createElement(f.d,{exact:!0,path:"/requests/approve/:id",render:function(e){return u.a.createElement(be,r()({},e,{actionType:"Approve",postMethod:I}))}}),u.a.createElement(f.d,{exact:!0,path:"/requests/deny/:id",render:function(e){return u.a.createElement(be,r()({},e,{actionType:"Deny",postMethod:I}))}}))},j=function(e){return e&&e.id&&function(e){return!e||!e.state||(!Object(ve.a)(e.state)||e.number_of_children>0)}(e)?null:[{title:"Comment",onClick:function(){return E.push("/requests/add_comment/".concat(e.id))}}]},w=function(e,t){l({type:"setFetching",payload:!0}),h(I(a,t)).then((function(){return l({type:"setFetching",payload:!1})})).catch((function(){return l({type:"setFetching",payload:!1})}))},R=function(e,t,n){h(function(e){return{type:g.c,payload:e}}(e)),t((function(t){return n(t,e)}))};return u.a.createElement(f.g,null,u.a.createElement(f.d,{path:"/requests/detail/:id",render:function(e){return u.a.createElement(kt,e)}}),u.a.createElement(f.d,{path:"/requests",render:function(){return u.a.createElement(s.Fragment,null,u.a.createElement(xt.a,null,u.a.createElement(xt.b,{title:"Approval"}),u.a.createElement(St.a,{tabItems:O})),u.a.createElement(Re.a,{data:d,createRows:we,columns:It,fetchData:w,routes:q,actionResolver:j,titlePlural:"requests",titleSingular:"request",pagination:y,handlePagination:w,filterValue:a,onFilterChange:v,isLoading:c||i,onCollapse:R,renderEmptyState:function(){return u.a.createElement(Lt.a,{title:""===a?"No requests":"No results found",Icon:_t.SearchIcon,PrimaryAction:function(){return""!==a?u.a.createElement(b.Button,{onClick:function(){return v("")},variant:"link"},"Clear all filters"):null},description:""===a?"":"No results match the filter criteria. Remove all filters or clear all filters to show results."})}}))}}))};Mt.propTypes={history:d.a.shape({push:d.a.func.isRequired}),requests:d.a.array,isLoading:d.a.bool},Mt.defaultProps={requests:[],isLoading:!1};t.default=Mt},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return c}));var a={limit:50,offset:0,itemCount:1,numberOfItems:50},r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.floor(t/e)+1},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;return(e-1)*t}},241:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return s}));var a=n(0),r=n.n(a),c=n(334),o=["notified"],i=function(){return document.getElementById("root").scrollTo({behavior:"smooth",top:0,left:0})},l=function(e){return o.includes(e)},s=function(e){return r.a.createElement("span",{key:e},r.a.createElement(c.DateFormat,{date:e,type:"relative"}))}},245:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a="".concat("/api","/approval/v1.0"),r="".concat("/api","/rbac/v1")},258:function(e,t,n){"use strict";var a=n(267);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onlyResolvesLast:!1};return Object(a.a)(e,t,n)}},259:function(e,t,n){"use strict";n.d(t,"e",(function(){return q})),n.d(t,"f",(function(){return j})),n.d(t,"g",(function(){return T})),n.d(t,"a",(function(){return w})),n.d(t,"d",(function(){return R})),n.d(t,"b",(function(){return x})),n.d(t,"c",(function(){return C}));var a=n(250),r=n.n(a),c=n(251),o=n.n(c),i=n(3),l=n.n(i),s=n(309),u=n.n(s),p=n(245),d=n(315),m=n(325);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=u.a.create();y.interceptors.request.use(function(){var e=o()(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),y.interceptors.response.use((function(e){return e.data||e})),y.interceptors.response.use(null,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};throw b({},e.response)}));var g=new m.WorkflowApi(void 0,p.a,y),h=new m.ActionApi(void 0,p.a,y),E=new m.RequestApi(void 0,p.a,y),v=new m.TemplateApi(void 0,p.a,y),O=new d.GroupApi(void 0,p.b,y);function q(){return E}function j(){return v}function T(){return g}function w(){return h}function R(){return O}function x(){return y}var P=u.a.create();function C(){return P}P.interceptors.request.use(function(){var e=o()(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),P.interceptors.response.use((function(e){var t=e.data;if(t.errors)throw{message:t.errors[0].errorType,data:t.errors[0].message};return t}))},268:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(1),o=n.n(c),i=n(110),l=n(111),s=n(106),u=n(107),p=n(36),d=n(34),m=n(282),f=n(283),b=function(e){var t=e.breadcrumbs;return t?r.a.createElement(m.Breadcrumb,null,Object.values(t).map((function(e){return r.a.createElement(f.BreadcrumbItem,{key:e.title,isActive:e.isActive},e.to&&r.a.createElement(d.NavLink,{exact:!0,to:e.to},e.title)||e.title)}))):null};b.propTypes={breadcrumbs:o.a.arrayOf(o.a.shape({title:o.a.string.isRequired,isActive:o.a.bool,to:o.a.string}))};var y=b;n(281);n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return h}));var g=function(e){var t=e.children,n=e.breadcrumbs,a=e.paddingBottom;return r.a.createElement("div",{className:"pf-u-pt-lg pf-u-pr-lg pf-u-pl-lg ".concat(a?"pf-u-pb-sm":""," top-toolbar")},n&&r.a.createElement(i.Level,{className:"pf-u-mb-md"},r.a.createElement(y,{breadcrumbs:n})),t)};g.propTypes={children:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node]).isRequired,breadcrumbs:o.a.array,paddingBottom:o.a.bool},g.defaultProps={paddingBottom:!1};var h=function(e){var t=e.title,n=e.description,c=e.children;return r.a.createElement(a.Fragment,null,r.a.createElement(i.Level,null,r.a.createElement(l.LevelItem,null,r.a.createElement(u.TextContent,{className:"pf-u-mb-sm"},r.a.createElement(s.Text,{component:s.TextVariants.h1},t||r.a.createElement(p.d,null))),n&&r.a.createElement(u.TextContent,{className:"pf-u-pt-sm pf-u-mb-md"},r.a.createElement(s.Text,{component:s.TextVariants.p},n))),c))};h.propTypes={title:o.a.string,description:o.a.string,children:o.a.oneOfType([o.a.node,o.a.arrayOf(o.a.node)])}},281:function(e,t,n){},284:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(1),o=n.n(c),i=n(15),l=n(278),s=n(277),u=function(e){var t=e.history.push,n=e.location.pathname,a=e.tabItems,c=a.find((function(e){var t=e.name;return n.includes(t)}));return r.a.createElement(l.Tabs,{className:"pf-u-mt-sm",activeKey:c?c.eventKey:0,onSelect:function(e,n){return t(a[n].name)}},a.map((function(e){return r.a.createElement(s.Tab,{title:e.title,key:e.eventKey,eventKey:e.eventKey,name:e.name})})))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}),history:o.a.shape({push:o.a.func.isRequired}),tabItems:o.a.array.isRequired},t.a=Object(i.o)(u)},303:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(1),o=n.n(c),i=(n(60),n(376)),l=n(377),s=n(378),u=n(379),p=n(106),d=n(107),m=n(261),f=(n(34),function(e){var t=e.title,n=e.Icon,a=e.description,c=e.PrimaryAction,o=e.renderDescription;return r.a.createElement(m.EmptyTable,{centered:!0,"aria-label":"No records"},r.a.createElement(i.EmptyState,{className:"pf-u-ml-auto pf-u-mr-auto"},r.a.createElement(l.EmptyStateIcon,{icon:n}),r.a.createElement(d.TextContent,null,r.a.createElement(p.Text,{component:p.TextVariants.h1},t)),r.a.createElement(s.EmptyStateBody,null,a,o()),r.a.createElement(u.EmptyStateSecondaryActions,null,c&&r.a.createElement(c,null))))});f.defaultProps={renderDescription:function(){return null}},f.propTypes={title:o.a.string.isRequired,Icon:o.a.any.isRequired,description:o.a.string.isRequired,PrimaryAction:o.a.any,renderDescription:o.a.func},t.a=f;o.a.string.isRequired,o.a.string.isRequired},305:function(e,t,n){"use strict";var a=n(3),r=n.n(a),c=n(236),o=n.n(c),i=n(0),l=n.n(i),s=n(1),u=n.n(s),p=n(285),d=n(287),m=n(253),f=n(110),b=n(111),y=n(247),g=n(390),h=n(389),E=n(237),v=n(254),O=n.n(v),q=n(112),j=n.n(q),T=n(246),w=function(e){var t=e.searchValue,n=e.onFilterChange,a=e.placeholder,r=e.isClearable;return l.a.createElement(m.ToolbarItem,null,l.a.createElement("div",{className:"toolbar-filter-input-group"},l.a.createElement(T.TextInput,{placeholder:a,value:t,type:"text",onChange:n,"aria-label":a}),l.a.createElement("span",{className:"filter-icons-container"},r&&t&&l.a.createElement(j.a,{className:"clear-filter",width:"16",height:"16",onClick:function(){return n("")}})||l.a.createElement(O.a,null))))};w.propTypes={onFilterChange:u.a.func.isRequired,placeholder:u.a.string,searchValue:u.a.string,isClearable:u.a.bool},w.defaultProps={searchValue:"",isClearable:!1};var R=w,x=n(261),P=n(36),C=n(28),D=n.n(C),k=n(42),S=n.n(k),F=n(267),_=n(114),L=function(e){var t=e.meta,n=t.limit,a=t.count,r=t.offset,c=e.apiProps,o=e.apiRequest,i=e.className,s=e.isCompact,u=S()(e,["meta","apiProps","apiRequest","className","isCompact"]);return l.a.createElement("div",{className:i},l.a.createElement(_.Pagination,D()({perPage:n||50,itemCount:a||0,onPerPageSelect:function(e,t){return o(c,{offset:r,limit:t})},page:Object(E.b)(n,r),onSetPage:function(e,t,a){var r={offset:Object(E.c)(t,n),limit:n},i=function(){return o(c,r)};return a?Object(F.a)(i,250)():i()},direction:"down",isCompact:s},u)))};L.propTypes={meta:u.a.shape({count:u.a.number,limit:u.a.number.isRequired,offset:u.a.number.isRequired}),apiRequest:u.a.func.isRequired,apiProps:u.a.any,className:u.a.string,isCompact:u.a.bool},L.defaultProps={meta:{count:0,limit:50,offset:0},className:"",isCompact:!1};var A=L,N=function(e){var t=e.children;return l.a.createElement("div",{className:"pf-u-p-lg pf-u-pt-md pf-u-pb-md global-primary-background pf-u-mt-auto"},t)};N.propTypes={children:u.a.oneOfType([u.a.node,u.a.arrayOf(u.a.node)])};var I=N;function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return K}));var K=function(e){var t=e.isSelectable,n=e.createRows,a=e.columns,r=e.fetchData,c=e.toolbarButtons,s=e.data,u=e.actionResolver,E=e.routes,v=e.titlePlural,O=e.titleSingular,q=e.pagination,j=e.setCheckedItems,T=e.filterValue,w=e.onFilterChange,C=e.isLoading,D=e.onCollapse,k=e.renderEmptyState,S=Object(i.useState)([]),F=o()(S,2),_=F[0],L=F[1];Object(i.useEffect)((function(){L(n(s))}),[s]);var N=function(e,t){return e.map((function(e){return e.id===t?B({},e,{isOpen:!e.isOpen}):B({},e)}))},V=function(e,t){var n=e.map((function(e){return e.id===t?B({},e,{selected:!e.selected}):B({},e)})),a=n.filter((function(e){return e.id&&e.selected}));return j(a),n};return l.a.createElement(x.Section,{type:"content","page-type":"tab-".concat(v),id:"tab-".concat(v)},E(),function(e){return l.a.createElement(p.Toolbar,{className:"pf-u-pt-lg pf-u-pr-lg pf-u-pl-lg pf-u-pb-lg top-toolbar"},l.a.createElement(f.Level,{style:{flex:1}},l.a.createElement(b.LevelItem,null,l.a.createElement(p.Toolbar,null,l.a.createElement(R,{onFilterChange:w,searchValue:T,isClearable:!0,placeholder:"Filter by ".concat(O)}),c())),l.a.createElement(b.LevelItem,null,l.a.createElement(p.Toolbar,null,l.a.createElement(d.ToolbarGroup,null,l.a.createElement(m.ToolbarItem,null,l.a.createElement(A,{apiRequest:r,isDisabled:e,meta:q,isCompact:!0})))))))}(C),C&&l.a.createElement(P.b,null),C||0!==_.length?l.a.createElement(i.Fragment,null,l.a.createElement(y.b,{"aria-label":"".concat(v," table"),onCollapse:function(e,t,n,a){var r=a.id;return D?D(r,L,N):L((function(e){return N(e,r)}))},rows:_,cells:a,onSelect:t&&function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=a.id;return L(-1===n?_.map((function(e){return B({},e,{selected:t})})):function(e){return V(e,r)})},actionResolver:u,className:"table-fix"},l.a.createElement(g.a,null),l.a.createElement(h.a,null)),q.count>0&&l.a.createElement(I,null,l.a.createElement(A,{dropDirection:"up",meta:q,apiRequest:r}))):k())};K.propTypes={isSelectable:u.a.bool,createRows:u.a.func.isRequired,columns:u.a.array.isRequired,toolbarButtons:u.a.func,fetchData:u.a.func.isRequired,data:u.a.array,pagination:u.a.shape({limit:u.a.number,offset:u.a.number,count:u.a.number}),titlePlural:u.a.string,titleSingular:u.a.string,routes:u.a.func,actionResolver:u.a.func,setCheckedItems:u.a.func,filterValue:u.a.string,onFilterChange:u.a.func,isLoading:u.a.bool,onCollapse:u.a.func,renderEmptyState:u.a.func},K.defaultProps={requests:[],isLoading:!1,pagination:E.a,toolbarButtons:function(){return null},isSelectable:null,routes:function(){return null},renderEmptyState:function(){return null}}}}]);
//# sourceMappingURL=../sourcemaps/requests.js.map