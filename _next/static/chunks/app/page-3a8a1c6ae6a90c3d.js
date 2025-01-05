(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{7246:(e,t,n)=>{Promise.resolve().then(n.bind(n,4458))},2773:(e,t,n)=>{"use strict";n.d(t,{Am:()=>s,Ay:()=>o});var a=n(2115),i=n(5155);let l=["as","disabled"];function s({tagName:e,disabled:t,href:n,target:a,rel:i,role:l,onClick:s,tabIndex:r=0,type:o}){e||(e=null!=n||null!=a||null!=i?"a":"button");let d={tagName:e};if("button"===e)return[{type:o||"button",disabled:t},d];let c=a=>{var i;if(!t&&("a"!==e||(i=n)&&"#"!==i.trim())||a.preventDefault(),t){a.stopPropagation();return}null==s||s(a)};return"a"===e&&(n||(n="#"),t&&(n=void 0)),[{role:null!=l?l:"button",disabled:void 0,tabIndex:t?void 0:r,href:n,target:"a"===e?a:void 0,"aria-disabled":t||void 0,rel:"a"===e?i:void 0,onClick:c,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),c(e))}},d]}let r=a.forwardRef((e,t)=>{let{as:n,disabled:a}=e,r=function(e,t){if(null==e)return{};var n={};for(var a in e)if(({}).hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;n[a]=e[a]}return n}(e,l),[o,{tagName:d}]=s(Object.assign({tagName:n,disabled:a},r));return(0,i.jsx)(d,Object.assign({},r,o,{ref:t}))});r.displayName="Button";let o=r},2963:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var a=n(4617),i=n.n(a),l=n(2115),s=n(2773),r=n(1653),o=n(5155);let d=l.forwardRef((e,t)=>{let{as:n,bsPrefix:a,variant:l="primary",size:d,active:c=!1,disabled:u=!1,className:f,...h}=e,m=(0,r.oU)(a,"btn"),[g,{tagName:p}]=(0,s.Am)({tagName:n,disabled:u,...h});return(0,o.jsx)(p,{...g,...h,ref:t,disabled:u,className:i()(f,m,c&&"active",l&&"".concat(m,"-").concat(l),d&&"".concat(m,"-").concat(d),h.href&&u&&"disabled")})});d.displayName="Button";let c=d},4458:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>p});var a=n(5155),i=n(4798),l=n(6121),s=n(3667);function r(){return(0,a.jsx)("div",{style:{backgroundColor:"#f8f9fa",padding:"60px 0"},children:(0,a.jsxs)(i.default,{children:[(0,a.jsx)(l.default,{children:(0,a.jsx)(s.default,{children:(0,a.jsx)("h2",{className:"text-center mb-5",style:{fontSize:"2.5rem",fontWeight:"bold",color:"#002855",textTransform:"uppercase"},children:"About Me"})})}),(0,a.jsx)(l.default,{className:"align-items-center",children:(0,a.jsxs)(s.default,{md:12,lg:8,className:"mx-auto",children:[(0,a.jsx)("p",{className:"lead",style:{color:"#333",fontSize:"1.2rem"},children:"Hi! I'm a passionate Computer Science and Engineering graduate student at the University at Buffalo, specializing in Artificial Intelligence and Machine Learning. With 3+ years of professional experience as a software developer, I've honed my skills in creating innovative solutions through backend development, full-stack engineering, and cutting-edge AI/ML applications."}),(0,a.jsx)("p",{style:{color:"#555"},children:"Throughout my career, I've had the opportunity to:"}),(0,a.jsxs)("ul",{style:{color:"#555",marginLeft:"20px"},children:[(0,a.jsx)("li",{children:"Lead backend teams to design scalable microservices and REST APIs using Spring Boot and ReactJS."}),(0,a.jsx)("li",{children:"Deploy applications on AWS, manage database migrations, and build intelligent systems for data clustering and video analytics."}),(0,a.jsx)("li",{children:"Collaborate on impactful projects, including customer churn analysis and high-accuracy chatbot development using LSTMs."})]}),(0,a.jsx)("p",{style:{color:"#555"},children:"My curiosity drives me to explore the intersections of data analysis, software engineering, and machine learning to create solutions that transform real-world challenges into success stories."}),(0,a.jsx)("p",{style:{color:"#555"},children:"I thrive in fast-paced, collaborative environments where innovation and adaptability are key. Whether it's building APIs for seamless communication, diving into complex datasets for actionable insights, or optimizing code for scalability, I am committed to delivering quality and value."}),(0,a.jsx)("p",{style:{fontWeight:"bold",color:"#002855"},children:"Looking for opportunities: AI/ML Engineer, Data Scientist, Data Engineer, or Software Developer."})]})})]})})}var o=n(2800),d=n(2963),c=n(2115),u=n(4617),f=n.n(u),h=n(1653);let m=c.forwardRef((e,t)=>{let{bsPrefix:n,variant:i,animation:l="border",size:s,as:r="div",className:o,...d}=e;n=(0,h.oU)(n,"spinner");let c="".concat(n,"-").concat(l);return(0,a.jsx)(r,{ref:t,...d,className:f()(o,c,s&&"".concat(c,"-").concat(s),i&&"text-".concat(i))})});m.displayName="Spinner";let g=()=>{let[e,t]=(0,c.useState)(0),n=["Learn","Create","Repeat"];return(0,c.useEffect)(()=>{let e=setInterval(()=>{t(e=>(e+1)%n.length)},1e3);return()=>clearInterval(e)},[]),(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100vh",width:"100vw",background:"linear-gradient(120deg, #001f3f, #002855)",color:"#fff",margin:"0",padding:"0"},children:[(0,a.jsx)("div",{style:{position:"relative",width:"80px",height:"80px",marginBottom:"20px"},children:(0,a.jsx)(m,{animation:"border",role:"status",style:{width:"100%",height:"100%",borderWidth:"6px",color:"#00b3b3"},children:(0,a.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}),(0,a.jsx)("div",{style:{fontSize:"24px",fontWeight:"bold",animation:"fadeIn 1s ease-in-out"},children:n[e]}),(0,a.jsx)("style",{children:"\n          @keyframes fadeIn {\n            0% {\n              opacity: 0;\n            }\n            100% {\n              opacity: 1;\n            }\n          }\n        "})]})},p=function(){let[e,t]=(0,c.useState)(!0);return((0,c.useEffect)(()=>{let e=setTimeout(()=>t(!1),3e3);return()=>clearTimeout(e)},[]),e)?(0,a.jsx)(g,{}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("section",{id:"home",style:{background:"linear-gradient(180deg, #001f3f, #002855)",color:"#fff",padding:"80px 0"},children:(0,a.jsx)(i.default,{children:(0,a.jsxs)(l.default,{className:"align-items-center",children:[(0,a.jsxs)(s.default,{md:6,className:"text-center text-md-start",children:[(0,a.jsxs)("h1",{className:"display-4 mb-4",children:["Hi, I'm ",(0,a.jsx)("span",{style:{color:"#00b3b3"},children:"Sweta Sahu"})]}),(0,a.jsx)("p",{className:"lead mb-4",children:"Passionate graduate student in Computer Science Engineering specializing in AI/ML, with 3+ years of software development experience."}),(0,a.jsx)(d.A,{variant:"light",className:"me-3",href:"https://drive.google.com/file/d/1w8LDmNsZyy-4uiVpJWDnvGucwidvmku_/view?usp=drive_link",target:"_blank",style:{color:"#002855",backgroundColor:"#00b3b3",borderColor:"#00b3b3"},children:"View Resume"}),(0,a.jsx)(d.A,{variant:"outline-light",href:"mailto:swetasah@buffalo.edu",children:"Contact Me"})]}),(0,a.jsx)(s.default,{md:6,className:"text-center",children:(0,a.jsx)("img",{src:"/assets/developer.png",alt:"Sweta Sahu",className:"img-fluid rounded shadow",style:{border:"2px solid #00b3b3",maxWidth:"80%",height:"auto"}})})]})})}),(0,a.jsx)("section",{id:"about",style:{backgroundColor:"#f4f4f4",padding:"80px 0"},children:(0,a.jsx)(i.default,{children:(0,a.jsx)(r,{})})}),(0,a.jsx)("section",{id:"skills",style:{backgroundColor:"#fff",padding:"80px 0"},children:(0,a.jsx)(i.default,{children:(0,a.jsx)(o.default,{})})})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[740,711,362,206,848,800,441,517,358],()=>t(7246)),_N_E=e.O()}]);