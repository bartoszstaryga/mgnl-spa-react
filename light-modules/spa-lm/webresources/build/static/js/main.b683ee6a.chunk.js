(this.webpackJsonpspa=this.webpackJsonpspa||[]).push([[0],{18:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n.n(a),s=n(5),c=n(6),i=n(7),o=n(10),l=n(9),p=n(0),u=n(1),m=n.n(u),j=n(8),d=n.n(j),h=n(2);var b={componentMappings:{"spa-lm:pages/Home":function(e){var t=e.title,n=e.main,a=e.metadata;return console.log(n),Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:t}),n&&Object(p.jsx)(h.EditableArea,{content:n,parentTemplateId:a["mgnl:template"]})]})},"spa-lm:components/Text":function(e){return Object(p.jsx)("div",{children:e.text})},"spa-lm:components/List":function(e){var t=e.list,n=e.metadata;return Object(p.jsx)("ul",{children:t&&Object(p.jsx)(h.EditableArea,{content:t,parentTemplateId:n["mgnl:template"]})})},"spa-lm:components/Item":function(e){return Object(p.jsx)("li",{children:e.item})}}},f=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t,n,a,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/magnoliaAuthor/.rest/delivery/pages/spa-home");case 2:return n=e.sent,e.next=5,n.json();case 5:if(a=e.sent,!h.EditorContextHelper.inEditor()){e.next=13;break}return e.next=9,fetch("/magnoliaAuthor/.rest/templateDefinition/v1/"+a["mgnl:template"]);case 9:return s=e.sent,e.next=12,s.json();case 12:t=e.sent;case 13:this.setState({page:a,templateDefinitions:t});case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.page,n=e.templateDefinitions;return Object(p.jsx)("div",{children:t&&b&&Object(p.jsx)(h.EditablePage,{content:t,config:b,templateDefinitions:n})})}}]),n}(m.a.Component);d.a.render(Object(p.jsx)(m.a.StrictMode,{children:Object(p.jsx)(f,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.b683ee6a.chunk.js.map