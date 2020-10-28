import '../css/tailwind.css'
import Header from '../components/header'
import Container from '../components/container'

function MainApp({ Component, pageProps }) {
  return(
    <>
    <Header />
    <Container>
      <Component {...pageProps} />
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