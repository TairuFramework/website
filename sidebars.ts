import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  docs: [
    { type: 'doc', id: 'overview', label: 'Overview' },
    { type: 'doc', id: 'quick-start', label: 'Quick start' },
    { type: 'doc', id: 'going-further', label: 'Going further' },
    {
      type: 'category',
      collapsible: true,
      label: 'Agents',
      link: { type: 'doc', id: 'agents/index' },
      items: ['agents/web-client', 'agents/jquery', 'agents/react-dom', 'agents/react-native'],
    },
    {
      type: 'category',
      collapsible: true,
      label: 'Integrations',
      items: ['integrations/next'],
    },
    {
      type: 'category',
      collapsible: false,
      label: 'Reference',
      items: ['concepts', 'protocol', 'cli'],
    },
  ],
  api: [
    'api',
    {
      type: 'category',
      collapsible: false,
      label: 'Tiles handling',
      items: ['api/handler/index', 'api/json-handler/index'],
    },
    {
      type: 'category',
      collapsible: false,
      label: 'Tiles rendering',
      items: [
        'api/web-client/index',
        'api/jquery/index',
        {
          type: 'category',
          label: '@tairu/react-dom',
          link: { type: 'doc', id: 'api/react-dom/react-dom/index' },
          items: ['api/react-dom/react-dom/server/index'],
        },
        'api/react-native/index',
      ],
    },
    {
      type: 'category',
      collapsible: false,
      label: 'Integrations',
      items: [
        {
          type: 'category',
          label: '@tairu/next',
          link: { type: 'doc', id: 'api/next/next/index' },
          items: ['api/next/next/server/index'],
        },
      ],
    },
    {
      type: 'category',
      collapsible: false,
      label: 'Utilities',
      items: [
        'api/protocol/index',
        'api/loader/index',
        'api/renderer/index',
        'api/testing/index',
        'api/jsx/index',
        'api/react/index',
      ],
    },
  ],
}

export default sidebars
