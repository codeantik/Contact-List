import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            // router.go(1)
            router.push('/')
        }, 3000)
        console.log('useEffect ran')
    }, [])

    return ( 
        <>
            <Head>
                <title>Contact List | 404</title>
                <meta name="keywords" content="contacts" />
            </Head>
            <div className="not-found">
                <h1>Ooops...</h1>
                <h2>That page cannot be found.</h2>
                <p>Go back to <Link href="/"><a>homepage</a></Link></p>
            </div>
        </>
     );
}
 
export default NotFound;