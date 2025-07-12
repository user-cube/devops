
import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  imgSrc: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Kubernetes',
    imgSrc: '/img/kubernetes/kubernetes_logo.webp',
    description: (
      <>
        Kubernetes orchestration and management for your cloud-native workloads.
      </>
    ),
  },
  {
    title: 'Cloud Providers',
    imgSrc: '/img/cloud/providers.svg',
    description: (
      <>
        AWS, Azure, Google Cloud and more—multi-cloud docs and best practices.
      </>
    ),
  },
  {
    title: 'Terraform',
    imgSrc: '/img/terraform/terraform.svg',
    description: (
      <>
        Infrastructure as Code with Terraform for scalable, repeatable deployments.
      </>
    ),
  },
];

function Feature({title, imgSrc, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imgSrc} alt={title} className={styles.featureSvg} style={{height: 120}} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export function HomepageFeatures(): ReactNode {
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
