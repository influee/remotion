(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{127:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),o=(t(0),t(150)),i={id:"using-randomness",title:"Using randomness"},s={unversionedId:"using-randomness",id:"using-randomness",isDocsHomePage:!1,title:"Using randomness",description:"The following thing is an anti-pattern in Remotion:",source:"@site/docs/using-randomness.md",slug:"/using-randomness",permalink:"/docs/using-randomness",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/using-randomness.md",version:"current",sidebar:"someSidebar",previous:{title:"Using fonts",permalink:"/docs/fonts"},next:{title:"Audio visualization",permalink:"/docs/audio-visualization"}},l=[{value:"Fixing the problem",id:"fixing-the-problem",children:[]},{value:"False positives",id:"false-positives",children:[]},{value:"See also",id:"see-also",children:[]}],c={toc:l};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The following thing is an anti-pattern in Remotion:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"const MyComp: React.FC = () => {\n  const randomValues = useState(() =>  {\n    return new Array(10).fill(true).map((a, i) => {\n      return {\n        x: Math.random(),\n        y: Math.random(),\n      };\n    });\n  );\n  // Do something with coordinates\n}\n")),Object(o.b)("p",null,"While this will work during preview, it will break while rendering. The reason is that Remotion is spinning up multiple instances of the webpage to render frames in parallel, and the random values will be different on every instance."),Object(o.b)("h2",{id:"fixing-the-problem"},"Fixing the problem"),Object(o.b)("p",null,"Use the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/random"}),Object(o.b)("inlineCode",{parentName:"a"},"random()"))," API from Remotion to get deterministic pseudorandom values. Pass in a seed (number or string) and as long as the seed is the same, the return value will be the same."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"{7,8}","{7,8}":!0}),"import {random} from 'remotion';\n\nconst MyComp: React.FC = () => {\n  // No need to use useState\n  const randomValues = new Array(10).fill(true).map((a, i) => {\n    return {\n      x: random(`x-${i}`),\n      y: random(`y-${i}`),\n    };\n  });\n}\n")),Object(o.b)("p",null,"Now the random values will be the same on all threads."),Object(o.b)("h2",{id:"false-positives"},"False positives"),Object(o.b)("p",null,"Did you get an ESLint warning when using ",Object(o.b)("inlineCode",{parentName:"p"},"Math.random()"),", but you are fully aware of the circumstances described above? Use ",Object(o.b)("inlineCode",{parentName:"p"},"random(null)")," to get a true random value without getting a warning."),Object(o.b)("h2",{id:"see-also"},"See also"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/random"}),"random()"))))}u.isMDXComponent=!0},150:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),u=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return t?a.a.createElement(b,s(s({ref:n},c),{},{components:t})):a.a.createElement(b,s({ref:n},c))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);