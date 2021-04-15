(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(150)),o={id:"animating-properties",title:"Animating properties"},s={unversionedId:"animating-properties",id:"animating-properties",isDocsHomePage:!1,title:"Animating properties",description:"Animation is all about how properties change over time.",source:"@site/docs/animating-properties.md",slug:"/animating-properties",permalink:"/docs/animating-properties",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/animating-properties.md",version:"current",sidebar:"someSidebar",previous:{title:"The fundamentals",permalink:"/docs/the-fundamentals"},next:{title:"Reuse components using Sequences",permalink:"/docs/reusability"}},c=[{value:"Using the interpolate helper function",id:"using-the-interpolate-helper-function",children:[]},{value:"Using spring animations",id:"using-spring-animations",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Animation is all about how properties change over time."),"\nLet's start with a simple example, let's say we want to create a fade in animation."),Object(i.b)("p",null,"If we want to fade the text in over 20 frames, we need to gradually change the ",Object(i.b)("inlineCode",{parentName:"p"},"opacity")," style over time so that it goes from 0 to 1."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"{4,11}","{4,11}":!0}),"export const MyVideo = () => {\n  const frame = useCurrentFrame();\n\n  const opacity = frame >= 20 ? 1 : (frame / 20);\n\n  return (\n    <div style={{\n      flex: 1,\n      justifyContent: 'center',\n      alignItems: 'center',\n      opacity: opacity\n    }}>\n      Hello World!\n    </div>\n  )\n}\n")),Object(i.b)("h2",{id:"using-the-interpolate-helper-function"},"Using the interpolate helper function"),Object(i.b)("p",null,"Using the ",Object(i.b)("inlineCode",{parentName:"p"},"interpolate")," function can make animations more readable.\nThe function takes 4 arguments:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"The input value"),Object(i.b)("li",{parentName:"ol"},"The range values which the input can assume"),Object(i.b)("li",{parentName:"ol"},"The range of values that you want to map the input to"),Object(i.b)("li",{parentName:"ol"},"Optional settings")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"{6,13}","{6,13}":!0}),"import {useCurrentFrame, interpolate} from 'remotion';\n\nexport const MyVideo = () => {\n  const frame = useCurrentFrame();\n\n  const opacity = interpolate(frame, [0, 20], [0, 1], {extrapolateRight: 'clamp'});\n\n  return (\n    <div style={{\n      flex: 1,\n      justifyContent: 'center',\n      alignItems: 'center',\n      opacity: opacity\n    }}>\n      Hello World!\n    </div>\n  )\n}\n")),Object(i.b)("p",null,"In this example, we map the frames 0 to 20 to their opacity values ",Object(i.b)("inlineCode",{parentName:"p"},"(0, 0.05, 0.1, 0.15 ..."),") and use the ",Object(i.b)("inlineCode",{parentName:"p"},"extrapolateRight")," setting to clamp the output so that it never becomes bigger than 1."),Object(i.b)("h2",{id:"using-spring-animations"},"Using spring animations"),Object(i.b)("p",null,"Spring animations are beautiful way to put things into motion and make them natural. Remotion includes a helper function to make spring animations easy! This time, let's animate the scale of the text."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"{7,20}","{7,20}":!0}),"import {useCurrentFrame, useVideoConfig, spring} from 'remotion';\n\nexport const MyVideo = () => {\n  const frame = useCurrentFrame();\n  const {fps} = useVideoConfig();\n\n  const scale = spring({\n    fps,\n    from: 0,\n    to: 1,\n    frame\n  });\n\n  return (\n    <div style={{\n      flex: 1,\n      justifyContent: 'center',\n      alignItems: 'center',\n    }}>\n      <div style={{transform: `scale(${scale})`}}>Hello World!</div>\n    </div>\n  )\n}\n")),Object(i.b)("p",null,"You should see the text 'jump in'. The default spring configuration leads to a little bit of overshoot, meaning the text will bounce a little bit. See the reference page about the ",Object(i.b)("inlineCode",{parentName:"p"},"spring")," function to learn how to customize your spring animations."))}p.isMDXComponent=!0},150:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,f=u["".concat(o,".").concat(b)]||u[b]||m[b]||i;return n?a.a.createElement(f,s(s({ref:t},l),{},{components:n})):a.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);