'use client'
import React, { useEffect } from 'react'

export default function ClientUsers({users}) {
    useEffect(()=>{
        console.log('are you sure?')
        console.log(users)
    },[])
  return (
    <div>ClientUsers</div>
  )
}
