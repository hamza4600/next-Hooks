import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import styled from 'styled-components'
import Basic, { Heaad, Htwo } from '../components/next/basic'
 
 
import styles from '../styles/Home.module.css'
import { Navvs } from './nextjs'
import { GlobalConsum } from './one'

 


export default function Home() {
  const kk =useContext(GlobalConsum)
  return (
    <div>
      <Head>
        <title>Next App simple exercises</title>
        <meta name="description" content="Practice Basic examples of React and Demo Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.hamza}>
        <div className={styles.hassan}>
          <div>
            <div className={styles.samer}>
             <div className={styles.dos}>
             {/* <Basic/> */}
              {/* <Nexxx/> */}
              <p>
                getStaticProps: used with SG to pull page content from external data.
                getStaticPaths: used with SG to pull page paths from external data.
                getServerSideProps - used with SSR to pull pre-rendered pages at build time.
            
                          </p>
             </div>
              </div>    

          </div>
        </div>
      </div>
      




      </div>




        
 
    
  )
}



























// Nav
export function Navv({childern}) {
  return(
    <div className={styles.navv}>
    {/* {childern} */}
    <div>
      <ul>
          <div><Link href="/"><a>Home</a></Link></div>
          <div><Link href="/document"><a>Document</a></Link></div>
          <div><Link href="/redux"><a>Redux</a></Link></div>
          <div><Link href="/one"><a>One</a></Link></div>
          <div><Link href="/ben"><a>Ben</a></Link></div>
          </ul></div>
          </div> 
  )
}