// import '@/styles/globals.css';

import { ThemeProvider } from '@mui/material/styles';
import theme from '@/lib/theme/index';
import CssBaseline from '@mui/material/CssBaseline';

export default function App({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
