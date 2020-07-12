import Head from 'next/head'

export default function HTMLHead({
  title = 'Poem Generator',
  desc = 'Create (somewhat) randomized poem generation from the tweets of defunct Twitter spam-bot @horse_ebooks.'
}) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Poem Generator" />
      <meta property="og:title" content={title} />
      <meta property="og:desc" content={desc} />
      <meta name="apple-mobile-web-app-title" content="Poem Generator" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, shrink-to-fit=no, viewport-fit=cover"
      />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="192x192"
        href="/apple-touch-icon.png"
      />
    </Head>
  )
}
