import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

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
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--4">
                <div className="text--center">
                  <img src="/img/undraw_docusaurus_mountain.svg" alt="Kubernetes" style={{height: 120}} />
                </div>
                <div className="text--center padding-horiz--md">
                  <Heading as="h3">Kubernetes</Heading>
                  <p>Guides, best practices, and resources for Kubernetes in DevOps.</p>
                </div>
              </div>
              <div className="col col--4">
                <div className="text--center">
                  <img src="/img/undraw_docusaurus_tree.svg" alt="Cloud" style={{height: 120}} />
                </div>
                <div className="text--center padding-horiz--md">
                  <Heading as="h3">Cloud</Heading>
                  <p>Documentation for AWS, Google Cloud, Azure, and other cloud providers.</p>
                </div>
              </div>
              <div className="col col--4">
                <div className="text--center">
                  <img src="/img/undraw_docusaurus_react.svg" alt="Terraform" style={{height: 120}} />
                </div>
                <div className="text--center padding-horiz--md">
                  <Heading as="h3">Terraform</Heading>
                  <p>Infrastructure as Code with Terraform: modules, patterns, and tips.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
