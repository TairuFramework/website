import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  docs: [
    { type: 'doc', id: 'introduction', label: 'Introduction' },
    {
      type: 'category',
      collapsed: false,
      label: 'Getting Started',
      items: ['installation', 'usage'],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: false,
      items: ['concepts', 'protocol', 'cli'],
    },
    {
      type: 'category',
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
