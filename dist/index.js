"use strict";var s=function(u,r){return function(){return r||u((r={exports:{}}).exports,r),r.exports}};var q=s(function(z,f){
var j=require('@stdlib/math-base-assert-is-nan/dist'),l=require('@stdlib/math-base-assert-is-positive-zero/dist');function P(u,r,n){var v,i,e,a;if(u<=0)return NaN;if(u===1||n===0)return r[0];for(n<0?i=(1-u)*n:i=0,v=r[i],a=1;a<u;a++){if(i+=n,e=r[i],j(e))return e;(e>v||e===v&&l(e))&&(v=e)}return v}f.exports=P
});var x=s(function(A,m){
var R=require('@stdlib/math-base-assert-is-nan/dist'),Z=require('@stdlib/math-base-assert-is-positive-zero/dist');function _(u,r,n,v){var i,e,a,t;if(u<=0)return NaN;if(u===1||n===0)return r[v];for(e=v,i=r[e],t=1;t<u;t++){if(e+=n,a=r[e],R(a))return a;(a>i||a===i&&Z(a))&&(i=a)}return i}m.exports=_
});var d=s(function(B,p){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=q(),O=x();E(c,"ndarray",O);p.exports=c
});var b=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),k=d(),o,y=g(b(__dirname,"./native.js"));h(y)?o=k:o=y;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
