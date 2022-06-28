import MainLayout from '../src/layout/MainLayout'
import { ProviderAuth } from '../src/hooks/useAuth'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ProviderAuth>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ProviderAuth>

  )
}

export default MyApp
