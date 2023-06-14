import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { ApolloProvider } from '@apollo/react-hooks'
import cliente from '../graphql/cliente'
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={cliente}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </ApolloProvider>
  )
}