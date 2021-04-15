(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var i=n(3),r=n(7),o=(n(0),n(150)),a={title:"Use the timeline",id:"timeline"},l={unversionedId:"timeline",id:"timeline",isDocsHomePage:!1,title:"Use the timeline",description:"At the bottom of the Remotion preview player, you will see a timeline.",source:"@site/docs/timeline.md",slug:"/timeline",permalink:"/docs/timeline",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/timeline.md",version:"current",sidebar:"someSidebar",previous:{title:"Reuse components using Sequences",permalink:"/docs/reusability"},next:{title:"Render your video",permalink:"/docs/render"}},c=[{value:"Simple timeline",id:"simple-timeline",children:[]},{value:"Rich timeline",id:"rich-timeline",children:[]},{value:"Which mode should I use?",id:"which-mode-should-i-use",children:[]}],u={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"At the bottom of the Remotion preview player, you will see a timeline.\nRemotions timeline has two modes: ",Object(o.b)("strong",{parentName:"p"},"Simple timeline")," (",Object(o.b)("em",{parentName:"p"},"default"),") and ",Object(o.b)("strong",{parentName:"p"},"Rich timeline")," (experimental, will become default in the future)."),Object(o.b)("img",{src:"/img/timeline.png"}),Object(o.b)("p",null,"You may switch between the two modes by clicking the icon with the three lines:"),Object(o.b)("img",{src:"/img/timeline-toggle.png"}),Object(o.b)("h2",{id:"simple-timeline"},"Simple timeline"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"simple timeline")," will visualize the content that is rendered by your composition at the current time. This is a simple and efficient way of visualizing your content, as it will only render what you anyway see in the top panel of the editor. However, it is limited: If you place your cursor outside the time range of a sequence, Remotion cannot gather information about that sequence because it simply is not rendered at this time. This means that while the playback head is moving, the timeline may change."),Object(o.b)("h2",{id:"rich-timeline"},"Rich timeline"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"rich timeline")," will render additional frames to gather enough information to visualize a full timeline.\nSequences which are normally not rendered because the playback head is not within the time range of the sequence, will appear because Remotion is doing an additional render at a time where the sequence is visible."),Object(o.b)("p",null,"These additional renders will appear as thumbnails in the timeline. Therefore, these thumbnails are only available in rich timeline mode."),Object(o.b)("h2",{id:"which-mode-should-i-use"},"Which mode should I use?"),Object(o.b)("p",null,"Generally, the rich timeline mode will provide you with a more accurate timeline. Since your timeline gets rendered more than once at a time, you must ensure that your timeline is free of side effects and only relies on ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/use-current-frame"}),Object(o.b)("inlineCode",{parentName:"a"},"useCurrentFrame"))," for animation."),Object(o.b)("p",null,"More renders also mean slower rendering. If you are suffering from slow playback and timeline scrubbing performance, consider disabling the rich timeline mode."),Object(o.b)("p",null,"The rich timline will become the default in the future, but right now it is disabled by default."),Object(o.b)("p",null,"We encourage you to try out the rich timeline mode and ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/JonnyBurger/remotion/issues/new"}),"letting us know about any issues you will face."),"."))}s.isMDXComponent=!0},150:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var i=n(0),r=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,b=m["".concat(a,".").concat(d)]||m[d]||p[d]||o;return n?r.a.createElement(b,l(l({ref:t},u),{},{components:n})):r.a.createElement(b,l({ref:t},u))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);