import Head from 'next/head'

export default function HTMLHead({ firstLine, fullPoem }) {
  var siteTitle = 'Poem Generator'
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{firstLine ? firstLine : siteTitle}</title>
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:title" content={fullPoem ? fullPoem : siteTitle} />
      <meta
        property="og:description"
        content="Create (somewhat) randomized poem generation from the tweets of defunct Twitter spam-bot @horse_ebooks."
      />
      <meta name="apple-mobile-web-app-title" content={siteTitle} />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, shrink-to-fit=no, viewport-fit=cover"
      />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link
        rel="apple-touch-icon"
        sizes="192x192"
        href="/apple-touch-icon.png"
      />
    </Head>
  )
}
