import '../styles/globals.css'
import Sidebar from '../components/sidebar'

import type { AppProps } from 'next/app'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()
    return (
        <>
            {router.pathname === '/login' ? (
                <Component {...pageProps} />
            ) : (
                <div style={{ display: 'flex' }}>
                    <Sidebar />
                    <div style={{ overflowY: 'auto', maxHeight: '100vh', flexGrow: 1 }}>
                        <Component {...pageProps} />
                    </div>
                </div>
            )}
        </>
    )
}
