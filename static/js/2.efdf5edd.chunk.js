webpackJsonp([2],{187:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),c=n.n(a),s=n(5),l=n(1),u=n.n(l),p=n(4),f=n(190),d=n(193),b=n.n(d),m=n(194),g=n.n(m),A=n(189),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),y=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),h(t,[{key:"render",value:function(){this.props.translate;return c.a.createElement("div",null,c.a.createElement(A.a,{title:"Arnoldson.online - Welcome",description:"Portfolio site for H\xe5kan Kindstr\xf6m Arnoldson, full-stack developer"}),c.a.createElement("div",{style:{filter:"opacity(25%)",position:"fixed",top:"0",left:"0",bottom:"0",right:"0",width:"100%",height:"100%",zIndex:"-2"}},c.a.createElement(f.a,{srcPreload:g.a,srcLoaded:b.a,darken:0})),c.a.createElement("main",{className:"MainScreenWrapper"},"contact"))}}]),t}(a.Component);y.propTypes={translate:u.a.func};var v=function(e){return{translate:Object(p.d)(e.locale)}};t.default=Object(s.b)(v,null)(y)},189:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),c=n.n(a),s=n(5),l=n(1),u=n.n(l),p=n(4),f=n(57),d=n.n(f),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),m=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),b(t,[{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){var e=this.props,t=e.languages,n=void 0===t?[]:t,o=e.title,r=e.description,i=e.path,a=[];return n.forEach(function(e){var t=window.location.protocol+"//"+window.location.hostname;t+="/"!==i?i+"/?lang="+e.code:"/?lang="+e.code,a.push(c.a.createElement("link",{key:e.code,rel:"alternate",hrefLang:e.code,href:t}))}),c.a.createElement(d.a,null,c.a.createElement("title",null,o),c.a.createElement("meta",{name:"description",content:r}),a)}}]),t}(a.Component);m.propTypes={languages:u.a.array,title:u.a.string,description:u.a.string,path:u.a.string};var g=function(e){return{languages:Object(p.c)(e.locale),path:e.routing.location.pathname}};t.a=Object(s.b)(g,null)(m)},190:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),c=n.n(a),s=n(1),l=n.n(s),u=n(191),p=(n.n(u),function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()),f=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.ironImageHd=null,n}return i(t,e),p(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.srcLoaded,n=new Image;n.src=t,n.onload=function(){e.ironImageHd.setAttribute("style","background-image: url('"+t+"')"),e.ironImageHd.classList.add("iron-image-fade-in")}}},{key:"render",value:function(){var e=this,t=this.props,n=t.srcPreload,o=t.darken,r=void 0===o?0:o;return c.a.createElement("div",{className:"iron-image-container",style:{background:"linear-gradient(rgba(0, 0, 0, "+r+"),rgba(0, 0, 0, "+r+"))"}},c.a.createElement("div",{className:"iron-image-loaded",ref:function(t){return e.ironImageHd=t}}),c.a.createElement("div",{className:"iron-image-preload",style:{backgroundImage:"url('"+n+"')"}}))}}]),t}(a.Component);f.propTypes={srcPreload:l.a.string,srcLoaded:l.a.string,darken:l.a.number},t.a=f},191:function(e,t,n){var o=n(192);"string"===typeof o&&(o=[[e.i,o,""]]);var r={hmr:!1};r.transform=void 0;n(184)(o,r);o.locals&&(e.exports=o.locals)},192:function(e,t,n){t=e.exports=n(183)(!0),t.push([e.i,".iron-image-container{position:relative;min-width:100%;min-height:100%;overflow:hidden}.iron-image-preload{z-index:-2;-webkit-filter:blur(4px);filter:blur(4px)}.iron-image-loaded,.iron-image-preload{position:absolute;top:0;right:0;bottom:0;left:0;min-width:100%;min-height:100%;background-size:cover;background-repeat:no-repeat;background-position:50%}.iron-image-loaded{z-index:-1;opacity:0;-webkit-transition:opacity 3s ease;-o-transition:opacity 3s ease;transition:opacity 3s ease}.iron-image-fade-in{opacity:1}","",{version:3,sources:["F:/_Websites/Github/hkarn.github.io/react/src/styles/css/ironimage.css"],names:[],mappings:"AAAA,sBAAsB,kBAAkB,eAAe,gBAAgB,eAAe,CAAC,oBAAsC,WAAW,AAAiJ,yBAAyB,gBAAgB,CAAC,uCAAxN,kBAAkB,AAAW,MAAM,QAAQ,SAAS,OAAO,eAAe,gBAAgB,sBAAsB,4BAA4B,uBAAkC,CAAiV,AAAvS,mBAAqC,WAAW,AAAiJ,UAAU,mCAAmC,8BAA8B,0BAA0B,CAAC,oBAAoB,SAAS,CAAC",file:"ironimage.css",sourcesContent:[".iron-image-container{position:relative;min-width:100%;min-height:100%;overflow:hidden}.iron-image-preload{position:absolute;z-index:-2;top:0;right:0;bottom:0;left:0;min-width:100%;min-height:100%;background-size:cover;background-repeat:no-repeat;background-position:center center;-webkit-filter:blur(4px);filter:blur(4px)}.iron-image-loaded{position:absolute;z-index:-1;top:0;right:0;bottom:0;left:0;min-width:100%;min-height:100%;background-size:cover;background-repeat:no-repeat;background-position:center center;opacity:0;-webkit-transition:opacity 3s ease;-o-transition:opacity 3s ease;transition:opacity 3s ease}.iron-image-fade-in{opacity:1}\n"],sourceRoot:""}])},193:function(e,t,n){e.exports=n.p+"static/media/computer-1245714_1920.4cc33b04.jpg"},194:function(e,t,n){e.exports=n.p+"static/media/computer-1245714_small.6301b3da.jpg"}});
//# sourceMappingURL=2.efdf5edd.chunk.js.map