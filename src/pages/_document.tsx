import { ThemeProvider } from '@src/features/shared/context/ThemeProvider';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body className='overflow-hidden'>
        {/* <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
        > */}
        <Main />
        <NextScript />
        {/* </ThemeProvider> */}
      </body>
    </Html>
  );
}
