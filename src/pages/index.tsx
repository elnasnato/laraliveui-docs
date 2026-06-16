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
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            Mulai Membaca &rarr;
          </Link>
        </div>
      </div>
    </header>
  );
}

function Feature({title, description}: {title: string; description: string}) {
  return (
    <div className="col col--4">
      <div className="text--center padding-horiz--md padding-vert--lg">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

const features = [
  {
    title: '50+ Komponen Gratis',
    description: 'Button, Modal, Table, Dropdown, Date Picker, Combobox, Wizard, dan banyak lagi komponen siap pakai untuk aplikasi Livewire Anda.',
  },
  {
    title: 'Tailwind CSS v4',
    description: 'Dibangun dengan utility-first CSS framework modern. Mudah dikustomisasi dan diintegrasikan.',
  },
  {
    title: 'Open Source & Gratis',
    description: 'Lisensi MIT. Bebas digunakan untuk proyek pribadi, komersial, atau edukasi tanpa biaya.',
  },
];

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="Dokumentasi resmi LaraLiveUI - UI component library untuk Livewire + Tailwind CSS">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map((f) => (
                <Feature key={f.title} {...f} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
