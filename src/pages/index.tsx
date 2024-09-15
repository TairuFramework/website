import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import HomepageDisplayTile from '@site/src/components/HomepageDisplayTile'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
import Heading from '@theme/Heading'
import Layout from '@theme/Layout'

import clsx from 'clsx'

import styles from './index.module.css'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/overview"
            data-umami-event="Home CTA"
            data-umami-event-cta="Discover">
            Discover Tairu
          </Link>
        </div>
        {/* <Tile url="http://localhost:3210" />
        <iframe src="http://localhost:3210" width={600} height={100}></iframe> */}
      </div>
    </header>
  )
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`${siteConfig.title} - the Tiles framework`}
      description="Universally-accessible micro-interactions framework">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageDisplayTile />
      </main>
    </Layout>
  )
}
