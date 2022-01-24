import Document, { Html, Head, Main, NextScript } from 'next/document';

class BaseDocument extends Document {
  render() {
    return (
      <Html
        lang="fr"
        itemScope
        itemType="https://schema.org/SportsOrganization">
        <Head>
          <link
            href="https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css"
            rel="preload"
            as="stylesheet"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <meta
            property="og:title"
            content="Le club d'escalade Visétois, escalade indoor et plein air."
            key="og_title"
          />
          <meta
            property="og:description"
            content="Le club d'escalade Visétois, escalade indoor et plein air."
            key="og_description"
          />
          <meta
            property="og:title"
            content="Le club d'escalade Visétois, escalade indoor et plein air."
            key="title"
          />
          <meta
            property="og:description"
            content="Le club d'escalade Visétois, escalade indoor et plein air."
          />
          <meta
            property="image"
            content="/public/assets/meta_image.jpg"
            key="image"
          />
          <meta
            property="og:image"
            content="/public/assets/meta_image.jpg"
            key="og_image"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default BaseDocument;
