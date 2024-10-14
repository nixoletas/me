import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Front-end (HTML, CSS & Javascript)',
    Svg: require('@site/static/img/javascript-svgrepo-com.svg').default,
    description: (
      <>
        Many personal and professional projects helped me delv my skills into front-end web development.
      </>
    ),
  },
  {
    title: 'DevOps & Security',
    Svg: require('@site/static/img/docker-svgrepo.svg').default,
    description: (
      <>
        Practiced knowledge in docker deploymente & server administration.
      </>
    ),
  },
  {
    title: 'Back-end (Java Spring)',
    Svg: require('/img/spring-svgrepo-com.svg').default,
    description: (
      <>
        Spring is one of the most rich frameworks out there and is also very secure.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
