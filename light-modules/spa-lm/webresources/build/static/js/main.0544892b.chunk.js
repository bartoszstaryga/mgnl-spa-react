(this.webpackJsonpspa=this.webpackJsonpspa||[]).push([[0],{20:function(e,t,n){"use strict";n.r(t);var a=n(10),r=n.n(a),o=n(11),i=n(4),c=n(5),s=n(7),l=n(6),p=n(0),m=n(1),u=n.n(m),f=n(9),h=n.n(f),d=n(2),j={},g=d.EditorContextHelper.inEditor();function v(e){var t=e.key,n=e.value;if(!n)return console.error("Missing prop: "+t);j[t]=n}var b=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).myRef=u.a.createRef(),a}return Object(c.a)(n,[{key:"componentDidUpdate",value:function(){d.EditorContextHelper.refresh()}},{key:"componentDidMount",value:function(){console.log(this),function(e,t,n){if(console.log(g),console.log(e),g&&e){var a=d.TemplateAnnotations.getPageCommentString(t,j.templateDefinition);console.log(a),a&&(e.parentNode.insertBefore(document.createComment(a),e),e.parentNode.insertBefore(document.createComment(n),e.nextSibling))}}(this.myRef,this.props.content,"/cms:page")}},{key:"render",value:function(){var e=this.props,t=e.content,n=void 0===t?{}:t,a=e.config,r=e.templateDefinitions;v({key:"config",value:a}),g&&v({key:"templateDefinitions",value:r});var o=function(e){var t=e["mgnl:template"];return j.config.componentMappings[t]||console.error("Missing component mapping for: "+t)}(n);return n.ref=this.myRef,o?u.a.createElement(o,n):null}}]),n}(u.a.PureComponent),x=n(3);var O={componentMappings:{"spa-lm:pages/Home":function(e){var t=e.title;return e.main,e.header,e.metadata,Object(p.jsx)("div",{ref:this.myRef,children:Object(p.jsx)("h1",{children:t})})},"spa-lm:pages/Basic":function(e){var t=e.title,n=e.main,a=e.metadata;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:t}),n&&Object(p.jsx)(x.EditableArea,{content:n,parentTemplateId:a["mgnl:template"]})]})},"spa-lm:components/Text":function(e){return Object(p.jsx)("div",{children:e.text})},"spa-lm:components/List":function(e){var t=e.list,n=e.metadata;return Object(p.jsx)("ul",{children:t&&Object(p.jsx)(x.EditableArea,{content:t,parentTemplateId:n["mgnl:template"]})})},"spa-lm:components/Item":function(e){return Object(p.jsx)("li",{children:e.item})}}},y=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=Object(o.a)(r.a.mark((function e(){var t,n,a,o,i,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.location.pathname,e.next=3,fetch("/magnoliaAuthor/.rest/delivery/pages/spa-home"+t.replace(new RegExp("(.*spa-home|.html)","g"),""));case 3:return o=e.sent,e.next=6,o.json();case 6:if(i=e.sent,!d.EditorContextHelper.inEditor()){e.next=14;break}return e.next=10,fetch("/magnoliaAuthor/.rest/templateDefinition/v1/"+i["mgnl:template"]);case 10:return c=e.sent,e.next=13,c.json();case 13:n=e.sent;case 14:if("/magnoliaAuthor/spa-home.html"===t){e.next=21;break}return e.next=17,fetch("/magnoliaAuthor/.rest/delivery/pages/spa-home/header");case 17:return s=e.sent,e.next=20,s.json();case 20:a=e.sent;case 21:this.setState({page:i,templateDefinitions:n,header:a});case 22:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.page,n=e.templateDefinitions;e.header;return Object(p.jsx)("div",{children:t&&O&&Object(p.jsx)(b,{content:t,config:O,templateDefinitions:n})})}}]),n}(u.a.Component);h.a.render(Object(p.jsx)(u.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.0544892b.chunk.js.map