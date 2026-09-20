'use client'
import React, { useState } from 'react'
import { createTask } from '../actions';

export default function page() {
    const [title, setTitle] = useState("");

    async function handleSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        await createTask(formData); //api call prevent 

        setTitle("")
    }
  return (
    <form onSubmit={handleSubmit}>
        <input 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Enter task'
            name='title'
        />
        <button type='submit'>Create</button>

    </form>
  )
}
