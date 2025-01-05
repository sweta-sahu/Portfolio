"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[438],{2773:(e,t,r)=>{r.d(t,{Am:()=>o,Ay:()=>s});var n=r(2115),a=r(5155);let i=["as","disabled"];function o({tagName:e,disabled:t,href:r,target:n,rel:a,role:i,onClick:o,tabIndex:l=0,type:s}){e||(e=null!=r||null!=n||null!=a?"a":"button");let d={tagName:e};if("button"===e)return[{type:s||"button",disabled:t},d];let u=n=>{var a;if(!t&&("a"!==e||(a=r)&&"#"!==a.trim())||n.preventDefault(),t){n.stopPropagation();return}null==o||o(n)};return"a"===e&&(r||(r="#"),t&&(r=void 0)),[{role:null!=i?i:"button",disabled:void 0,tabIndex:t?void 0:l,href:r,target:"a"===e?n:void 0,"aria-disabled":t||void 0,rel:"a"===e?a:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},d]}let l=n.forwardRef((e,t)=>{let{as:r,disabled:n}=e,l=function(e,t){if(null==e)return{};var r={};for(var n in e)if(({}).hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,i),[s,{tagName:d}]=o(Object.assign({tagName:r,disabled:n},l));return(0,a.jsx)(d,Object.assign({},l,s,{ref:t}))});l.displayName="Button";let s=l},5565:(e,t,r)=>{r.d(t,{default:()=>a.a});var n=r(4146),a=r.n(n)},7970:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return _}});let n=r(306),a=r(9955),i=r(5155),o=a._(r(2115)),l=n._(r(7650)),s=n._(r(6107)),d=r(666),u=r(1159),f=r(3621);r(2363);let c=r(3576),p=n._(r(5514)),m=r(5353),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e,t,r,n,a,i,o){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&a(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,a=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function y(e){return o.use?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let v=(0,o.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:a,height:l,width:s,decoding:d,className:u,style:f,fetchPriority:c,placeholder:p,loading:g,unoptimized:v,fill:b,onLoadRef:_,onLoadingCompleteRef:w,setBlurComplete:j,setShowAltText:x,sizesInput:C,onLoad:S,onError:P,...O}=e,N=(0,o.useCallback)(e=>{e&&(P&&(e.src=e.src),e.complete&&h(e,p,_,w,j,v,C))},[r,p,_,w,j,P,v,C]),M=(0,m.useMergedRef)(t,N);return(0,i.jsx)("img",{...O,...y(c),loading:g,width:s,height:l,decoding:d,"data-nimg":b?"fill":"1",className:u,style:f,sizes:a,srcSet:n,src:r,ref:M,onLoad:e=>{h(e.currentTarget,p,_,w,j,v,C)},onError:e=>{x(!0),"empty"!==p&&j(!0),P&&P(e)}})});function b(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...y(r.fetchPriority)};return t&&l.default.preload?(l.default.preload(r.src,n),null):(0,i.jsx)(s.default,{children:(0,i.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let _=(0,o.forwardRef)((e,t)=>{let r=(0,o.useContext)(c.RouterContext),n=(0,o.useContext)(f.ImageConfigContext),a=(0,o.useMemo)(()=>{let e=g||n||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:l,onLoadingComplete:s}=e,m=(0,o.useRef)(l);(0,o.useEffect)(()=>{m.current=l},[l]);let h=(0,o.useRef)(s);(0,o.useEffect)(()=>{h.current=s},[s]);let[y,_]=(0,o.useState)(!1),[w,j]=(0,o.useState)(!1),{props:x,meta:C}=(0,d.getImgProps)(e,{defaultLoader:p.default,imgConf:a,blurComplete:y,showAltText:w});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v,{...x,unoptimized:C.unoptimized,placeholder:C.placeholder,fill:C.fill,onLoadRef:m,onLoadingCompleteRef:h,setBlurComplete:_,setShowAltText:j,sizesInput:e.sizes,ref:t}),C.priority?(0,i.jsx)(b,{isAppRouter:!r,imgAttributes:x}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5353:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return a}});let n=r(2115);function a(e,t){let r=(0,n.useRef)(()=>{}),a=(0,n.useRef)(()=>{});return(0,n.useMemo)(()=>e&&t?n=>{null===n?(r.current(),a.current()):(r.current=i(e,n),a.current=i(t,n))}:e||t,[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3003:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});let n=r(306)._(r(2115)).default.createContext({})},675:(e,t)=>{function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},666:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),r(2363);let n=r(5859),a=r(1159);function i(e){return void 0!==e.default}function o(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var r;let l,s,d,{src:u,sizes:f,unoptimized:c=!1,priority:p=!1,loading:m,className:g,quality:h,width:y,height:v,fill:b=!1,style:_,overrideSrc:w,onLoad:j,onLoadingComplete:x,placeholder:C="empty",blurDataURL:S,fetchPriority:P,decoding:O="async",layout:N,objectFit:M,objectPosition:R,lazyBoundary:I,lazyRoot:E,...z}=e,{imgConf:A,showAltText:k,blurComplete:U,defaultLoader:D}=t,T=A||a.imageConfigDefault;if("allSizes"in T)l=T;else{let e=[...T.deviceSizes,...T.imageSizes].sort((e,t)=>e-t),t=T.deviceSizes.sort((e,t)=>e-t);l={...T,allSizes:e,deviceSizes:t}}if(void 0===D)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let B=z.loader||D;delete z.loader,delete z.srcSet;let L="__next_img_default"in B;if(L){if("custom"===l.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=B;B=t=>{let{config:r,...n}=t;return e(n)}}if(N){"fill"===N&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[N];e&&(_={..._,...e});let t={responsive:"100vw",fill:"100vw"}[N];t&&!f&&(f=t)}let F="",G=o(y),H=o(v);if((r=u)&&"object"==typeof r&&(i(r)||void 0!==r.src)){let e=i(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,d=e.blurHeight,S=S||e.blurDataURL,F=e.src,!b){if(G||H){if(G&&!H){let t=G/e.width;H=Math.round(e.height*t)}else if(!G&&H){let t=H/e.height;G=Math.round(e.width*t)}}else G=e.width,H=e.height}}let W=!p&&("lazy"===m||void 0===m);(!(u="string"==typeof u?u:F)||u.startsWith("data:")||u.startsWith("blob:"))&&(c=!0,W=!1),l.unoptimized&&(c=!0),L&&!l.dangerouslyAllowSVG&&u.split("?",1)[0].endsWith(".svg")&&(c=!0);let V=o(h),q=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:R}:{},k?{}:{color:"transparent"},_),$=U||"empty"===C?null:"blur"===C?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:G,heightInt:H,blurWidth:s,blurHeight:d,blurDataURL:S||"",objectFit:q.objectFit})+'")':'url("'+C+'")',J=$?{backgroundSize:q.objectFit||"cover",backgroundPosition:q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:$}:{},X=function(e){let{config:t,src:r,unoptimized:n,width:a,quality:i,sizes:o,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:d}=function(e,t,r){let{deviceSizes:n,allSizes:a}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:a.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:a,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>a.find(t=>t>=e)||a[a.length-1]))],kind:"x"}}(t,a,o),u=s.length-1;return{sizes:o||"w"!==d?o:"100vw",srcSet:s.map((e,n)=>l({config:t,src:r,quality:i,width:e})+" "+("w"===d?e:n+1)+d).join(", "),src:l({config:t,src:r,quality:i,width:s[u]})}}({config:l,src:u,unoptimized:c,width:G,quality:V,sizes:f,loader:B});return{props:{...z,loading:W?"lazy":m,fetchPriority:P,width:G,height:H,decoding:O,className:g,style:{...q,...J},sizes:X.sizes,srcSet:X.srcSet,src:w||X.src},meta:{unoptimized:c,priority:p,placeholder:C,fill:b}}}},6107:(e,t,r)=>{var n=r(2818);Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return h},defaultHead:function(){return c}});let a=r(306),i=r(9955),o=r(5155),l=i._(r(2115)),s=a._(r(1172)),d=r(3003),u=r(1147),f=r(675);function c(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(2363);let m=["name","httpEquiv","charSet","itemProp"];function g(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return a=>{let i=!0,o=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){o=!0;let t=a.key.slice(a.key.indexOf("$")+1);e.has(t)?i=!1:e.add(t)}switch(a.type){case"title":case"base":t.has(a.type)?i=!1:t.add(a.type);break;case"meta":for(let e=0,t=m.length;e<t;e++){let t=m[e];if(a.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?i=!1:r.add(t);else{let e=a.props[t],r=n[t]||new Set;("name"!==t||!o)&&r.has(e)?i=!1:(r.add(e),n[t]=r)}}}}return i}}()).reverse().map((e,t)=>{let a=e.key||t;if(n.env.__NEXT_OPTIMIZE_FONTS&&!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,l.default.cloneElement(e,t)}return l.default.cloneElement(e,{key:a})})}let h=function(e){let{children:t}=e,r=(0,l.useContext)(d.AmpStateContext),n=(0,l.useContext)(u.HeadManagerContext);return(0,o.jsx)(s.default,{reduceComponentsToState:g,headManager:n,inAmpMode:(0,f.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5859:(e,t)=>{function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:a,blurDataURL:i,objectFit:o}=e,l=n?40*n:t,s=a?40*a:r,d=l&&s?"viewBox='0 0 "+l+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},3621:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return i}});let n=r(306)._(r(2115)),a=r(1159),i=n.default.createContext(a.imageConfigDefault)},1159:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],unoptimized:!1}},4146:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return s},getImageProps:function(){return l}});let n=r(306),a=r(666),i=r(7970),o=n._(r(5514));function l(e){let{props:t}=(0,a.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let s=i.Image},5514:(e,t)=>{function r(e){let{config:t,src:r,width:n,quality:a}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(a||75)+(r.startsWith("/_next/static/media/"),"")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},3576:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return n}});let n=r(306)._(r(2115)).default.createContext(null)},1172:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let n=r(2115),a="undefined"==typeof window,i=a?()=>{}:n.useLayoutEffect,o=a?()=>{}:n.useEffect;function l(e){let{headManager:t,reduceComponentsToState:r}=e;function l(){if(t&&t.mountedInstances){let a=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(a,e))}}if(a){var s;null==t||null==(s=t.mountedInstances)||s.add(e.children),l()}return i(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),i(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),o(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},2963:(e,t,r)=>{r.d(t,{A:()=>u});var n=r(4617),a=r.n(n),i=r(2115),o=r(2773),l=r(1653),s=r(5155);let d=i.forwardRef((e,t)=>{let{as:r,bsPrefix:n,variant:i="primary",size:d,active:u=!1,disabled:f=!1,className:c,...p}=e,m=(0,l.oU)(n,"btn"),[g,{tagName:h}]=(0,o.Am)({tagName:r,disabled:f,...p});return(0,s.jsx)(h,{...g,...p,ref:t,disabled:f,className:a()(c,m,u&&"active",i&&"".concat(m,"-").concat(i),d&&"".concat(m,"-").concat(d),p.href&&f&&"disabled")})});d.displayName="Button";let u=d},2981:(e,t,r)=>{r.d(t,{A:()=>j});var n=r(4617),a=r.n(n),i=r(2115),o=r(1653),l=r(5155);let s=i.forwardRef((e,t)=>{let{className:r,bsPrefix:n,as:i="div",...s}=e;return n=(0,o.oU)(n,"card-body"),(0,l.jsx)(i,{ref:t,className:a()(r,n),...s})});s.displayName="CardBody";let d=i.forwardRef((e,t)=>{let{className:r,bsPrefix:n,as:i="div",...s}=e;return n=(0,o.oU)(n,"card-footer"),(0,l.jsx)(i,{ref:t,className:a()(r,n),...s})});d.displayName="CardFooter";var u=r(7251);let f=i.forwardRef((e,t)=>{let{bsPrefix:r,className:n,as:s="div",...d}=e,f=(0,o.oU)(r,"card-header"),c=(0,i.useMemo)(()=>({cardHeaderBsPrefix:f}),[f]);return(0,l.jsx)(u.A.Provider,{value:c,children:(0,l.jsx)(s,{ref:t,...d,className:a()(n,f)})})});f.displayName="CardHeader";let c=i.forwardRef((e,t)=>{let{bsPrefix:r,className:n,variant:i,as:s="img",...d}=e,u=(0,o.oU)(r,"card-img");return(0,l.jsx)(s,{ref:t,className:a()(i?"".concat(u,"-").concat(i):u,n),...d})});c.displayName="CardImg";let p=i.forwardRef((e,t)=>{let{className:r,bsPrefix:n,as:i="div",...s}=e;return n=(0,o.oU)(n,"card-img-overlay"),(0,l.jsx)(i,{ref:t,className:a()(r,n),...s})});p.displayName="CardImgOverlay";let m=i.forwardRef((e,t)=>{let{className:r,bsPrefix:n,as:i="a",...s}=e;return n=(0,o.oU)(n,"card-link"),(0,l.jsx)(i,{ref:t,className:a()(r,n),...s})});m.displayName="CardLink";var g=r(7449);let h=(0,g.A)("h6"),y=i.forwardRef((e,t)=>{let{className:r,bsPrefix:n,as:i=h,...s}=e;return n=(0,o.oU)(n,"card-subtitle"),(0,l.jsx)(i,{ref:t,className:a()(r,n),...s})});y.displayName="CardSubtitle";let v=i.forwardRef((e,t)=>{let{className:r,bsPrefix:n,as:i="p",...s}=e;return n=(0,o.oU)(n,"card-text"),(0,l.jsx)(i,{ref:t,className:a()(r,n),...s})});v.displayName="CardText";let b=(0,g.A)("h5"),_=i.forwardRef((e,t)=>{let{className:r,bsPrefix:n,as:i=b,...s}=e;return n=(0,o.oU)(n,"card-title"),(0,l.jsx)(i,{ref:t,className:a()(r,n),...s})});_.displayName="CardTitle";let w=i.forwardRef((e,t)=>{let{bsPrefix:r,className:n,bg:i,text:d,border:u,body:f=!1,children:c,as:p="div",...m}=e,g=(0,o.oU)(r,"card");return(0,l.jsx)(p,{ref:t,...m,className:a()(n,g,i&&"bg-".concat(i),d&&"text-".concat(d),u&&"border-".concat(u)),children:f?(0,l.jsx)(s,{children:c}):c})});w.displayName="Card";let j=Object.assign(w,{Img:c,Title:_,Subtitle:y,Body:s,Link:m,Text:v,Header:f,Footer:d,ImgOverlay:p})},4216:(e,t,r)=>{r.d(t,{A:()=>d});var n=r(4617),a=r.n(n),i=r(2115),o=r(1653),l=r(5155);let s=i.forwardRef((e,t)=>{let{bsPrefix:r,variant:n,animation:i="border",size:s,as:d="div",className:u,...f}=e;r=(0,o.oU)(r,"spinner");let c="".concat(r,"-").concat(i);return(0,l.jsx)(d,{ref:t,...f,className:a()(u,c,s&&"".concat(c,"-").concat(s),n&&"text-".concat(n))})});s.displayName="Spinner";let d=s}}]);