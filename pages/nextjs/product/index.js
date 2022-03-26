import Link from 'next/link'
import React from 'react'
import { Layout } from '..'
import { Navig } from '../routeess'

function index() {
    const the={
        cursor:"pointer"
    }
    return (
        <div>
            <Layout>
                <Navig lin="/nextjs/routeess" txt="Back"/>
                <h1>List of Products are below</h1>
                <Layout><Link href="/nextjs/product/1"><h1><a style={the}>Product No 1</a></h1></Link></Layout>
                <Layout><Link href="/nextjs/product/Samer"><h1><a style={the}>Product Sameer</a></h1></Link></Layout>
                <Layout><Link href="/nextjs/product/Hassan"><h1><a style={the}>Product Hassan</a></h1></Link></Layout>
                <Layout><Link href="/nextjs/product/Hamza"><h1><a style={the}>Product Hamza</a></h1></Link></Layout>
                <Layout><Link href="/nextjs/product/4"><h1><a style={the}>Product No 4</a></h1></Link></Layout>
                <Layout><Link href="/nextjs/product/5"><h1><a style={the}>Product No 5</a></h1></Link></Layout>
                <Layout><Link href="/nextjs/product/10"><h1><a style={the}>Product No 10</a></h1></Link></Layout>
                <Layout><Link href="/nextjs/product/100"><h1><a style={the}>Product No 100</a></h1></Link></Layout>

            </Layout>
        </div>
    )
}

export default index
