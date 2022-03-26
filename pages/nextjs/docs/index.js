import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Layout } from '..'
import { Navig } from '../routeess'

function index() {
    const [kj,setkj]=useState("")
    const route=useRouter()
    const asd=(e)=>{
        e.preventDefault()
        route.back()
    }
    useEffect(()=>{
        
        return ()=>{

        }
    },[])
    return (
        <div>
            <Layout>
                <button onClick={asd}>Main Page</button>
                <h1>This page contain all Documatation</h1>
                <p>You can Open Links if it contain dics it will be redirected to the catch all routes  </p>
                <input placeholder="Links" onChange={(e)=>setkj(e.target.value)}/>
                <Navig  lin={`/nextjs/docs/${kj}`} txt={<h2>Open Link</h2>}/>
                <p>Links should be like hamza/hassa/sameer </p>
            </Layout>
        </div>
    )
}

export default index
