import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import Translate from '@docusaurus/Translate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <Translate>Hi, I'm Nick.</Translate>
        </Heading>
        <img src="/img/github-profile.jpg" alt="GitHub" style={{width:"140px", height:"140px", marginLeft:"10px", borderRadius:"4rem"}} />
        <p className="hero__subtitle"><Translate>I'm a Software Developer. I like to create things. I like chess, music and soccer. ⚽</Translate></p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/portfolio/experience">
            <Translate>About</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`👋`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
