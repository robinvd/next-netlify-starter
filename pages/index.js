import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Main from '@components/Main'

export default function Home() {
  return (
    <div className="container">

      <main>
        <Header class="title" title="Welcome to Toki's knit app!" />
        <Main/>
      </main>

      <Footer />
    </div>
  )
}
