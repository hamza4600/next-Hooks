(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[748],{6374:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/nextjs/serverside",function(){return t(4334)}])},7388:function(e,n,t){"use strict";t.r(n),t.d(n,{Navig:function(){return l},ActiveLink:function(){return d}});var r=t(5893),i=t(1664),s=t(1163),a=(t(7294),t(5314)),c=t(2307);function l(e){var n=e.lin,t=e.txt;return(0,r.jsx)("div",{children:(0,r.jsx)(i.default,{href:n,children:(0,r.jsx)("a",{children:(0,r.jsx)("button",{style:{border:"1px solid blue",margin:"2px",width:"100px"},children:t})})})})}function d(e){var n=e.children,t=e.href,i=(0,s.useRouter)(),a={marginRight:10,color:i.asPath===t?"red":"black"};return(0,r.jsx)("a",{href:t,onClick:function(e){e.preventDefault(),i.push(t)},style:a,children:n})}n.default=function(){return(0,r.jsx)("div",{children:(0,r.jsxs)(a.Layout,{children:[(0,r.jsx)(c.Ci,{loo:" Route in next Js"}),(0,r.jsx)("p",{children:"Static Routing Works as the same way folder structure "}),(0,r.jsx)("p",{children:"Creating Dynamic Routes for Item or content "}),(0,r.jsx)("p",{children:"It is in a Large cgunk of Items suppose we want to render List of 100 Items we will use dynamic Route"}),(0,r.jsx)("p",{children:"use [braketsId].js and  it will be treated as dynamic Page  "}),(0,r.jsx)(i.default,{href:"/nextjs/product",children:(0,r.jsx)("a",{children:(0,r.jsx)("button",{children:"Open Products"})})}),(0,r.jsx)(c.Ci,{loo:"Dynamic Nested Route"}),(0,r.jsx)("p",{children:"Uppose we hava a Car Deatil Page and on that car we have the reviews page we will also use the Dynamic Routes"}),(0,r.jsx)("p",{children:"Folder wil contain [] and review fiel will also creat [] and useRouter Hook"}),(0,r.jsx)("p",{children:"Two parts of url will be Dynamic "}),(0,r.jsx)("p",{children:"See Example "}),(0,r.jsx)(l,{lin:"car",txt:"Cars Page"}),(0,r.jsx)("h1",{children:"UseRouter Hook"}),(0,r.jsx)("p",{children:"It is IObject and have several Methods "}),(0,r.jsx)("p",{children:"for navigating the user on different routes "}),(0,r.jsx)(d,{href:"/nextjs/car",children:(0,r.jsx)("button",{children:"Prexx Me"})}),(0,r.jsx)("p",{children:"Simple route Link componet cretaed as using useRouter"}),(0,r.jsxs)("p",{children:["    ","<button type=\"button\" onClick={() => router.push('/post/abc')}>"]}),(0,r.jsx)("p",{children:"Push user to durent route "}),(0,r.jsx)("h1",{children:"Catch all Routes"}),(0,r.jsx)("p",{children:"define the folder and type file as a destructur [...] filename "}),(0,r.jsx)("p",{children:"Now in the URL if folder name is presernt it will redirect to that page "}),(0,r.jsx)("p",{children:"see the exapmle we can also apply our logic on the base of the url"}),(0,r.jsx)(d,{href:"/nextjs/docs",children:(0,r.jsx)("button",{children:"Open Docs"})})]})})}},4334:function(e,n,t){"use strict";t.r(n),t.d(n,{Client:function(){return l},Devicc:function(){return d}});var r=t(5893),i=t(1664),s=t(7294),a=t(5314),c=t(7388);function l(){var e=(0,s.useState)({x:0,y:0}),n=e[0],t=e[1];return(0,s.useEffect)((function(){var e=function(){t({x:event.clientX,y:event.clientY})};return window.addEventListener("mousemove",e),function(){window.removeEventListener("mousemove",e)}}),[n]),(0,r.jsx)("div",{children:(0,r.jsxs)("h1",{children:["X : ",n.x,"  Y : ",n.y]})})}function d(){var e=(0,s.useState)({x:0,y:0}),n=e[0],t=e[1];return(0,s.useEffect)((function(){var e=function(e){e.preventDefault(),t({x:window.innerWidth,y:window.innerHeight})};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[n]),(0,r.jsx)("div",{children:(0,r.jsxs)("h1",{children:["Width : ",n.x," Height : ",n.y]})})}n.default=function(){return(0,r.jsx)("div",{children:(0,r.jsxs)(a.Layout,{children:[(0,r.jsx)("h1",{children:"Server Side Rendering"}),(0,r.jsx)("p",{children:"Server side rendering Increse  Performance of  APP and SEO"}),(0,r.jsx)("p",{children:"Pages are Pre Generated in Next Js "}),(0,r.jsx)("h1",{children:"Main Topics"}),(0,r.jsx)("h2",{children:"Static Generation with and without Data"}),(0,r.jsx)("h2",{children:"Incremental Static Generation"}),(0,r.jsx)("h2",{children:"Dynamic Paramenter  when fetching data"}),(0,r.jsx)("h2",{children:"Client side data fetching"}),(0,r.jsx)("h1",{children:"Static Generation "}),(0,r.jsx)("p",{children:"A method of pre-rendering  where HTML pages are Generated at Build Time "}),(0,r.jsx)("p",{children:"Good for the  Blogs , e-commers Pages  Documtation and Marketing Pages "}),(0,r.jsx)("p",{children:"HTML of every Page is autmatically Generated at Build "}),(0,r.jsx)("h1",{children:"getStaticProps"}),(0,r.jsx)("p",{children:"Mostaly used to make an API call and get the data and render in UI"}),(0,r.jsx)("p",{children:"Open the Link Of page "}),(0,r.jsxs)(c.ActiveLink,{href:"/nextjs/userlist",children:[" ",(0,r.jsx)("button",{children:"Open Users"})]}),(0,r.jsx)("p",{children:"we can define getStaticProps in only Pages not in components is only use for server side not for client side"}),(0,r.jsx)("p",{children:"we can aslo access file systema and access Data base from It "}),(0,r.jsx)("p",{children:"Always return an Object and Pass That Object into components "}),(0,r.jsx)("h1",{children:"SSG with Dynamic parameter"}),(0,r.jsx)("p",{children:"we will have a example that will look a Basic master Page and On clik of a Articale iT Open New Page"}),(0,r.jsx)("p",{children:"By Using Dynamic Id of Each Article "}),(0,r.jsx)(c.ActiveLink,{href:"/nextjs/posts",children:(0,r.jsx)("button",{children:"Open master Page"})}),(0,r.jsx)("p",{children:"Foe Dynamic Route we also use getStaticPaths() "}),(0,r.jsx)("h1",{children:"getStaticPaths"}),(0,r.jsx)("p",{children:"It tells waht will be posible path for a page at build time for Dynamic Pages Routes "}),(0,r.jsx)("p",{children:"It tells Next to render pages define Path"}),(0,r.jsx)("p",{children:"context is an Objexct that contain paramsroute of Dynamic Page like postId.js                                                                            "}),(0,r.jsx)("p",{children:"An array that will have the Id of Dynamic Route Page "}),(0,r.jsx)("h2",{children:"FallBack"}),(0,r.jsx)("p",{children:"Have three values true, false, blocking "}),(0,r.jsx)("p",{children:"If Value is false : if error in Path return from getStaticPaths() will be 404 page render "}),(0,r.jsx)("p",{children:"If Value is true : if error in Path return from getStaticPaths() will be a FallBack Page  "}),(0,r.jsx)("p",{children:"It is quite similat to true but  Page is not generated at Build But when request come to page the Page is generated "}),(0,r.jsx)("p",{children:"This all was static generation pages "}),(0,r.jsx)("h1",{children:"Incremental Static Regeneration"}),(0,r.jsx)("p",{children:"when we have created a APP we Build it take some Time "}),(0,r.jsx)("p",{children:"If we want to make changes in the Pages Or data or Add New pages in APp    "}),(0,r.jsx)("p",{children:"If we have E-comer store we have to update the Prices and deals every day  or some Other Changes "}),(0,r.jsx)("p",{children:"main Point is that id Data from API cahnges the That change shoudld be render in UI "}),(0,r.jsx)("p",{children:"we will use revalidate: 60 re-created pages after 60 seconds"}),(0,r.jsx)("p",{children:"Major Problum is thatwe cannot get the latest Data from API "}),(0,r.jsx)("p",{children:"We an BUild More Pages After Build Time when a user make inital request "}),(0,r.jsx)("h1",{children:"getServerSideProps"}),(0,r.jsx)("p",{children:"It works as getStaticProps N=But main differnce is That It get That Latest Data from The API at the rfequest Time"}),(0,r.jsx)("p",{children:"WE can also write server side code and get access to file system from It "}),(0,r.jsx)("p",{children:"It also give access to incoming requests   "}),(0,r.jsx)("p",{children:"New Pages are generated at requst time not Build time "}),(0,r.jsx)(i.default,{href:"/api/hello",passHref:!0,children:(0,r.jsx)("button",{children:"Open API"})}),(0,r.jsx)("p",{children:"Now render Data from a API in a Page and UI"}),(0,r.jsx)(i.default,{href:"/nextjs/fakeapi",passHref:!0,children:(0,r.jsx)("button",{children:"Fake API"})}),(0,r.jsx)("p",{children:"This type of rendering a Bit slower Than Static Generation so If needes Then use It "}),(0,r.jsx)("p",{children:"IF Data is Changes from Data base Then It will Update On Every resuest"}),(0,r.jsx)("p",{children:"All code in It is run on server  used Only in a Page not a components"}),(0,r.jsx)("h1",{children:"getServerSideProps with Dynamic Route"}),(0,r.jsx)("p",{children:"for my example I am using Json server data as a Dynamic Route "}),(0,r.jsx)("p",{children:"We can get access to incoming request and respone and also the Query In URL  "}),(0,r.jsx)("p",{children:"req,res are also Object Like In express we can also applY Lgic Like cookies etc "}),(0,r.jsx)("h2",{children:"Client SIde data Fetching"}),(0,r.jsx)("p",{children:"we can also use The Pure React Conepts for clent side "}),(0,r.jsx)("p",{children:"Simple Client Side code snd component"}),(0,r.jsx)(l,{}),(0,r.jsx)("p",{children:"Position Of Cursor"}),(0,r.jsx)("p",{children:"with and Height Of user Device"}),(0,r.jsx)(d,{})]})})}}},function(e){e.O(0,[774,888,179],(function(){return n=6374,e(e.s=n);var n}));var n=e.O();_N_E=n}]);