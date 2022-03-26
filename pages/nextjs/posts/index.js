import Link from 'next/link'
import React from 'react'
import { Layout } from '..'
import { ActiveLink } from '../routeess'

function index({news}) {
    const the={
        border:"1px solid gold",
        borderRadius:"3px",
        margin:"13px",
        maxWidth:"400px",
        height:'70px',
        overflow:"hidden",
        justifyContent:"center",
        display:"flex"
    }
    return (
        <div>
            <Layout>
            <ActiveLink href={"/nextjs/serverside"}><button>Back Page</button></ActiveLink>
        
                <h1>Master Page of News</h1>
                <p>Latest News are</p>
                {news.map((item)=> {
                    return(
                    <div key={item.id}>
                       {item.id} <h2 style={the}><Link href={`/nextjs/posts/${item.id}`} passHref> 
                        {item.title}</Link> </h2></div>
                    )

                })}

            </Layout>
        </div>
    )
}

export default index
// api call
export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const articale=await response.json()
    return{
        props:{
            news:articale,
        }
    }
}