import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

export default function NotFound(){
  return(
    <>
    <Head>
      <title>404 Not Found - {CMS_NAME}</title>
      <meta property="og:title" content={CMS_NAME} key="title" />
    </Head>
    <div className="text-center">
      <p className="font-semibold text-6xl">404</p>
      <p className="font-semibold">Sorry.</p>    
    </div>
    </>
  )
}