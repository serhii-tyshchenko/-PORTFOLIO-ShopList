(this["webpackJsonpshop-list"]=this["webpackJsonpshop-list"]||[]).push([[0],Array(26).concat([function(e,t,n){e.exports=n(63)},,,,,,,,,,function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"loadState",(function(){return m})),n.d(a,"saveState",(function(){return d})),n.d(a,"clearState",(function(){return f}));var i=n(0),o=n.n(i),c=n(8),r=n.n(c),l=n(2),u=n(5),s="MyShoppingList",m=function(){try{var e=localStorage.getItem(s);if(null===e)return;return JSON.parse(e)}catch(t){return}},d=function(e){try{var t=JSON.stringify(e);localStorage.setItem(s,t)}catch(n){}},f=function(){localStorage.removeItem(s)},p=n(22),g=n(3),E=n(6),h=[],b=[],_={uid:null,isLogged:!1},v={language:"en",theme:"light"},O=n(7),N={auth:{isVisible:!1,data:null},todo:{isVisible:!1,data:null}},C=Object(u.c)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"ADD_ITEM":return[].concat(Object(E.a)(e),[a]);case"UPDATE_ITEM":return e.map((function(e){return e.id===a.id?Object(g.a)(Object(g.a)({},e),a):e}));case"REMOVE_ITEM":return e.filter((function(e){return e.id!==a}));case"GET_ITEMS":return Object(E.a)(a);case"SIGN_OUT":return[];default:return e}},suggestions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"ADD_SUGGESTION":return[].concat(Object(E.a)(e),[a]);case"UPDATE_SUGGESTION":return e.map((function(e){return e.id===a.id?Object(g.a)(Object(g.a)({},e),a):e}));case"REMOVE_SUGGESTION":return e.filter((function(e){return e.id!==a}));case"GET_SUGGESTIONS":return Object(E.a)(a);case"SIGN_OUT":return[];default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return{uid:t.payload.uid,email:t.payload.email,isLogged:!0};case"SIGN_OUT":return _;default:return e}},settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"GET_SETTINGS":return Object(g.a)({},a);case"UPDATE_SETTINGS":return Object(g.a)(Object(g.a)({},e),a);default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ERROR":return alert(t.payload),t.payload;default:return e}},modals:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"SHOW_MODAL":return Object(g.a)(Object(g.a)({},e),{},Object(O.a)({},a.modalName,{isVisible:!0,data:a.data}));case"HIDE_MODAL":return Object(g.a)(Object(g.a)({},e),{},Object(O.a)({},a.modalName,{isVisible:!1,data:a.data}));default:return e}}}),S=m(),I=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,y=Object(u.e)(C,S,I(Object(u.a)(p.a)));y.subscribe((function(){var e=y.getState(),t=e.data,n=e.suggestions,a=e.user,i=e.settings;d({data:t,suggestions:n,user:a,settings:i})}));var T=y,A=(n(36),n(23)),G=n(10),j=n.n(G),U=(n(37),n(39),n(64),{apiKey:"AIzaSyD93Y2JvCGJE0TOa1tAjMUctkNziytAauE",authDomain:"shoppinglist-34c59.firebaseapp.com",databaseURL:"https://shoppinglist-34c59.firebaseio.com",projectId:"shoppinglist-34c59",storageBucket:"shoppinglist-34c59.appspot.com",messagingSenderId:"1045807402179",appId:"1:1045807402179:web:cdf533ad8c72bc5c776676",measurementId:"G-JFLG8ZT9QD"}),R=new function e(){var t=this;Object(A.a)(this,e),this.signInWithEmail=function(e,n){return t.auth.signInWithEmailAndPassword(e,n)},this.signUpWithEmail=function(e,n){return t.auth.createUserWithEmailAndPassword(e,n)},this.signInWithGoogle=function(){return j.a.auth().signInWithPopup(new j.a.auth.GoogleAuthProvider)},this.signOut=function(){return t.auth.signOut()},this.addItem=function(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.dataCollection;return t.db.collection(t.rootCollection).doc(e).collection(a).doc(n.id).set(n)},this.updateItem=function(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.dataCollection;return t.db.collection(t.rootCollection).doc(e).collection(a).doc(n.id).set(n,{merge:!0})},this.removeItem=function(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.dataCollection;return t.db.collection(t.rootCollection).doc(e).collection(a).doc(n).delete()},this.getItems=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.dataCollection;return t.db.collection(t.rootCollection).doc(e).collection(n).get()},this.getSettings=function(e){return t.db.collection(t.rootCollection).doc(e).collection(t.settingsCollection).doc(t.commonSettingsDoc).get()},this.updateSettings=function(e,n){return t.db.collection(t.rootCollection).doc(e).collection(t.settingsCollection).doc(t.commonSettingsDoc).set(n,{merge:!0})},j.a.initializeApp(U),this.auth=j.a.auth(),this.db=j.a.firestore(),this.rootCollection="data",this.settingsCollection="settings",this.dataCollection="shopping-list",this.commonSettingsDoc="common"};function k(e){return{type:"ERROR",payload:e}}var D=function(e,t){return function(n){e?R.addItem(e,t).then((function(){return n({type:"ADD_ITEM",payload:t})})).catch((function(e){return n(k(e.message))})):n({type:"ADD_ITEM",payload:t})}},x=function(e,t){return function(n){e?R.updateItem(e,t).then((function(){return n({type:"UPDATE_ITEM",payload:t})})).catch((function(e){return n(k(e.message))})):n({type:"UPDATE_ITEM",payload:t})}};function P(e){return{type:"ERROR",payload:e}}var M=function(e,t){return function(n){e?R.updateItem(e,t,"suggestion-list").then((function(){return n({type:"UPDATE_SUGGESTION",payload:t})})).catch((function(e){return n(P(e.message))})):n({type:"UPDATE_SUGGESTION",payload:t})}};function w(e){return{type:"ERROR",payload:e}}function L(e){return{type:"SIGN_IN",payload:{uid:e.user.uid,email:e.user.email}}}function W(e){return{type:"ERROR",payload:e}}var V=function(e,t){return function(n){e?R.updateSettings(e,t).then((function(){return n({type:"UPDATE_SETTINGS",payload:t})})).catch((function(e){return n(W(e.message))})):n({type:"UPDATE_SETTINGS",payload:t})}},B=function(e){return{type:"HIDE_MODAL",payload:e}},Y=(n(42),function(e){var t=e.title,n=e.isVisible,a=e.onClose,i=e.children,r=document.getElementById("modal-root");return Object(c.createPortal)(n&&o.a.createElement("div",{className:"ui-modal__overlay"},o.a.createElement("div",{className:"ui-modal"},o.a.createElement("div",{className:"ui-modal__header"},o.a.createElement("h4",{className:"ui-modal__title"},t),o.a.createElement(F,{extraClassName:"ui-modal__btn-close",icon:"cancel",onClick:a})),o.a.createElement("div",{className:"ui-modal__content"},i))),r)});Y.defaultProps={title:"Modal title",isVisible:!1};n(43),n(44);var F=function(e){var t=e.icon,n=e.children,a=e.onClick,i=e.extraClassName,c=e.title,r=e.type,l="ui-icon-button icon-".concat(t," ").concat(i);return o.a.createElement("button",{type:r,className:l,onClick:a,title:c},n)};F.defaultProps={icon:"",extraClassName:"",title:"",onClick:null,children:null,type:"submit"};n(45);var H=function(e){var t=e.onClick,n=e.extraClassName,a=e.type,i=e.btnType,c=e.size,r=e.text,l="ui-button ui-button--".concat(i," ui-button--").concat(c," ").concat(n);return o.a.createElement("button",{type:a,className:l,onClick:t},r)};H.defaultProps={extraClassName:"",onClick:null,size:"normal",type:"button",btnType:"default",text:"Some Text"};var J=n(24),q=(n(46),function(e){var t=e.type,n=e.value,a=e.onChange,i=e.extraClassName,c=Object(J.a)(e,["type","value","onChange","extraClassName"]),r=i?"ui-input ".concat(i):"ui-input";return o.a.createElement("input",Object.assign({type:t,onChange:a,value:n,className:r},c))});q.defaultProps={extraClassName:"",onChange:null,value:"",type:"text"};var z=n(9),X=(n(47),function(e){var t=e.extraClassName,n=e.labels,a=e.children,c=e.activeTab,r=e.onTabClick,l="ui-tabs ".concat(t),u=Object(i.useState)(c),s=Object(z.a)(u,2),m=s[0],d=s[1];function f(e){d(n.indexOf(e.target.value)),r&&r()}function p(e){return e===m?"ui-tabs__item ui-tabs__item--active":"ui-tabs__item"}return o.a.createElement("div",{className:l},o.a.createElement("ol",{className:"ui-tabs__list"},n.map((function(e,t){return o.a.createElement("li",{key:e,className:p(t)},o.a.createElement("input",{className:"ui-tabs__btn",type:"button",onClick:f,value:e}))}))),o.a.createElement("div",{className:"ui-tabs__content"},a.map((function(e,t){return t!==m?null:e}))))});X.defaultProps={extraClassName:"",activeTab:0,labels:[],children:null,onTabClick:null};n(48);var K=function(e){var t=e.value,n=e.onChange,a=e.options,i=e.extraClassName,c=i?"ui-select ".concat(i):"ui-select";return o.a.createElement("select",{onChange:n,value:t,className:c},a.map((function(e){return o.a.createElement("option",{key:e.value,value:e.value,className:"ui-select__option"},e.label)})))};K.defaultProps={extraClassName:"",onChange:null,value:"",options:[{value:"opt1",label:"Option 1"},{value:"opt2",label:"Option 2"},{value:"opt3",label:"Option 3"}]};var Q={en:{label:"EN",strings:{SIGN_IN:"Sign In",SIGN_UP:"Sign Up",SIGN_OUT:"Sign Out",PLEASE_LOGIN:"Please login to add new task",ADD_ITEM:"Add",AUTHENIFICATION:"Authenification",YOUR_EMAIL:"Your email",YOUR_PASSWORD:"Your password",CREATE_AN_ACCOUNT:"Create an Account"}},ua:{label:"\u0423\u041a\u0420",strings:{SIGN_IN:"\u0423\u0432\u0456\u0439\u0442\u0438",SIGN_UP:"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044c",SIGN_OUT:"\u0412\u0438\u0439\u0442\u0438",PLEASE_LOGIN:"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0443\u0439\u0442\u0435\u0441\u044c, \u0449\u043e\u0431 \u0434\u043e\u0434\u0430\u0442\u0438 \u043d\u043e\u0432\u0443 \u0437\u0430\u0434\u0430\u0447\u0443",ADD_ITEM:"\u0414\u043e\u0434\u0430\u0442\u0438",AUTHENIFICATION:"\u0410\u0443\u0442\u0435\u043d\u0456\u0444\u0456\u043a\u0430\u0446\u0456\u044f",YOUR_EMAIL:"\u0412\u0430\u0448 email",YOUR_PASSWORD:"\u0412\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c",CREATE_AN_ACCOUNT:"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u0438\u0439 \u0437\u0430\u043f\u0438\u0441"}},ru:{label:"\u0420\u0423\u0421",strings:{SIGN_IN:"\u0412\u043e\u0439\u0442\u0438",SIGN_UP:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",SIGN_OUT:"\u0412\u044b\u0439\u0442\u0438",PLEASE_LOGIN:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0443\u0439\u0442\u0435\u0441\u044c, \u0447\u0442\u043e\u0431\u044b \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0437\u0430\u0434\u0430\u0447\u0443",ADD_ITEM:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",AUTHENIFICATION:"\u0410\u0443\u0442\u0435\u043d\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f",YOUR_EMAIL:"\u0412\u0430\u0448 email",YOUR_PASSWORD:"\u0412\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c",CREATE_AN_ACCOUNT:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0443\u0447\u0435\u0442\u043d\u0443\u044e \u0437\u0430\u043f\u0438\u0441\u044c"}}},Z=function(e){return Q[e]&&Q[e].strings},$=Object(E.a)(Object.entries(Q)).map((function(e){return{value:e[0],label:e[1].label}})),ee=(n(49),function(e){var t=e.onSubmit,n=e.onChange,a=e.data,i=a.email,c=a.password,r=e.STR,l=r.YOUR_EMAIL,u=r.YOUR_PASSWORD,s=r.SIGN_IN;return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{onSubmit:t,className:"signin-form"},o.a.createElement(q,{value:i,type:"email",name:"email",extraClassName:"signin-form__input",placeholder:l,onChange:n,required:!0}),o.a.createElement(q,{type:"password",name:"password",extraClassName:"signin-form__input",value:c,placeholder:u,onChange:n,required:!0}),o.a.createElement("div",{className:"signin-form__btns"},o.a.createElement(H,{type:"submit",btnType:"primary",text:s,onClick:t}))))}),te=(n(50),function(e){var t=e.onSubmit,n=e.onChange,a=e.data,i=a.email,c=a.password,r=e.STR;return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{onSubmit:t,className:"signup-form"},o.a.createElement(q,{type:"email",name:"email",value:i,extraClassName:"signup-form__input",placeholder:r.YOUR_EMAIL,onChange:n,required:!0}),o.a.createElement(q,{type:"password",name:"password",value:c,extraClassName:"signup-form__input",placeholder:r.YOUR_PASSWORD,onChange:n,required:!0}),o.a.createElement("div",{className:"signup-form__btns"},o.a.createElement(H,{type:"submit",btnType:"primary",text:r.CREATE_AN_ACCOUNT,onClick:t}))))}),ne=(n(51),function(e){var t=e.onSignInWithGoogle;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"social-login"},o.a.createElement("div",{className:"social-login__label"},"or connect with"),o.a.createElement("div",{className:"social-login__btns"},o.a.createElement(F,{icon:"google",extraClassName:"social-login__btn",onClick:t}))))}),ae=(n(52),function(e){var t=e.data,n=e.isVisible,a=e.onClose,i=e.onChange,c=e.onTabClick,r=e.onSignIn,u=e.onSignUp,s=e.onSignInWithGoogle,m=Object(l.c)((function(e){return e.settings})).language,d=Z(m);return o.a.createElement(Y,{isVisible:n,onClose:a,title:d.AUTHENIFICATION},o.a.createElement(X,{labels:[d.SIGN_IN,d.SIGN_UP],extraClassName:"auth-form__tabs",onTabClick:c},o.a.createElement(ee,{onSubmit:r,onChange:i,data:t,STR:d}),o.a.createElement(te,{onSubmit:u,onChange:i,data:t,STR:d})),o.a.createElement(ne,{onSignInWithGoogle:s,STR:d}))}),ie=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.user.isLogged})),n=Object(l.c)((function(e){return e.modals.auth.isVisible})),a={email:"",password:""},c=Object(i.useState)(a),r=Object(z.a)(c,2),u=r[0],s=r[1];return Object(i.useEffect)((function(){t&&(s(a),e(B({modalName:"auth",data:null})))}),[t]),o.a.createElement(ae,{isVisible:n,onClose:function(){s(a),e(B({modalName:"auth",data:null}))},data:u,onChange:function(e){var t=e.target,n=t.name,a=t.value;s(Object(g.a)(Object(g.a)({},u),{},Object(O.a)({},n,a)))},onTabClick:function(){s(a)},onSignIn:function(t){var n,a;u.email&&u.password&&(t.preventDefault(),e((n=u.email,a=u.password,function(e){R.signInWithEmail(n,a).then((function(t){return e(L(t))})).catch((function(t){return e(w(t.message))}))})))},onSignUp:function(t){var n,a;u.email&&u.password&&(t.preventDefault(),e((n=u.email,a=u.password,function(e){R.signUpWithEmail(n,a).then((function(t){return e(L(t))})).catch((function(t){return e(w(t.message))}))})))},onSignInWithGoogle:function(){e((function(e){R.signInWithGoogle().then((function(t){return e(L(t))})).catch((function(t){return e(w(t.message))}))}))}})},oe=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.user.isLogged})),n=Object(l.c)((function(e){return e.settings})).language,i=Z(n),c=t?"user":"user-o",r=t?i.SIGN_OUT:i.SIGN_IN;return o.a.createElement(F,{extraClassName:"login__btn",icon:c,title:r,onClick:function(){e(t?function(e){R.signOut().then((function(){return e({type:"SIGN_OUT"})})).then((function(){return a.clearState()})).catch((function(t){return e(w(t.message))}))}:{type:"SHOW_MODAL",payload:{modalName:"auth",data:null}})}})},ce=(n(53),function(e){var t=e.data,n=e.onCompleteClick,a=e.onRemoveClick,i=e.onBlur,c=e.onAddClick,r=e.STR;return o.a.createElement("div",{className:"shopping-list"},o.a.createElement(le,{onSubmit:c,STR:r}),o.a.createElement("ul",{className:"shopping-list__list"},t.map((function(e){return o.a.createElement(re,{key:e.id,data:e,onCompleteClick:n,onRemoveClick:a,onBlur:i})}))))}),re=(n(54),function(e){var t=e.data,n=t.id,a=t.title,i=t.isCompleted,c=e.onCompleteClick,r=e.onRemoveClick,l=e.onBlur;return o.a.createElement("li",{id:n,className:"shopping-list__item"},o.a.createElement("input",{type:"checkbox",className:"shopping-list__item-cb",checked:i,onChange:c}),o.a.createElement("input",{type:"text",className:"shopping-list__item-title",defaultValue:a,onBlur:l,maxLength:"50"}),o.a.createElement(F,{id:n,icon:"cancel",onClick:r}))}),le=(n(55),function(e){var t=e.onSubmit,n=Object(i.useState)(""),a=Object(z.a)(n,2),c=a[0],r=a[1];function l(e){c&&(e.preventDefault(),t(c),r(""))}return o.a.createElement("form",{className:"shopping-list__form",onSubmit:l},o.a.createElement(q,{extraClassName:"shopping-list__form-input",value:c,onChange:function(e){r(e.target.value)},required:!0}),o.a.createElement(F,{type:"submit",extraClassName:"shopping-list__form-btn",icon:"plus",onClick:l}))}),ue=(n(56),function(e){var t=e.data,n=e.onRemoveClick,a=e.onAddClick,i=e.onBlur;return o.a.createElement("div",{className:"suggestion-list"},o.a.createElement("ul",{className:"suggestion-list__list"},t.map((function(e){return o.a.createElement(se,{key:e.id,data:e,onRemoveClick:n,onAddClick:a,onBlur:i})}))))}),se=(n(57),function(e){var t=e.data,n=t.id,a=t.title,i=e.onRemoveClick,c=e.onAddClick,r=e.onBlur;return o.a.createElement("li",{id:n,className:"suggestion-list__item"},o.a.createElement(F,{id:n,extraClassName:"suggestion-list__item-add",icon:"plus",onClick:c}),o.a.createElement("input",{type:"text",className:"suggestion-list__item-title",defaultValue:a,onBlur:r,maxLength:"50"}),o.a.createElement(F,{id:n,icon:"cancel",onClick:i}))}),me=n(65),de=function(e,t){return e.some((function(e){return e.title.toUpperCase()===t.toUpperCase()}))},fe=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.user.uid})),n=Object(l.c)((function(e){return e.data})),a=Object(l.c)((function(e){return e.suggestions})),i=Object(l.c)((function(e){return e.settings})).language,c=Z(i);return o.a.createElement(o.a.Fragment,null,o.a.createElement(ce,{data:n,onCompleteClick:function(n){var a=n.target.closest("li").id,i=n.target.checked;e(x(t,{id:a,isCompleted:i}))},onRemoveClick:function(n){var i=n.target.closest("li").id,o=n.target.previousSibling.value;e(function(e,t){return function(n){e?R.removeItem(e,t).then((function(){return n({type:"REMOVE_ITEM",payload:t})})).catch((function(e){return n(k(e.message))})):n({type:"REMOVE_ITEM",payload:t})}}(t,i));var c=a.find((function(e){return e.title===o}));e(M(t,{id:c.id,inList:!1}))},onAddClick:function(i){if(!de(n,i)){var o={id:Object(me.a)(),title:i,isCompleted:!1};e(D(t,o)),de(a,i)||e(function(e,t){return function(n){e?R.addItem(e,t,"suggestion-list").then((function(){return n({type:"ADD_SUGGESTION",payload:t})})).catch((function(e){return n(P(e.message))})):n({type:"ADD_SUGGESTION",payload:t})}}(t,{id:o.id,title:i,inList:!0}))}},onBlur:function(n){var a=n.target.closest("li").id,i=n.target.value;e(x(t,{id:a,title:i}))},STR:c}))};var pe=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.user.uid})),n=Object(l.c)((function(e){return e.suggestions.filter((function(e){return!0!==e.inList})).sort((function(e,t){return function(e,t){var n=e.toUpperCase(),a=t.toUpperCase();return n<a?-1:n>a?1:0}(e.title,t.title)}))}));return o.a.createElement(o.a.Fragment,null,o.a.createElement(ue,{data:n,onRemoveClick:function(n){var a=n.target.closest("li").id;e(function(e,t){return function(n){e?R.removeItem(e,t,"suggestion-list").then((function(){return n({type:"REMOVE_SUGGESTION",payload:t})})).catch((function(e){return n(P(e.message))})):n({type:"REMOVE_SUGGESTION",payload:t})}}(t,a))},onAddClick:function(n){var a=n.target.nextSibling.value,i=n.target.closest("li").id,o={id:Object(me.a)(),title:a,isCompleted:!1};e(D(t,o)),e(M(t,{id:i,inList:!0}))},onBlur:function(n){var a=n.target.closest("li").id,i=n.target.value;e(M(t,{id:a,title:i}))}}))},ge=(n(58),function(e){var t=e.language,n=e.onChange,a=e.options;return o.a.createElement(K,{value:t,onChange:n,options:a,extraClassName:"language-selector"})}),Ee=(n(59),function(e){var t=e.theme,n=e.onClick,a="light"===t?"sun":"moon";return o.a.createElement(F,{icon:a,onClick:n})}),he=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.settings.language})),n=Object(l.c)((function(e){return e.user.uid}));return o.a.createElement(ge,{language:t,onChange:function(t){var a=t.target.value;e(V(n,{language:a}))},options:$})},be=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.settings.theme})),n=Object(l.c)((function(e){return e.user.uid}));return o.a.createElement(Ee,{theme:t,onClick:function(){e(V(n,{theme:"light"===t?"dark":"light"}))}})},_e=(n(60),function(){return o.a.createElement("header",{className:"header"},o.a.createElement("div",{className:"header__content wrapper"},o.a.createElement("a",{href:"/",className:"header__logo"},o.a.createElement("span",{className:"header__title"},"ShopList")),o.a.createElement("div",{className:"header__menu"},o.a.createElement(he,null),o.a.createElement(be,null),o.a.createElement(oe,null))))}),ve=(n(61),function(e){var t=e.children;return o.a.createElement("main",{className:"main"},o.a.createElement("div",{className:"main__content wrapper"},t))}),Oe=function(e){var t=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(_e,null),o.a.createElement(ve,null,t))},Ne=(n(62),function(){return o.a.createElement(Oe,null,o.a.createElement("div",{className:"list-wrapper"},o.a.createElement(fe,null),o.a.createElement(pe,null)))});var Ce=function(){var e=Object(l.c)((function(e){return e.user})),t=Object(l.c)((function(e){return e.settings.theme}));document.querySelector("html").setAttribute("class","theme-".concat(t));var n=e.uid,a=e.isLogged,c=Object(l.b)();return Object(i.useEffect)((function(){a&&(c(function(e){return function(t){var n=[];R.getItems(e).then((function(e){e.forEach((function(e){return n.push(e.data())})),t({type:"GET_ITEMS",payload:n})})).catch((function(e){return t(k(e.message))}))}}(n)),c(function(e){return function(t){var n=[];R.getItems(e,"suggestion-list").then((function(e){e.forEach((function(e){return n.push(e.data())})),t({type:"GET_SUGGESTIONS",payload:n})})).catch((function(e){return t(P(e.message))}))}}(n)),c(function(e){return function(t){R.getSettings(e).then((function(e){e.data()&&t({type:"GET_SETTINGS",payload:e.data()})})).catch((function(e){return t(W(e.message))}))}}(n)))}),[n]),o.a.createElement("div",{className:"App"},o.a.createElement(Ne,null),o.a.createElement(ie,null))};r.a.render(o.a.createElement(l.a,{store:T},o.a.createElement(Ce,null)),document.getElementById("root"))}]),[[26,1,2]]]);
//# sourceMappingURL=main.71dcd496.chunk.js.map