import React, { Children } from 'react'
import Link from 'next/link' 
import Basic, { Heaad, Htwo } from '../../components/next/basic'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'

function index() {
            return (<div> 

        <div className={styles.hamza}>
         

            <div className={styles.hassan}>

                <div className={styles.samer}> 

                    <div className={styles.dos}>
                    <Lopi/>
                    {/* <Cardd/> */}
                    <Basic/>
                    <Nexxx/>
                    <p>All Concepts and Examoples of Next Js will be dissucss</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default index
// lopi
export function Lopi(){
     
    return(<div >
    <div className={styles.frem}>
        <div className={styles.border}>
        <h1>Hamza</h1>

        </div></div>
    </div>)
}
// card
export function Cardd(){
    return(<div className={styles.card}>
        <div className={styles.container}>
        <h4>Hamza</h4>
        <div className={styles.details}>
        <h6>hassan</h6>

        </div>
        </div>
    </div>)
}


export function Nexxx() {
    
    return(
      <div>
        <Heaad loo="Main Topics"/><br/>
  
    <div className={styles.maze}>
  
      <div className={styles.paza}>  <Htwo too="Nested Routes"/></div>
      <div className={styles.paza}>  <Htwo too="Dynamic Routes"/></div>
      <div className={styles.paza}>  <Htwo too="CatchAll Routes"/></div>
      <div className={styles.paza}>  <Htwo too="Pr rendering"/></div>
      <div className={styles.paza}>  <Htwo too="Static Generation"/></div>
      <div className={styles.paza}>  <Htwo too="getStaticProps"/></div>
      <div className={styles.paza}>  <Htwo too="SSG with Dynamic Parameter"/></div>
      <div className={styles.paza}>  <Htwo too="SSG with getStaticPaths"/></div>
      <div className={styles.paza}>  <Htwo too="getStaticPath fallback"/></div>
      <div className={styles.paza}>  <Htwo too="Incremental Static Generation"/></div>
      <div className={styles.paza}>  <Htwo too="Server Side Rendering"/></div>
      <div className={styles.paza}>  <Htwo too="getServerSideProps "/></div>
      <div className={styles.paza}>  <Htwo too="Client Side data fetching"/></div>
      <div className={styles.paza}>  <Htwo too="API Methods"/></div>
      <div className={styles.paza}>  <Htwo too="Authentication in NextJs"/></div>
      <div className={styles.paza}>  <Htwo too="Secure Pages Server Side"/></div>
      <div className={styles.paza}>  <Htwo too="Secure API Routes"/></div>
      <div className={styles.paza}>  <Htwo too="Authentication"/></div>
      <div className={styles.paza}>  <Htwo too="Middleware"/></div>
      <div className={styles.paza}>  <Htwo too="Data Fetching"/></div>
      <div className={styles.paza}>  <Htwo too="Advance Concepts"/></div>
      <div className={styles.paza}>  <Htwo too="Conditional Rendering"/></div>
      <div className={styles.paza}>  <Htwo too="nextRoute and SWR "/></div>
      <div className={styles.paza}>  <Htwo too="getIntProps"/></div>
        </div>
    </div>)
  }

//   nnavbar
export function Navvs() {
    
    return(
     <div className={styles.navv}>
         <div>
             <ul>
                 <div><Link href="/nextjs"><a>Home</a></Link></div>
                 <div><Link href="/nextjs/routeess"><a>Routes</a></Link></div>
                 <div><Link href="/nextjs/serverside"><a>SSR</a></Link></div>
                 <div><Link href="/nextjs/apis"><a>Advance</a></Link></div>
                 <div><Link href="/nextjs/apidata"><a>Practice</a></Link></div>
                 <div><Link href="/nextjs/apihandel"><a>APIs</a></Link></div>
                 <div><Link href="/nextjs/auths"><a>Auth</a></Link></div>
             </ul>
         </div>

     </div>
    )
}
// grid style layout
 
// layout componnet
export function Layout({children}) {
    return(
    <div className={styles.hamza}>
        <div className={styles.hassan}>
        <div className={styles.samer}>
        <div className={styles.dos}>
                    <div>{children}</div>
                </div>
            </div>
        </div>
    </div>)
}