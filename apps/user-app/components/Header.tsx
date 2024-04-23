"use client"
import Appbar from '@repo/ui/Appbar'
import { useSession ,signIn,signOut} from 'next-auth/react'
import React from 'react'
import config from '../lib/auth'

const Header = () => {
    console.log("in header")
    const {data} = useSession()
  return (
    <div>
        <Appbar user={data?.user} onSignin={signIn} onSignout={signOut}/>
    </div>
  )
}

export default Header