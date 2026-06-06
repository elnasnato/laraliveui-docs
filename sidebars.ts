import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Instalasi',
      items: [
        'instalasi/library',
        'instalasi/starter-kit',
        'instalasi/quickstart',
      ],
    },
    {
      type: 'category',
      label: 'Komponen',
      items: [
        'komponen/overview',
        'komponen/basic-input',
        'komponen/navigation',
        'komponen/data-display',
        'komponen/feedback',
        'komponen/layout',
        'komponen/icons',
      ],
    },
    {
      type: 'category',
      label: 'Starter Kit',
      items: [
        'starter-kit/overview',
        'starter-kit/features',
        'starter-kit/authentication',
        'starter-kit/settings',
      ],
    },
    'kustomisasi',
    'kontribusi',
  ],
};

export default sidebars;
