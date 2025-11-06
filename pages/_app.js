import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/Navbar';
import '@/app/globals.css';
import Footer from '@/components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
