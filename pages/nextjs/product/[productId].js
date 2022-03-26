import { useRouter } from 'next/router'
import React from 'react'
import { Layout } from '..'
import { Navig } from '../routeess';

function ProductDetail() {
    const route=useRouter();
    const productId=route.query.productId
    const tg={
        height:"610px",
        background:"black"
    }
    return (
        <div style={tg}>
            <Layout>
                <Navig lin="/nextjs/product" txt="Back"/>
                <p>we will also use UseRoputer Hook of Next of URL query</p>
                <p>Note we have to type the name of file in [] then it will work </p>
                <h1>Deatil of Product {productId}</h1>
            </Layout>
        </div>
    )
}

export default ProductDetail
