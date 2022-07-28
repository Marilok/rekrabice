import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import Auth from '../components/Auth'
import App from '../components/App'
import Receive from '../components/Receive'
import { Center } from '@mantine/core'

const Home: NextPage = () => {
    const [session, setSession] = useState(null)

    useEffect(() => {
        setSession(supabase.auth.session())

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })
    }, [])

    return (
        <>
            {!session ? <Auth /> : <App key={session.user.id} session={session}><Center style={{ width: '100%', height: '100%' }}><Receive session={session} /></Center></App>}
        </>
    )

}

export default Home
