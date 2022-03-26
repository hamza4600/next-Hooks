import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Layout,  } from '.'

function Apidata() {
    return (
        <div>
            <Layout>
                <h1>Api in Deatails</h1>
                <p>Examoples of creating APIs and Methods  </p>
                <p>Creating a simple form Of user</p>
                <Forrm/>
                <Loco/>
                <p>we will get the IP of User on the base Of laocation get The Addresss and IP provider </p>
                <p>we will add all the IP address in a Array and save Them in dataBase</p>
                    <Timmer/>
                    <Hamza/>
                    {/* <Rouhh/> */}
                <p>Main Points we Have To Take care Of Sate of components If state Is Chnage component is re-render and all code is run again That is Not Good so use dependancy array and Hooks for performance</p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            
            
            
            
            
            
            
            
            
            </Layout>
        </div>
    )
}

export default Apidata

export  function Forrm(){
    const [nam,setnam]=useState()
    const regester= async (e)=>{
        e.preventDefault();
        alert(`Your Name is ${nam}`)
    }
    return(<div>
        <form onSubmit={regester}>
            <span>Name : </span>
            <input onChange={(e)=>setnam(e.target.value)} placeholder="Name" id="name" type="text" autoComplete="name"/>
            <button type="submit">Submit</button>
        </form>
    </div>)
}
// show user Ip and Loaction 
export function Loco(){
    const [ipo,setipo]=useState({ ip:"" });
    const url=" https://ip.nf/me.json";
    useEffect((e)=>{
        fetch(url,{method:"get"})
        .then((response)=>response.json())
        .then((data)=>{
            setipo({...data})
        })
    })
        const the={
            border:"1px solid white",
            borderRadius:"5px",
            margin:"10px",
            padding:"0px 58px",
            color:"aqua"
        }
    return(<div>
    <h2>Location of user is {ipo.ip.city} </h2>
        <div style={the}>
                <p> Ip : {ipo.ip.ip}</p>
                <p> Country  : {ipo.ip.country}</p>
                <p> City  : {ipo.ip.city}</p>
                <p> Asp  : {ipo.ip.asn}</p>
                <p> PostCode  : {ipo.ip.post_code}</p>
                <p> lati  : {ipo.ip.latitude}</p>
                <p> Longi  : {ipo.ip.longitude}</p>
                <p> NetMask  : {ipo.ip.netmask}</p>    
            </div>                
    </div>)
}
// simple Timmer
export function Timmer(){
    const [second,setSeconds]=useState(600)
    const id=useRef(null)
    const clear=()=>{
        window.clearInterval(id)
    } 
    useEffect((e)=>{

              id.current=window.setInterval(()=>{
            setSeconds((time)=>time-1)
         },1000)       
         return()=>{
             clear()
         }
    },[])
    //  useEffect(()=>{
    //      if(second===0){
    //          setSeconds("Time Have Passed")
    //      }
    //  },[second])


    return(<div>
        <h1>Simple Timer In Next Js</h1>    
            { second===0  ? null :<h2>{second}</h2> }
        <p>This a simple Timer In Created By Using Reatc Hooks for performace  </p>
        <p>we have don,t change state directlty BUt chnage The state On Base of Previus State</p>
        <p>we can also apply futrther Logic On the BASE On State Of Counte Down1</p>
        <p> If second===0 clear Interval</p>
    </div>)
}
// anopther exampleof states and coinditiosn
export function Hamza(){
    const [one,setOne]=useState(1);
    const [ne,setne]=useState("");
    const ham=()=>{
        setInterval(() => {
            setOne(one+1)
        }, 2000)    
    }
        useEffect(()=>{
            setTimeout(() => {
                setne("10 seconds Have Been Passed")
            }, 10000);
            window.addEventListener("load" ,ham)
            return ()=>{
                window.removeEventListener("load",ham);
                clearInterval(ham)
            }
        },[])
        console.log(one)
        // for conditiona 
        if(one===2){
            console.log("Timer is STop")
            
        }
    return(<div>
        <h1>Conditional Rendering and Stop Functions on a conditions</h1>
            <h2>{one}</h2>
            <p>Adding a event Listener To a componet </p>
            <p>If else statetment work differntly in React js </p>
            {one === 2 ? <h2>Timer is Stop at 2</h2>: null }
            <p>conditions should Be define  before thr return Statement</p>
            <p>we Have to clear The event we Have added To a component other wise It wil case error in component State</p>
            <p>{ne}</p>
    </div>)
}




//rought work
export function Rouhh(){
    const [Lo,setLo]=useState("")
    const [Oo,setOo]=useState(1)

        
        
    useEffect(()=>{

        setInterval(() => {
            setOo(Oo+1)
        }, 1000)
        
        setTimeout(() => {
            setLo("10 seconds Have Been passed")
        }, 10000);
        return ()=>{
            clearTimeout();
            clearInterval()
        }
     },[])
     console.log(Oo)

     
    
    return(<div>
        <h2>Timer Rough</h2>
        <p>SetTimOut </p>
            <h1> Timer : {Lo}</h1>
        <p>SetInterval</p>
            <h2>{Oo}</h2>
    </div>)
} 