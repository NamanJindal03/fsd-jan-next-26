'use client'
import { useEffect, useState } from "react"

export default function MinistryContact(){
    const [ministerName, setMinisterName] = useState('topi')
    useEffect(()=>{
        setMinisterName('naman')
    },[])
    
    return (
        <h1> I am on Ministry contact page {ministerName}</h1>
    )
}