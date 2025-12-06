import 'styles/app.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from 'styles/createEmotionCache';
import 'styles/fonts.scss';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: MyAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Modern Property Management Platform - Streamline Your Operations</title>
        <meta
          name="description"
          content="Transform your property management operations with our comprehensive platform. Streamline tenant management, automate workflows, track maintenance, and gain real-time insights into your property portfolio."
        />
      </Head>
      <Component {...pageProps} />
    </CacheProvider>
  );
}

export default MyApp;
