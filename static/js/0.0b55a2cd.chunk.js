webpackJsonp([0],{172:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),u=n.n(a),c=n(5),s=n(1),l=n.n(s),f=n(4),p=n(182),T=n.n(p),d=(n(15),n(176)),A=n(179),E=n.n(A),y=n(180),h=n.n(y),m=n(190),b=n.n(m),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),S=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),g(t,[{key:"render",value:function(){var e=this.props,t=e.translate,n=e.currentLanguage;return u.a.createElement("div",null,u.a.createElement(T.a,{htmlAttributes:{lang:n}}),u.a.createElement("div",{style:{position:"fixed",top:"0",left:"0",bottom:"0",right:"0",width:"100%",height:"100%",zIndex:"-2"}},u.a.createElement(d.a,{srcPreload:h.a,srcLoaded:E.a,darken:.6})),u.a.createElement("main",{className:"MainScreenWrapper"},u.a.createElement("h3",null,t("welcome.greeting")),u.a.createElement("h1",{style:{margin:"20px  10px",fontSize:"1.6em"}},t("welcome.im")," H\xe5kan Arnoldson"),u.a.createElement("h2",{style:{margin:"20px 10px"}},t("welcome.title")),u.a.createElement("img",{src:b.a,alt:"H\xe5kan",style:{maxWidth:"35%",maxHeight:"20%",height:"auto",width:"auto",borderRadius:"20%",margin:"10px "}})))}}]),t}(a.Component);S.propTypes={translate:l.a.func,currentLanguage:l.a.string};var _=function(e){var t={languages:Object(f.c)(e.locale),translate:Object(f.d)(e.locale)};try{t.currentLanguage=Object(f.b)(e.locale).code}catch(e){t.currentLanguage="en"}return t};t.default=Object(c.b)(_,null)(S)},176:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),u=n.n(a),c=n(1),s=n.n(c),l=n(177),f=(n.n(l),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),p=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.ironImageHd=null,n}return i(t,e),f(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.srcLoaded,n=new Image;n.src=t,n.onload=function(){e.ironImageHd.setAttribute("style","background-image: url('"+t+"')"),e.ironImageHd.classList.add("iron-image-fade-in")}}},{key:"render",value:function(){var e=this,t=this.props,n=t.srcPreload,r=t.darken,o=void 0===r?0:r;return u.a.createElement("div",{className:"iron-image-container",style:{background:"linear-gradient(rgba(0, 0, 0, "+o+"),rgba(0, 0, 0, "+o+"))"}},u.a.createElement("div",{className:"iron-image-loaded",ref:function(t){return e.ironImageHd=t}}),u.a.createElement("div",{className:"iron-image-preload",style:{backgroundImage:"url('"+n+"')"}}))}}]),t}(a.Component);p.propTypes={srcPreload:s.a.string,srcLoaded:s.a.string,darken:s.a.number},t.a=p},177:function(e,t,n){var r=n(178);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(171)(r,o);r.locals&&(e.exports=r.locals)},178:function(e,t,n){t=e.exports=n(170)(!0),t.push([e.i,".iron-image-container{position:relative;min-width:100%;min-height:100%;overflow:hidden}.iron-image-preload{z-index:-2;-webkit-filter:blur(4px);filter:blur(4px)}.iron-image-loaded,.iron-image-preload{position:absolute;top:0;right:0;bottom:0;left:0;min-width:100%;min-height:100%;background-size:cover;background-repeat:no-repeat;background-position:50%}.iron-image-loaded{z-index:-1;opacity:0;-webkit-transition:opacity 3s ease;-o-transition:opacity 3s ease;transition:opacity 3s ease}.iron-image-fade-in{opacity:1}","",{version:3,sources:["F:/_Websites/Github/hkarn.github.io/react/src/styles/css/ironimage.css"],names:[],mappings:"AAAA,sBAAsB,kBAAkB,eAAe,gBAAgB,eAAe,CAAC,oBAAsC,WAAW,AAAiJ,yBAAyB,gBAAgB,CAAC,uCAAxN,kBAAkB,AAAW,MAAM,QAAQ,SAAS,OAAO,eAAe,gBAAgB,sBAAsB,4BAA4B,uBAAkC,CAAiV,AAAvS,mBAAqC,WAAW,AAAiJ,UAAU,mCAAmC,8BAA8B,0BAA0B,CAAC,oBAAoB,SAAS,CAAC",file:"ironimage.css",sourcesContent:[".iron-image-container{position:relative;min-width:100%;min-height:100%;overflow:hidden}.iron-image-preload{position:absolute;z-index:-2;top:0;right:0;bottom:0;left:0;min-width:100%;min-height:100%;background-size:cover;background-repeat:no-repeat;background-position:center center;-webkit-filter:blur(4px);filter:blur(4px)}.iron-image-loaded{position:absolute;z-index:-1;top:0;right:0;bottom:0;left:0;min-width:100%;min-height:100%;background-size:cover;background-repeat:no-repeat;background-position:center center;opacity:0;-webkit-transition:opacity 3s ease;-o-transition:opacity 3s ease;transition:opacity 3s ease}.iron-image-fade-in{opacity:1}\n"],sourceRoot:""}])},179:function(e,t,n){e.exports=n.p+"static/media/computer-1245714_1920.4cc33b04.jpg"},180:function(e,t,n){e.exports=n.p+"static/media/computer-1245714_small.6301b3da.jpg"},181:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},182:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function u(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),f=r(l),p=n(1),T=r(p),d=n(183),A=r(d),E=n(186),y=r(E),h=n(189),m=n(181),b=function(){return null},g=(0,A.default)(h.reducePropsToState,h.handleClientStateChange,h.mapStateOnServer)(b),S=function(e){var t,n;return n=t=function(t){function n(){return i(this,n),a(this,t.apply(this,arguments))}return u(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,y.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case m.TAG_NAMES.SCRIPT:case m.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case m.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return c({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[c({},o,this.mapNestedChildrenToProps(n,i))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case m.TAG_NAMES.TITLE:return c({},o,(t={},t[r.type]=a,t.titleAttributes=c({},i),t));case m.TAG_NAMES.BODY:return c({},o,{bodyAttributes:c({},i)});case m.TAG_NAMES.HTML:return c({},o,{htmlAttributes:c({},i)})}return c({},o,(n={},n[r.type]=c({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=c({},t);return Object.keys(e).forEach(function(t){var r;n=c({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.default.Children.forEach(e,function(e){if(e&&e.props){var i=e.props,a=i.children,u=o(i,["children"]),c=(0,h.convertReactPropstoHtmlAttributes)(u);switch(n.warnOnInvalidChildren(e,a),e.type){case m.TAG_NAMES.LINK:case m.TAG_NAMES.META:case m.TAG_NAMES.NOSCRIPT:case m.TAG_NAMES.SCRIPT:case m.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:a})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),i=c({},r);return n&&(i=this.mapChildrenToProps(n,i)),f.default.createElement(e,i)},s(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(f.default.Component),t.propTypes={base:T.default.object,bodyAttributes:T.default.object,children:T.default.oneOfType([T.default.arrayOf(T.default.node),T.default.node]),defaultTitle:T.default.string,defer:T.default.bool,encodeSpecialCharacters:T.default.bool,htmlAttributes:T.default.object,link:T.default.arrayOf(T.default.object),meta:T.default.arrayOf(T.default.object),noscript:T.default.arrayOf(T.default.object),onChangeClientState:T.default.func,script:T.default.arrayOf(T.default.object),style:T.default.arrayOf(T.default.object),title:T.default.string,titleAttributes:T.default.object,titleTemplate:T.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,h.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n}(g);S.renderStatic=S.rewind,t.Helmet=S,t.default=S},183:function(e,t,n){"use strict";function r(e){return e&&"object"===typeof e&&"default"in e?e.default:e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!==typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!==typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!==typeof n&&"function"!==typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(u){function p(){d=e(T.map(function(e){return e.props})),A.canUseDOM?t(d):n&&(d=n(d))}if("function"!==typeof u)throw new Error("Expected WrappedComponent to be a React component.");var T=[],d=void 0,A=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.peek=function(){return d},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=d;return d=void 0,T=[],e},t.prototype.shouldComponentUpdate=function(e){return!f(e,this.props)},t.prototype.componentWillMount=function(){T.push(this),p()},t.prototype.componentDidUpdate=function(){p()},t.prototype.componentWillUnmount=function(){var e=T.indexOf(this);T.splice(e,1),p()},t.prototype.render=function(){return s.createElement(u,this.props)},t}(c.Component);return A.displayName="SideEffect("+r(u)+")",A.canUseDOM=l.canUseDOM,A}}var c=n(0),s=r(c),l=r(n(184)),f=r(n(185));e.exports=u},184:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"===typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};void 0!==(r=function(){return i}.call(t,n,t,e))&&(e.exports=r)}()},185:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),c=0;c<i.length;c++){var s=i[c];if(!u(s))return!1;var l=e[s],f=t[s];if(!1===(o=n?n.call(r,l,f,s):void 0)||void 0===o&&l!==f)return!1}return!0}},186:function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!==typeof e||"number"!==typeof e.length)&&("function"===typeof e.copy&&"function"===typeof e.slice&&!(e.length>0&&"number"!==typeof e[0]))}function i(e,t,n){var i,l;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(c(e))return!!c(t)&&(e=a.call(e),t=a.call(t),s(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}try{var f=u(e),p=u(t)}catch(e){return!1}if(f.length!=p.length)return!1;for(f.sort(),p.sort(),i=f.length-1;i>=0;i--)if(f[i]!=p[i])return!1;for(i=f.length-1;i>=0;i--)if(l=f[i],!s(e[l],t[l],n))return!1;return typeof e===typeof t}var a=Array.prototype.slice,u=n(187),c=n(188),s=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:i(e,t,n))}},187:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"===typeof Object.keys?Object.keys:n,t.shim=n},188:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},189:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(0),u=r(a),c=n(14),s=r(c),l=n(181),f=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},p=function(e){var t=y(e,l.TAG_NAMES.TITLE),n=y(e,l.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=y(e,l.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},T=function(e){return y(e,l.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},d=function(e,t){return t.filter(function(t){return"undefined"!==typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return i({},e,t)},{})},A=function(e,t){return t.filter(function(e){return"undefined"!==typeof e[l.TAG_NAMES.BASE]}).map(function(e){return e[l.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o],a=i.toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t},[])},E=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!==typeof t[e]&&_("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],c=u.toLowerCase();-1===t.indexOf(c)||n===l.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||c===l.TAG_PROPERTIES.REL&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(u)||u!==l.TAG_PROPERTIES.INNER_HTML&&u!==l.TAG_PROPERTIES.CSS_TEXT&&u!==l.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],c=(0,s.default)({},r[u],o[u]);r[u]=c}return e},[]).reverse()},y=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},h=function(e){return{baseTag:A([l.TAG_PROPERTIES.HREF],e),bodyAttributes:d(l.ATTRIBUTE_NAMES.BODY,e),defer:y(e,l.HELMET_PROPS.DEFER),encode:y(e,l.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:d(l.ATTRIBUTE_NAMES.HTML,e),linkTags:E(l.TAG_NAMES.LINK,[l.TAG_PROPERTIES.REL,l.TAG_PROPERTIES.HREF],e),metaTags:E(l.TAG_NAMES.META,[l.TAG_PROPERTIES.NAME,l.TAG_PROPERTIES.CHARSET,l.TAG_PROPERTIES.HTTPEQUIV,l.TAG_PROPERTIES.PROPERTY,l.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(l.TAG_NAMES.NOSCRIPT,[l.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:T(e),scriptTags:E(l.TAG_NAMES.SCRIPT,[l.TAG_PROPERTIES.SRC,l.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(l.TAG_NAMES.STYLE,[l.TAG_PROPERTIES.CSS_TEXT],e),title:p(e),titleAttributes:d(l.ATTRIBUTE_NAMES.TITLE,e)}},m=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){m(t)},0)}}(),b=function(e){return clearTimeout(e)},g="undefined"!==typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||m:e.requestAnimationFrame||m,S="undefined"!==typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||b:e.cancelAnimationFrame||b,_=function(e){return console&&"function"===typeof console.warn&&console.warn(e)},v=null,O=function(e){v&&S(v),e.defer?v=g(function(){P(e,function(){v=null})}):(P(e),v=null)},P=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,f=e.styleTags,p=e.title,T=e.titleAttributes;C(l.TAG_NAMES.BODY,r),C(l.TAG_NAMES.HTML,o),w(p,T);var d={baseTag:M(l.TAG_NAMES.BASE,n),linkTags:M(l.TAG_NAMES.LINK,i),metaTags:M(l.TAG_NAMES.META,a),noscriptTags:M(l.TAG_NAMES.NOSCRIPT,u),scriptTags:M(l.TAG_NAMES.SCRIPT,s),styleTags:M(l.TAG_NAMES.STYLE,f)},A={},E={};Object.keys(d).forEach(function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(A[e]=n),r.length&&(E[e]=d[e].oldTags)}),t&&t(),c(e,A,E)},R=function(e){return Array.isArray(e)?e.join(""):e},w=function(e,t){"undefined"!==typeof e&&document.title!==e&&(document.title=R(e)),C(l.TAG_NAMES.TITLE,t)},C=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(l.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),u=0;u<a.length;u++){var c=a[u],s=t[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===o.indexOf(c)&&o.push(c);var f=i.indexOf(c);-1!==f&&i.splice(f,1)}for(var p=i.length-1;p>=0;p--)n.removeAttribute(i[p]);o.length===i.length?n.removeAttribute(l.HELMET_ATTRIBUTE):n.getAttribute(l.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(l.HELMET_ATTRIBUTE,a.join(","))}},M=function(e,t){var n=document.head||document.querySelector(l.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+l.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===l.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===l.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u="undefined"===typeof t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(l.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return a=t,n.isEqualNode(e)})?o.splice(a,1):i.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),i.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:i}},I=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!==typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},N=function(e,t,n,r){var o=I(n),i=R(t);return o?"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+o+">"+f(i,r)+"</"+e+">":"<"+e+" "+l.HELMET_ATTRIBUTE+'="true">'+f(i,r)+"</"+e+">"},L=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===l.TAG_PROPERTIES.INNER_HTML||e===l.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"===typeof r[t]?t:t+'="'+f(r[t],n)+'"';return e?e+" "+o:o},""),i=r.innerHTML||r.cssText||"",a=-1===l.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")},"")},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[l.REACT_TAG_MAP[n]||n]=e[n],t},t)},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[l.HTML_TAG_MAP[n]||n]=e[n],t},t)},k=function(e,t,n){var r,o=(r={key:t},r[l.HELMET_ATTRIBUTE]=!0,r),i=j(n,o);return[u.default.createElement(l.TAG_NAMES.TITLE,i,t)]},H=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[l.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=l.REACT_TAG_MAP[e]||e;if(n===l.TAG_PROPERTIES.INNER_HTML||n===l.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),u.default.createElement(e,o)})},B=function(e,t,n){switch(e){case l.TAG_NAMES.TITLE:return{toComponent:function(){return k(0,t.title,t.titleAttributes)},toString:function(){return N(e,t.title,t.titleAttributes,n)}};case l.ATTRIBUTE_NAMES.BODY:case l.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return j(t)},toString:function(){return I(t)}};default:return{toComponent:function(){return H(e,t)},toString:function(){return L(e,t,n)}}}},x=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.scriptTags,s=e.styleTags,f=e.title,p=void 0===f?"":f,T=e.titleAttributes;return{base:B(l.TAG_NAMES.BASE,t,r),bodyAttributes:B(l.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:B(l.ATTRIBUTE_NAMES.HTML,o,r),link:B(l.TAG_NAMES.LINK,i,r),meta:B(l.TAG_NAMES.META,a,r),noscript:B(l.TAG_NAMES.NOSCRIPT,u,r),script:B(l.TAG_NAMES.SCRIPT,c,r),style:B(l.TAG_NAMES.STYLE,s,r),title:B(l.TAG_NAMES.TITLE,{title:p,titleAttributes:T},r)}};t.convertReactPropstoHtmlAttributes=G,t.handleClientStateChange=O,t.mapStateOnServer=x,t.reducePropsToState=h,t.requestAnimationFrame=g,t.warn=_}).call(t,n(9))},190:function(e,t,n){e.exports=n.p+"static/media/me.14580b5e.png"}});
//# sourceMappingURL=0.0b55a2cd.chunk.js.map