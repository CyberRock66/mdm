import '@/styles/globals.css';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';

export const App = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default App;
