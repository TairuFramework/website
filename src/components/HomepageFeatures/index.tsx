import useBaseUrl from '@docusaurus/useBaseUrl'
import Heading from '@theme/Heading'
import ThemedImage from '@theme/ThemedImage'

import styles from './styles.module.css'

type FeatureItem = {
  img: string
  title: string
  description: string
}

function Feature({ img, title, description }: FeatureItem) {
  return (
    <div className="col col--4">
      <div className="text--center">
        <ThemedImage
          className={styles.featureSvg}
          sources={{
            light: useBaseUrl(`/img/${img}-light.svg`),
            dark: useBaseUrl(`/img/${img}-dark.svg`),
          }}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h2">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <Feature img="easy" title="Easy to use" description="" />
          <Feature img="universal" title="Universal access" description="" />
          <Feature img="auth" title="Authenticated interactions" description="" />
        </div>
      </div>
    </section>
  )
}
