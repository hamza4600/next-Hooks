import Link from 'next/link'
import React, { useState } from 'react'
import { Layout,  } from '.'
import useSWR from "swr";
import { Global } from '@emotion/react';

export const config = { amp: "hybrid"}
function apis() {
  const cocl={
    color:"aqua",
   fontFamily: 'VT323',}
    return (
        <div>

            <Layout>

                <h1>New Topics In Next js</h1>
                <p></p>
                <h1>useAMP</h1>
                <p>AMP stands for Accelerated Mobile Pages. It,s an open source framework developed originally by Google, optimized for mobile web browsing, to help webpages load faster</p>
                <p>They are Optimized fast Pages for Mobile </p>
                <p>Next Comes With IT </p>
                <p>we can turn pages Using AMP </p>
                <p>export const config: amp: true</p>
                <p> It have two vakues true, and Hybrid</p>
                <p>we can also use Hook useAmp </p>
                <h1>Define API </h1>
                <p>Go to API and creat a file and define a api </p>
                <Link href="/api/comments" passHref><button>Open country List</button></Link>

                <p>we will creat a Post Methos and Get Methos To call API set data</p>
                  <Comm/>
                <p></p>
                <p></p>
                  <h1>Add Middle ware in API</h1>
                <p>
                Middleware is a function that you can attach to routes in order for it to run before the route. In other words, it runs in "the middle." This is useful for things like checking if a user is authenticated or has the proper roles to access a route. 
                </p>
                <p>in express we also have middlewares </p>
                <p>Enable us to run code before a request is completed </p>
                <p>in our pages folder creata file  _middleware.js </p>
                <p>It will run on all routes  in Pages if we have sub-directories in pages It wil also run in them </p>
                <p>It run directly after redirect  and header  </p>
                <p style={cocl}>Edge</p>
                  <p>It site between Orignial server and users  </p>
                  <p>It can store and process Data </p>
                  <p>It aloww us to run clse to users </p>
                  <p style={cocl}> Middleware</p>
                  <p>we can run code before a request is completed  </p>
                  <p>Based On the user Request we can modify the result  re-directing ,adding Headers,  </p>
                  <p>It can be used to share set of Logic in Pages like re-directin , authonticating ,  </p>
                  <p style={cocl}>Example </p>
                  <p>based on user Location It will show some discounts or Other deals  </p>
                  <p> Dynamic Pages and content are Bit slower Beause It have to query Data from a Origin Server </p>
                  <p> If we define our middleware in a Folder It will only run in That route </p>
                  <p> If we define a Middleware </p>
                    <p>a code that will Take user Location and base onthat location show some Discounts </p>
                    <p>If we use Proxxy cahnge  Loacation fron Japan to Canada The URL of Pages remain the same </p>
                    <p>But The Middleware Under The Hood Is re-writting The request  whic we have defined </p>
                      <h1>Servers Compontets</h1>
                    <p>By using This Zero client side javascript is needed </p>
                    <p>make Pages render faster </p>
                    <p>we have MOve computtation from the user to the the servers </p>
                    <p>we can define a server componet By re-naming file </p>
                    <p style={cocl}>items.server.js </p>
                    <p>we can also define  in next.config.js  servercomoponets=true and concurrentFeatue:true</p>
                    <p>To user server Compontets then we can also use client Compontets </p>
                    <p style={cocl}>Now ISR is on the Compontets Level Means Hole pages will not be generated only a Compontet will be re-generated and pass in HTML  </p>
                    <p></p>

                <h2>UseSWR</h2>
                <p>state while re-validation </p>
                <p>It first return data from catch  then fetch requst  revalidate and finallay come back to  up to data </p>
                <p>It support all fetches Light fAST, CATCHING, real-time, SSR,SSG,ISR </p>
                <p>install from npm </p>
                <Pro/>
                <p>It is also used for client side data fetching </p>
                <p></p>
                <h2>Next SEO </h2>
              <p>Next seo is Libaray for SEO of a web app It have several componets we can use them</p>
              <p>we have to download  it from npm</p>
              <h1>Dynamic Import </h1>
              <p>we Can dynamic Import components and File we wnat inside of a components or conditions </p>
              <p> const DynamicComponent = dynamic`(() =  import('../components/hello'))`</p>
              <p>we have import dynamic from next/dynamic </p>            
              <p>Now we can use This components as we want or pass as a Props </p>
            <p>If we want a components to not SSR then we have to ` ssr: false `</p>            
              <h1>Suspension</h1>
            <p>It is new feature of React 18 as LazyLoading</p>            
            <p>we have to define experiments cocurrentsFeatures : true in nexrt conffig.js</p>            
            <p>Now we can use SSR and Suspension on all pages </p>            
            <p>Lazy ;: for importing the files and components from dirent pathes as similar to Dynamic import </p>            
            <p>Suspension : fallback = Compontet we want or define to show until data is not on the page </p>            
            <p>If we want a component to be on the client side name the file client.js It will be client side </p>
            <p>a client component cannot be Imported By a client component   </p>
            <p>It works as import Profile from '../components/profile.server'
              import Content from '../components/content.client'</p>
            <p>Most of Hooks are Not supported in Server components </p>
              <h1>MDX in Next Js</h1>
            <p>It is simple Mark  Down Languange as we saw In Github on Readme.md is marking style </p>
            <p> MDX is a superset of markdown that lets you write JSX directly in your markdown files</p>
            
            <p>A better way and apporach to write client side code is  to write in useEffect Hooks Other wiswe It will be on The server side  Liek window OBjects </p>
            <p>If we want to protect our website from melicuse user we must type the links of Photos in next.config.js </p>
              <h1>Scripts in next js</h1>
            <p>we can add aditional scripts in Next js as we want there are serveral ways of doing It </p>
            <p style={cocl}>import script from next/script</p>
            <p>Script src=url of script It inject client side code </p>
            <p>Inline scripts </p>
            <p>  id="show-banner" strategy="lazyOnload"
          {`document.getElementById('banner'). classList.remove('hidden')`}</p>
            <p>a simple example  </p>
            <p>Id must be defined and they are Lazy load </p>
            <p>OnError is also an attribuet that is used showing The error </p>
              <h1>LayOut of APP</h1>
            <p>we can defin all components That are same and use them in Pages </p>
              <h1>Fats refesh with Hoooks</h1>
            <p>By using React Basic Hooks we can increase The speed of our app </p>
            <p>UseMemo useReducer useEffect, useCallback , useState and useRef increse The refersh rate of app  </p>
              <h1>Redis</h1>
              <p>It is used for caching the Data for the app and increase Performance and catching of App </p>
              <p>c</p>
              <p>c</p>
              <p>c</p>
            </Layout>
        </div>
    )
}

export default apis

// EXAMPLE OF SWR 
export function Pro(){
  const fetcher= async ()=>{
    const resposx=await fetch("http://localhost:3000/api/hamza");
    const data= await resposx.json();
    return data
  }
  const cocl={
    color:"aqua",
   fontFamily: 'VT323',}

  const {data,error}=useSWR("hamza",fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
return(<div>
      <h2>Profile</h2>
      <p>Code EXAMPLE od swr</p>
      <p  style={cocl}>Data is {JSON.stringify(data)}</p>
    </div>)
}

// commnest
export function Comm(){
  const [arra,setarra]=useState([])
  const [comet,setcomet]=useState("")
  const pakii=(e)=>{
    arra.push(comet)

    setarra([...arra])
    console.log(arra)
    e.preventDefault();
    return false
  }
    const cocl={
    color:"aqua",
   fontFamily: 'VT323', 
   overflow:"scroll",

  }
  return(<div>
    <h2>Enter comments</h2>
    <p>when I enter In the Field It will add elements in an array </p>
    <p>we can also applay more Logic in It accaording to need </p>
    <input placeholder="Commnet" onChange={(e)=>setcomet(e.target.value)}/>
    <button onClick={pakii}>Add Commment</button>
    <p style={cocl}> {JSON.stringify(arra)}</p>
    <p>on clik of Button append el  emet On array
    </p>
    <p></p>
  </div>)
}










{/* <h3>My AMP About Page!</h3>
{isAmp ? (
  <amp-img
    width="300"
    height="300"
    src="/my-img.jpg"
    alt="a cool image"
    layout="responsive"
  />
) : (
  <img width="300" height="300" 
  src="/my-img.jpg" alt="a cool image" />
)}
</div> */}