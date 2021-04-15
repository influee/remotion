(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{150:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),l=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,b=p["".concat(i,".").concat(m)]||p[m]||s[m]||o;return n?a.a.createElement(b,u(u({ref:t},d),{},{components:n})):a.a.createElement(b,u({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var d=2;d<o;d++)i[d]=n[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(150)),i={title:"getAudioDuration()",id:"get-audio-duration"},u={unversionedId:"get-audio-duration",id:"get-audio-duration",isDocsHomePage:!1,title:"getAudioDuration()",description:"Part of the @remotion/media-utils package of helper functions.",source:"@site/docs/get-audio-duration.md",slug:"/get-audio-duration",permalink:"/docs/get-audio-duration",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/get-audio-duration.md",version:"current",sidebar:"someSidebar",previous:{title:"getAudioData()",permalink:"/docs/get-audio-data"},next:{title:"getVideoMetadata()",permalink:"/docs/get-video-metadata"}},c=[{value:"Arguments",id:"arguments",children:[{value:"<code>src</code>",id:"src",children:[]}]},{value:"Return value",id:"return-value",children:[]},{value:"Example",id:"example",children:[]}],d={toc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Part of the ",Object(o.b)("inlineCode",{parentName:"em"},"@remotion/media-utils"))," package of helper functions."),Object(o.b)("p",null,"Gets the duration in seconds of an audio source. Remotion will create an invisible ",Object(o.b)("inlineCode",{parentName:"p"},"<audio>")," tag, load the audio and return the duration."),Object(o.b)("h2",{id:"arguments"},"Arguments"),Object(o.b)("h3",{id:"src"},Object(o.b)("inlineCode",{parentName:"h3"},"src")),Object(o.b)("p",null,"A string pointing to an audio asset"),Object(o.b)("h2",{id:"return-value"},"Return value"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Promise<number>")," - the duration of the audio file."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import {getAudioDuration} from '@remotion/media-utils';\nimport music from './music.mp3';\n\nawait getAudioDuration(music); // 127.452\nawait getAudioDuration('https://example.com/remote-audio.aac'); // 50.24\n")))}l.isMDXComponent=!0}}]);