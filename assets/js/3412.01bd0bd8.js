"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3412],{144:(e,t,i)=>{function n(e,t,i){if(e===t)return 0;const n=e;e.length>t.length&&(e=t,t=n);let s=e.length,o=t.length,r=0;for(;r<s&&e.charCodeAt(r)===t.charCodeAt(r);)r++;if(r===s)return 0;for(;s>0&&e.charCodeAt(~-s)===t.charCodeAt(~-o);)s--,o--;if(!s)return o>i?-1:o;if(s-=r,o-=r,s<=i&&o<=i)return s>o?s:o;const a=o-s;if(i>o)i=o;else if(a>i)return-1;let l=0;const c=[],u=[];for(;l<i;)u[l]=t.charCodeAt(r+l),c[l]=++l;for(;l<o;)u[l]=t.charCodeAt(r+l),c[l++]=i+1;const f=i-a,p=i<o;let g=0,h=i,d=0,m=0,w=0,$=0,S=0;for(l=0;l<s;l++){for(m=l,d=l+1,$=e.charCodeAt(r+l),g+=l>f?1:0,h+=h<o?1:0,S=g;S<h;S++)w=d,d=m,m=c[S],$!==u[S]&&(m<d&&(d=m),w<d&&(d=w),d++),c[S]=d;if(p&&c[l+a]>i)return-1}return d<=i?d:-1}async function s(e,t,i){const s=n(e,t,i);return{distance:s,isBounded:s>=0}}function o(e,t,i){const s=n(e,t,i);return{distance:s,isBounded:s>=0}}i.d(t,{Gd:()=>o,X1:()=>s})},2052:(e,t,i)=>{i.d(t,{e:()=>R,J:()=>$});var n=i(7123);const s=192,o=383,r=[65,65,65,65,65,65,65,67,69,69,69,69,73,73,73,73,69,78,79,79,79,79,79,null,79,85,85,85,85,89,80,115,97,97,97,97,97,97,97,99,101,101,101,101,105,105,105,105,101,110,111,111,111,111,111,null,111,117,117,117,117,121,112,121,65,97,65,97,65,97,67,99,67,99,67,99,67,99,68,100,68,100,69,101,69,101,69,101,69,101,69,101,71,103,71,103,71,103,71,103,72,104,72,104,73,105,73,105,73,105,73,105,73,105,73,105,74,106,75,107,107,76,108,76,108,76,108,76,108,76,108,78,110,78,110,78,110,110,78,110,79,111,79,111,79,111,79,111,82,114,82,114,82,114,83,115,83,115,83,115,83,115,84,116,84,116,84,116,85,117,85,117,85,117,85,117,85,117,85,117,87,119,89,121,89,90,122,90,122,90,122,115];var a=i(6618);const l={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},c={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},u="[aeiouy]",f="[^aeiou][^aeiouy]*",p=u+"[aeiou]*",g="^("+f+")?"+p+f,h="^("+f+")?"+p+f+"("+p+")?$",d="^("+f+")?"+p+f+p+f,m="^("+f+")?"+u;function w(e){let t,i,n,s,o,r;if(e.length<3)return e;const a=e.substring(0,1);if("y"==a&&(e=a.toUpperCase()+e.substring(1)),n=/^(.+?)(ss|i)es$/,s=/^(.+?)([^s])s$/,n.test(e)?e=e.replace(n,"$1$2"):s.test(e)&&(e=e.replace(s,"$1$2")),n=/^(.+?)eed$/,s=/^(.+?)(ed|ing)$/,n.test(e)){const t=n.exec(e);n=new RegExp(g),n.test(t[1])&&(n=/.$/,e=e.replace(n,""))}else if(s.test(e)){t=s.exec(e)[1],s=new RegExp(m),s.test(t)&&(e=t,s=/(at|bl|iz)$/,o=new RegExp("([^aeiouylsz])\\1$"),r=new RegExp("^"+f+u+"[^aeiouwxy]$"),s.test(e)?e+="e":o.test(e)?(n=/.$/,e=e.replace(n,"")):r.test(e)&&(e+="e"))}if(n=/^(.+?)y$/,n.test(e)){const i=n.exec(e);t=null==i?void 0:i[1],n=new RegExp(m),t&&n.test(t)&&(e=t+"i")}if(n=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,n.test(e)){const s=n.exec(e);t=null==s?void 0:s[1],i=null==s?void 0:s[2],n=new RegExp(g),t&&n.test(t)&&(e=t+l[i])}if(n=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,n.test(e)){const s=n.exec(e);t=null==s?void 0:s[1],i=null==s?void 0:s[2],n=new RegExp(g),t&&n.test(t)&&(e=t+c[i])}if(n=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,s=/^(.+?)(s|t)(ion)$/,n.test(e)){const i=n.exec(e);t=null==i?void 0:i[1],n=new RegExp(d),t&&n.test(t)&&(e=t)}else if(s.test(e)){const i=s.exec(e);t=(null==i?void 0:i[1])??""+(null==i?void 0:i[2])??"",s=new RegExp(d),s.test(t)&&(e=t)}if(n=/^(.+?)e$/,n.test(e)){const i=n.exec(e);t=null==i?void 0:i[1],n=new RegExp(d),s=new RegExp(h),o=new RegExp("^"+f+u+"[^aeiouwxy]$"),t&&(n.test(t)||s.test(t)&&!o.test(t))&&(e=t)}return n=/ll$/,s=new RegExp(d),n.test(e)&&s.test(e)&&(n=/.$/,e=e.replace(n,"")),"y"==a&&(e=a.toLowerCase()+e.substring(1)),e}function $(e,t){var i;const n=`${this.language}:${e}:${t}`;return this.normalizationCache.has(n)?this.normalizationCache.get(n):(null===(i=this.stopWords)||void 0===i?void 0:i.includes(t))?(this.normalizationCache.set(n,""),""):(this.stemmer&&!this.stemmerSkipProperties.has(e)&&(t=this.stemmer(t)),t=function(e){const t=[];for(let n=0;n<e.length;n++)t[n]=(i=e.charCodeAt(n))<s||i>o?i:r[i-s]||i;var i;return String.fromCharCode(...t)}(t),this.normalizationCache.set(n,t),t)}function S(e,t,i){if(t&&t!==this.language)throw(0,n.$)("LANGUAGE_NOT_SUPPORTED",t);if("string"!=typeof e)return[e];let s;if(i&&this.tokenizeSkipProperties.has(i))s=[this.normalizeToken.bind(this,i??"")(e)];else{const t=a.DO[this.language];s=e.toLowerCase().split(t).map(this.normalizeToken.bind(this,i??"")).filter(Boolean)}const o=function(e){for(;""===e[e.length-1];)e.pop();for(;""===e[0];)e.shift();return e}(s);return this.allowDuplicates?o:Array.from(new Set(o))}async function R(e={}){if(e.language){if(!a.Fc.includes(e.language))throw(0,n.$)("LANGUAGE_NOT_SUPPORTED",e.language)}else e.language="english";let t,i;if(e.stemming||e.stemmer&&!("stemming"in e))if(e.stemmer){if("function"!=typeof e.stemmer)throw(0,n.$)("INVALID_STEMMER_FUNCTION_TYPE");t=e.stemmer}else{if("english"!==e.language)throw(0,n.$)("MISSING_STEMMER",e.language);t=w}if(!1!==e.stopWords){if(i=[],Array.isArray(e.stopWords))i=e.stopWords;else if("function"==typeof e.stopWords)i=await e.stopWords(i);else if(e.stopWords)throw(0,n.$)("CUSTOM_STOP_WORDS_MUST_BE_FUNCTION_OR_ARRAY");if(!Array.isArray(i))throw(0,n.$)("CUSTOM_STOP_WORDS_MUST_BE_FUNCTION_OR_ARRAY");for(const e of i)if("string"!=typeof e)throw(0,n.$)("CUSTOM_STOP_WORDS_MUST_BE_FUNCTION_OR_ARRAY")}const s={tokenize:S,language:e.language,stemmer:t,stemmerSkipProperties:new Set(e.stemmerSkipProperties?[e.stemmerSkipProperties].flat():[]),tokenizeSkipProperties:new Set(e.tokenizeSkipProperties?[e.tokenizeSkipProperties].flat():[]),stopWords:i,allowDuplicates:Boolean(e.allowDuplicates),normalizeToken:$,normalizationCache:new Map};return s.tokenize=S.bind(s),s.normalizeToken=$,s}},3412:(e,t,i)=>{i.r(t),i.d(t,{BM25:()=>o.B,boundedLevenshtein:()=>n.X1,convertDistanceToMeters:()=>s.O6,formatBytes:()=>s.z3,formatNanoseconds:()=>s.j7,getNanosecondsTime:()=>s.He,normalizeToken:()=>r.J,safeArrayPush:()=>s.h,uniqueId:()=>s.NF});var n=i(144),s=i(9311),o=i(4449),r=i(2052)}}]);