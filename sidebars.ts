import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  docs: [
    { type: 'doc', id: 'overview', label: 'Overview' },
    { type: 'doc', id: 'quick-start', label: 'Quick start' },
    { type: 'doc', id: 'going-further', label: 'Going further' },
    {
      type: 'category',
      collapsible: false,
      label: 'Reference',
      items: ['concepts', 'protocol', 'cli'],
    },
    {
      type: 'category',
      label: 'Tairu APIs',
      link: { type: 'generated-index', slug: '/api' },
      items: [
        'api/handler/index',
        'api/loader/index',
        'api/renderer/index',
        'api/react/index',
        'api/react-dom/index',
        'api/testing/index',
      ],
    },
  ],
}

export default sidebars
