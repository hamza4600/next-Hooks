import React from 'react'
import { Grid, Layout } from '..'
import { Htwo } from '../../../components/next/basic'
import { Navig } from '../routeess'

function index() {
    const car={
        honda:"Honda",
        toyota:"Tyoto",
        kia:"KIA",
        rover:"Land Rover",
        tesla:"Tesla"
    }
    const the={
        height:"620px"
    }
    
    return (
        <div style={the}>
            <Layout>
                <Navig lin="/nextjs/routeess" txt="Back"/>
                <h1>This Page related to cars </h1>
                <Navig lin={`/nextjs/car/${car.honda}`} txt={ <Htwo too= {`${car.honda}`}/> }/>
                <Navig lin={`/nextjs/car/${car.toyota}`} txt={ <Htwo too= {`${car.toyota}`}/> }/>
                <Navig lin={`/nextjs/car/${car.kia}`} txt={ <Htwo too= {`${car.kia}`}/> }/>
                <Navig lin={`/nextjs/car/${car.rover}`} txt={ <Htwo too= {`${car.rover}`}/> }/>
                <Navig lin={`/nextjs/car/${car.tesla}`} txt={ <Htwo too= {`${car.tesla}`}/> }/>

                <p>Check Out the Deatils Of Cars</p>
                
            </Layout>
        </div>
    )
}

export default index
