import { ChakraProvider } from '@chakra-ui/react';
import newTheme from '../styles/theme';
import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/globals.css"

const client = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={client}>
    <ChakraProvider theme={newTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
    </QueryClientProvider>

  )
}

export default MyApp
