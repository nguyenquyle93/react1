(this["webpackJsonp055-user-manage"]=this["webpackJsonp055-user-manage"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),o=a.n(i),s=(a(14),a(1)),c=a(2),l=a(4),u=a(3),m=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-2 text-center text-danger"},"Giao di\u1ec7n qu\u1ea3n l\xfd ng\u01b0\u1eddi d\xf9ng b\u1eb1ng React JS"),r.a.createElement("p",{className:"lead text-center text-secondary"},"v\u1edbi d\u1eef li\u1ec7u json"),r.a.createElement("hr",{className:"my-2"})))}}]),a}(n.Component),d=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).isChange=function(e){console.log(e.target.value),n.setState({tempValue:e.target.value}),n.props.checkConnect(n.state.tempValue)},n.state={tempValue:""},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"searchform"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"btn-group"},r.a.createElement("input",{type:"text",className:"form-control",name:!0,id:!0,"aria-describedby":"helpId",placeholder:"Nh\u1eadp t\xean c\u1ea7n t\xecm",style:{width:"500px"},onChange:function(t){return e.isChange(t)}}),r.a.createElement("button",{onClick:function(t){return e.props.checkConnect(e.state.tempValue)},className:"btn btn-primary",style:{width:"100px"}},"T\xecm ",r.a.createElement("span",{className:"badge badge-primary"}))))),r.a.createElement("div",{className:"col-12"},r.a.createElement("hr",null))))))}}]),a}(n.Component),h=a(5),p=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).isChange=function(e){var t=e.target.name,a=e.target.value;n.setState(Object(h.a)({},t,a))},n.hienThiNut=function(){return!0===n.props.trangThaiChinhSua?r.a.createElement("div",{className:"btn btn-block btn-info",onClick:function(){return n.props.thayDoi()}},"\u0110\xf3ng"):r.a.createElement("div",{className:"btn btn-block btn-info ",onClick:function(){return n.props.thayDoi()}},"Th\xeam m\u1edbi User")},n.hienThiForm=function(){if(!0===n.props.trangThaiChinhSua)return r.a.createElement("div",{className:"card mt-2"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title text-center "},"Th\xeam m\u1edbi"),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",name:"name",id:!0,"aria-describedby":"helpId",placeholder:"Nh\u1eadp t\xean",onChange:function(e){return n.isChange(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",name:"phone",id:!0,"aria-describedby":"helpId",placeholder:"\u0110i\u1ec7n tho\u1ea1i",onChange:function(e){return n.isChange(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{className:"form-control",name:"permission",id:!0,onChange:function(e){return n.isChange(e)}},r.a.createElement("option",{value:1},"Moderator"),r.a.createElement("option",{value:2},"Admin"),r.a.createElement("option",{value:3},"Normal"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"reset",class:"btn btn btn-block btn-primary",onClick:function(e){return n.props.add(n.state)},value:"Th\xeam m\u1edbi"})))))},n.thayDoiTrangThai=function(){n.setState({trangThaiChinhSua:!n.state.trangThaiChinhSua})},n.state={id:"",name:"",phone:"",permission:""},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-3"},this.hienThiNut(),this.hienThiForm())}}]),a}(n.Component),f=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).isChange=function(e){var t=e.target.name,a=e.target.value;n.setState(Object(h.a)({},t,a))},n.saveButton=function(){n.props.getEditData(n.state),n.props.editFuntion()},n.state={id:n.props.editData.id,name:n.props.editData.name,phone:n.props.editData.phone,permission:n.props.editData.permission},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return console.log(" D\u1eef li\u1ec7u c\u1ea7n ch\u1ec9nh s\u1eefa l\xe0"+this.props.dataEdit),r.a.createElement("div",{className:"card mt-2"},r.a.createElement("div",{className:"card-body "},r.a.createElement("h4",{className:"card-title text-center "},"Ch\u1ec9nh s\u1eefa th\xf4ng tin User"),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",name:"name",defaultValue:this.props.editData.name,id:!0,"aria-describedby":"helpId",placeholder:"Nh\u1eadp t\xean",onChange:function(t){return e.isChange(t)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",name:"phone",defaultValue:this.props.editData.phone,id:!0,"aria-describedby":"helpId",placeholder:"\u0110i\u1ec7n tho\u1ea1i",onChange:function(t){return e.isChange(t)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{className:"form-control",name:"permission",defaultValue:this.props.editData.permission,id:!0,onChange:function(t){return e.isChange(t)}},r.a.createElement("option",{value:1},"Moderator"),r.a.createElement("option",{value:2},"Admin"),r.a.createElement("option",{value:3},"Normal"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"reset",class:"btn btn btn-block btn-danger",onClick:function(){return e.saveButton()},value:"L\u01b0u th\xf4ng tin"})))))}}]),a}(n.Component),E=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).permissionShow=function(){return 1===e.props.permission?"Moderator":2===e.props.permission?"Admin":"Normal"},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("tr",null,r.a.createElement("td",null,this.props.stt),r.a.createElement("td",null,this.props.name," "),r.a.createElement("td",null,this.props.phone),r.a.createElement("td",null,this.permissionShow()),r.a.createElement("td",null,r.a.createElement("div",{className:"btn btn-group btn-sm"},r.a.createElement("button",{className:"btn btn-warning btn-sm Edit",onClick:function(){return e.props.editFuntion()}},"Edit"),r.a.createElement("button",{className:"btn btn-danger btn-sm Xoa",onClick:function(t){return e.props.deleteButtonClick(e.props.id)}},"Xoa"))))}}]),a}(n.Component),g=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).isShowEditForm=function(){if(!0===e.props.editUserStatus)return r.a.createElement(f,{editFuntion:function(){return e.props.editFuntion()},editData:e.props.editData,getEditData:function(t){return e.props.getEditData(t)}})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("table",{className:"table table-striped table-inverse table-hover "},r.a.createElement("thead",{className:"thead-inverse"},r.a.createElement("tr",null,r.a.createElement("th",null,"STT"),r.a.createElement("th",null,"T\xean"),r.a.createElement("th",null,"\u0110i\u1ec7n tho\u1ea1i"),r.a.createElement("th",null,"Quy\u1ec1n"),r.a.createElement("th",null,"H\xe0nh \u0111\u1ed9ng"))),r.a.createElement("tbody",null,this.props.tableData.map((function(t,a){return r.a.createElement(E,{id:t.id,name:t.name,stt:a+1,phone:t.phone,permission:t.permission,editFuntion:function(a){return e.props.editFuntion(t)},deleteButtonClick:function(t){return e.props.deleteButtonClick(t)}})}))))),this.isShowEditForm(),r.a.createElement(p,{trangThaiChinhSua:this.props.trangThaiChinhSua,thayDoi:function(){return e.props.thayDoi()},add:function(t){return e.props.add(t)}}))))}}]),a}(n.Component),b=a(8),v=a(17),N=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).getEditData=function(e){n.state.dataUser.forEach((function(t,a){t.id===e.id&&(t.name=e.name,t.phone=e.phone,t.permission=e.permission)})),localStorage.setItem("User",JSON.stringify(n.state.dataUser))},n.editFuntion=function(e){var t=e;n.setState({editUserStatus:!n.state.editUserStatus,editData:t})},n.deleteButtonClick=function(e){var t=n.state.dataUser.filter((function(t){return t.id!=e}));n.setState({dataUser:t}),localStorage.setItem("User",JSON.stringify(t))},n.thayDoi=function(){n.setState({trangThaiChinhSua:!n.state.trangThaiChinhSua})},n.getTextSearch=function(e){n.setState({dataSearch:e})},n.getNewUserData=function(e){var t={};(t=e).id=Object(v.a)();var a=n.state.dataUser;a.push(t),n.setState({dataUser:a}),localStorage.setItem("User",JSON.stringify(a))},n.state={trangThaiChinhSua:!0,dataUser:[],dataSearch:"",editUserStatus:!1,editData:{}},n}return Object(c.a)(a,[{key:"componentWillMount",value:function(){if(null===localStorage.getItem("User"))localStorage.setItem("User",JSON.stringify(b));else{var e=JSON.parse(localStorage.getItem("User"));this.setState({dataUser:e})}}},{key:"render",value:function(){var e=this,t=[];return this.state.dataUser.forEach((function(a){-1!==a.name.indexOf(e.state.dataSearch)&&t.push(a)})),r.a.createElement("div",null,r.a.createElement(m,null),r.a.createElement(d,{checkConnect:function(t){return e.getTextSearch(t)}}),r.a.createElement(g,{trangThaiChinhSua:this.state.trangThaiChinhSua,thayDoi:function(){return e.thayDoi()},tableData:t,add:function(t){return e.getNewUserData(t)},editFuntion:function(t){return e.editFuntion(t)},editUserStatus:this.state.editUserStatus,changeEditUserStatus:function(){return e.changeEditUserStatus()},editData:this.state.editData,getEditData:function(t){return e.getEditData(t)},deleteButtonClick:function(t){return e.deleteButtonClick(t)}}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e){e.exports=JSON.parse('[{"id":1,"name":"Tr\u1ea7n \u0110\u1ee9c L\u01b0\u01a1ng","phone":"123456789","permission":1},{"id":2,"name":"Nguy\u1ec5n T\xe0i A ","phone":"987654321","permission":2},{"id":3,"name":"L\xea Th\u1ecb L\u1ef1u ","phone":"654123789","permission":3},{"id":4,"name":"B\xf9i V\u0103n B\xe1","phone":"651237891","permission":2},{"id":5,"name":"B\xf9i V\u0103n B\xe1","phone":"651237891","permission":2},{"id":6,"name":"Ironman","phone":"651237891","permission":2}]')},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.c78ea7bb.chunk.js.map