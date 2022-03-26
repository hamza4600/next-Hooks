import Link from 'next/link'
import React, { useContext, useMemo, useState } from 'react'
import { createContext } from 'react'
import styles from '../styles/Home.module.css'


function one() {
    const the={
        height:"950px"
    }
    return (
            <div className={styles.one}>
                <div className={styles.two}>
                    <div className={styles.span}>
                    <h1>Example is Below of use Context</h1>
                    <p>Here is an example of use Context Hook in detail</p>
                    {/* <Pkis/> */}
                    {/* <Rass/> */}
                    {/* <Hamza/> */}
                    <Revise/>
            {/* exampleof parent and childer */}
            <Inter/>




                </div>
            </div>
        </div>
    )
}

export default one
// example one
export const  Context=createContext("")
export function Pkis() {
        const [jk,setjk]=useState("Heeelo Pakistan");
        const ghg=()=>{
            setjk("Stat have Been Chaneg")
        }

        const provideValue=useMemo(()=>({jk,setjk}),[jk,setjk])

    return(<div>
        <Context.Provider value={provideValue}>
        <p>Inital state is {jk}</p>
        <button onClick={ghg}>Prexx Me</button>
        </Context.Provider>
    </div>)
}
// use in second compont 


export function Rass() {
    const {jk,setjk}=useContext(Context)
    return(<div>
        <p>Second Compont on Contetx State</p>
        <h1>value : {jk}</h1>
    </div>)
}
// Global example c
export const GlobalConsum=createContext("")
 
// Practice
export function Revise() {
    
    return(<div>
        <h1>IP topics</h1>
        <h1>Higher Order components</h1>
        <h1>Pass pross To Childerns</h1>
        <h1>Passing Props in to Parenst</h1>
        <h1>Custom Hooks</h1>
    </div>)
}


// Inheraita  concept
export function Inter({title,chile}) {
    const them={
       border: "1px solid green",
    }
    return(<div>
    <div style={them}>
            <h1>React Portal</h1>
            <div>It is used to render the content outside of the root div that is by default in React App </div>
            <p>Take two parameter ReactDOM.creatPortal and Document.getElemntbyId(name of Id)</p>
            <p>We have to also creat that div in the Index.HTML file </p>
            </div>
            <h1>Errror Boundory</h1>
            <p>It tell us that an Error have occure in UI and Not Break App  </p>
            <Errors dodo="Hassan"/>
            {/* <Errors dodo="Hamza"/> */}
        <p>I haved comentout That parat  </p>
        <Higher/>
    </div>)
}
// ereor
export function Errors({dodo}) {
    if (dodo==="Hamza"){
        throw new Error("Admin Name Plase Type something else")
    }
    return(
        <h1>{dodo}</h1>
    )
}
// higher
export function Higher() {
    return(<div>
        <h1>Higher Order Compntents</h1>
        <p>It Take in A components and return add new functionality in It </p>
        <p>we can say It is used to shar the comman functions or Logic in the Childer components are other we don,t need to wrtie same code again and again </p>
        <p></p>
    </div>)

}