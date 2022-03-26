import React from 'react'

function Basic() {
    
    return (
        <div>
            <h1>Revise The Next js </h1>
            <p>We will discuss the Basic and Advance concepts in Next js </p>
            <h1>Middleware In Next</h1>
            <p>we can run a code  before a request is completed Base on the user incoming request we can modyfiy the response by Re-writting , Re-directing , adding Headers   </p>
            <p>It works in Edge functions  runn code clser to user  </p>
            <p>we use them on any Page that share the Logic for set of Pages </p>
            <p>we can use them in </p>
            <ul>
                <li>Authontication</li>
                <li>Bot Protection</li>
                <li>Redirecting</li>
                <li>Unnsupported Browsers</li>
                <li>Testing </li>
                <li>Logging</li>
                
            </ul>
        <Memdd  addre={96}/>

        </div>
    )
}

export default Basic



export function Memdd({addre}) {
    return(
        <span>Memery address is 0x7ffd4de42f{addre}</span>
    )
}
export function Heaad({loo}) {
    return(
        <h1>{loo}</h1>
    )
}
export function Htwo({too}) {
    return(
        <h2>{too}</h2>
    )
}