// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-positive-zero@esm/index.mjs";function n(r,n,s){var i,a,d,o;if(r<=0)return NaN;if(1===r||0===s)return n[0];for(i=n[a=s<0?(1-r)*s:0],o=1;o<r;o++){if(d=n[a+=s],e(d))return d;(d>i||d===i&&t(d))&&(i=d)}return i}function s(r,n,s,i){var a,d,o,f;if(r<=0)return NaN;if(1===r||0===s)return n[i];for(a=n[d=i],f=1;f<r;f++){if(o=n[d+=s],e(o))return o;(o>a||o===a&&t(o))&&(a=o)}return a}r(n,"ndarray",s);export{n as default,s as ndarray};
//# sourceMappingURL=index.mjs.map
