"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=v(function(z,d){
var j=require('@stdlib/math-base-assert-is-nan/dist'),l=require('@stdlib/math-base-assert-is-positive-zero/dist');function R(e,r,i,q){var t,u,a,n;if(e<=0)return NaN;if(e===1||i===0)return r[q];for(u=q,t=r[u],n=1;n<e;n++){if(u+=i,a=r[u],j(a))return a;(a>t||a===t&&l(a))&&(t=a)}return t}d.exports=R
});var m=v(function(A,f){
var _=require('@stdlib/strided-base-stride2offset/dist'),E=s();function O(e,r,i){return E(e,r,i,_(e,i))}f.exports=O
});var p=v(function(B,c){
var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=m(),Z=s();P(x,"ndarray",Z);c.exports=x
});var b=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),k=p(),o,y=g(b(__dirname,"./native.js"));h(y)?o=k:o=y;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
