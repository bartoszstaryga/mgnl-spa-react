(this.webpackJsonpspa=this.webpackJsonpspa||[]).push([[0],{18:function(t,e,n){"use strict";n.r(e);var a=n(4),r=n.n(a),s=n(5),c=n(6),i=n(7),o=n(10),p=n(9),l=n(0),u=n(1),m=n.n(u),j=n(8),d=n.n(j),h=n(2);var b={componentMappings:{"spa:pages/Home":function(t){var e=t.title,n=t.main,a=t.metadata;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:e}),n&&Object(l.jsx)(h.EditableArea,{content:n,parentTemplateId:a["mgnl:template"]})]})},"spa:components/Text":function(t){return Object(l.jsx)("div",{children:t.text})},"spa:components/List":function(t){var e=t.list,n=t.metadata;return Object(l.jsx)("ul",{children:e&&Object(l.jsx)(h.EditableArea,{content:e,parentTemplateId:n["mgnl:template"]})})},"spa:components/Item":function(t){return Object(l.jsx)("li",{children:t.item})}}},f=function(t){Object(o.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=Object(s.a)(r.a.mark((function t(){var e,n,a,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/magnoliaAuthor/.rest/pages/spa-home");case 2:return n=t.sent,t.next=5,n.json();case 5:if(a=t.sent,!h.EditorContextHelper.inEditor()){t.next=13;break}return t.next=9,fetch("/magnoliaAuthor/.rest/templateDefinition/v1/"+a["mgnl:template"]);case 9:return s=t.sent,t.next=12,s.json();case 12:e=t.sent;case 13:this.setState({page:a,templateDefinitions:e});case 14:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.page,n=t.templateDefinitions;return Object(l.jsx)("div",{children:e&&b&&Object(l.jsx)(h.EditablePage,{content:e,config:b,templateDefinitions:n})})}}]),n}(m.a.Component);d.a.render(Object(l.jsx)(m.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.76585ad7.chunk.js.map