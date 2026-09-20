"use cache"
import React from 'react'
import { db } from '../../prisma/db'
import ClientUsers from './ClientUsers';

export default async function page() {
    // console.log(process.env['DATABASE_URL'])
    // const tempUser = await db.orm.public.User.create({
    //     email: 'namanjindal@example.com',
    //     username: 'naman',
    //     name: 'Naman'
    // })
    // console.log(tempUser)
    const users = await db.orm.public.User.all();
    console.log('users')

    // useEffectEvent
    return (
        <>
            {JSON.stringify(users)}
            <ClientUsers users={users}/>
        </>
    )
}
