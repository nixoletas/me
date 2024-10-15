import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';
import BigButton from '../BigButton';

const FeatureList = [
  {
    title: 'Front-end',
    description: (
      <>
      <Translate>
        HTML, CSS & Javascript. ⭐
      </Translate>
      </>
    ),
  },
  {
    title: 'DevOps & Security',
    description: (
      <>
      <Translate>
        Docker, Kubernetes & Linux. 🔒
      </Translate>
      </>
    ),
  },
  {
    title: 'Back-end',
    description: (
      <>
      <Translate>
        Real projects with Java and Node.  🛠️
        </Translate>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md" style={{margin: "3rem"}}>
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
        <div style={{padding: "28px",display: "flex", justifyContent: "center"}}>
<BigButton/>
</div>
</div>
    </section>
  );
}
