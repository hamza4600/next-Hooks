import Link from 'next/link'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import useSWR from 'swr'
import { Layout,  } from '.'


function Apihandel() {
    const dfd="http://localhost:3000/api/school/Pakistan/Lahore/Park"
    return (
        <div>

            <Layout>
                <h1>APIs Methods </h1>
                <p>In Previus Chapter we Have make api calls and created our own APIs in Next Js</p>
                <p>Now we will use APIs Methods </p>
                    <h2>catch All Routes </h2>
                <p>It works as The sAME WAYA  AS THE  catch all route works in pages </p>
                <p>Create a array ... it will catch all routes of that folder </p>
                <Link href={dfd}><button>School</button></Link>
                <p>we will Post and Fetch The comment we Type</p> 
                <Posta/>
            </Layout>
        </div>
    )
}
export default Apihandel
//  APi
export function Posta(){
    const [Data,setData]=useState("")
    const [Datx,setDatx]=useState([])
    const kjh=async()=>{
        const rest=await fetch("/api/daata",{
            method:"POST",
            body:JSON.stringify({Data}),
            headers:{
                "Content-Type":"application/json"
            }
        });
        const dada=rest.json()
        console.log(dada)
    }
     const fetchers= async()=>{
         const respo=await fetch("/api/daata");
         const data=respo.json()
         return data
     }
     const {data,error}=useSWR("hamza",fetchers)
     if(!data)return <p>No Data in API</p>
     if(error)return <p>Error in API Call</p>
    return(<div>

        <h2>Api Methods</h2>
        <h1>Post Method </h1>
        <input placeholder='name' onChange={(e)=>setData(e.target.value)}/>
        <button onClick={kjh}>Post</button>
        <h2>Fetch Data using SWR</h2>
        <div>{JSON.stringify(data)}</div>
        <p>Similarly we can delete the data using APi from a Database</p>
        <p></p>
    </div>)
}