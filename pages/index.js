import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to our Minting Site basic!" />
        <p className="description">
          Here you can mint our NFT collection!
        </p>

        <p className="description">
          Testing Description 2
        </p>
      </main>

      <Footer />
    </div>
  )
}
