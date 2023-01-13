var B=Object.defineProperty;var i=(e,t)=>B(e,"name",{value:t,configurable:!0});import{r}from"./index-34e51894.js";import{$ as R,a as z}from"./index.module-01611672.js";import{r as D}from"./index-75cd1920.js";import{j as p,F as g}from"./jsx-runtime-da4cfb3b.js";import{I as W,r as F}from"./IconBase.esm-cd524d34.js";function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},y.apply(this,arguments)}i(y,"_extends$1");function K(e,t=[]){let n=[];function o(s,f){const u=r.createContext(f),d=n.length;n=[...n,f];function a(l){const{scope:h,children:m,...$}=l,N=(h==null?void 0:h[e][d])||u,v=r.useMemo(()=>$,Object.values($));return r.createElement(N.Provider,{value:v},m)}i(a,"Provider");function b(l,h){const m=(h==null?void 0:h[e][d])||u,$=r.useContext(m);if($)return $;if(f!==void 0)return f;throw new Error(`\`${l}\` must be used within \`${s}\``)}return i(b,"useContext"),a.displayName=s+"Provider",[a,b]}i(o,"$c512c27ab02ef895$export$fd42f52fd3ae1109");const c=i(()=>{const s=n.map(f=>r.createContext(f));return i(function(u){const d=(u==null?void 0:u[e])||s;return r.useMemo(()=>({[`__scope${e}`]:{...u,[e]:d}}),[u,d])},"useScope")},"createScope");return c.scopeName=e,[o,q(c,...t)]}i(K,"$c512c27ab02ef895$export$50c7b4e9d9f19c1");function q(...e){const t=e[0];if(e.length===1)return t;const n=i(()=>{const o=e.map(c=>({useScope:c(),scopeName:c.scopeName}));return i(function(s){const f=o.reduce((u,{useScope:d,scopeName:a})=>{const l=d(s)[`__scope${a}`];return{...u,...l}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:f}),[f])},"useComposedScopes")},"createScope1");return n.scopeName=t.scopeName,n}i(q,"$c512c27ab02ef895$var$composeContextScopes");function A(e,t,{checkForDefaultPrevented:n=!0}={}){return i(function(c){if(e==null||e(c),n===!1||!c.defaultPrevented)return t==null?void 0:t(c)},"handleEvent")}i(A,"$e42e1063c40fb3ef$export$b9ecd428b558ff10");function w(e){const t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...n)=>{var o;return(o=t.current)===null||o===void 0?void 0:o.call(t,...n)},[])}i(w,"$b1b2314f5f9a1d84$export$25bec8c6f54ee79a");function X({prop:e,defaultProp:t,onChange:n=i(()=>{},"onChange")}){const[o,c]=Y({defaultProp:t,onChange:n}),s=e!==void 0,f=s?e:o,u=w(n),d=r.useCallback(a=>{if(s){const l=typeof a=="function"?a(e):a;l!==e&&u(l)}else c(a)},[s,e,c,u]);return[f,d]}i(X,"$71cd76cc60e0454e$export$6f32135080cb4c3");function Y({defaultProp:e,onChange:t}){const n=r.useState(e),[o]=n,c=r.useRef(o),s=w(t);return r.useEffect(()=>{c.current!==o&&(s(o),c.current=o)},[o,c,s]),n}i(Y,"$71cd76cc60e0454e$var$useUncontrolledState");function H(e){const t=r.useRef({value:e,previous:e});return r.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}i(H,"$010c2913dbd2fe3d$export$5cae361ad82dce8b");const P=Boolean(globalThis==null?void 0:globalThis.document)?r.useLayoutEffect:()=>{};function Z(e){const[t,n]=r.useState(void 0);return P(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const o=new ResizeObserver(c=>{if(!Array.isArray(c)||!c.length)return;const s=c[0];let f,u;if("borderBoxSize"in s){const d=s.borderBoxSize,a=Array.isArray(d)?d[0]:d;f=a.inlineSize,u=a.blockSize}else f=e.offsetWidth,u=e.offsetHeight;n({width:f,height:u})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else n(void 0)},[e]),t}i(Z,"$db6c3485150b8e66$export$1ab7ae714698c4b8");function G(e,t){return r.useReducer((n,o)=>{const c=t[n][o];return c??n},e)}i(G,"$fe963b355347cc68$export$3e6543de14f8614f");const M=i(e=>{const{present:t,children:n}=e,o=J(t),c=typeof n=="function"?n({present:o.isPresent}):r.Children.only(n),s=R(o.ref,c.ref);return typeof n=="function"||o.isPresent?r.cloneElement(c,{ref:s}):null},"$921a889cee6df7e8$export$99c2b779aa4e8b8b");M.displayName="Presence";function J(e){const[t,n]=r.useState(),o=r.useRef({}),c=r.useRef(e),s=r.useRef("none"),f=e?"mounted":"unmounted",[u,d]=G(f,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return r.useEffect(()=>{const a=S(o.current);s.current=u==="mounted"?a:"none"},[u]),P(()=>{const a=o.current,b=c.current;if(b!==e){const h=s.current,m=S(a);e?d("MOUNT"):m==="none"||(a==null?void 0:a.display)==="none"?d("UNMOUNT"):d(b&&h!==m?"ANIMATION_OUT":"UNMOUNT"),c.current=e}},[e,d]),P(()=>{if(t){const a=i(l=>{const m=S(o.current).includes(l.animationName);l.target===t&&m&&D.flushSync(()=>d("ANIMATION_END"))},"handleAnimationEnd"),b=i(l=>{l.target===t&&(s.current=S(o.current))},"handleAnimationStart");return t.addEventListener("animationstart",b),t.addEventListener("animationcancel",a),t.addEventListener("animationend",a),()=>{t.removeEventListener("animationstart",b),t.removeEventListener("animationcancel",a),t.removeEventListener("animationend",a)}}else d("ANIMATION_END")},[t,d]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:r.useCallback(a=>{a&&(o.current=getComputedStyle(a)),n(a)},[])}}i(J,"$921a889cee6df7e8$var$usePresence");function S(e){return(e==null?void 0:e.animationName)||"none"}i(S,"$921a889cee6df7e8$var$getAnimationName");function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},_.apply(this,arguments)}i(_,"_extends");const Q=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"],I=Q.reduce((e,t)=>{const n=r.forwardRef((o,c)=>{const{asChild:s,...f}=o,u=s?z:t;return r.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),r.createElement(u,_({},f,{ref:c}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),T="Checkbox",[V,me]=K(T),[ee,te]=V(T),ne=r.forwardRef((e,t)=>{const{__scopeCheckbox:n,name:o,checked:c,defaultChecked:s,required:f,disabled:u,value:d="on",onCheckedChange:a,...b}=e,[l,h]=r.useState(null),m=R(t,x=>h(x)),$=r.useRef(!1),N=l?Boolean(l.closest("form")):!0,[v=!1,U]=X({prop:c,defaultProp:s,onChange:a});return r.createElement(ee,{scope:n,state:v,disabled:u},r.createElement(I.button,y({type:"button",role:"checkbox","aria-checked":C(v)?"mixed":v,"aria-required":f,"data-state":L(v),"data-disabled":u?"":void 0,disabled:u,value:d},b,{ref:m,onKeyDown:A(e.onKeyDown,x=>{x.key==="Enter"&&x.preventDefault()}),onClick:A(e.onClick,x=>{U(O=>C(O)?!0:!O),N&&($.current=x.isPropagationStopped(),$.current||x.stopPropagation())})})),N&&r.createElement(ce,{control:l,bubbles:!$.current,name:o,value:d,checked:v,required:f,disabled:u,style:{transform:"translateX(-100%)"}}))}),oe="CheckboxIndicator",re=r.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:o,...c}=e,s=te(oe,n);return r.createElement(M,{present:o||C(s.state)||s.state===!0},r.createElement(I.span,y({"data-state":L(s.state),"data-disabled":s.disabled?"":void 0},c,{ref:t,style:{pointerEvents:"none",...e.style}})))}),ce=i(e=>{const{control:t,checked:n,bubbles:o=!0,...c}=e,s=r.useRef(null),f=H(n),u=Z(t);return r.useEffect(()=>{const d=s.current,a=window.HTMLInputElement.prototype,l=Object.getOwnPropertyDescriptor(a,"checked").set;if(f!==n&&l){const h=new Event("click",{bubbles:o});d.indeterminate=C(n),l.call(d,C(n)?!1:n),d.dispatchEvent(h)}},[f,n,o]),r.createElement("input",y({type:"checkbox","aria-hidden":!0,defaultChecked:C(n)?!1:n},c,{tabIndex:-1,ref:s,style:{...e.style,...u,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))},"$e698a72e93240346$var$BubbleInput");function C(e){return e==="indeterminate"}i(C,"$e698a72e93240346$var$isIndeterminate");function L(e){return C(e)?"indeterminate":e?"checked":"unchecked"}i(L,"$e698a72e93240346$var$getState");const se=ne,ae=re;var k=new Map;k.set("bold",function(e){return p(g,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})})});k.set("duotone",function(e){return p(g,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});k.set("fill",function(){return p(g,{children:p("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"})})});k.set("light",function(e){return p(g,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})})});k.set("thin",function(e){return p(g,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})})});k.set("regular",function(e){return p(g,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});var ie=i(function(t,n){return F(t,n,k)},"renderPath"),j=r.forwardRef(function(e,t){return p(W,{...Object.assign({ref:t},e,{renderPath:ie})})});j.displayName="Check";const ue=j;function E({}){return p(se,{className:"w-6 h-6 p-[2px] bg-gray-800 rounded",children:p(ae,{asChild:!0,children:p(ue,{weight:"bold",className:"h-5 w-5 text-cyan-500"})})})}i(E,"Checkbox");try{E.displayName="Checkbox",E.__docgenInfo={description:"",displayName:"Checkbox",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox.tsx#Checkbox"]={docgenInfo:E.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox.tsx#Checkbox"})}catch{}export{E as C};
//# sourceMappingURL=Checkbox-235a9154.js.map
