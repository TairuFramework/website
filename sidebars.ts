import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  docs: [
    { type: 'doc', id: 'overview', label: 'Overview' },
    { type: 'doc', id: 'getting-started', label: 'Getting started' },
    {
      type: 'category',
      collapsible: false,
      label: 'Reference',
      items: ['concepts', 'protocol', 'cli'],
    },
    {
      type: 'category',
      collapsible: false,
      label: 'Tairu APIs',
      link: { type: 'generated-index', slug: '/api' },
      items: [
        'api/handler',
        'api/loader',
        'api/renderer',
        'api/react',
        'api/react-dom',
        'api/testing',
      ],
    },
  ],
}

export default sidebars
