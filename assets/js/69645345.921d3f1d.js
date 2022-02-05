"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[971],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=i,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||o;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3688:function(e,t,n){n.d(t,{S:function(){return j}});var r=n(7294);function i(e){return e&&e.origin?e.origin:"https://stackblitz.com"}function o(){return Math.random().toString(36).substring(7)}function a(e){var t="";return e?(e.forceEmbedLayout&&(t+="embed=1"),e.clickToLoad&&(t+=(t.length?"&":"")+"ctl=1"),e.openFile&&(t+=(t.length?"&":"")+"file="+e.openFile),!e.view||"preview"!==e.view&&"editor"!==e.view||(t+=(t.length?"&":"")+"view="+e.view),e.theme&&(t+=(t.length?"&":"")+"theme="+e.theme),e.hideExplorer&&(t+=(t.length?"&":"")+"hideExplorer=1"),e.hideNavigation&&(t+=(t.length?"&":"")+"hideNavigation=1;"),e.hideDevTools&&(t+=(t.length?"&":"")+"hidedevtools=1"),e.initialPath&&(t+=(t.length?"&":"")+"initialpath="+encodeURIComponent(e.initialPath)),"number"==typeof e.devToolsHeight&&e.devToolsHeight>0&&e.devToolsHeight<100&&(t+=(t.length?"&":"")+"devtoolsheight="+e.devToolsHeight),t.length?"?"+t:t):t}function s(e,t,n){if(null===e.parentNode)throw new Error("Invalid Element");t.id=e.id,d(t,n),e.parentNode.replaceChild(t,e)}function c(e){if("string"==typeof e){var t=document.getElementById(e);if(null!==t)return t}else if(e instanceof HTMLElement)return e;throw new Error("Invalid Element")}function l(e){return e&&!1===e.newWindow?"_self":"_blank"}function d(e,t){t&&(t.hasOwnProperty("height")&&(e.height=""+t.height),t.hasOwnProperty("width")&&(e.width=""+t.width)),e.height||(e.height="300"),e.width||e.setAttribute("style","width:100%;")}var p=function(e){var t=this;this.pending={},this.port=e,this.port.onmessage=function(e){if(e.data.payload.__reqid){var n=e.data.payload.__reqid,r=e.data.payload.__success;if(t.pending[n]){if(delete e.data.payload.__reqid,delete e.data.payload.__success,r){var i=0===Object.keys(e.data.payload).length&&e.data.payload.constructor===Object?null:e.data.payload;t.pending[n].resolve(i)}else{var o=e.data.payload.error?e.data.type+": "+e.data.payload.error:e.data.type;t.pending[n].reject(o)}delete t.pending[n]}}}};p.prototype.request=function(e){var t=this,n=o();return new Promise((function(r,i){t.pending[n]={resolve:r,reject:i},e.payload.__reqid=n,t.port.postMessage(e)}))};var u=function(e,t){var n=this;this.rdc=new p(e),this.preview={},Object.defineProperty(this.preview,"origin",{value:t.previewOrigin,writable:!1}),this.editor={openFile:function(e){return n.rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}})}}};u.prototype.applyFsDiff=function(e){return this.rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})},u.prototype.getFsSnapshot=function(){return this.rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})},u.prototype.getDependencies=function(){return this.rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})};var f=[],m=function(e){var t=this;this.id=o(),this.element=e,this.pending=new Promise((function(e,n){var r=function(n){n.data.action&&"SDK_INIT_SUCCESS"===n.data.action&&n.data.id===t.id&&(t.vm=new u(n.ports[0],n.data.payload),e(t.vm),o())},i=function(){t.element.contentWindow&&t.element.contentWindow.postMessage({action:"SDK_INIT",id:t.id},"*")};function o(){window.clearInterval(s),window.removeEventListener("message",r)}window.addEventListener("message",r),i();var a=0,s=window.setInterval((function(){if(t.vm)o();else{if(a>=20)return o(),n("Timeout: Unable to establish a connection with the StackBlitz VM"),void f.forEach((function(e,n){e.id===t.id&&f.splice(n,1)}));a++,i()}}),500)})),f.push(this)},h=["typescript","create-react-app","angular-cli","javascript","polymer","vue"];function g(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function v(e){-1===h.indexOf(e.template)&&console.warn("Unsupported project template, must be one of: "+h.join(", "));var t=document.createElement("form");return t.method="POST",t.setAttribute("style","display:none;"),t.appendChild(g("project[title]",e.title)),t.appendChild(g("project[description]",e.description)),t.appendChild(g("project[template]",e.template)),e.tags&&e.tags.forEach((function(e){t.appendChild(g("project[tags][]",e))})),e.dependencies&&t.appendChild(g("project[dependencies]",JSON.stringify(e.dependencies))),e.settings&&t.appendChild(g("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(n){t.appendChild(g("project[files]["+n+"]",e.files[n]))})),t}function y(e,t){var n=v(e);return n.action=i(t)+"/run"+a(t),n.id="sb","<html><head><title></title></head><body>"+n.outerHTML+"<script>document.getElementById('sb').submit();<\/script></body></html>"}function w(e,t){var n=v(e);n.action=i(t)+"/run"+a(t),n.target=l(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}var b={connect:function(e){if(!e||!e.contentWindow)return Promise.reject("Provided element is not an iframe.");var t=function(e){var t=e instanceof Element?"element":"id";return f.find((function(n){return n[t]===e}))||null}(e);return t?t.pending:new m(e).pending},openGithubProject:function(e,t){window.open(i(t)+"/github/"+e+a(t),l(t))},openProject:function(e,t){w(e,t)},openProjectId:function(e,t){window.open(i(t)+"/edit/"+e+a(t),l(t))},embedGithubProject:function(e,t,n){var r=c(e),o=document.createElement("iframe");return o.src=i(n)+"/github/"+t+a(n),s(r,o,n),b.connect(o)},embedProject:function(e,t,n){var r=c(e),i=y(t,n),o=document.createElement("iframe");return s(r,o,n),o.contentDocument&&o.contentDocument.write(i),b.connect(o)},embedProjectId:function(e,t,n){var r=c(e),o=document.createElement("iframe");return o.src=i(n)+"/edit/"+t+a(n),s(r,o,n),b.connect(o)}},E=b,P=n(5350),T={core:{"@ngneat/elf":"latest"},entities:{"@ngneat/elf-entities":"latest"},requests:{"@ngneat/elf-requests":"latest"},pagination:{"@ngneat/elf-pagination":"latest"},devtools:{"@ngneat/elf-devtools":"latest"},persist:{"@ngneat/elf-persist-state":"latest"},history:{"@ngneat/elf-state-history":"latest"},rxjs:{rxjs:"latest"},immer:{immer:"latest"}};function j(e){var t=e.src,n=e.packages,i=void 0===n?[]:n,o=(0,r.useRef)(),a=["core","rxjs"].concat(i),s=(0,P.Z)().isDarkTheme;return(0,r.useEffect)((function(){var e=a.reduce((function(e,t){return Object.assign(e,T[t]),e}),{});E.embedProject(o.current,{description:"this is descrption",title:"Elf Core",files:{"index.html":"","index.ts":t},template:"typescript",dependencies:e,settings:{compile:{clearConsole:!0}}},{hideDevTools:!1,devToolsHeight:99,theme:s?"dark":"light",height:"500px"})}),[]),r.createElement("section",{style:{height:"500px"}},r.createElement("div",{ref:o}))}},2924:function(e,t,n){var r=n(7294).createContext(void 0);t.Z=r},5350:function(e,t,n){var r=n(7294),i=n(2924);t.Z=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},3062:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return p}});var r=n(3117),i=n(102),o=(n(7294),n(3905)),a=n(3688),s=["components"],c={},l="Using Immer",d={unversionedId:"immer",id:"immer",isDocsHomePage:!1,title:"Using Immer",description:"When working with immutable objects, we often get to what\u2019s called a \u201cspread hell\u201d situation. If you prefer working with immutable objects in a mutable fashion, you can use immer with Elf.",source:"@site/docs/immer.mdx",sourceDirName:".",slug:"/immer",permalink:"/elf/docs/immer",editUrl:"https://github.com/ngneat/elf/docusaurus/edit/main/website/docs/immer.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"DevTools",permalink:"/elf/docs/dev-tools"},next:{title:"CLI",permalink:"/elf/docs/cli"}},p=[],u={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-immer"},"Using Immer"),(0,o.kt)("p",null,"When working with immutable objects, we often get to what\u2019s called a \u201cspread hell\u201d situation. If you prefer working with immutable objects in a mutable fashion, you can use immer with Elf."),(0,o.kt)("p",null,"Create a mutation function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="store/mutations.ts"',title:'"store/mutations.ts"'},"import { produce } from 'immer';\n\nexport function write<S>(updater: (state: S) => void): (state: S) => S {\n  return function (state) {\n    return produce(state, (draft) => {\n      updater(draft as S);\n    });\n  };\n}\n")),(0,o.kt)("p",null,"Now you can use it in the store's ",(0,o.kt)("inlineCode",{parentName:"p"},"update")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todos.respository.ts"',title:'"todos.respository.ts"'},"import { withProps, Store, createState } from '@ngneat/elf';\nimport { withEntities, selectAll, updateEntities } from '@ngneat/elf-entities';\n\ninterface Todo {\n  id: number;\n  title: string;\n  completed: boolean;\n}\n\nexport interface TodosProps {\n  filter: 'ALL' | 'ACTIVE' | 'COMPLETED';\n}\n\nconst { state, config } = createState(\n  withEntities<Todo>(),\n  withProps<TodosProps>({ filter: 'ALL' })\n);\n\nconst store = new Store({ name: 'todos', state, config });\n\nexport const todos$ = store.pipe(selectAll());\n\nexport function updateFilter(filter: TodosProps['filter']) {\n  store.update(\n    // highlight-start\n    write((state) => {\n      state.filter = filter;\n    })\n    // highlight-end\n  );\n}\n\n export function updateCompleted(id: Todo['id']) {\n  store.update(\n    updateEntities(\n      id,\n      // highlight-next-line\n      write<Todo>((entity) => (entity.completed = !entity.completed))\n    )\n  );\n}\n")),(0,o.kt)(a.S,{src:"import { produce } from 'immer';\nimport { withProps, Store, createState } from '@ngneat/elf';\nimport { withEntities, selectAll, updateEntities } from '@ngneat/elf-entities';\n\nexport function write<S>(updater: (state: S) => void): (state: S) => S {\n  return function (state) {\n    return produce(state, (draft) => {\n      updater(draft as S);\n    });\n  };\n}\n\ninterface Todo {\n  id: number;\n  title: string;\n  completed: boolean;\n}\n\nexport interface TodosProps {\n  filter: 'ALL' | 'ACTIVE' | 'COMPLETED';\n}\n\nconst { state, config } = createState(\n  withEntities<Todo>(),\n  withProps<TodosProps>({ filter: 'ALL' })\n);\n\nconst store = new Store({ name: 'todos', state, config });\n\nexport const todos$ = store.pipe(selectAll());\n\nexport function updateFilter(filter: TodosProps['filter']) {\n  store.update(\n    write((state) => {\n      state.filter = filter;\n    })\n  );\n}\n\nexport function updateCompleted(id: Todo['id']) {\n  store.update(\n    updateEntities(\n      id,\n      write<Todo>((entity) => (entity.completed = !entity.completed))\n    )\n  );\n}\n",packages:["entities","immer"],mdxType:"LiveDemo"}))}f.isMDXComponent=!0}}]);