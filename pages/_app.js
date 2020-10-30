import '../css/tailwind.css'
import Router from 'next/router'
import Head from 'next/head'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Header from '../components/header'
import Footer from '../components/footer'
import Container from '../components/container'
import { CMS_NAME, CMS_SLOGAN } from '../lib/constants'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

function MainApp({ Component, pageProps }) {
  return(
    <>
    <Head>
      <title>{CMS_NAME} - {CMS_SLOGAN}</title>
      <meta property="og:title" content={CMS_NAME} key="title" />
      <meta name="description" lang="en" content="Another personal blog" />
      <meta name="keywords" lang="en" content="Blog, Personal, News" />
      <meta name="author" content="Hurtwolf" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest"/>
    </Head>
    <Header />
    <Container>
      <Component {...pageProps} />
      <Footer />
    </Container>
    </>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// App.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MainApp