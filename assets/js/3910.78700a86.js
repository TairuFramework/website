"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3910],{3910:(e,t,n)=>{n.r(t),n.d(t,{formatElapsedTime:()=>i,getDocumentIndexId:()=>f,getDocumentProperties:()=>o.JN,getInnerType:()=>b,getVectorSize:()=>l,isArrayType:()=>p,isGeoPointType:()=>a,isVectorType:()=>y,validateSchema:()=>s});var r=n(1638),o=n(6668);async function i(e){return{raw:Number(e),formatted:await(0,o.j7)(e)}}async function f(e){if(e.id){if("string"!=typeof e.id)throw(0,r.$)("DOCUMENT_ID_MUST_BE_STRING",typeof e.id);return e.id}return await(0,o.NF)()}async function s(e,t){for(const[n,o]of Object.entries(t)){const t=e[n];if(void 0!==t&&(("geopoint"!==o||"object"!=typeof t||"number"!=typeof t.lon||"number"!=typeof t.lat)&&("enum"!==o||"string"!=typeof t&&"number"!=typeof t)))if("enum[]"===o&&Array.isArray(t)){const e=t.length;for(let r=0;r<e;r++)if("string"!=typeof t[r]&&"number"!=typeof t[r])return n+"."+r}else if(y(o)){const e=l(o);if(!Array.isArray(t)||t.length!==e)throw(0,r.$)("INVALID_INPUT_VECTOR",n,e,t.length)}else if(p(o)){if(!Array.isArray(t))return n;const e=b(o),r=t.length;for(let o=0;o<r;o++)if(typeof t[o]!==e)return n+"."+o}else if("object"!=typeof o){if(typeof t!==o)return n}else{if(!t||"object"!=typeof t)return n;const e=await s(t,o);if(e)return n+"."+e}}}const u={string:!1,number:!1,boolean:!1,enum:!1,geopoint:!1,"string[]":!0,"number[]":!0,"boolean[]":!0,"enum[]":!0},c={"string[]":"string","number[]":"number","boolean[]":"boolean","enum[]":"enum"};function a(e){return"geopoint"===e}function y(e){return"string"==typeof e&&/^vector\[\d+\]$/.test(e)}function p(e){return"string"==typeof e&&u[e]}function b(e){return c[e]}function l(e){const t=Number(e.slice(7,-1));switch(!0){case isNaN(t):throw(0,r.$)("INVALID_VECTOR_VALUE",e);case t<=0:throw(0,r.$)("INVALID_VECTOR_SIZE",e);default:return t}}}}]);