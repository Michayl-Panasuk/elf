"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[271],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,m=u["".concat(c,".").concat(f)]||u[f]||l[f]||o;return n?i.createElement(m,a(a({ref:t},d),{},{components:n})):i.createElement(m,a({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3688:function(e,t,n){n.d(t,{S:function(){return C}});var i=n(7294);function r(e){return e&&e.origin?e.origin:"https://stackblitz.com"}function o(){return Math.random().toString(36).substring(7)}function a(e){var t="";return e?(e.forceEmbedLayout&&(t+="embed=1"),e.clickToLoad&&(t+=(t.length?"&":"")+"ctl=1"),e.openFile&&(t+=(t.length?"&":"")+"file="+e.openFile),!e.view||"preview"!==e.view&&"editor"!==e.view||(t+=(t.length?"&":"")+"view="+e.view),e.theme&&(t+=(t.length?"&":"")+"theme="+e.theme),e.hideExplorer&&(t+=(t.length?"&":"")+"hideExplorer=1"),e.hideNavigation&&(t+=(t.length?"&":"")+"hideNavigation=1;"),e.hideDevTools&&(t+=(t.length?"&":"")+"hidedevtools=1"),e.initialPath&&(t+=(t.length?"&":"")+"initialpath="+encodeURIComponent(e.initialPath)),"number"==typeof e.devToolsHeight&&e.devToolsHeight>0&&e.devToolsHeight<100&&(t+=(t.length?"&":"")+"devtoolsheight="+e.devToolsHeight),t.length?"?"+t:t):t}function s(e,t,n){if(null===e.parentNode)throw new Error("Invalid Element");t.id=e.id,d(t,n),e.parentNode.replaceChild(t,e)}function c(e){if("string"==typeof e){var t=document.getElementById(e);if(null!==t)return t}else if(e instanceof HTMLElement)return e;throw new Error("Invalid Element")}function p(e){return e&&!1===e.newWindow?"_self":"_blank"}function d(e,t){t&&(t.hasOwnProperty("height")&&(e.height=""+t.height),t.hasOwnProperty("width")&&(e.width=""+t.width)),e.height||(e.height="300"),e.width||e.setAttribute("style","width:100%;")}var l=function(e){var t=this;this.pending={},this.port=e,this.port.onmessage=function(e){if(e.data.payload.__reqid){var n=e.data.payload.__reqid,i=e.data.payload.__success;if(t.pending[n]){if(delete e.data.payload.__reqid,delete e.data.payload.__success,i){var r=0===Object.keys(e.data.payload).length&&e.data.payload.constructor===Object?null:e.data.payload;t.pending[n].resolve(r)}else{var o=e.data.payload.error?e.data.type+": "+e.data.payload.error:e.data.type;t.pending[n].reject(o)}delete t.pending[n]}}}};l.prototype.request=function(e){var t=this,n=o();return new Promise((function(i,r){t.pending[n]={resolve:i,reject:r},e.payload.__reqid=n,t.port.postMessage(e)}))};var u=function(e,t){var n=this;this.rdc=new l(e),this.preview={},Object.defineProperty(this.preview,"origin",{value:t.previewOrigin,writable:!1}),this.editor={openFile:function(e){return n.rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}})}}};u.prototype.applyFsDiff=function(e){return this.rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})},u.prototype.getFsSnapshot=function(){return this.rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})},u.prototype.getDependencies=function(){return this.rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})};var f=[],m=function(e){var t=this;this.id=o(),this.element=e,this.pending=new Promise((function(e,n){var i=function(n){n.data.action&&"SDK_INIT_SUCCESS"===n.data.action&&n.data.id===t.id&&(t.vm=new u(n.ports[0],n.data.payload),e(t.vm),o())},r=function(){t.element.contentWindow&&t.element.contentWindow.postMessage({action:"SDK_INIT",id:t.id},"*")};function o(){window.clearInterval(s),window.removeEventListener("message",i)}window.addEventListener("message",i),r();var a=0,s=window.setInterval((function(){if(t.vm)o();else{if(a>=20)return o(),n("Timeout: Unable to establish a connection with the StackBlitz VM"),void f.forEach((function(e,n){e.id===t.id&&f.splice(n,1)}));a++,r()}}),500)})),f.push(this)},h=["typescript","create-react-app","angular-cli","javascript","polymer","vue"];function g(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function y(e){-1===h.indexOf(e.template)&&console.warn("Unsupported project template, must be one of: "+h.join(", "));var t=document.createElement("form");return t.method="POST",t.setAttribute("style","display:none;"),t.appendChild(g("project[title]",e.title)),t.appendChild(g("project[description]",e.description)),t.appendChild(g("project[template]",e.template)),e.tags&&e.tags.forEach((function(e){t.appendChild(g("project[tags][]",e))})),e.dependencies&&t.appendChild(g("project[dependencies]",JSON.stringify(e.dependencies))),e.settings&&t.appendChild(g("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(n){t.appendChild(g("project[files]["+n+"]",e.files[n]))})),t}function v(e,t){var n=y(e);return n.action=r(t)+"/run"+a(t),n.id="sb","<html><head><title></title></head><body>"+n.outerHTML+"<script>document.getElementById('sb').submit();<\/script></body></html>"}function w(e,t){var n=y(e);n.action=r(t)+"/run"+a(t),n.target=p(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}var E={connect:function(e){if(!e||!e.contentWindow)return Promise.reject("Provided element is not an iframe.");var t=function(e){var t=e instanceof Element?"element":"id";return f.find((function(n){return n[t]===e}))||null}(e);return t?t.pending:new m(e).pending},openGithubProject:function(e,t){window.open(r(t)+"/github/"+e+a(t),p(t))},openProject:function(e,t){w(e,t)},openProjectId:function(e,t){window.open(r(t)+"/edit/"+e+a(t),p(t))},embedGithubProject:function(e,t,n){var i=c(e),o=document.createElement("iframe");return o.src=r(n)+"/github/"+t+a(n),s(i,o,n),E.connect(o)},embedProject:function(e,t,n){var i=c(e),r=v(t,n),o=document.createElement("iframe");return s(i,o,n),o.contentDocument&&o.contentDocument.write(r),E.connect(o)},embedProjectId:function(e,t,n){var i=c(e),o=document.createElement("iframe");return o.src=r(n)+"/edit/"+t+a(n),s(i,o,n),E.connect(o)}},b=E,k=n(5350),P={core:{"@ngneat/elf":"latest"},entities:{"@ngneat/elf-entities":"latest"},requests:{"@ngneat/elf-requests":"latest"},pagination:{"@ngneat/elf-pagination":"latest"},devtools:{"@ngneat/elf-devtools":"latest"},persist:{"@ngneat/elf-persist-state":"latest"},history:{"@ngneat/elf-state-history":"latest"},rxjs:{rxjs:"latest"},immer:{immer:"latest"}};function C(e){var t=e.src,n=e.packages,r=void 0===n?[]:n,o=(0,i.useRef)(),a=["core","rxjs"].concat(r),s=(0,k.Z)().isDarkTheme;return(0,i.useEffect)((function(){var e=a.reduce((function(e,t){return Object.assign(e,P[t]),e}),{});b.embedProject(o.current,{description:"this is descrption",title:"Elf Core",files:{"index.html":"","index.ts":t},template:"typescript",dependencies:e,settings:{compile:{clearConsole:!0}}},{hideDevTools:!1,devToolsHeight:99,theme:s?"dark":"light",height:"500px"})}),[]),i.createElement("section",{style:{height:"500px"}},i.createElement("div",{ref:o}))}},2924:function(e,t,n){var i=n(7294).createContext(void 0);t.Z=i},5350:function(e,t,n){var i=n(7294),r=n(2924);t.Z=function(){var e=(0,i.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},428:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return l}});var i=n(3117),r=n(102),o=(n(7294),n(3905)),a=n(3688),s=["components"],c={},p="Entities Props Factory",d={unversionedId:"features/entities/entities-props-factory",id:"features/entities/entities-props-factory",isDocsHomePage:!1,title:"Entities Props Factory",description:"There are two built-in entities props included in Elf - withEntities and UIEntities. In addition to that, we can create our own entities props for our stores.",source:"@site/docs/features/entities/entities-props-factory.mdx",sourceDirName:"features/entities",slug:"/features/entities/entities-props-factory",permalink:"/elf/docs/features/entities/entities-props-factory",editUrl:"https://github.com/ngneat/elf/docusaurus/edit/main/website/docs/features/entities/entities-props-factory.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Active ID(s)",permalink:"/elf/docs/features/entities/active-ids"},next:{title:"Status",permalink:"/elf/docs/features/requests/requests-status"}},l=[],u={toc:l};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"entities-props-factory"},"Entities Props Factory"),(0,o.kt)("p",null,"There are two built-in entities props included in Elf - ",(0,o.kt)("a",{parentName:"p",href:"./entities"},(0,o.kt)("inlineCode",{parentName:"a"},"withEntities"))," and ",(0,o.kt)("a",{parentName:"p",href:"./ui-entities"},(0,o.kt)("inlineCode",{parentName:"a"},"UIEntities")),". In addition to that, we can create our own entities props for our stores."),(0,o.kt)("p",null,"Let's say we have a products page with a shopping cart. As well as managing a store for products, we must also maintain a shopping cart. We can create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"Store")," for our ",(0,o.kt)("inlineCode",{parentName:"p"},"cart")," or a ",(0,o.kt)("inlineCode",{parentName:"p"},"cart")," entity props in the same ",(0,o.kt)("inlineCode",{parentName:"p"},"products")," store."),(0,o.kt)("p",null,"First, let's create the ",(0,o.kt)("inlineCode",{parentName:"p"},"products")," store:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="products.repository.ts"',title:'"products.repository.ts"'},"import { createState, Store } from '@ngneat/elf';\nimport { withEntities } from '@ngneat/elf-entities';\n\ninterface Product {\n  id: number;\n  title: string;\n  price: number;\n}\n\nconst { state, config } = createState(withEntities<Product>());\n\nexport const productsStore = new Store({ name: 'products', config, state });\n")),(0,o.kt)("p",null,"Now we can add a ",(0,o.kt)("inlineCode",{parentName:"p"},"cart")," entities props to the same ",(0,o.kt)("inlineCode",{parentName:"p"},"store"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="products.repository.ts"',title:'"products.repository.ts"'},"import { createState, Store } from '@ngneat/elf';\nimport { withEntities, entitiesPropsFactory } from '@ngneat/elf-entities';\n\n// highlight-next-line\nconst { cartEntitiesRef, withCartEntities } = entitiesPropsFactory('cart');\n\ninterface Product {\n  id: number;\n  title: string;\n  price: number;\n}\n\ninterface CartItem {\n  id: Product['id'];\n  quantity: number;\n}\n\nconst { state, config } = createState(\n  withEntities<Product>(),\n  withCartEntities<CartItem>()\n);\n\nexport const productsStore = new Store({ name: 'products', config, state });\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"entitiesPropsFactory")," function takes the name of the ",(0,o.kt)("inlineCode",{parentName:"p"},"feature")," and returns ",(0,o.kt)("inlineCode",{parentName:"p"},"entitiesRef")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"entitiesProps")," we can use in our store."),(0,o.kt)("p",null,"In the above example, our final ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," shape will be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  entities: Record<number, Product>;\n  ids: number[];\n  // highlight-next-line\n  cartEntities: Record<number, CartItem>;\n  // highlight-next-line\n  cartIds: number[];\n}\n")),(0,o.kt)(a.S,{src:"import { createState, Store } from '@ngneat/elf';\nimport {\n  withEntities,\n  entitiesPropsFactory,\n  upsertEntitiesById,\n  addEntities,\n} from '@ngneat/elf-entities';\n\nconst { cartEntitiesRef, withCartEntities } = entitiesPropsFactory('cart');\n\ninterface Product {\n  id: number;\n  title: string;\n  price: number;\n}\n\ninterface CartItem {\n  id: Product['id'];\n  quantity: number;\n}\n\nconst { state, config } = createState(\n  withEntities<Product>(),\n  withCartEntities<CartItem>()\n);\n\nconst productsStore = new Store({ name: 'products', config, state });\n\nproductsStore.subscribe((value) => {\n  console.log(value);\n});\n\nproductsStore.update(\n  addEntities({ id: 1, title: 'one', price: 55 }),\n  upsertEntitiesById(1, {\n    updater: (e) => ({ ...e, quantity: e.quantity + 1 }),\n    creator: (id) => ({ id, quantity: 1 }),\n    ref: cartEntitiesRef,\n  })\n);\n",packages:["entities"],mdxType:"LiveDemo"}),(0,o.kt)("br",null),(0,o.kt)("p",null,"We can pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"cartEntitiesRef")," to each one of the built-in ",(0,o.kt)("a",{parentName:"p",href:"./entities#queries"},"queries")," and ",(0,o.kt)("a",{parentName:"p",href:"./entities#mutations"},"mutations"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="products.repository.ts"',title:'"products.repository.ts"'},"import { upsertEntitiesById } from '@ngneat/elf-entities';\n\nexport function updateCart(id: Product['id']) {\n  productsStore.update(\n    upsertEntitiesById(id, {\n      updater: (e) => ({ ...e, quantity: e.quantity + 1 }),\n      creator: (id) => ({ id, quantity: 1 }),\n      // highlight-next-line\n      ref: cartEntitiesRef,\n    })\n  );\n}\n")),(0,o.kt)("p",null,"One more use case for custom entities props is when we work with a normalized state. For example, we might have a ",(0,o.kt)("inlineCode",{parentName:"p"},"movies")," page, with ",(0,o.kt)("inlineCode",{parentName:"p"},"actors")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"genres"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="movies.repository.ts"',title:'"movies.repository.ts"'},"interface Actor {\n  id: string;\n  name: string;\n}\n\ninterface Genre {\n  id: string;\n  name: string;\n}\n\ninterface Movie {\n  id: string;\n  title: string;\n  genres: Array<Genre['id']>;\n  actors: Array<Actor['id']>;\n}\n\nconst { actorsEntitiesRef, withActorsEntities } =\n  entitiesPropsFactory('actors');\n\nconst { genresEntitiesRef, withGenresEntities } =\n  entitiesPropsFactory('genres');\n\nconst { state, config } = createState(\n  withEntities<Movie>(),\n  withGenresEntities<Genre>(),\n  withActorsEntities<Actor>()\n);\n\nconst store = new Store({ name: 'movies', state, config });\n\nstore.update(\n  addEntities({ id: '1', name: 'Nicolas cage' }, { ref: actorsEntitiesRef }),\n  addEntities({ id: '1', name: 'Action' }, { ref: genresEntitiesRef }),\n  addEntities({\n    id: '1',\n    title: 'Gone in 60 Seconds',\n    genres: ['1'],\n    actors: ['1'],\n  })\n);\n")))}f.isMDXComponent=!0}}]);