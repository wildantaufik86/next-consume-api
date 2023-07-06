import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
import styles from '@/styles/App.module.scss'
import Head from 'next/head'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Head>
        <title key="title">Create Next App</title>
        <meta key="desc" name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./ic_news.png" />
      </Head>
      <Header
        title='Breaking News'
      />
      <div className={styles.container}>
        <Component {...pageProps} />
      </div>
    </div>
  )
}
