import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useContext } from 'react'
import Cllback from '../components/hook/callback'
import ContextH from '../components/hook/contexhk'

import Effects from '../components/hook/effect'
import Memo from '../components/hook/memo'
import Reduxx from '../components/hook/reduxx'
import { Five, Khan, Reffs } from '../components/hook/reff'
import HookState from '../components/hook/state'

function Document() {
    return (
        <div className={styles.one}>
            <div className={styles.two}>
                <div className={styles.span}>

            <HookState/>
              <Effects/>
              <Reffs/>  
              {/* <Khan/> */}
              <Memo/>
              <Cllback/>
              <ContextH/>
              <Reduxx/>   



                </div>
            </div>
        </div>
    )
}

export default Document
