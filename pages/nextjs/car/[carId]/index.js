import { useRouter } from 'next/router'
import React from 'react'
import { Layout } from '../..'
import { Htwo } from '../../../../components/next/basic'
import { Navig } from '../../routeess'

function cardetails() {
    const route=useRouter()
    const carId=route.query.carId
    const aza=(e)=>{
        route.back()
        e.preventDefault()
    }
    return (
        <div>
            <Layout>
                <button onClick={aza}>Back</button>
                <h1>Deatil of car {carId}</h1>
                <p>is a Greata Car In Market</p>
                   <h2>Review of Customers </h2>
                <Navig lin={`/nextjs/car/${carId}/review/Phantom`} txt={ <Htwo too= "one"/> }/>
                <Navig lin={`/nextjs/car/${carId}/review/Model-S`} txt={ <Htwo too= "two"/> }/>
                <Navig lin={`/nextjs/car/${carId}/review/Benz-Class`} txt={ <Htwo too= "three"/> }/>
                <Navig lin={`/nextjs/car/${carId}/review/Luxy-Models`} txt={ <Htwo too= "foure"/> }/>
                <Navig lin={`/nextjs/car/${carId}/review/Expansive`} txt={ <Htwo too= "five"/> }/>

            </Layout>
        </div>
    )
}

export default cardetails

// /nextjs/car/Tesla/review/gost