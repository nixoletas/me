import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import Translate from '@docusaurus/Translate';
import SocialIcons from '../components/SocialIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import Grid from '../components/Grid';
import Shadown from '../components/Shadown';

function HomepageHeader() {
  return (
    <>
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
          <Grid/>
      <div className="container" style={{zIndex: 1}}>
        <Heading as="h1" className="hero__title">
          <Translate>Hi, I'm Nick.</Translate>
        </Heading>
        <img src="/me/img/github-profile.jpg" alt="GitHub" style={{width:"140px", height:"140px", marginLeft:"10px", borderRadius:"4rem"}} />
        <p className="hero__subtitle"><Translate>I'm a Software Developer, Musician and Designer.</Translate></p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/portfolio/projects"
            >
            <Translate>Projects </Translate><FontAwesomeIcon icon={faBook} width={15}/>
          </Link>
        </div>
        <SocialIcons />
      </div>
<Shadown />
    </header>
    </>
  );
}

export default function Home() {
  return (
    <Layout
    title={`Welcome`}
    description="Nicholas Miyasato Portfolio & Blog">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
