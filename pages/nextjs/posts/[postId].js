import { useRouter } from 'next/router'
import React from 'react'
import { Layout } from '..'

function Post({posts}) {
    const route=useRouter();

    const gvg=()=>{
        route.back()
    }
    return (
        <div>
            <Layout>
                <button  onClick={gvg}>Back Page</button>
                <h1>Single Page Detail Of Articale</h1>
                {[posts].map((post)=>{
                    return(<div key={post.id}>
                        <h1>{post.title}</h1>
                        <h2>{post.body}</h2>
                    </div>)
                })}
            </Layout>
        </div>
    )
}

export default Post
// Now defina the Path of eacho page
export async function getStaticPaths(){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
    const data=await response.json();
    const paths= data.map(post=>{
        return{
            params:{
                postId:`${post.id}` //if we want to entere the title in the URL the we have to replace hear also  
            }
        }
    })
    return {
        paths,
        fallback: false,
    }

}


// api call
export async function getStaticProps(context){
    const {params}=context  
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data=await response.json();
    return {
        props:{
            posts:data,
        },
    }
}