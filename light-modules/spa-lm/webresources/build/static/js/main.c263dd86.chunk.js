(this.webpackJsonpspa=this.webpackJsonpspa||[]).push([[0],{18:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n.n(a),c=n(5),i=n(6),s=n(7),o=n(10),l=n(9),p=n(0),m=n(1),u=n.n(m),d=n(8),j=n.n(d),h=n(2);var b={componentMappings:{"spa-lm:pages/Home":function(e){var t=e.title,n=e.main,a=e.header,r=e.metadata;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:t}),a&&Object(p.jsx)(h.EditableArea,{content:a,parentTemplateId:r["mgnl:template"]}),n&&Object(p.jsx)(h.EditableArea,{content:n,parentTemplateId:r["mgnl:template"]})]})},"spa-lm:pages/Basic":function(e){var t=e.title,n=e.main,a=e.metadata;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:t}),n&&Object(p.jsx)(h.EditableArea,{content:n,parentTemplateId:a["mgnl:template"]})]})},"spa-lm:components/Text":function(e){return Object(p.jsx)("div",{children:e.text})},"spa-lm:components/List":function(e){var t=e.list,n=e.metadata;return Object(p.jsx)("ul",{children:t&&Object(p.jsx)(h.EditableArea,{content:t,parentTemplateId:n["mgnl:template"]})})},"spa-lm:components/Item":function(e){return Object(p.jsx)("li",{children:e.item})}}},x=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=Object(c.a)(r.a.mark((function e(){var t,n,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/magnoliaAuthor/.rest/delivery/pages/spa-home"+window.location.pathname.replace(new RegExp("(.*spa-home|.html)","g"),""));case 2:return n=e.sent,e.next=5,n.json();case 5:if(a=e.sent,!h.EditorContextHelper.inEditor()){e.next=13;break}return e.next=9,fetch("/magnoliaAuthor/.rest/templateDefinition/v1/"+a["mgnl:template"]);case 9:return c=e.sent,e.next=12,c.json();case 12:t=e.sent;case 13:this.setState({page:a,templateDefinitions:t});case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.page,n=e.templateDefinitions;return Object(p.jsx)("div",{children:t&&b&&Object(p.jsx)(h.EditablePage,{content:t,config:b,templateDefinitions:n})})}}]),n}(u.a.Component);j.a.render(Object(p.jsx)(u.a.StrictMode,{children:Object(p.jsx)(x,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.c263dd86.chunk.js.map