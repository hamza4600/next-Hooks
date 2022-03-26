import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Layout,  } from '.'
import { Heaad } from '../../components/next/basic'

function Routeess() {
    return (
        <div>
            <Layout>
            <Heaad loo=" Route in next Js"/>
            <p>Static Routing Works as the same way folder structure </p>
            <p>Creating Dynamic Routes for Item or content </p>
            <p>It is in a Large cgunk of Items suppose we want to render List of 100 Items we will use dynamic Route</p>
            <p>use [braketsId].js and  it will be treated as dynamic Page  </p>
            <Link href="/nextjs/product"><a><button>Open Products</button></a></Link>
            <Heaad loo="Dynamic Nested Route"/>
            <p>Uppose we hava a Car Deatil Page and on that car we have the reviews page we will also use the Dynamic Routes</p>
            <p>Folder wil contain [] and review fiel will also creat [] and useRouter Hook</p>
            <p>Two parts of url will be Dynamic </p>
            <p>See Example </p>
                <Navig lin="car" txt="Cars Page"/>
            <h1>UseRouter Hook</h1>
            <p>It is IObject and have several Methods </p>
            <p>for navigating the user on different routes </p>
            <ActiveLink href="/nextjs/car" >
                <button>Prexx Me</button>
            </ActiveLink>
            <p>Simple route Link componet cretaed as using useRouter</p>
            <p>    {`<button type="button" onClick={() => router.push('/post/abc')}>`}</p>
            <p>Push user to durent route </p>
            <h1>Catch all Routes</h1>
            <p>define the folder and type file as a destructur [...] filename </p>
            <p>Now in the URL if folder name is presernt it will redirect to that page </p>
            <p>see the exapmle we can also apply our logic on the base of the url</p>
            <ActiveLink href="/nextjs/docs">
                <button>Open Docs</button>
            </ActiveLink>
            </Layout>

        </div>
    )
}

export default Routeess
export function Navig({lin,txt}) {
    const the={
        border:"1px solid blue",
        margin:"2px",
        width:"100px"
    }
    return(<div>
        <Link href={lin}><a><button style={the}>{txt}</button></a></Link>
    </div>)
}


export function ActiveLink({ children, href }) {
    const router = useRouter()
    const style = {
      marginRight: 10,
      color: router.asPath === href ? 'red' : 'black',
    }
  
    const handleClick = (e) => {
      e.preventDefault()
      router.push(href)
    }
  
    return (
      <a href={href} onClick={handleClick} style={style}>
        {children}
      </a>
    )
  }
  