"use strict";(self.webpackChunkinternetordersfrondend=self.webpackChunkinternetordersfrondend||[]).push([[301],{301:(n,e,i)=>{i.r(e),i.d(e,{default:()=>v});var t=i(43),p=i(899);const x=(0,p.Ik)().shape({email:(0,p.Yj)().email("\u041d\u0435 \u043a\u043e\u0440\u0435\u043a\u0442\u043d\u0430 E-mail").required("\u041f\u043e\u043b\u0435 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435!"),password:(0,p.Yj)().required("\u041f\u043e\u043b\u0435 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435!").min(6,"\u041f\u0430\u0440\u043e\u043b\u044c \u043c\u0430\u0454 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 6 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432")});var l=i(239),m=i(3);const a=m.d4,s=m.wA;var o=i(475);const r=(0,p.Ik)().shape({email:(0,p.Yj)().email("\u041d\u0435 \u043a\u043e\u0440\u0435\u043a\u0442\u043d\u0430 E-mail").required("\u041f\u043e\u043b\u0435 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435!"),firstName:(0,p.Yj)().required("\u041f\u043e\u043b\u0435 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435!"),secondName:(0,p.Yj)().required("\u041f\u043e\u043b\u0435 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435!"),password:(0,p.Yj)().required().min(6,"\u041f\u0430\u0440\u043e\u043b\u044c \u043c\u0430\u0454 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 6 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432")});var c=i(579);const d=n=>{let{title:e="",background:i="transparent",image:t="",sizeBtn:p="small",additionalImage:x="",type:l="button",disabled:m=!1,onClickHandler:a}=n;const s={transparent:{background:"transparent",color:"black"},black:{background:"bg-black",color:"text-white"},white:{background:"bg-white",color:"text-black"},huge:"px-6 py-4 w-full",small:"p-2 size-10",google:{additionalImage:"bg-[url('/src/images/EnterIcon.svg')]"}},o=`block border disabled:bg-[#9AA5B1] disabled:border-0 min-[744px]:col-span-1 hover:bg-[#BBEE85] outline-black transition duration-300 ease-in-out min-[375px]:col-span-2 border-black ${s[i].background} ${s[p]}`;return(0,c.jsxs)("button",{type:l,className:o,onClick:a,disabled:m,children:[e&&(0,c.jsxs)("div",{className:"flex justify-center items-center gap-2",children:[(0,c.jsx)("p",{className:`block text-btn text-nowrap ${s[i].color}`,children:e}),x&&(0,c.jsx)("div",{className:"relative block size-6",children:(0,c.jsx)("div",{className:`absolute block size-full ${s[x].additionalImage} bg-cover`})})]}),t&&(0,c.jsx)("div",{className:"relative block w-full pb-[100%]",children:(0,c.jsx)("div",{className:"absolute block size-full bg-[url('/src/images/Back.svg')] bg-cover"})})]})};var f=i(139),u=i.n(f);const g=n=>{let{type:e,placeholder:i,name:t,value:p,setValue:x,errors:l}=n;const m=l.length>0;return(0,c.jsxs)("div",{children:[(0,c.jsx)("input",{type:e,placeholder:i,name:t,id:t,value:p,onChange:n=>x(n.target.value),className:u()("block size-full px-6 py-4 bg-white font-lato text-input text-[#525A63] outline-none focus:border-2 focus:border-black ",{"border-2 border-[#E4E7EE]":!m},{"border-2 border-[#B20508]":m})}),m&&(0,c.jsx)("p",{className:"font-medium font-lato text-sm pl-4",children:l[0]})]})};var b=i(950);const h=(0,t.forwardRef)(((n,e)=>{const[i,p]=(0,t.useState)(""),[x,l]=(0,t.useState)(""),[m,a]=(0,t.useState)(""),[s,o]=(0,t.useState)(""),r=(0,t.useRef)(null);(0,t.useImperativeHandle)(e,(()=>({showModal:n=>{let{title:e,description:i,leftBtnText:t,rightBtnText:x}=n;r.current&&(p(e),l(i||""),a(t),o(x),r.current.showModal())},hideModal:()=>{r.current&&r.current.close()}})));const f=()=>{r.current&&r.current.close()};return(0,b.createPortal)((0,c.jsx)("dialog",{ref:r,className:"absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] border border-2 bg-white p-10 backdrop:bg-black/40 w-max",children:(0,c.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,c.jsx)("div",{className:"block w-32",children:(0,c.jsx)("div",{className:"relative block size-full pb-[77%]",children:(0,c.jsx)("div",{className:"absolute size-full bg-[url('/src/images/Hendcheese.svg')] bg-cover"})})}),(0,c.jsxs)("div",{children:[(0,c.jsx)("h1",{className:"block uppercase font-oswald font-medium tracking-tighter text-3xl",children:i}),x&&(0,c.jsx)("p",{className:"block pt-2 text-[#525A63] font-semibold font-base font-lato",children:x})]}),(0,c.jsxs)("div",{className:"grid grid-cols-2 gap-x-3 min-[375px]:gap-y-3",children:[(0,c.jsx)(d,{sizeBtn:"huge",title:m,background:"white",onClickHandler:f}),(0,c.jsx)(d,{sizeBtn:"huge",title:s,background:"black",onClickHandler:f})]})]})}),document.getElementsByTagName("body")[0])}));const k=(0,i(95).X1)((n=>{let{inputRef:e,...i}=n;const{type:t,placeholder:p,name:x,value:l,setValue:m,errors:a}=i,s=a.length>0;return(0,c.jsx)("input",{ref:e,type:t,placeholder:p,autoComplete:"off",name:x,id:x,value:l,onChange:n=>m(n.target.value),className:u()("block size-full px-6 py-4 bg-white font-lato text-input text-[#525A63] outline-none focus:border-2 focus:border-black ",{"border-2 border-[#E4E7EE]":!s},{"border-2 border-[#B20508]":s})})})),v=()=>{const[n,e]=(0,t.useState)(""),[i,p]=(0,t.useState)(""),[m,f]=(0,t.useState)({}),[u,v]=(0,t.useState)(""),[j,w]=(0,t.useState)(""),[N,y]=(0,t.useState)(""),z=(0,t.useRef)(),B=(a((n=>n.auth)),s()),[E,S]=(0,o.ok)(),A=E.get("mode"),C="block font-medium font-lato text-xl",I="min-[375px]:block min-[375px]:font-lato",T={login:{title:"\u0423\u0432\u0456\u0439\u0434\u0456\u0442\u044c \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442",description:"\u0429\u043e\u0431 \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0437\u043d\u0438\u0436\u043a\u0438, \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043d\u044f \u0456\u0441\u0442\u043e\u0440\u0456\u0457 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u044c, \u0448\u0432\u0438\u0434\u043a\u0438\u0439 \u0434\u043e\u0441\u0442\u0443\u043f \u0434\u043e \u043f\u0440\u043e\u0444\u0456\u043b\u044e \u0442\u0430 \u0432\u0456\u0434\u0441\u0442\u0435\u0436\u0435\u043d\u043d\u044f \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u044c"},register:{title:"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0439\u0442\u0435\u0441\u044c",description:"\u0429\u043e\u0431 \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0437\u043d\u0438\u0436\u043a\u0438, \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043d\u044f \u0456\u0441\u0442\u043e\u0440\u0456\u0457 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u044c, \u0448\u0432\u0438\u0434\u043a\u0438\u0439 \u0434\u043e\u0441\u0442\u0443\u043f \u0434\u043e \u043f\u0440\u043e\u0444\u0456\u043b\u044e \u0442\u0430 \u0432\u0456\u0434\u0441\u0442\u0435\u0436\u0435\u043d\u043d\u044f \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u044c"},phone:{title:"\u0434\u043e\u0434\u0430\u0439\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443",description:"\u0429\u043e\u0431 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0438 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044e"}},V=n=>{f((e=>({...e,[n]:[]})))};return(0,c.jsxs)("main",{className:"min-[1440px]:block min-[1440px]:pt-6 min-[1440px]:px-10 min-[1440px]:pb-20 \n        min-[1000px]:block min-[1000px]:pt-6 min-[1000px]:px-6 min-[1000px]:pb-20 \n        min-[480px]:block min-[480px]:pt-6 min-[480px]:px-4 min-[480px]:pb-16 \n        min-[375px]:block min-[375px]:pt-6 min-[375px]:px-4 min-[375px]:pb-16 \n        min-[744px]:block min-[744px]:pt-6 min-[744px]:px-3 min-[744px]:pb-20",children:[(0,c.jsx)("section",{children:(0,c.jsx)(d,{image:"Back.svg",background:"transparent"})}),(0,c.jsxs)("section",{children:[(0,c.jsx)("div",{className:"\n                min-[1000px]:grid min-[1000px]:grid-cols-12 min-[1000px]:gap-x-5 min-[1000px]:size-full \n                min-[1440px]:grid min-[1440px]:grid-cols-12 min-[1440px]:gap-x-5 min-[1440px]:size-full \n                min-[480px]:grid min-[480px]:grid-cols-4 min-[480px]:gap-x-4 min-[480px]:size-full min-[480px]:pt-6 \n                min-[744px]:grid min-[744px]:grid-cols-12 min-[744px]:gap-x-5 min-[744px]:size-full min-[744px]:pt-6 \n                min-[375px]:grid min-[375px]:grid-cols-4 min-[375px]:gap-x-4 min-[375px]:size-full min-[375px]:pt-6",children:(0,c.jsxs)("div",{className:"\n                    min-[1000px]:col-start-4 min-[1000px]:col-end-10\n                    min-[1440px]:col-start-5 min-[1440px]:col-end-9\n                    min-[375px]:col-start-1 min-[375px]:col-end-5\n                    min-[480px]:col-start-1 min-[480px]:col-end-5 \n                    min-[744px]:col-start-1 min-[744px]:col-end-7",children:[(0,c.jsx)("h1",{className:"\n                        min-[1000px]:uppercase min-[1000px]:font-medium min-[1000px]:tracking-tight min-[1000px]:font-oswald min-[1000px]:text-3xl\n                        min-[1440px]:uppercase min-[1440px]:font-medium min-[1440px]:tracking-tight min-[1440px]:font-oswald min-[1440px]:text-3xl\n                        min-[744px]:uppercase min-[744px]:font-medium min-[744px]:tracking-tight min-[744px]:font-oswald min-[744px]:text-3xl\n                        min-[480px]:uppercase min-[480px]:font-medium min-[480px]:tracking-tight min-[480px]:font-oswald min-[480px]:text-3xl\n                        min-[375px]:uppercase min-[375px]:font-medium min-[375px]:tracking-tight min-[375px]:font-oswald min-[375px]:text-3xl\n                        ",children:T[A].title}),(0,c.jsx)("p",{className:"\n                        min-[1000px]:block min-[1000px]:pt-2 min-[1000px]:font-medium min-[1000px]:text-base min-[1000px]:font-lato min-[1000px]:text-[#525A63]\n                        min-[1440px]:block min-[1440px]:pt-2 min-[1440px]:font-medium min-[1440px]:text-base min-[1440px]:font-lato min-[1440px]:text-[#525A63]\n                        min-[744px]:block min-[744px]:pt-2 min-[744px]:font-medium min-[744px]:text-base min-[744px]:font-lato min-[744px]:text-[#525A63]\n                        min-[480px]:block min-[480px]:pt-2 min-[480px]:font-medium min-[480px]:text-base min-[480px]:font-lato min-[480px]:text-[#525A63]\n                        min-[375px]:block min-[375px]:pt-2 min-[375px]:font-medium min-[375px]:text-base min-[375px]:font-lato min-[375px]:text-[#525A63]\n                        ",children:T[A].description}),(0,c.jsxs)("form",{onSubmit:async e=>{e.preventDefault(),e.stopPropagation();try{if("login"!==A&&"register"!==A&&"phone"!==A)return;if("login"===A){const e=await x.validate({email:n,password:i},{abortEarly:!1});z.current&&z.current.showModal({title:"\u0417 \u043f\u043e\u0432\u0435\u0440\u043d\u0435\u043d\u043d\u044f\u043c!",leftBtnText:"\u041f\u0435\u0440\u0435\u0433\u043b\u044f\u043d\u0443\u0442\u0438 \u043f\u0440\u043e\u0444\u0456\u043b\u044c",rightBtnText:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0434\u043e \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"}),B((0,l.es)(e))}else if("register"===A){await r.validate({email:n,password:i,firstName:u,secondName:j},{abortEarly:!1});const e=new URLSearchParams(E.toString());e.set("mode","phone"),S(e.toString())}else if("phone"===A){await x.validate({firstName:u,secondName:j,email:n,password:i});10===N.replace(/\D/g,"").slice(2).length&&z.current&&z.current.showModal({title:"\u0423\u0441\u043f\u0456\u0445! \u041a\u0430\u0440\u0442\u043e\u043f\u043b\u044f \u0444\u0440\u0456 \u0432 \u0434\u043e\u0441\u0442\u0443\u043f\u0456",description:"\u0412\u0438 \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u043b\u0438\u0441\u044c! \u0422\u0435\u043f\u0435\u0440 \u0432\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0442\u0438\u0441\u044f \u0443\u0441\u0456\u043c\u0430 \u043f\u0435\u0440\u0435\u0432\u0430\u0433\u0430\u043c\u0438 \u0432\u0430\u0448\u043e\u0433\u043e \u0430\u043a\u0430\u0443\u043d\u0442\u0430.",leftBtnText:"\u041f\u0435\u0440\u0435\u0433\u043b\u044f\u043d\u0443\u0442\u0438 \u043f\u0440\u043e\u0444\u0456\u043b\u044c",rightBtnText:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0434\u043e \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"})}}catch(t){const n={};t.inner.forEach((e=>{e.path&&(n[e.path]=e.errors)})),f(n)}},children:[(0,c.jsxs)("div",{className:"\n                            min-[1000px]:flex min-[1000px]:flex-col min-[1000px]:gap-3 min-[1000px]:pt-6\n                            min-[1440px]:flex min-[1440px]:flex-col min-[1440px]:gap-3 min-[1440px]:pt-6\n                            min-[744px]:flex min-[744px]:flex-col min-[744px]:gap-3 min-[744px]:pt-6\n                            min-[480px]:flex min-[480px]:flex-col min-[480px]:gap-3 min-[480px]:pt-6\n                            min-[375px]:flex min-[375px]:flex-col min-[375px]:gap-3 min-[375px]:pt-6\n                            ",children:["register"===A&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(g,{value:u,placeholder:"\u0406\u043c'\u044f",type:"text",name:"firstName",setValue:n=>{v(n),V("firstName")},errors:m.firstName||[]}),(0,c.jsx)(g,{value:j,placeholder:"\u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435",type:"text",name:"secondName",setValue:n=>{w(n),V("secondName")},errors:m.secondName||[]})]}),"phone"!==A&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(g,{value:n,placeholder:"\u0415\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430 \u043f\u043e\u0448\u0442\u0430",type:"text",name:"email",setValue:n=>{e(n),V("email")},errors:m.email||[]}),(0,c.jsx)(g,{value:i,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",name:"password",setValue:n=>{p(n),V("password")},errors:m.password||[]})]}),"phone"===A&&(0,c.jsx)(k,{value:N,placeholder:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",type:"text",name:"phone",mask:"+38 000 000 00 00",setValue:n=>{y(n),V("phone")},errors:m.phone||[]})]}),"login"===A&&(0,c.jsx)("p",{className:"\n                                min-[1000px]:block min-[1000px]:pt-1 min-[1000px]:text-right min-[1000px]:font-medium min-[1000px]:text-base min-[1000px]:font-lato\n                                min-[1440px]:block min-[1440px]:pt-1 min-[1440px]:text-right min-[1440px]:font-medium min-[1440px]:text-base min-[1440px]:font-lato\n                                min-[744px]:block min-[744px]:pt-1 min-[744px]:text-right min-[744px]:font-medium min-[744px]:text-base min-[744px]:font-lato\n                                min-[480px]:block min-[480px]:pt-1 min-[480px]:text-right min-[480px]:font-medium min-[480px]:text-base min-[480px]:font-lato\n                                min-[375px]:block min-[375px]:pt-1 min-[375px]:text-right min-[375px]:font-medium min-[375px]:text-base min-[375px]:font-lato\n                                ",children:"\u0417\u0430\u0431\u0443\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?"}),(0,c.jsxs)("div",{className:"\n                            min-[1000px]:flex min-[1000px]:flex-col min-[1000px]:gap-3 min-[1000px]:pt-6\n                            min-[1440px]:flex min-[1440px]:flex-col min-[1440px]:gap-3 min-[1440px]:pt-6\n                            min-[744px]:flex min-[744px]:flex-col min-[744px]:gap-3 min-[744px]:pt-6\n                            min-[480px]:flex min-[480px]:flex-col min-[480px]:gap-3 min-[480px]:pt-6\n                            min-[375px]:flex min-[375px]:flex-col min-[375px]:gap-3 min-[375px]:pt-6\n                            ",children:[("login"===A||"register"===A)&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(d,{title:"\u041f\u0440\u043e\u0434\u043e\u0432\u0436\u0438\u0442\u0438",type:"submit",sizeBtn:"huge",background:"black"}),(0,c.jsx)(d,{title:"\u0423\u0432\u0456\u0439\u0442\u0438 \u0437",sizeBtn:"huge",background:"white",additionalImage:"google"})]}),"phone"===A&&(0,c.jsx)(d,{title:"\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438",type:"submit",sizeBtn:"huge",background:"black",disabled:!N})]})]}),"phone"!==A&&(0,c.jsxs)("div",{className:"\n                        min-[1000px]:flex min-[1000px]:pt-6 min-[1000px]:gap-2 min-[1000px]:justify-center\n                        min-[1440px]:flex min-[1440px]:pt-6 min-[1440px]:gap-2 min-[1440px]:justify-center\n                        min-[744px]:flex min-[744px]:pt-6 min-[744px]:gap-2 min-[744px]:justify-center\n                        min-[480px]:flex min-[480px]:pt-6 min-[480px]:gap-2 min-[480px]:justify-center\n                        min-[375px]:flex min-[375px]:pt-6 min-[375px]:gap-2 min-[375px]:justify-center\n                        ",children:[(0,c.jsx)("p",{className:C+" "+I+" min-[375px]:text-input",children:"\u041d\u0435\u043c\u0430\u0454 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430?"}),(0,c.jsx)(o.N_,{className:C+" "+I+" min-[375px]:text-btn",to:`/auth?mode=${{login:"register",register:"login"}[A]}`,children:"login"===A?"\u0417\u0430\u0440\u0435\u0454\u0435\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044f":"\u0423\u0432\u0456\u0439\u0442\u0438"})]})]})}),(0,c.jsx)(h,{ref:z}),(0,b.createPortal)((0,c.jsx)("div",{className:"\n                min-[1000px]:fixed min-[1000px]:left-[100%] min-[1000px]:top-negative-top-pc min-[1000px]:translate-x-negative min-[1000px]:translate-y-[-100%] min-[1000px]:w-36\n                min-[1440px]:fixed min-[1440px]:left-[100%] min-[1440px]:top-negative-top min-[1440px]:translate-x-negative min-[1440px]:translate-y-[-100%] min-[1440px]:w-52\n                min-[744px]:fixed min-[744px]:left-[100%] min-[744px]:top-negative-top-tablet min-[744px]:translate-x-negative min-[744px]:translate-y-[-100%] min-[744px]:w-36\n                min-[480px]:sticky min-[480px]:left-[50%] min-[480px]:translate-x-negative-phone min-[480px]:w-36\n                min-[375px]:sticky min-[375px]:left-[50%] min-[375px]:translate-x-negative-phone min-[375px]:w-36\n                ",children:(0,c.jsxs)("div",{className:"\n                    min-[1000px]:relative min-[1000px]:flex min-[1000px]:flex-col min-[1000px]:gap-2 min-[1000px]:w-full\n                    min-[1440px]:relative min-[1440px]:flex min-[1440px]:flex-col min-[1440px]:gap-2 min-[1440px]:w-full\n                    min-[744px]:relative min-[744px]:flex min-[744px]:flex-col min-[744px]:gap-2 min-[744px]:w-full\n                    min-[480px]:relative min-[480px]:flex min-[480px]:flex-col min-[480px]:gap-2 min-[480px]:w-full\n                    min-[375px]:relative min-[375px]:flex min-[375px]:flex-col min-[375px]:gap-2 min-[375px]:w-full\n                    ",children:[(0,c.jsx)("div",{className:"\n                        min-[1000px]:block min-[1000px]:px-10 min-[1000px]:w-full\n                        min-[1440px]:block min-[1440px]:px-10 min-[1440px]:w-full\n                        min-[744px]:block min-[744px]:px-10 min-[744px]:w-full\n                        min-[480px]:block min-[480px]:px-10 min-[480px]:w-full\n                        min-[375px]:block min-[375px]:px-10 min-[375px]:w-full\n                        ",children:(0,c.jsx)("div",{className:"relative block w-full pb-[169%]",children:(0,c.jsx)("div",{className:"absolute size-full bg-[url('/src/images/Patato.svg')] bg-cover"})})}),(0,c.jsx)("p",{className:"\n                        min-[1000px]:block min-[1000px]:font-normal min-[1000px]:font-base min-[1000px]:font-oswald min-[1000px]:text-center\n                        min-[1440px]:block min-[1440px]:font-normal min-[1440px]:font-base min-[1440px]:font-oswald min-[1440px]:text-center\n                        min-[744px]:block min-[744px]:font-normal min-[744px]:font-base min-[744px]:font-oswald min-[744px]:text-center\n                        min-[480px]:block min-[480px]:font-normal min-[480px]:font-base min-[480px]:font-oswald min-[480px]:text-center\n                        min-[375px]:block min-[375px]:font-normal min-[375px]:font-base min-[375px]:font-oswald min-[375px]:text-center\n                        ",children:"\u041f\u0441\u0441...\u041a\u0430\u0440\u0442\u043e\u043f\u043b\u044f \u0444\u0440\u0456 \u0432\u0436\u0435 \u0447\u0435\u043a\u0430\u0454!"})]})}),document.body)]})]})}}}]);
//# sourceMappingURL=301.d3ed5b58.chunk.js.map