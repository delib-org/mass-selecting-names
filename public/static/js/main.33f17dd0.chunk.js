(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{14:function(e,a,t){},26:function(e,a,t){e.exports=t(44)},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},38:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(23),o=t.n(r),l=(t(31),t(6)),s=(t(32),t(10)),i=t(4);t(33);var m=function(e){var a=Object(i.f)().pathname;return console.log(a),c.a.createElement("nav",null,c.a.createElement("a",{href:"http://delib.org/he",className:"navButton",target:"_blank",rel:"noopener noreferrer"},"Delib.org"),c.a.createElement(s.b,{to:"/add"},c.a.createElement("div",{className:"/add"===a||"/"===a?"navButton navButtonSelected":"navButton"},c.a.createElement("i",{className:"material-icons"},"add_circle"),"\u05d4\u05d5\u05e1\u05e4\u05ea \u05e9\u05de\u05d5\u05ea")),c.a.createElement(s.b,{to:"/vote"},c.a.createElement("div",{className:"/vote"===a?"navButton navButtonSelected":"navButton"},c.a.createElement("i",{className:"material-icons"},"check_circle"),"\u05d1\u05d7\u05d9\u05e8\u05ea \u05e9\u05de\u05d5\u05ea")))},u=t(7),d=(t(38),t(17)),v=t.n(d);t(39);v.a.initializeApp({apiKey:"AIzaSyD82XZxw9S90yrFl0PB5ibxy9MZv1GncH4",authDomain:"mass-names.firebaseapp.com",databaseURL:"https://mass-names.firebaseio.com",projectId:"mass-names",storageBucket:"mass-names.appspot.com",messagingSenderId:"990355098057",appId:"1:990355098057:web:af50ce9fd2aaf0d2e10018",measurementId:"G-GW6NL7QXD5"});var p=v.a.firestore();function f(e){var a=e.replace(/\u05d5/g,"");return a=(a=(a=(a=a.replace(/\u05d4/g,"")).replace(/\u05d9/g,"")).replace(/\u05d0/g,"")).replace(/ /g,"")}var E=0,h=new Set,N=p.collection("groups").doc("0nWDzSq0oFoqBXTQJJ6w").collection("questions").doc("AhNnQ5GMhN3xMCFYwQp9").collection("subQuestions").doc("79awrIGoQqrJVmo7p0LO");var b=function(e){var a=Object(n.useState)([]),t=Object(l.a)(a,2),r=t[0],o=t[1];return Object(n.useEffect)((function(){N.collection("options").orderBy("time","desc").limit(1).onSnapshot((function(e){e.forEach((function(e){E=e.data().number||0}))}),(function(e){console.log(e)}))}),[]),c.a.createElement("div",{className:"page"},c.a.createElement("div",{className:"addMessage"},"\u05d0\u05e0\u05d0 \u05d4\u05d5\u05e1\u05d9\u05e4\u05d5 \u05e9\u05de\u05d5\u05ea \u05d7\u05d3\u05e9\u05d9\u05dd \u05dc\u05e9\u05db\u05d5\u05e0\u05d5\u05ea \u05d4\u05e7\u05e8\u05d5\u05d5\u05d0\u05e0\u05d9\u05dd"),c.a.createElement("div",{className:"bottomBox"},c.a.createElement("div",{className:"foundNames"},r.length>0?c.a.createElement("div",null,"\u05e9\u05de\u05d5\u05ea \u05d3\u05d5\u05de\u05d9\u05dd"):c.a.createElement("div",null),r.map((function(e,a){return c.a.createElement("div",{className:"foundName",key:a},e)}))),c.a.createElement("form",{autoComplete:"off",onSubmit:function(a){a.preventDefault();var t=a.target.elements.newname.value,n=f(t);if(!e.userName){var c=prompt("\u05d0\u05e0\u05d0 \u05e6\u05d9\u05d9\u05e0\u05d5 \u05d0\u05ea \u05e9\u05de\u05db\u05dd  \u05db\u05d3\u05d9 \u05e0\u05d9\u05d3\u05e2 \u05de\u05d9 \u05d4\u05e6\u05d9\u05e2");e.setUserName(c)}r.includes(t)?console.log("all ready here!!!!!!!"):(a.target.elements.newname.value="",console.log(t,n),N.collection("options").add({userName:c||e.userName,name:t,searchString:n,time:(new Date).getTime(),number:E+1}).then((function(e){N.collection("maxNumber").doc("maxNumber").set({maxNumber:E}),alert("\u05d4\u05e9\u05dd \u05e9\u05e8\u05e9\u05de\u05ea\u05dd \u05d4\u05d5\u05e1\u05e3 \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4, \u05d5\u05de\u05d7\u05db\u05d4 \u05dc\u05d3\u05e8\u05d5\u05d2 \u05e2\u05dc \u05d9\u05d3\u05d9 \u05ea\u05d5\u05e9\u05d1\u05d9\u05dd \u05d0\u05d7\u05e8\u05d9\u05dd")})))}},c.a.createElement("input",{type:"text",name:"newname",required:!0,placeholder:"\u05d4\u05d5\u05e1\u05d9\u05e4\u05d5 \u05e9\u05dd \u05d7\u05d3\u05e9",onKeyUp:function(e){var a=e.target.value;if(a.length>2){var t=f(a),n=function(e){var a=e.slice(-1);t=a,a=String.fromCharCode(t.charCodeAt(0)+1);var t;var n=e.slice(0,-1)+a;return{start:e,end:n}}(t);console.dir(n),N.collection("options").where("searchString","==",t).where("searchString",">=",n.start).where("searchString","<=",n.end).limit(6).get().then((function(e){e.forEach((function(e){console.log(e.data()),h.add(e.data().name);var a=Object(u.a)(h);console.dir(a),o(a.slice(-5))}))}))}}}),c.a.createElement("input",{type:"submit",value:"\u05d4\u05d5\u05e1\u05e4\u05d4"}))))};t(14);var g=function(e){var a=Object(n.useState)(!1),t=Object(l.a)(a,2);return t[0],t[1],c.a.createElement("div",{className:e.name.isNew?"new nameSelect":"nameSelect",onClick:function(a){0===e.seriesIndex&&function(){var a={selected:void 0,unselected:void 0},t=Object(u.a)(e.names);a.selected=e.name,t[e.seriesIndex][0].isNew=!1,t[e.seriesIndex][1].isNew=!1,0===e.number?(t[e.seriesIndex][0].selected=!0,t[e.seriesIndex][1].selected=!1,a.unselected=e.couple[1]):(t[e.seriesIndex][1].selected=!0,t[e.seriesIndex][0].selected=!1,a.unselected=e.couple[0]),e.setNames(t),p.collection("groups").doc("0nWDzSq0oFoqBXTQJJ6w").collection("questions").doc("AhNnQ5GMhN3xMCFYwQp9").collection("subQuestions").doc("79awrIGoQqrJVmo7p0LO").collection("selections").add(a).then((function(a){console.log("update to db",a.id),e.getRandomNames()}))}()}},c.a.createElement("div",null,e.name.name),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null,e.name.selected?c.a.createElement("i",{className:"material-icons"},"check_circle"):c.a.createElement("div",null)))};var w=function(e){return c.a.createElement("div",{className:"namesSelect"},e.series.map((function(a,t){return c.a.createElement(g,{key:t,number:t,seriesIndex:e.seriesIndex,name:a,names:e.names,setNames:e.setNames,couple:e.series,getRandomNames:e.getRandomNames})})))};t(43);var x=function(){return c.a.createElement("div",{className:"lds-ring"},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null))};var S=function(e){var a=Object(n.useState)([]),t=Object(l.a)(a,2),r=t[0],o=t[1],s=Object(n.useState)(!1),i=Object(l.a)(s,2),m=i[0],d=i[1];function v(e){var a;d(!0);var t=p.collection("groups").doc("0nWDzSq0oFoqBXTQJJ6w").collection("questions").doc("AhNnQ5GMhN3xMCFYwQp9").collection("subQuestions").doc("79awrIGoQqrJVmo7p0LO");t.collection("maxNumber").doc("maxNumber").get().then((function(e){a=e.data().maxNumber||0;for(var n=new Set,c=0;n.size<2&&c<20;)n.add(Math.ceil(Math.random()*a)),c++;var l=Object(u.a)(n),s=[];l.forEach((function(e){t.collection("options").where("number","==",e).limit(1).get().then((function(e){e.forEach((function(e){var a=e.data();a.id=e.id,a.isNew=!0,s.push(a),2===s.length&&(d(!1),o([s].concat(Object(u.a)(r))))}))}))}))}))}return Object(n.useEffect)((function(){v()}),[]),c.a.createElement("div",{className:"page"},c.a.createElement("div",{className:"questionTitle"},"\u05d0\u05d9\u05d6\u05d4 \u05de\u05d4\u05e9\u05de\u05d5\u05ea \u05e2\u05d3\u05d9\u05e3?"),c.a.createElement("div",{className:""},m?c.a.createElement(x,null):c.a.createElement("div",null),r.map((function(e,a){return c.a.createElement(w,{series:e,key:a,seriesIndex:a,getRandomNames:v,names:r,setNames:o})}))))};var O=function(e){console.dir(e);var a=Object(n.useState)(!1),t=Object(l.a)(a,2),r=t[0],o=t[1];return c.a.createElement(s.a,null,c.a.createElement("div",{className:"app"},c.a.createElement(m,null),c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/"},c.a.createElement(b,{setUserName:o,userName:r})),c.a.createElement(i.a,{path:"/add"},c.a.createElement(b,{setUserName:o,userName:r})),c.a.createElement(i.a,{path:"/vote"},c.a.createElement(S,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.33f17dd0.chunk.js.map