import PropTypes from 'prop-types'
import Head from 'next/head'
import polyfills from '../utils/polyfills'

polyfills()

const cx = {
  main: 'max-w-lg lg:max-w-xl m-auto font-sans px-2',
  header: 'leading-tight font-thin text-4xl lg:pb-3 lg:mb-8',
  headerLink: 'no-underline',
  logo: 'inline-block mr-2 align-middle',
  footer: 'leading-normal text-center'
}

const Layout = ({ title, description, children, className, cover }) => {
  return (
    <main className={`${cx.main} ${className}`}>
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content={description} />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta property='og:description' content={description} />
        <meta property='og:title' content={title} />
        <meta name='twitter:image' content={cover} />
        <meta name='twitter:image:alt' content={description} />
        <meta property='og:image' content={cover} />
      </Head>
      <style global jsx>
        {`
          body {
            color: #fff;
            background: #000;
          }
          a {
            color: #0096DB;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          h1 a {
            color: #fff;
          }
          article {
            border-color: rgb(255,255,255,.25);
          }
          .cv-auto {
            content-visibility: auto;
          }
          @media (prefers-color-scheme: light) {
            body {
              color: #111;
              background: #fff;
            }
            h1 a {
              color: #111;
            }
            article {
              border-color: rgba(0,0,0,.12);
            }
        `}
      </style>
      {children}
    </main>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  cover: PropTypes.string
}

Layout.defaultProps = {
  title: 'TEMPLATE_NAME',
  description: 'TEMPLATE_DESCRIPTION',
  className: '',
  cover: '/cover.png'
}

export default Layout
