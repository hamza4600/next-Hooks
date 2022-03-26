import { useRouter } from 'next/router'
import React from 'react'
import { Layout } from '..';
import { ActiveLink } from '../routeess';

function Docs() {
    const route =useRouter();
    const {params=[]}=route.query;
    console.log(params)
    const bkk=(e)=>{
        route.back()
        e.preventDefault()}   
    return (
        <div>
            
            
            <Layout>
                <button onClick={bkk}>back</button>

                <h1>Basic Example of catch all routes </h1>
                <p>Pass differnt Links as a /docs/as/lk/ </p>
                <p>file name should be enter as a router.query then it will work</p>
                    <h2>url parametre are : Below</h2>
                    <p>{params[0]}</p>
                    <p>{params[1]}</p>
                    <p>{params[2]}</p>  
                    <p>{params[3]}</p>
                    <p>{params[4]}</p>

            </Layout>            
        </div>
    )
}

export default Docs
