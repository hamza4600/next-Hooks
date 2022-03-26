import { Navv } from '.'
import '../styles/globals.css'
// import { GlobalConsum } from './one'
import {SessionProvider} from "next-auth/react"
import { Navvs } from './nextjs'

function MyApp({ Component, pageProps:{session,...pageProps}, }) {
  return( 
    <SessionProvider session={session}>
      <Navvs/>
      <Navv/>
    <Component {...pageProps} />
    </SessionProvider>   
  )
}

export default MyApp
