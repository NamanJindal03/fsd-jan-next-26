
// 'use client'
// import dynamic from "next/dynamic";

// const MinistryContact = dynamic(
//     ()=> import('./MinistryContact'),
//     { ssr: false}
// )

// export default function Page(){
//     return <MinistryContact />
// }

'use client'
import { useEffect, useState } from "react"

export default function MinistryContact(){
    const [ministerName, setMinisterName] = useState('naman')
    useEffect(()=>{
        console.log('hydration definetily occured by now')
        setTimeout(()=>{
            setMinisterName(Date.now())
        }, 3000)
    },[])
    
    return (
        <>
            <button onClick={()=> console.log('clicked clicked clicked')}>Click me</button>
            <h1> I am on Ministry contact page {ministerName}</h1>
        </>
    )
}