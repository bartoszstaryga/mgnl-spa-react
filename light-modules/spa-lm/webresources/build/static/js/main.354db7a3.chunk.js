(this.webpackJsonpspa=this.webpackJsonpspa||[]).push([[0],{21:function(e,t,n){"use strict";n.r(t);var a=n(10),r=n.n(a),o=n(11),i=n(3),c=n(4),s=n(7),p=n(6),l=n(0),u=n(1),m=n.n(u),d=n(5),f=n.n(d),h=n(2),j=(n(12),{}),v=h.EditorContextHelper.inEditor();function g(e,t,n){e&&(e.parentNode.insertBefore(document.createComment(t),e),e.parentNode.insertBefore(document.createComment(n),e.nextSibling))}function b(e){var t=e.key,n=e.value;if(!n)return console.error("Missing prop: "+t);j[t]=n}function x(e){var t=e["mgnl:template"],n=j.config.componentMappings[t];return n||console.error("Missing component mapping for: "+t)}var O=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){if(v){var e=this.props.content,t=j.templateDefinitions[e["mgnl:template"]],n=h.TemplateAnnotations.getPageCommentString(e,t);g(f.a.findDOMNode(this),n,"/cms:page")}}},{key:"render",value:function(){var e=this.props,t=e.content,n=void 0===t?{}:t,a=e.config,r=e.templateDefinitions;b({key:"config",value:a}),v&&b({key:"templateDefinitions",value:r});var o=x(n);return o?m.a.createElement(o,n):null}}]),n}(m.a.PureComponent),y=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){if(v){var e=this.props,t=e.content,n=e.parentTemplateId,a=j.templateDefinitions[n],r=h.TemplateAnnotations.getAreaCommentString(t,a);g(f.a.findDOMNode(this),r,"/cms:area")}}},{key:"render",value:function(){var e=this.props;return console.log(e),null}}]),n}(m.a.PureComponent);m.a.PureComponent;var k=function(e){var t=e.title,n=e.main,a=e.header;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:t}),a&&Object(l.jsx)(y,{content:a}),n&&Object(l.jsx)(y,{content:n})]})},D=n(8);var C={componentMappings:{"spa-lm:pages/Home":k,"spa-lm:pages/Basic":function(e){var t=e.title,n=e.main,a=e.metadata;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:t}),n&&Object(l.jsx)(D.EditableArea,{content:n,parentTemplateId:a["mgnl:template"]})]})},"spa-lm:components/Text":function(e){return Object(l.jsx)("div",{children:e.text})},"spa-lm:components/List":function(e){var t=e.list,n=e.metadata;return Object(l.jsx)("ul",{children:t&&Object(l.jsx)(D.EditableArea,{content:t,parentTemplateId:n["mgnl:template"]})})},"spa-lm:components/Item":function(e){return Object(l.jsx)("li",{children:e.item})}}},A=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(c.a)(n,[{key:"componentDidUpdate",value:function(){h.EditorContextHelper.refresh()}},{key:"componentDidMount",value:function(){var e=Object(o.a)(r.a.mark((function e(){var t,n,a,o,i,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.location.pathname,e.next=3,fetch("/magnoliaAuthor/.rest/delivery/pages/spa-home"+t.replace(new RegExp("(.*spa-home|.html)","g"),""));case 3:return o=e.sent,e.next=6,o.json();case 6:if(i=e.sent,!h.EditorContextHelper.inEditor()){e.next=14;break}return e.next=10,fetch("/magnoliaAuthor/.rest/templateDefinition/v1/"+i["mgnl:template"]);case 10:return c=e.sent,e.next=13,c.json();case 13:n=e.sent;case 14:if("/magnoliaAuthor/spa-home.html"===t){e.next=21;break}return e.next=17,fetch("/magnoliaAuthor/.rest/delivery/pages/spa-home/header");case 17:return s=e.sent,e.next=20,s.json();case 20:a=e.sent;case 21:this.setState({page:i,templateDefinitions:n,header:a});case 22:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.page,n=e.templateDefinitions;e.header;return Object(l.jsx)("div",{children:t&&C&&Object(l.jsx)(O,{content:t,config:C,templateDefinitions:n})})}}]),n}(m.a.PureComponent);f.a.render(Object(l.jsx)(m.a.StrictMode,{children:Object(l.jsx)(A,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.354db7a3.chunk.js.map