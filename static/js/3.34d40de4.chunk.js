webpackJsonp([3],{194:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),c=n.n(i),l=n(5),u=n(1),s=n.n(u),p=n(4),f=n(198),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),b(t,[{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.props.translate;return c.a.createElement("div",null,c.a.createElement(f.a,{title:"Arnoldson.online - "+e("about.pageTitle"),description:e("page.desc")}),c.a.createElement("main",{className:"ScreenWrapper AboutScreenWrapper"},c.a.createElement("h2",{className:"heading"},e("about.heading")," H\xe5kan"),c.a.createElement("h2",{className:"heading"},"Full-stack developer. This website is still a work in progress..."),c.a.createElement("h2",{className:"heading"},"Meanwhile visit my Showcase and LinkedIn, or contact me for more information and CV.")))}}]),t}(i.Component);h.propTypes={translate:s.a.func};var y=function(e){return{translate:Object(p.d)(e.locale)}};t.default=Object(l.b)(y,null)(h)},198:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),c=n.n(i),l=n(5),u=n(1),s=n.n(u),p=n(4),f=n(58),b=n.n(f),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),y=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),h(t,[{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){var e=this.props,t=e.languages,n=void 0===t?[]:t,r=e.title,o=e.description,a=e.path,i=[];return n.forEach(function(e){var t=window.location.protocol+"//"+window.location.hostname;t+="/"!==a?a+"/?lang="+e.code:"/?lang="+e.code,i.push(c.a.createElement("link",{key:e.code,rel:"alternate",hrefLang:e.code,href:t}))}),c.a.createElement(b.a,null,c.a.createElement("title",null,r),c.a.createElement("meta",{name:"description",content:o}),i)}}]),t}(i.Component);y.propTypes={languages:s.a.array,title:s.a.string,description:s.a.string,path:s.a.string};var m=function(e){return{languages:Object(p.c)(e.locale),path:e.routing.location.pathname}};t.a=Object(l.b)(m,null)(y)}});
//# sourceMappingURL=3.34d40de4.chunk.js.map