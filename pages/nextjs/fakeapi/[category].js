import { useRouter } from 'next/router'
import React from 'react'
import { Layout } from '..'

function DetailUsers({category,data,haa,hss}) {
    const rout=useRouter()
    const asd=(e)=>{
        rout.back();
        e.preventDefault()
    }
    console.log(haa)
    console.log(hss)
    return (
        <div>
            <Layout>
                <button onClick={asd}>Back page</button>
                <h1>Showing data of Use One </h1>
                <p>Othe Object and Mehods Of server side are </p>
                <div> Quer and caterqury are Id of User :{JSON.stringify(category)}</div>
                <h2>Header are</h2>
                {[data].map((user)=>{
                    return(<div key={user.id}>
                        <h2>Name:{user.name}</h2>
                        <p>name: {user.username}</p>
                        <p>email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                        <p>website: {user.website}</p>
                            <h2>Company</h2>
                        <p> {user.company.name}</p>
                        <p>{user.company.catchPhrase}</p>
                        <p>{user.company.bs}</p>
                        <h2>Addreess</h2>
                        <p>{user.address.street}</p>
                        <p>{user.address.suite}</p>
                        <p>{user.address.city}</p>
                        <p>{user.address.zip}</p>
                        <h2>Location</h2>
                        <p>{user.address.geo.lat}</p>
                        <p>{user.address.geo.lng}</p>
                    </div>)
                })}
            </Layout>
        </div>
    )
}

export default DetailUsers
// api call use Context for path of Pages  conetx Object request and respone, params
export async function getServerSideProps(context){
    const {params,req,res,query}=context;
    console.log(req.headers.cookies)
    // res.setHeader("set-Cookies",["hamza"])
    console.log(req)
    console.log(res)
    const haa=JSON.stringify(req)
    const hss=JSON.stringify(res)
    const {category}=params
    const response= await fetch(`https://jsonplaceholder.typicode.com/users/${category}`)
    const datta=await response.json();
    return{
        props:{
            data:datta,
            category,
            query,
            haa,
            hss
        }
    }
    }