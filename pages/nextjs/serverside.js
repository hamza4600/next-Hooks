import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Layout,  } from '.'
import { ActiveLink } from './routeess'

function Serverside() {
    return (
        <div>
            <Layout>
                <h1>Server Side Rendering</h1>
                <p>Server side rendering Increse  Performance of  APP and SEO</p>
                <p>Pages are Pre Generated in Next Js </p>
                <h1>Main Topics</h1>
                <h2>Static Generation with and without Data</h2>
                <h2>Incremental Static Generation</h2>
                <h2>Dynamic Paramenter  when fetching data</h2>
                <h2>Client side data fetching</h2>
                <h1>Static Generation </h1>
                <p>A method of pre-rendering  where HTML pages are Generated at Build Time </p>
                <p>Good for the  Blogs , e-commers Pages  Documtation and Marketing Pages </p>
                <p>HTML of every Page is autmatically Generated at Build </p>
                <h1>getStaticProps</h1>
                <p>Mostaly used to make an API call and get the data and render in UI</p>
                <p>Open the Link Of page </p>
                <ActiveLink href={"/nextjs/userlist"}> <button>Open Users</button>
                    </ActiveLink>
                 <p>we can define getStaticProps in only Pages not in components is only use for server side not for client side</p>               
                 <p>we can aslo access file systema and access Data base from It </p>
                 <p>Always return an Object and Pass That Object into components </p>               
                 <h1>SSG with Dynamic parameter</h1>
                 <p>we will have a example that will look a Basic master Page and On clik of a Articale iT Open New Page</p>               
                <p>By Using Dynamic Id of Each Article </p>
                <ActiveLink href={"/nextjs/posts"}><button>Open master Page</button></ActiveLink>
                <p>Foe Dynamic Route we also use getStaticPaths() </p>
                <h1>getStaticPaths</h1>
                <p>It tells waht will be posible path for a page at build time for Dynamic Pages Routes </p>
                <p>It tells Next to render pages define Path</p>
                <p>context is an Objexct that contain paramsroute of Dynamic Page like postId.js                                                                            </p>
                <p>An array that will have the Id of Dynamic Route Page </p>
                <h2>FallBack</h2>
                <p>Have three values true, false, blocking </p>
                <p>If Value is false : if error in Path return from getStaticPaths() will be 404 page render </p>
                <p>If Value is true : if error in Path return from getStaticPaths() will be a FallBack Page  </p>
                <p>It is quite similat to true but  Page is not generated at Build But when request come to page the Page is generated </p>
                <p>This all was static generation pages </p>
                <h1>Incremental Static Regeneration</h1>
                <p>when we have created a APP we Build it take some Time </p>
                <p>If we want to make changes in the Pages Or data or Add New pages in APp    </p>
                <p>If we have E-comer store we have to update the Prices and deals every day  or some Other Changes </p>
                <p>main Point is that id Data from API cahnges the That change shoudld be render in UI </p>
                <p>we will use revalidate: 60 re-created pages after 60 seconds</p>
                <p>Major Problum is thatwe cannot get the latest Data from API </p>
                <p>We an BUild More Pages After Build Time when a user make inital request </p>
                <h1>getServerSideProps</h1>
                <p>It works as getStaticProps N=But main differnce is That It get That Latest Data from The API at the rfequest Time</p>
                <p>WE can also write server side code and get access to file system from It </p>
                <p>It also give access to incoming requests   </p>
                <p>New Pages are generated at requst time not Build time </p>
                <Link href="/api/hello" passHref><button>Open API</button></Link>
                <p>Now render Data from a API in a Page and UI</p>
                <Link href="/nextjs/fakeapi" passHref><button>Fake API</button></Link>
                <p>This type of rendering a Bit slower Than Static Generation so If needes Then use It </p>
                <p>IF Data is Changes from Data base Then It will Update On Every resuest</p>
                <p>All code in It is run on server  used Only in a Page not a components</p>
                    <h1>getServerSideProps with Dynamic Route</h1>
                    <p>for my example I am using Json server data as a Dynamic Route </p>
                <p>We can get access to incoming request and respone and also the Query In URL  </p>
                <p>req,res are also Object Like In express we can also applY Lgic Like cookies etc </p>
                <h2>Client SIde data Fetching</h2>
                <p>we can also use The Pure React Conepts for clent side </p>
                <p>Simple Client Side code snd component</p>
                    <Client/>
                <p>Position Of Cursor</p>
                <p>with and Height Of user Device</p>
                <Devicc/>
                    </Layout>
        </div>
    )
}

export default Serverside

// client side
export function Client(){
     const [coo,setCoo]=useState({x:0,y:0})
     useEffect(()=>{
            const dss=()=>{
                setCoo({
                    x:event.clientX,
                    y:event.clientY,
                })}
        window.addEventListener("mousemove",dss)
        return ()=>{
            window.removeEventListener("mousemove",dss)
        }        
            },[coo])
     return(<div>
         <h1>X : {coo.x}  Y : {coo.y}</h1>
     </div>)
    }
    // device
    export function Devicc(){
        const [devv,setDevv]=useState({x:0,y:0})
        useEffect(()=>{
            const siz=(e)=>{
                e.preventDefault()
                setDevv({
                    x:window.innerWidth,
                    y:window.innerHeight,

                })}
            window.addEventListener("resize",siz)
            return ()=>{
                window.removeEventListener("resize",siz)
            }                
        },[devv])
        return(<div>
            <h1>Width : {devv.x} Height : {devv.y}</h1>
        </div>)
    }