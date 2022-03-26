import React from 'react'
import { Layout,  } from '.'
import {signIn,sigOut,useSession} from "next-auth/react";
function Auths() {
    

    return (
        <div>
            <Layout>
                <h1>Authonatication in Next js</h1>
                <h2>Using  Next Auth</h2>
                <h1>Envirmental Variable</h1>
                <p>Next Provide awsoemBethod Of saving of data we don,t want to expose to People </p>
                <p>create a file .env.local file in root folde it is ignore  </p>
                <p>we can define as a key Value pairs </p>
                <p>Now we can use Them in File as a process.env.local Name of varibles </p>
                <p>we can,t use destructure in this </p>
                <p>Thses are not expose To Browse only on Node Js</p>
                <p>NEXT_PUBLIC_name of Value that we want to expose to Broswer </p>
                <h1>Authonatication</h1>
                <h2>Client-Side Authentication</h2>
                <h2>Serve-side Authentication</h2>
                <h2>API route Authentication</h2>
                <h1>Installing Package</h1>
                <p>install next-auth</p>
                <p>auth folder on api file with catch al routes </p>
                <p>imprt Providers and Next AUth </p>
                <p>use sigIn sigOut, useSession from next Auth in The page</p>
                <Authh/>
                <p>I have done the all Logic But It is Not working in This app  so I am doinG the auth In differntl app  </p>
                <p>Import the tokeen and session and view That </p>
                <p></p>

            </Layout>
        </div>
    )
}

export default Auths

// defina aal thinga in thid compooenet
export function Authh(){

    const {session,loadingSession}=useSession()
    if(loadingSession){
        return(<div>Loading session...</div>)
    }
    return(<div>
        <h2>Session</h2>
        <p>If nO session of User</p>
        {!session &&(
            <div>
                <button onClick={()=>signIn()}>Sign IN </button>
            </div>
        )}
        <p>iF THere is a session Then show them INformation</p>
        {session &&(
            <div>
                <h2>You are Login in as {session.user.name}</h2>
                <p>Email: {session.user.email}</p>
                <br/>
                {
                    session.user.image&&(
                        <div><img src={session.user.image} alt={session.user.name}/></div>
                    )
                }
            </div>
)
        }

    </div>)
}