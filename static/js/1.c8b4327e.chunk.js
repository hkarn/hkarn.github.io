webpackJsonp([1],{185:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),c=n.n(a),s=n(5),l=n(1),u=n.n(l),p=n(4),f=(n(15),n(190)),m=n(191),d=n(194),b=n.n(d),g=n(195),A=n.n(g),h=n(203),y=n.n(h),v=n(26),w=n(6),k=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),O=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),k(t,[{key:"componentDidMount",value:function(){var e=this.props.setAnimation,t=setTimeout(function(){e("main",!1,2e3),clearTimeout(t)},2e3)}},{key:"render",value:function(){var e=this.props,t=e.translate,n=e.showAnimation,o="";return n&&(o="MainScreenWrapperAnimated"),c.a.createElement("div",null,c.a.createElement(f.a,{title:"Arnoldson.online - Welcome",description:"Portfolio site for H\xe5kan Kindstr\xf6m Arnoldson, full-stack developer"}),c.a.createElement("div",{style:{position:"fixed",top:"0",left:"0",bottom:"0",right:"0",width:"100%",height:"100%",zIndex:"-2"}},c.a.createElement(m.a,{srcPreload:A.a,srcLoaded:b.a,darken:.6})),c.a.createElement("main",{className:"ScreenWrapper MainScreenWrapper "+o},c.a.createElement("h3",null,t("welcome.greeting")),c.a.createElement("h1",{style:{margin:"20px  10px",fontSize:"1.6em"}},t("welcome.im")," H\xe5kan Arnoldson"),c.a.createElement("h2",{style:{margin:"20px 10px"}},t("welcome.title")),c.a.createElement("img",{src:y.a,alt:"H\xe5kan",style:{maxWidth:"35%",maxHeight:"20%",height:"auto",width:"auto",borderRadius:"20%",margin:"10px "}})))}}]),t}(a.Component);O.propTypes={translate:u.a.func,showAnimation:u.a.bool};var _=function(e){return{showAnimation:e.animations.main,translate:Object(p.d)(e.locale)}},B=function(e){return Object(w.b)({setAnimation:v.d},e)};t.default=Object(s.b)(_,B)(O)},190:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),c=n.n(a),s=n(5),l=n(1),u=n.n(l),p=n(4),f=n(58),m=n.n(f),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),b=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),d(t,[{key:"componentWillReceiveProps",value:function(e){}},{key:"render",value:function(){var e=this.props,t=e.languages,n=void 0===t?[]:t,o=e.title,r=e.description,i=e.path,a=[];return n.forEach(function(e){var t=window.location.protocol+"//"+window.location.hostname;t+="/"!==i?i+"/?lang="+e.code:"/?lang="+e.code,a.push(c.a.createElement("link",{key:e.code,rel:"alternate",hrefLang:e.code,href:t}))}),c.a.createElement(m.a,null,c.a.createElement("title",null,o),c.a.createElement("meta",{name:"description",content:r}),a)}}]),t}(a.Component);b.propTypes={languages:u.a.array,title:u.a.string,description:u.a.string,path:u.a.string};var g=function(e){return{languages:Object(p.c)(e.locale),path:e.routing.location.pathname}};t.a=Object(s.b)(g,null)(b)},191:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),c=n.n(a),s=n(1),l=n.n(s),u=n(192),p=(n.n(u),function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()),f=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.ironImageHd=null,n}return i(t,e),p(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.srcLoaded,n=new Image;n.src=t,n.onload=function(){e.ironImageHd.setAttribute("style","background-image: url('"+t+"')"),e.ironImageHd.classList.add("iron-image-fade-in")}}},{key:"render",value:function(){var e=this,t=this.props,n=t.srcPreload,o=t.darken,r=void 0===o?0:o;return c.a.createElement("div",{className:"iron-image-container",style:{background:"linear-gradient(rgba(0, 0, 0, "+r+"),rgba(0, 0, 0, "+r+"))"}},c.a.createElement("div",{className:"iron-image-loaded",ref:function(t){return e.ironImageHd=t}}),c.a.createElement("div",{className:"iron-image-preload",style:{backgroundImage:"url('"+n+"')"}}))}}]),t}(a.Component);f.propTypes={srcPreload:l.a.string,srcLoaded:l.a.string,darken:l.a.number},t.a=f},192:function(e,t,n){var o=n(193);"string"===typeof o&&(o=[[e.i,o,""]]);var r={hmr:!1};r.transform=void 0;n(184)(o,r);o.locals&&(e.exports=o.locals)},193:function(e,t,n){t=e.exports=n(183)(!0),t.push([e.i,".iron-image-container{position:relative;min-width:100%;min-height:100%;overflow:hidden}.iron-image-preload{z-index:-2;-webkit-filter:blur(4px);filter:blur(4px)}.iron-image-loaded,.iron-image-preload{position:absolute;top:0;right:0;bottom:0;left:0;min-width:100%;min-height:100%;background-size:cover;background-repeat:no-repeat;background-position:50%}.iron-image-loaded{z-index:-1;opacity:0;-webkit-transition:opacity 3s ease;-o-transition:opacity 3s ease;transition:opacity 3s ease}.iron-image-fade-in{opacity:1}","",{version:3,sources:["F:/_Websites/Github/hkarn.github.io/react/src/styles/css/ironimage.css"],names:[],mappings:"AAAA,sBAAsB,kBAAkB,eAAe,gBAAgB,eAAe,CAAC,oBAAsC,WAAW,AAAiJ,yBAAyB,gBAAgB,CAAC,uCAAxN,kBAAkB,AAAW,MAAM,QAAQ,SAAS,OAAO,eAAe,gBAAgB,sBAAsB,4BAA4B,uBAAkC,CAAiV,AAAvS,mBAAqC,WAAW,AAAiJ,UAAU,mCAAmC,8BAA8B,0BAA0B,CAAC,oBAAoB,SAAS,CAAC",file:"ironimage.css",sourcesContent:[".iron-image-container{position:relative;min-width:100%;min-height:100%;overflow:hidden}.iron-image-preload{position:absolute;z-index:-2;top:0;right:0;bottom:0;left:0;min-width:100%;min-height:100%;background-size:cover;background-repeat:no-repeat;background-position:center center;-webkit-filter:blur(4px);filter:blur(4px)}.iron-image-loaded{position:absolute;z-index:-1;top:0;right:0;bottom:0;left:0;min-width:100%;min-height:100%;background-size:cover;background-repeat:no-repeat;background-position:center center;opacity:0;-webkit-transition:opacity 3s ease;-o-transition:opacity 3s ease;transition:opacity 3s ease}.iron-image-fade-in{opacity:1}\n"],sourceRoot:""}])},194:function(e,t,n){e.exports=n.p+"static/media/computer-1245714_1920.4cc33b04.jpg"},195:function(e,t,n){e.exports=n.p+"static/media/computer-1245714_small.6301b3da.jpg"},203:function(e,t,n){e.exports=n.p+"static/media/me.14580b5e.png"}});
//# sourceMappingURL=1.c8b4327e.chunk.js.map