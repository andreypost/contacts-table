(this["webpackJsonpreact-redux-test"]=this["webpackJsonpreact-redux-test"]||[]).push([[0],{124:function(e,t,a){e.exports=a.p+"static/media/backdrop.f7eab148.jpg"},127:function(e,t,a){e.exports=a.p+"static/media/react-logo.ee7cd8ed.svg"},128:function(e,t,a){e.exports=a.p+"static/media/wezom-logo.324b96ae.svg"},155:function(e,t,a){e.exports=a(286)},164:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){},188:function(e,t,a){},194:function(e,t,a){},195:function(e,t,a){},286:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"form",(function(){return F.a})),a.d(n,"app",(function(){return J}));var l={};a.r(l);var c=a(0),r=a.n(c),o=a(12),m=a.n(o),s=a(22),i=a(63),u=a(14),E=(a(164),a(293)),d=a(294),p=a(290),f=a(295),g=(a(165),a(56)),b=a(152),h=a(11),v=(a(166),a(292)),y=a(124),O={content:{backgroundImage:"url(".concat(a.n(y).a,")")}},_=r.a.memo((function(e){var t=e.children,a=Object(c.useMemo)((function(){return(new Date).getFullYear()}),[]);return r.a.createElement(v.a,{className:"layout layout--base"},r.a.createElement(v.a.Header,{className:"layout__header"},r.a.createElement(I,null)),r.a.createElement(v.a.Content,{className:"layout__content",style:O.content},t),r.a.createElement(v.a.Footer,{className:"layout__footer"},a," \xa9 ","Wezom React-Redux Test"))})),N=a(127),j=a.n(N),k={home:{path:"/blank-app",page:Object(u.compose)(Object(s.c)((function(e){return{}}),null))((function(){return r.a.createElement("div",{className:"page page--home"},r.a.createElement("img",{className:"react-logo",src:j.a,alt:"React Logo"}))})),name:"Home",link:function(){return this.path},exact:!0},contacts:{path:"/Contacts",page:Object(u.compose)(Object(s.c)((function(e){return{}}),null))((function(){return r.a.createElement("div",{className:"page page--home _flex-just-start"},r.a.createElement(Y,null))})),name:"Contacts",link:function(){return this.path},exact:!0}},S=(k.home.link(),r.a.memo((function(){return r.a.createElement(h.c,null,Object.keys(k).map((function(e){var t=k[e],a=t.page,n=Object(b.a)(t,["page"]);return r.a.createElement(h.a,Object.assign({key:n.path},n,{render:function(e){return r.a.createElement(_,null,r.a.createElement(a,e))}}))})))}))),w=a(128),C=a.n(w),x=r.a.memo((function(){return r.a.createElement(g.a,{to:k.home.link(),className:"logo",activeClassName:"is-active",exact:!0},r.a.createElement("img",{className:"logo__img",src:C.a,alt:"Wezom"}))})),A=(a(188),Object(u.compose)(Object(s.c)((function(e){return{}}),null))((function(){var e=Object(c.useMemo)((function(){return[{name:"Home",key:"home"},{name:"Contacts",key:"contacts"}]}),[]);return r.a.createElement("div",{className:"navbar"},r.a.createElement("ul",{className:"navbar__list"},e.map((function(e){return r.a.createElement("li",{key:e.key,className:"navbar__item"},r.a.createElement(g.a,{to:k[e.key].link(),className:"navbar__link"},e.name),r.a.createElement(g.a,{to:k[e.key].link(),className:"navbar__link"},e.contacts))}))))}))),I=Object(u.compose)(Object(s.c)((function(e){return{}}),null))((function(){return r.a.createElement("div",{className:"header"},r.a.createElement(E.a,{type:"flex",gutter:36,align:"middle"},r.a.createElement(d.a,null,r.a.createElement(x,null)),r.a.createElement(d.a,{className:"_flex-grow"},r.a.createElement(E.a,{type:"flex",gutter:16,align:"middle"},r.a.createElement(d.a,{className:"_flex-grow"},r.a.createElement(A,null)),r.a.createElement(d.a,null,r.a.createElement(p.a,{type:"link",htmlType:"button",icon:r.a.createElement(f.a,null),className:"red"},"Sign In"))))))})),L=(a(193),a(194),r.a.memo((function(){return r.a.createElement(S,null)}))),T=a(43),M=(a(195),a(288)),D=a(296),R=a(297),G=a(298),H=a(299),Y=Object(u.compose)(Object(s.c)((function(e){return{}}),null))((function(){var e,t=Object(c.useState)([]),a=Object(T.a)(t,2),n=a[0],l=a[1],o=Object(c.useState)([]),m=Object(T.a)(o,2),s=m[0],i=m[1],u=Object(c.useState)({min:0,max:10}),E=Object(T.a)(u,2),d=E[0],p=E[1],f=Object(c.useState)({persons:0,female:0,male:0,binary:0,most:0,mostGender:""}),g=Object(T.a)(f,2),b=g[0],h=g[1],v=Object(c.useState)("ascend"),y=Object(T.a)(v,2),O=y[0],_=y[1],N=Object(c.useState)(""),j=Object(T.a)(N,2),k=j[0],S=j[1],w=Object(c.useState)("Click sort by A-Z"),C=Object(T.a)(w,2),x=C[0],A=C[1],I=Object(c.useState)(""),L=Object(T.a)(I,2),Y=L[0],B=L[1],U=Object(c.useState)("contacts__none"),W=Object(T.a)(U,2),Z=W[0],z=W[1],F=function(){z("contacts__none"),B("contacts__shadow"),fetch("https://randomuser.me/api/?results=".concat(Math.floor(-69*Math.random())+100)).then((function(e){return e.json()})).then((function(e){return J(e.results)})).catch((function(e){z("contacts__block")}))},J=function(e){l(e),i(e),_("ascend"),A("Click sort by A-Z"),localStorage.getItem("view")?S(localStorage.getItem("view")):localStorage.getItem("view")||(localStorage.setItem("view","displayTable"),S("displayTable"));var t=0,a=0,n=0,c={};e.map((function(e){return c.num=Math.max(t+="female"===e.gender,a+="male"===e.gender,n+="non-binary"===e.gender)})),c.num===t?c.gender="femail":c.num===a?c.gender="male":c.gender="non-binary",h({persons:e.length,female:t,male:a,binary:n,most:c.num,mostGender:c.gender}),B("contacts__none")},P=function(e){var t=[].concat(n);return e.target.classList.contains("ascend")?(t.sort((function(e,t){return e.name.first>t.name.first?1:-1})),_("descend"),A("Click sort by Z-A"),q(),void l(t)):e.target.classList.contains("descend")?(t.sort((function(e,t){return e.name.first<t.name.first?1:-1})),_("default"),A("Click to cancel sort"),q(),void l(t)):e.target.classList.contains("default")?(A("Click sort by A-Z"),_("ascend"),q(),void l(s)):(e.target.classList.contains("gender")?t.sort((function(e,t){return e.gender>t.gender?1:-1})):e.target.classList.contains("nat")?t.sort((function(e,t){return e.nat>t.nat?1:-1})):e.target.classList.contains("username")&&t.sort((function(e,t){return e.login.username>t.login.username?1:-1})),q(),void l(t))},q=function(){e&&e.remove()};return Object(c.useEffect)((function(){F()}),[]),r.a.createElement("div",{className:"contacts"},r.a.createElement("h1",null,"Contacts"),r.a.createElement("div",{className:"contacts__header"},r.a.createElement(D.a,{onClick:F}),r.a.createElement("div",{className:"contacts__view"},r.a.createElement(R.a,{onClick:function(e){e.target.classList.contains("displayTable")||(localStorage.removeItem("view"),localStorage.setItem("view","displayTable"),S("displayTable"))},className:k}),r.a.createElement(G.a,{onClick:function(e){e.target.classList.contains("displayGrid")||(localStorage.removeItem("view"),localStorage.setItem("view","displayGrid"),S("displayGrid"))},className:k}))),r.a.createElement("div",{className:"contacts__filter"},r.a.createElement("h3",null,"Filter by:"),r.a.createElement("div",{onMouseOver:function(t){if(t.target.dataset.tooltip){var a=t.target.getBoundingClientRect();e=document.createElement("div"),document.body.append(e),e.innerHTML=t.target.dataset.tooltip,e.classList.add("contacts__tooltip"),e.style.left=a.left-(e.offsetWidth-t.target.offsetWidth)/2+"px",e.style.top=a.top-28+window.pageYOffset+"px"}},onMouseOut:q},r.a.createElement("p",{onClick:P,className:O,"data-tooltip":x},"name"),r.a.createElement("p",{onClick:P,className:"gender","data-tooltip":"Click to sort"},"genfer"),r.a.createElement("p",{onClick:P,className:"nat","data-tooltip":"Click to sort"},"nationality"),r.a.createElement("p",{onClick:P,className:"username","data-tooltip":"Click to sort"},"username"),r.a.createElement("p",{onClick:P,className:"default","data-tooltip":"Click to reset"},"reset"))),r.a.createElement("table",{className:k},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{rowSpan:"2"},"NAME"),r.a.createElement("th",{rowSpan:"2"},"BIRTHDAY"),r.a.createElement("th",{rowSpan:"2"},"EMAIL"),r.a.createElement("th",{rowSpan:"2"},"TELEPHONE"),r.a.createElement("th",{rowSpan:"1",colSpan:"2"},"ADDRESS"),r.a.createElement("th",{rowSpan:"2"},"GENDER"),r.a.createElement("th",{rowSpan:"2"},"NAT"),r.a.createElement("th",{rowSpan:"2"},"USERNAME")),r.a.createElement("tr",null,r.a.createElement("th",null,"country"),r.a.createElement("th",null,"street, city, state postcode"))),r.a.createElement("tbody",null,n&&n.length>0&&n.slice(d.min,d.max).map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.name.first," ",e.name.last),r.a.createElement("td",null,new Date(e.dob.date).toLocaleDateString("en-US")),r.a.createElement("td",null,r.a.createElement("a",{href:"mailto:"+e.email,target:"_blank",rel:"noopener noreferrer"},e.email)),r.a.createElement("td",null,r.a.createElement("a",{href:"tel:"+e.phone},e.phone)),r.a.createElement("td",null,e.location.country),r.a.createElement("td",null,e.location.street.number," ",e.location.street.name,", ",e.location.city,", ",e.location.state," ",e.location.postcode),r.a.createElement("td",null,e.gender),r.a.createElement("td",null,e.nat),r.a.createElement("td",null,e.login.username))})))),r.a.createElement("div",{className:k+" contacts__grid"},n&&n.length>0&&n.slice(d.min,d.max).map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("h5",null,"NAME"),r.a.createElement("p",null,e.name.first," ",e.name.last),r.a.createElement("h5",null,"BIRTHDAY"),r.a.createElement("p",null,new Date(e.dob.date).toLocaleDateString("en-US")),r.a.createElement("h5",null,"EMAIL"),r.a.createElement("p",null,r.a.createElement("a",{href:"mailto:"+e.email,target:"_blank",rel:"noopener noreferrer"},e.email)),r.a.createElement("h5",null,"TELEPHONE"),r.a.createElement("p",null,r.a.createElement("a",{href:"tel:"+e.phone},e.phone)),r.a.createElement("h5",null,"ADDRESS"),r.a.createElement("p",null,e.location.street.number," ",e.location.street.name,", ",e.location.city,", ",e.location.state," ",e.location.postcode),r.a.createElement("h5",null,"GENDER"),r.a.createElement("p",null,e.gender),r.a.createElement("h5",null,"NATIONALITY"),r.a.createElement("p",null,e.nat),r.a.createElement("h5",null,"USERNAME"),r.a.createElement("p",null,e.login.username))}))),r.a.createElement("p",null,"Contacts: ",b.persons),r.a.createElement("p",null,"Gender female: ",b.female),r.a.createElement("p",null,"Gender male: ",b.male),r.a.createElement("p",null,"Gender non-binary: ",b.binary),r.a.createElement("p",null,"Most contacts (",b.mostGender,"): ",b.most," "),r.a.createElement("p",null),r.a.createElement(M.a,{defaultCurrent:1,onChange:function(e,t){p(e<=1?{min:0,max:t}:{min:(e-1)*t,max:t*e})},total:n.length}),r.a.createElement("div",{className:Y}),r.a.createElement("article",{className:Z+" contacts__error"},r.a.createElement("p",null,r.a.createElement(H.a,null)," Error, try to reload! "),r.a.createElement(D.a,{onClick:F})))})),B=a(28),U=Object(B.a)({basename:"/"}),W=a(122),Z=(a(143),a(149)),z=a(150),F=a(289);var J=function(e,t){return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,n=arguments.length>1?arguments[1]:void 0,l=t[n.type];return l?l(a,n):a}}({},{"@@router/LOCATION_CHANGE":function(e){return e}}),P=function(e){return Object(u.combineReducers)(Object(z.a)({router:Object(i.b)(e)},n))},q=a(103),K=a.n(q),Q=a(151),V=K.a.mark(X);function X(){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Q.a)(Object.values(l).map((function(e){return e()})));case 2:case"end":return e.stop()}}),V)}var $=Object(Z.a)(),ee=Object(u.applyMiddleware)($,Object(W.a)(U)),te=ee,ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.__INITIAL_STATE__||{};return Object(u.createStore)(P(U),e,te)}();$.run(X);!function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};m.a.render(r.a.createElement(s.a,{store:ae},r.a.createElement(i.a,{history:U},r.a.createElement(e,null))),t,a)}(L,document.getElementById("root"))}},[[155,1,2]]]);