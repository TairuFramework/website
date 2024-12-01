"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["6898"],{3409:function(e,t,r){r.r(t),r.d(t,{metadata:()=>n,contentTitle:()=>c,default:()=>h,assets:()=>u,toc:()=>d,frontMatter:()=>o});var n=JSON.parse('{"id":"agents/jquery","title":"jQuery plugin library","description":"Tairu can be used as a jQuery plugin via the @tairu/jquery package in websites already using jQuery.","source":"@site/docs/agents/jquery.mdx","sourceDirName":"agents","slug":"/agents/jquery","permalink":"/docs/agents/jquery","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"Web client library","permalink":"/docs/agents/web-client"},"next":{"title":"React DOM library","permalink":"/docs/agents/react-dom"}}'),a=r("2676"),l=r("9938"),i=r("6206"),s=r("4076");let o={},c="jQuery plugin library",u={},d=[{value:"Installation",id:"installation",level:2},{value:"Package setup",id:"package-setup",level:3},{value:"UMD import",id:"umd-import",level:3},{value:"Usage",id:"usage",level:2},{value:"Loading a Tile to an empty container",id:"loading-a-tile-to-an-empty-container",level:3},{value:"Loading a Tile from a placeholder",id:"loading-a-tile-from-a-placeholder",level:3},{value:"Adding interactions to a pre-rendered Tile",id:"adding-interactions-to-a-pre-rendered-tile",level:3}];function p(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"jquery-plugin-library",children:"jQuery plugin library"})}),"\n",(0,a.jsxs)(t.p,{children:["Tairu can be used as a ",(0,a.jsx)(t.a,{href:"https://learn.jquery.com/plugins/",children:"jQuery plugin"})," via the ",(0,a.jsxs)(t.a,{href:"/docs/api/jquery/",children:[(0,a.jsx)(t.code,{children:"@tairu/jquery"})," package"]})," in websites already using jQuery."]}),"\n",(0,a.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(t.p,{children:"The jQuery plugin library can be installed from npm or imported as a UMD module from unpkg or a similar platform."}),"\n",(0,a.jsx)(t.h3,{id:"package-setup",children:"Package setup"}),"\n",(0,a.jsx)(t.p,{children:"Use your package manager to install the library:"}),"\n",(0,a.jsxs)(i.Z,{groupId:"package-manager",children:[(0,a.jsx)(s.Z,{value:"npm",label:"npm",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:"npm install @tairu/jquery\n"})})}),(0,a.jsx)(s.Z,{value:"pnpm",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:"pnpm add @tairu/jquery\n"})})})]}),"\n",(0,a.jsxs)(t.p,{children:["To use the plugin, make sure to import it ",(0,a.jsx)(t.strong,{children:"after"})," jQuery:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"import $ from 'jquery'\nimport '@tairu/jquery' // Will inject the jQuery plugin\n"})}),"\n",(0,a.jsx)(t.h3,{id:"umd-import",children:"UMD import"}),"\n",(0,a.jsxs)(t.p,{children:["The library can be imported directly in a HTML page using a script tag. It must be imported ",(0,a.jsx)(t.strong,{children:"after"})," jQuery:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'\x3c!-- import jQuery first --\x3e\n<script src="https://code.jquery.com/jquery-3.7.1.js"><\/script>\n\x3c!-- then the plugin can be imported --\x3e\n<script src="https://unpkg.com/@tairu/jquery/dist/jquery.tairu.js"><\/script>\n'})}),"\n",(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(t.p,{children:["The plugin can be used by calling the added ",(0,a.jsx)(t.code,{children:".tile()"})," method to the jQuery instance:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"$('#my-first-tile').tile('http://localhost:3210')\n"})}),"\n",(0,a.jsx)(t.h3,{id:"loading-a-tile-to-an-empty-container",children:"Loading a Tile to an empty container"}),"\n",(0,a.jsx)(t.p,{children:"Tiles can be dynamically loaded to any DOM element present in the page:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:"<div id=\"my-first-tile\"></div>\n<script>\n$('#my-first-tile').tile('http://localhost:3210')\n<\/script>\n"})}),"\n",(0,a.jsx)(t.h3,{id:"loading-a-tile-from-a-placeholder",children:"Loading a Tile from a placeholder"}),"\n",(0,a.jsx)(t.p,{children:"HTML data attributes can be set on DOM elements to provide metadata necessary to load Tiles:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<div id="my-first-tile" data-tile="http://localhost:3210" data-tile-version="0.1"></div>\n<script>\n$(\'#my-first-tile\').tile() // No argument needed\n<\/script>\n'})}),"\n",(0,a.jsx)(t.p,{children:"The method can also be applied to a selector of multiple DOM elements, for example:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<div className="tile-placeholder" data-tile="http://localhost:3210/first" data-tile-version="0.1"></div>\n<div className="tile-placeholder" data-tile="http://localhost:3210/second" data-tile-version="0.1"></div>\n<script>\n$(\'.tile-placeholder\').tile() // Will load both tiles\n<\/script>\n'})}),"\n",(0,a.jsx)(t.h3,{id:"adding-interactions-to-a-pre-rendered-tile",children:"Adding interactions to a pre-rendered Tile"}),"\n",(0,a.jsx)(t.p,{children:"Tile contents can be pre-rendered by a server or build process. In this case, the Web client only needs to render and handle interactive elements, based on the data elements present in the DOM element:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<div id="my-first-tile" data-tile="http://localhost:3210" data-tile-version="0.1" data-tile-interactive="{...}"></div>\n<script>\n$(\'#my-first-tile\').tile() // No argument needed\n<\/script>\n'})})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},4076:function(e,t,r){r.d(t,{Z:()=>i});var n=r("2676");r("5271");var a=r("4461");let l="tabItem_TBo_";function i(e){let{children:t,hidden:r,className:i}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:r,children:t})}},6206:function(e,t,r){r.d(t,{Z:()=>b});var n=r("2676"),a=r("5271"),l=r("4461"),i=r("3351"),s=r("3225"),o=r("213"),c=r("8912"),u=r("4601"),d=r("550");function p(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function h(e){let{value:t,tabValues:r}=e;return r.some(e=>e.value===t)}var m=r("9157");let f="tabList_Catn",g="tabItem_mfQ4";function j(e){let{className:t,block:r,selectedValue:a,selectValue:s,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),d=e=>{let t=e.currentTarget,r=o[c.indexOf(t)].value;r!==a&&(u(t),s(r))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{let r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1]}}t?.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t),children:o.map(e=>{let{value:t,label:r,attributes:i}=e;return(0,n.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>c.push(e),onKeyDown:p,onClick:d,...i,className:(0,l.Z)("tabs__item",g,i?.className,{"tabs__item--active":a===t}),children:r??t},t)})})}function y(e){let{lazy:t,children:r,selectedValue:i}=e,s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){let e=s.find(e=>e.props.value===i);return e?(0,a.cloneElement)(e,{className:(0,l.Z)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:s.map((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==i}))})}function v(e){let t=function(e){let{defaultValue:t,queryString:r=!1,groupId:n}=e,l=function(e){let{values:t,children:r}=e;return(0,a.useMemo)(()=>{let e=t??p(r).map(e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}});return!function(e){let t=(0,u.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,r])}(e),[i,m]=(0,a.useState)(()=>(function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}let n=r.find(e=>e.default)??r[0];if(!n)throw Error("Unexpected error: 0 tabValues");return n.value})({defaultValue:t,tabValues:l})),[f,g]=function(e){let{queryString:t=!1,groupId:r}=e,n=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r}),i=(0,c._X)(l);return[i,(0,a.useCallback)(e=>{if(!l)return;let t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})},[l,n])]}({queryString:r,groupId:n}),[j,y]=function(e){var t;let{groupId:r}=e;let n=(t=r)?`docusaurus.tab.${t}`:null,[l,i]=(0,d.Nk)(n);return[l,(0,a.useCallback)(e=>{if(!!n)i.set(e)},[n,i])]}({groupId:n}),v=(()=>{let e=f??j;return h({value:e,tabValues:l})?e:null})();return(0,o.Z)(()=>{v&&m(v)},[v]),{selectedValue:i,selectValue:(0,a.useCallback)(e=>{if(!h({value:e,tabValues:l}))throw Error(`Can't select invalid tab value=${e}`);m(e),g(e),y(e)},[g,y,l]),tabValues:l}}(e);return(0,n.jsxs)("div",{className:(0,l.Z)("tabs-container",f),children:[(0,n.jsx)(j,{...t,...e}),(0,n.jsx)(y,{...t,...e})]})}function b(e){let t=(0,m.default)();return(0,n.jsx)(v,{...e,children:p(e.children)},String(t))}},9938:function(e,t,r){r.d(t,{Z:function(){return s},a:function(){return i}});var n=r(5271);let a={},l=n.createContext(a);function i(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);