import { route } from 'next/dist/server/router'
import Link from 'next/link'
import React from 'react'
import { Layout } from '..'

function index({data}) {
    // console.log(data)
    const thex={
        border:"1px solid blue",
        margin:"3px",
        borderRadius:"15px",
        // display:"flex",
        // justyfyContent:"space-around"
    
    }
    const po={
        cursor:"pointer"
    }
    return (
        <div>
            <Layout>
                <Link href={"/nextjs/serverside"} passHref><button>Back</button></Link>
                <h1>Data from a Fake API </h1>
                    <p>make a request use getServerSideProps()</p>
                {/* <p><h2>Events</h2>{JSON.stringify(data.events)}</p><br/> */}
                {data.map((ites)=>{
                    return(
                    <div key={ites.id} style={thex} key={ites.id}>
                        <Link href={`/nextjs/fakeapi/${ites.id}`} passHref><h1 style={po}>{ites.name}</h1></Link>
                        <h2>name:{ites.username}</h2>                            
                        <p>Email:{ites.email}</p>                            
                        <p>Phoen:{ites.phone}</p>                            
                    </div>
                        
                    )})}
                <p>data is  Above we can destructure is </p>
                <p>OnClick of It Open The details</p>
            </Layout>
        </div>
    )
}

export default index
// api ca;;
 export async function getServerSideProps(){
    const response= await fetch("https://jsonplaceholder.typicode.com/users")
    const datta=await response.json();
    return{
        props:{
            data:datta,
    }
    }
    }