(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(e,t,a){},127:function(e,t,a){},129:function(e,t,a){},132:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(64),r=a.n(l),m=(a(80),a(6)),s=(a(82),a(65)),i=a.n(s),o=a(66),u=a.n(o),d=a(67),E=a.n(d),p=a(68),v=a.n(p),f=(a(84),function(e){return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:""},c.a.createElement("img",{className:"logo",src:i.a})),c.a.createElement("div",{className:"headers-links"},c.a.createElement("div",{className:"homepage"},"  ",c.a.createElement("div",{className:"logo1"},c.a.createElement(u.a,{style:{fontSize:"40px"}})),c.a.createElement("div",{className:"text"},"Home")),c.a.createElement("div",{className:"blogs"},c.a.createElement("div",{className:"logo1"},c.a.createElement(E.a,{style:{fontSize:"40px"}})),c.a.createElement("div",{className:"text"},"Blogs")),c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"icon"},c.a.createElement(v.a,null)),c.a.createElement("input",{className:"input",placeholder:"input",value:e.searchkey,onChange:function(t){return e.set(t.target.value)}})))))}),g=a(27),b=a(5),N=(a(54),a(22)),h=a.n(N),j=a(154),O=a(95),y=a.n(O),x=a(92),S=a.n(x),_=a(93),w=a.n(_),C=function(e){var t=e.item;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"img_pod"}," ",c.a.createElement("img",{src:S.a})),c.a.createElement("div",{className:"title"},t.title),c.a.createElement("div",{className:"line"}),c.a.createElement("div",{className:"user"},c.a.createElement("div",{className:"usertext"}," ",c.a.createElement("span",null,c.a.createElement(w.a,null))," ",c.a.createElement("span",null,"written by:"),c.a.createElement("span",null,t.username))),c.a.createElement("div",{className:"line"}),c.a.createElement("div",{className:"desc"},c.a.createElement("div",{className:"dess"},c.a.createElement("span",null),"Description  "),c.a.createElement("div",{className:"des"}," ",t&&t.desc," ")),c.a.createElement(g.b,{to:"/"+t._id}," ",c.a.createElement("div",{className:"butt"},c.a.createElement("button",{id:"btn"},"more detail"))))},k=function(e){var t=Object(n.useState)([]),a=Object(m.a)(t,2),l=a[0],r=a[1],s=Object(n.useState)({}),i=Object(m.a)(s,2),o=(i[0],i[1],Object(n.useState)({})),u=Object(m.a)(o,2),d=(u[0],u[1],Object(n.useState)([])),E=Object(m.a)(d,2),p=E[0],v=E[1];Object(n.useEffect)(function(){b(),f()},[]);var f=function(){h.a.get("http://localhost:5000/api/v4/getall").then(function(e){var t=e.data.listcommnet;console.log(t),v(t)})},b=function(){h.a.get("http://localhost:5000/api").then(function(e){var t=e.data.posts;r(t),console.log(l)}).catch(function(e){console.error("error'".concat(e)),console.log(e)})};return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"container_all"},c.a.createElement("div",{className:"container_blogs"},l.filter(function(t){return""==e.keysearch?t:t.title.toLowerCase().includes(e.keysearch.toLowerCase())?t:void 0}).map(function(e,t){return c.a.createElement(C,{item:e,comments:p,key:t})}))),c.a.createElement("div",{className:"addblog"},c.a.createElement(g.b,{to:"/add_blog"},c.a.createElement(j.a,{color:"primary","aria-label":"add"},c.a.createElement(y.a,null)))))},F=(a(125),function(e){var t=e.blogdet;return c.a.createElement("div",{className:"blog"},c.a.createElement("div",{className:"title_blg"}," ",c.a.createElement("p",null,t.title)),c.a.createElement("div",{className:"separate"}),c.a.createElement("div",{className:"writer"},c.a.createElement("span",null,"writen by:"),c.a.createElement("span",null,t.username)),c.a.createElement("div",{className:"separate_2"}),c.a.createElement("div",{className:"des_1"},c.a.createElement("p",null,t.desc)))}),T=a(30),B=(a(127),function(e){var t=e.comments,a=e.id,l=Object(n.useState)(""),r=Object(m.a)(l,2),s=r[0],i=r[1];Object(T.d)();return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"containercomm"},t&&t.map(function(e,t){return c.a.createElement("div",{className:"dialogbox",key:t},c.a.createElement("div",{className:"body"},c.a.createElement("span",{className:"tip tip-up"}),c.a.createElement("div",{className:"message"},c.a.createElement("span",null,e.text," "))))}),c.a.createElement("div",{className:"commentinput"},c.a.createElement("div",{className:"addcomment"},c.a.createElement("input",{type:"text",value:s,onChange:function(e){return i(e.target.value)},placeholder:"add comment"}),c.a.createElement("button",{onClick:function(e){h.a.post("http://localhost:5000/api/"+a+"/comment",{comment:s}).then(function(){return window.location.reload()})}}," add comment")))))}),L=function(){var e=Object(n.useState)({}),t=Object(m.a)(e,2),a=t[0],l=t[1],r=Object(b.g)().id,s=Object(n.useState)([]),i=Object(m.a)(s,2);i[0],i[1];return console.log(a),Object(n.useEffect)(function(){h.a.get("http://localhost:5000/api/"+r).then(function(e){var t=e.data;l(t)})},[]),c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"detcommm"},c.a.createElement("div",{className:"leftdet"},c.a.createElement(F,{blogdet:a})),c.a.createElement("div",{className:"rightcomm"},c.a.createElement(B,{comments:a.comments,id:r}))))},U=(a(129),function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(""),s=Object(m.a)(r,2),i=s[0],o=s[1],u=Object(n.useState)(""),d=Object(m.a)(u,2),E=d[0],p=d[1],v=Object(T.d)(),f=Object(b.f)();return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"cont_d"},c.a.createElement("div",{className:"back_d"},c.a.createElement("div",{className:"title_add"},c.a.createElement("p",null,"add a blog")),c.a.createElement("div",{className:"blog"},c.a.createElement("form",{className:"signUpForm",encType:"multipart/form-data",onSubmit:function(e){e.preventDefault(),h.a.post("http://localhost:5000/api/creatpost",{username:a,desc:E,title:i}).then(function(e){e.data.status}).catch(function(e){return v.show("error:"+e.message.data)}),f.push("/")}},c.a.createElement("div",{className:"signUpName"},c.a.createElement("input",{className:"form__field",type:"text",placeholder:"username",required:!0,name:"username",value:a,onChange:function(e){return l(e.target.value)}})),c.a.createElement("div",{className:"signUpEmail"},c.a.createElement("input",{className:"form__field",type:"text",placeholder:"title",required:!0,name:"title",value:i,onChange:function(e){return o(e.target.value)}})),c.a.createElement("div",{className:"signUpPassword"},c.a.createElement("textarea",{className:"textaria",type:"text",placeholder:"descripttion",required:!0,name:"desc",value:E,onChange:function(e){return p(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("input",{type:"submit",value:"Register",className:"signUpBtn"})))))))});var q=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],l=t[1];return c.a.createElement(g.a,null,c.a.createElement(f,{set:l,searchkey:a}),c.a.createElement(b.c,null,c.a.createElement(b.a,{exact:!0,path:"/",component:function(){return c.a.createElement(k,{keysearch:a})}}),c.a.createElement(b.a,{path:"/add_blog",component:U}),c.a.createElement(b.a,{path:"/:id",component:L}),c.a.createElement(b.a,{path:"*",component:k})))},D=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,153)).then(function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,l=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),l(e),r(e)})},P=a(96),R={position:T.b.BOTTOM_CENTER,timeout:5e3,offset:"30px",transition:T.c.SCALE};r.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(T.a,Object.assign({template:P.a},R),c.a.createElement(q,null)))),D()},54:function(e,t,a){},65:function(e,t,a){e.exports=a.p+"static/media/ninja.e6a2e21b.png"},73:function(e,t,a){e.exports=a(132)},80:function(e,t,a){},82:function(e,t,a){},84:function(e,t,a){},92:function(e,t,a){e.exports=a.p+"static/media/personne.ed9c618c.jpg"}},[[73,3,2]]]);
//# sourceMappingURL=main.3aafa480.chunk.js.map