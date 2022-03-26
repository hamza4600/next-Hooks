import { useRouter } from 'next/router'
import React from 'react'
import { Layout } from '../../..'
import { Navig } from '../../../routeess';

function Review() {
    const route=useRouter();
    const {carId,reviewId}=route.query
    const the={
        height:"620px"
    }
    const hgf=(e)=>{
        route.back()
        e.preventDefault()
        
    }   
    return (
        <div style={the}>

            <Layout>
            {/* <Navig lin="/nextjs/car" txt="Back"/> */}
            <button onClick={hgf}>Back</button>

                <h1>Famous  {carId} Models are  {reviewId}</h1>
                <p>One of Bext Car {reviewId} in Market</p>
            </Layout>
        </div>
    )
}

export default Review
