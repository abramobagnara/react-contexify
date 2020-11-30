(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{68:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(2),a=t(6),o=(t(0),t(93)),i={id:"render-anything",title:"Item can render anything"},c={unversionedId:"render-anything",id:"render-anything",isDocsHomePage:!1,title:"Item can render anything",description:"You can provide any valid ReactNode to the Item component. This means that you have full control over what you render. Whether you pass a string or a React component it's up to you.",source:"@site/docs/render-anything.md",slug:"/render-anything",permalink:"/react-contexify/render-anything",editUrl:"https://github.com/fkhadra/react-contexify-doc/edit/master/docs/render-anything.md",version:"current",sidebar:"someSidebar",previous:{title:"Handle Item click",permalink:"/react-contexify/handle-item-click"},next:{title:"Disable or hide an Item",permalink:"/react-contexify/disable-or-hide"}},l=[],p={rightToc:l};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can provide any valid ",Object(o.b)("inlineCode",{parentName:"p"},"ReactNode")," to the ",Object(o.b)("inlineCode",{parentName:"p"},"Item")," component. This means that you have full control over what you render. Whether you pass a ",Object(o.b)("inlineCode",{parentName:"p"},"string")," or a ",Object(o.b)("inlineCode",{parentName:"p"},"React component")," it's up to you. "),Object(o.b)("p",null,"One perfect use case is displaying icons. The thing is that the icons are available in different formats."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"font icon"),Object(o.b)("li",{parentName:"ul"},"inline SVG"),Object(o.b)("li",{parentName:"ul"},"images")),Object(o.b)("p",null,"Because you have full control over what you render, the format of your icon doesn't matter at all! "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'import { MySvgIcon } from "path-to-my-svg";\n\n<Menu id="menuId">\n  <Item>\n    <MySvgIcon>\n    <span>Item 1</span>\n  </Item>\n  <Separator />\n  <Item>\n    <img src="path to your image" />\n    <span>Item 2</span>\n  </Item>\n  <Item>\n    <span className="material-icons">\n      delete\n    </span>\n    <span>\n      Item 3\n    <span>\n  </Item>\n</Menu>\n\n')))}u.isMDXComponent=!0},93:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=u(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),d=r,f=s["".concat(i,".").concat(d)]||s[d]||m[d]||o;return t?a.a.createElement(f,c(c({ref:n},p),{},{components:t})):a.a.createElement(f,c({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);