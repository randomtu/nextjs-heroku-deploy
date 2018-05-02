import Document, { Head, Main, NextScript } from 'next/document';
import Styles from '../css/style.css';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <title>RANDOM by randomtu</title>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
          <style dangerouslySetInnerHTML={{ __html: Styles }} />
        </Head>
        <body className="top">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}