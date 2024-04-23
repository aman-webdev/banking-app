"use client"

import React from 'react'
import {RecoilRoot} from "recoil"
import { SessionProvider } from 'next-auth/react'
import config from '../lib/auth'
const Providers = ({children}: {children:React.ReactNode}) => {
  return (
    <div>
        <RecoilRoot>

      <SessionProvider >
        {children}
        </SessionProvider>
        </RecoilRoot>

         
    </div>
  )
}

export default Providers