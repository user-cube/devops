import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import { HomepageFeatures } from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          DevOps Knowledge Base
        </Heading>
        <p className="hero__subtitle">
          Centralized documentation for Kubernetes, Cloud, Terraform, and more.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/kubernetes/intro">
            Kubernetes Docs
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/cloud/intro" style={{marginLeft: '1rem'}}>
            Cloud Docs
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/terraform/intro" style={{marginLeft: '1rem'}}>
            Terraform Docs
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="DevOps Knowledge Base"
      description="Centralized documentation for DevOps topics: Kubernetes, Cloud, Terraform, and more."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
