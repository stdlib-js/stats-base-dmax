// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(e){"use strict";var r,t="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,o=Object.prototype,a=o.toString,i=o.__defineGetter__,u=o.__defineSetter__,l=o.__lookupGetter__,f=o.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?n:function(e,r,t){var n,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===a.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(l.call(e,r)||f.call(e,r)?(n=e.__proto__,e.__proto__=o,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,r,t.get),p&&u&&u.call(e,r,t.set),e};var c=r;function _(e){return e!=e}var p=Number.POSITIVE_INFINITY;function d(e){return 0===e&&1/e===p}function b(e,r,t){var n,o,a,i;if(e<=0)return NaN;if(1===e||0===t)return r[0];for(n=r[o=t<0?(1-e)*t:0],i=1;i<e;i++){if(_(a=r[o+=t]))return a;(a>n||a===n&&d(a))&&(n=a)}return n}function y(e,r,t,n){var o,a,i,u;if(e<=0)return NaN;if(1===e||0===t)return r[n];for(o=r[a=n],u=1;u<e;u++){if(_(i=r[a+=t]))return i;(i>o||i===o&&d(i))&&(o=i)}return o}c(b,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:y}),e.default=b,e.ndarray=y,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).dmax={});
//# sourceMappingURL=browser.js.map
