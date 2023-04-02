import React from 'react'
import Head from 'next/head';

const IndexPage = () => {
return (
    <>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"/>
            <link href='/styles/all.min.css'/>
            <title>Company One</title>
        </Head>
    </>
)
}

export default IndexPage