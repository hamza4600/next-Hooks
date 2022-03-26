import React, { useState } from 'react'
import Five from '../components/ben/five'
import Four from '../components/ben/four'
import One from '../components/ben/one'
import Mix, {Hamzz, Six} from '../components/ben/six'
import Threx from '../components/ben/three'
import Ttwo, { Foure } from '../components/ben/two'
import Store from '../components/hook/reduxxStore'
import styles from '../styles/Home.module.css'

function ben() {
    const [value,setValue]=useState("Hamza")
    return (
        <div className={styles.one}>
            <div className={styles.two}>
                <div className={styles.span}>
                    <h1>Hooks In Detail:</h1>
                       <Hamzz.Provider value={{value,setValue}}>
                       <Store para="We cannot use Hooks inside of the conditional and loops"/> 
                       <One/>
                       {/* <Ttwo/> */}
                       <Foure/>
                       <Threx/>
                        <Four/>
                        <Five/>
                        <Mix/>
                        <button onClick={()=>setValue("Pakistan")}>Change Context</button>
                        </Hamzz.Provider>
                </div>
            </div>
        </div>
    )
}

export default ben
