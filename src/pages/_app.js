import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Layout from '../layout/Layout'
import '../styles/globals.css'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#663399'
    }
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
