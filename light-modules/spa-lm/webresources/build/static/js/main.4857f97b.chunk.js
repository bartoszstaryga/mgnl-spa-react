(this.webpackJsonpspa=this.webpackJsonpspa||[]).push([[0],{20:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n.n(a),i=n(6),o=n(7),s=n(8),c=n(11),l=n(10),p=n(0),m=n(1),u=n.n(m),d=n(9),h=n.n(d),j=n(3),f={};function g(e){var t=e.key,n=e.value;if(!n)return console.error("Missing prop: "+t);f[t]=n}function v(e){var t=e.content,n=void 0===t?{}:t,a=e.config,r=e.templateDefinitions;g({key:"config",value:a}),j.EditorContextHelper.inEditor()&&g({key:"templateDefinitions",value:r});var i=function(e){var t=e["mgnl:template"];return f.config.componentMappings[t]||console.error("Missing component mapping for: "+t)}(n);return console.log(e),i?u.a.createElement(i,e):null}var x=n(2);var b={componentMappings:{"spa-lm:pages/Home":function(e){var t=e.title,n=e.main,a=e.header,r=e.metadata;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:t}),a&&Object(p.jsx)(x.EditableArea,{content:a,parentTemplateId:r["mgnl:template"]}),n&&Object(p.jsx)(x.EditableArea,{content:n,parentTemplateId:r["mgnl:template"]})]})},"spa-lm:pages/Basic":function(e){var t=e.title,n=e.main,a=e.metadata;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:t}),n&&Object(p.jsx)(x.EditableArea,{content:n,parentTemplateId:a["mgnl:template"]})]})},"spa-lm:components/Text":function(e){return Object(p.jsx)("div",{children:e.text})},"spa-lm:components/List":function(e){var t=e.list,n=e.metadata;return Object(p.jsx)("ul",{children:t&&Object(p.jsx)(x.EditableArea,{content:t,parentTemplateId:n["mgnl:template"]})})},"spa-lm:components/Item":function(e){return Object(p.jsx)("li",{children:e.item})}}},O=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){var t,n,a,i,o,s,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.location.pathname,e.next=3,fetch("/magnoliaAuthor/.rest/delivery/pages/spa-home"+t.replace(new RegExp("(.*spa-home|.html)","g"),""));case 3:return i=e.sent,e.next=6,i.json();case 6:if(o=e.sent,!j.EditorContextHelper.inEditor()){e.next=14;break}return e.next=10,fetch("/magnoliaAuthor/.rest/templateDefinition/v1/"+o["mgnl:template"]);case 10:return s=e.sent,e.next=13,s.json();case 13:n=e.sent;case 14:if("/magnoliaAuthor/spa-home.html"===t){e.next=21;break}return e.next=17,fetch("/magnoliaAuthor/.rest/delivery/pages/spa-home/header");case 17:return c=e.sent,e.next=20,c.json();case 20:a=e.sent;case 21:this.setState({page:o,templateDefinitions:n,header:a});case 22:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.page,n=e.templateDefinitions;e.header;return Object(p.jsx)("div",{children:t&&b&&Object(p.jsx)(v,{content:t,config:b,templateDefinitions:n})})}}]),n}(u.a.Component);h.a.render(Object(p.jsx)(u.a.StrictMode,{children:Object(p.jsx)(O,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.4857f97b.chunk.js.map