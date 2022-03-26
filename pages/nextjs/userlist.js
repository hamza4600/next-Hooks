import { useRouter } from 'next/router'
import React from 'react'
import { Layout } from '.'

function User({user}) {
    const route=useRouter()
    const qsq=(e)=>{
        route.back()
        e.preventDefault()
    }    
    return (
        <div>
            <Layout>
                <button onClick={qsq}>Back Page</button>
                <h1>List of Users are :</h1>
            <p>Make a API call and show data</p>
                    {user.map((use=>{
                return(
                <Layout>
                        <div key={use.name}>
                        <p>Name: {use.name}</p>
                        <p>Email: {use.email}</p>
                        <p>Phone: {use.phone}</p>
                        <p>Website: {use.website}</p>
                        <p>Address: {use.address.street}</p>
                        <p>{use.address.suite}</p>
                        <p>City: {use.address.city}</p>
                        <p>{use.address.zip}</p>
                        <p>Company:  {use.company.name}</p>
                        <p>{use.company.catchPhrase}</p>
                        <p>{use.company.bs}</p>
                        </div> 
                 </Layout>)
                    }))}
            </Layout>
        </div>
    )
}

export default User
// api call
export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await response.json()
    return {
        props:{
            user:data,
        }
    }
}