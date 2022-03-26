import React from 'react'
import Store from '../components/hook/reduxxStore'
import Rough from '../components/hook/rough'
import Xindow from '../components/two/window'
import styles from '../styles/Home.module.css'

function redux() {
    return (
        <div className={styles.one}>
            <div className={styles.two}>
                <div className={styles.span}>
                    {/* install reduxx */}
                    <Store head="redux Store" para="it is a state managmanet container  "/>
                    <Store para="It belown to the Compntents state or A conatiner where we store all appp"/>
                    <Store para="Three main Parts Actions : Collect Data, Reducer :Send Data to from Action and send to store  , Store : store state of compontes, Views or UI "/>
                    <Store para=""/>
                    <Store para=""/>
                    {/* <Rough/> */}
                    <Xindow/>
                </div>
            </div>
        </div>
    )
}

export default redux
