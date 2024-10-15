import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import PersonalTabs from '../Tabs';

const FeatureList = [
  {
    title: 'Front-end',
    description: (
      <>
        HTML, CSS & Javascript in real projects. ⭐
      </>
    ),
  },
  {
    title: 'DevOps & Security',
    description: (
      <>
        Docker, Kubernetes & Linux. 🔒
      </>
    ),
  },
  {
    title: 'Back-end',
    description: (
      <>
        Real projects with Java and Node.  🛠️
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
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
        <div style={{padding: "28px",display: "flex", justifyContent: "center"}}>
</div>
<PersonalTabs/>
      </div>
    </section>
  );
}
