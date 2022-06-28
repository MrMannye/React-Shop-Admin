import Head from 'next/head'
import HomePage from '../src/components/HomePage'

export default function Home() {
  return (
    <div className={"flex flex-col justify-center min-h-screen"}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage/>

    </div>
  )
}
