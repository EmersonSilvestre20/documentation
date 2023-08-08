/**
 *
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  devDocsSidebar: [
    { // Getting Started
      type: 'category',
      collapsed: false,
      label: '🚀 Getting Started',
      items: [
        'dev-docs/intro',
        'dev-docs/quick-start',
        'dev-docs/faq',
        'dev-docs/usage-information',
      ]
    },
    { // Setup & Deployment
      type: 'category',
      collapsed: false,
      label: '⚙️ Setup & Deployment',
      link: {
        type: 'doc',
        id: 'dev-docs/setup-deployment',
      },
      items: [
        {
          type: 'doc',
          label: 'Introduction',
          id: 'dev-docs/setup-deployment',
        },
        {
          type: 'category',
          label: 'Installation',
          items: [
            {
              type: 'doc',
              label: 'Introduction',
              id: 'dev-docs/installation',
            },
            'dev-docs/installation/cli',
            'dev-docs/installation/docker',
          ]
        },
        'dev-docs/project-structure',
        {
          type: 'category',
          label: 'Configuration',
          link: {
            type: 'doc',
            id: 'dev-docs/configurations',
          },
          items: [
            {
              type: 'doc',
              label: 'Introduction',
              id: 'dev-docs/configurations',
            },
            'dev-docs/configurations/database',
            'dev-docs/configurations/server',
            'dev-docs/configurations/admin-panel',
            'dev-docs/configurations/middlewares',
            'dev-docs/configurations/api',
            'dev-docs/configurations/plugins',
            'dev-docs/configurations/typescript',
            'dev-docs/configurations/api-tokens',
            'dev-docs/configurations/functions',
            'dev-docs/configurations/cron',
            'dev-docs/configurations/environment',
            'dev-docs/configurations/guides/public-assets',
            'dev-docs/configurations/sso',
            'dev-docs/configurations/guides/rbac',
          ],
        },
        {
          type: 'category',
          label: 'Deployment',
          items: [
           {
              type: 'doc',
              label: 'Introduction',
              id: 'dev-docs/deployment',
            },
            {
              type: 'doc',
              label: '☁️ Strapi Cloud',
              id: 'cloud/getting-started/deployment',
            },
            {
              type: 'category',
              label: 'Other Hosting Guides',
              collapsed: false,
              link: {
                type: 'doc',
                id: 'dev-docs/deployment/hosting-guides',
            },
              items: [
                'dev-docs/deployment/amazon-aws',
                'dev-docs/deployment/azure',
                'dev-docs/deployment/digitalocean-app-platform',
                'dev-docs/deployment/digitalocean',
                // 'dev-docs/deployment/google-app-platform',
                'dev-docs/deployment/heroku',
              ],
            },
            {
              type: 'category',
              label: 'Optional Software Guides',
              collapsed: false,
              link: {
                type: 'doc',
                id: 'dev-docs/deployment/optional-software-guides',
            },
              items: [
                'dev-docs/deployment/caddy-proxy',
                'dev-docs/deployment/haproxy-proxy',
                'dev-docs/deployment/nginx-proxy',
                'dev-docs/deployment/process-manager',
              ],
            },
          ]
        }
      ]
    },
    { // Content APIs
      type: 'category',
      collapsed: false,
      label: '📦 Content APIs',
      items: [
        {
          type: 'doc',
          label: 'Introduction',
          id: 'dev-docs/api/content-apis'
        },
        {
          type: 'category',
          label: 'REST API',
          link: {
            type: 'doc',
            id: 'dev-docs/api/rest',
          },
          items: [
            'dev-docs/api/rest/parameters',
            'dev-docs/api/rest/populate-select',
            'dev-docs/api/rest/filters-locale-publication',
            'dev-docs/api/rest/sort-pagination',
            'dev-docs/api/rest/relations',
            'dev-docs/api/rest/interactive-query-builder',
          ]
        },
        'dev-docs/api/graphql',
        {
          type: 'category',
          label: 'Integrations',
          link: {
            type:'doc',
            id: 'dev-docs/integrations',
          },
          items: [
            'dev-docs/integrations/11ty',
            'dev-docs/integrations/angular',
            'dev-docs/integrations/dart',
            'dev-docs/integrations/flutter',
            'dev-docs/integrations/gatsby',
            'dev-docs/integrations/gridsome',
            'dev-docs/integrations/go',
            'dev-docs/integrations/graphql',
            'dev-docs/integrations/jekyll',
            'dev-docs/integrations/laravel',
            'dev-docs/integrations/next-js',
            'dev-docs/integrations/nuxt-js',
            'dev-docs/integrations/php',
            'dev-docs/integrations/python',
            'dev-docs/integrations/react',
            'dev-docs/integrations/ruby',
            'dev-docs/integrations/sapper',
            'dev-docs/integrations/svelte',
            'dev-docs/integrations/vue-js',
          ]
        },
        {
          type: 'category',
          label: 'Entity Service API',
          link: {
            type: 'doc',
            id: 'dev-docs/api/entity-service',
          },
          items: [
            'dev-docs/api/entity-service/crud',
            'dev-docs/api/entity-service/filter',
            'dev-docs/api/entity-service/populate',
            'dev-docs/api/entity-service/order-pagination',
            'dev-docs/api/entity-service/components-dynamic-zones',
          ]
        },
        {
          type: 'category',
          label: 'Query Engine API',
          link: {
            type: 'doc',
            id: 'dev-docs/api/query-engine',
          },
          items: [
            'dev-docs/api/query-engine/single-operations',
            'dev-docs/api/query-engine/bulk-operations',
            'dev-docs/api/query-engine/filtering',
            'dev-docs/api/query-engine/populating',
            'dev-docs/api/query-engine/order-pagination',
          ]
        },

      ]
    },
    { // Advanced features
      type: 'category',
      label: '🔧 Advanced features',
      collapsed: false,
      items: [
        {
          type: 'doc',
          label: 'Introduction',
          id: 'dev-docs/advanced-features',
        },
        'dev-docs/cli',
        'dev-docs/typescript',
        {
          type: 'doc',
          label: 'Providers',
          id: 'dev-docs/providers',
        },
        {
          type: 'category',
          label: 'Data management',
          link: {
            type: 'doc',
            id: 'dev-docs/data-management',
          },
          items: [
            'dev-docs/data-management/export',
            'dev-docs/data-management/import',
            {
              type: 'doc',
              label: 'Data transfer',
              id: 'dev-docs/data-management/transfer',
            }
          ],
        },
        'dev-docs/database-migrations',
        'dev-docs/testing',
        'dev-docs/error-handling',
      ]
    },
    { // Customization
      type: 'category',
      collapsed: false,
      label: '🛠 Customization',
      items: [
        {
          type: 'doc',
          label: 'Introduction',
          id: 'dev-docs/customization',
        },
        {
          type: 'category',
          label: 'Back-end customization',
          items: [
            {
              type: 'doc',
              id: 'dev-docs/backend-customization',
              label: 'Introduction',
              customProps: {
                new: true,
              },
            },
            {
              type: 'doc',
              id: 'dev-docs/backend-customization/requests-responses',
              customProps: {
                updated: true,
              },
            },
            'dev-docs/backend-customization/routes',
            'dev-docs/backend-customization/policies',
            'dev-docs/backend-customization/middlewares',
            'dev-docs/backend-customization/controllers',
            'dev-docs/backend-customization/services',
            'dev-docs/backend-customization/models',
            'dev-docs/backend-customization/webhooks',
          ]
        },
        'dev-docs/admin-panel-customization',
        'dev-docs/custom-fields',
      ]
    },
    { // Plugins
      type: 'category',
      collapsed: false,
      label: '🔌 Plugins',
      link: {
            /**
            * Use the 2 lines below to make sure that
            * "Installation" in the TOC is a clickable link
            * pointing to a page (i.e., type: 'doc') whose link target
            * is defined as the 'id' property.
            */
            type: 'doc',
            id: 'dev-docs/plugins',
          },
      items: [
        {
          type: 'doc',
          label: 'Introduction',
          id: 'dev-docs/plugins'
        },
        {
          type: 'category',
          label: 'Using plugins',
          items: [
            {
              type: 'doc',
              label: 'Introduction',
              id: 'dev-docs/using-plugins'
            },
            'dev-docs/plugins/documentation',
            'dev-docs/plugins/email',
            'dev-docs/plugins/graphql',
            'dev-docs/plugins/i18n',
            'dev-docs/plugins/sentry',
            'dev-docs/plugins/upload',
            'dev-docs/plugins/users-permissions',
          ]
        },
        {
          type: 'category',
          label: 'Developing plugins',
          items: [
            {
              type: 'doc',
              label: 'Introduction',
              id: 'dev-docs/developing-plugins'
            },
            'dev-docs/plugins-extension',
            'dev-docs/plugins-development',
            {
              type: 'category',
              label: 'Plugin APIs',
              items: [
                'dev-docs/plugins/admin-panel-api',
                'dev-docs/plugins/server-api',
              ]
            },
            'dev-docs/plugins/publishing-your-plugin'
          ]
        }
      ]
    },
    { // Update & Migration
      type: 'category',
      collapsed: false,
      label: '♻️ Update and Migration',
      items: [
        {
          type: 'doc',
          label: 'Introduction',
          id: 'dev-docs/update-migration'
        },
        'dev-docs/update-version',
        {
          type: 'doc',
          label: 'v5.x migration guides',
          id: 'dev-docs/migration-guides',
        },
        {
          type: 'category',
          collapsed: true,
          label: 'v4 to v5 migration guides',
          items: [
            {
              type: 'doc',
              label: 'Introduction',
              id: 'dev-docs/migration/v4-to-v5/introduction'
            },
          ]
        }
      ],
    },
  ],
  userDocsSidebar: [
    'user-docs/intro',
    {
      type: 'category',
      collapsed: false,
      label: 'Content Manager',
      items: [
        'user-docs/content-manager/introduction-to-content-manager',
        'user-docs/content-manager/configuring-view-of-content-type',
        'user-docs/content-manager/writing-content',
        'user-docs/content-manager/managing-relational-fields',
        'user-docs/content-manager/translating-content',
        'user-docs/content-manager/reviewing-content',
        {
          type: 'doc',
          id: 'user-docs/content-manager/saving-and-publishing-content',
          customProps: {
            updated: true,
          },
        },
      ],
    },
    {
      type: 'category',
      collapsed: false,
      label: 'Content-type Builder',
      items: [
        {
          type: 'autogenerated',
          dirName: 'user-docs/content-type-builder'
        }
      ]
    },
    {
      type: 'category',
      collapsed: false,
      label: 'Media Library',
      items: [
        {
          type: 'autogenerated',
          dirName: 'user-docs/media-library'
        }
      ]
    },
    {
      type: 'category',
      collapsed: false,
      label: 'Users, Roles & Permissions',
      items: [
        {
          type: 'autogenerated',
          dirName: 'user-docs/users-roles-permissions'
        }
      ]
    },
    {
      type: 'category',
      collapsed: false,
      label: 'Plugins',
      items: [
        {
          type: 'autogenerated',
          dirName: 'user-docs/plugins'
        }
      ]
    },
    {
      type: 'category',
      collapsed: false,
      label: 'General Settings',
      items: [
       'user-docs/settings/configuring-users-permissions-plugin-settings',
       'user-docs/settings/audit-logs',
        {
          type: 'category',
          collapsed: false,
          label: 'Configuring global settings',
          items: [
            'user-docs/settings/admin-panel',
            'user-docs/settings/API-tokens',
            'user-docs/settings/internationalization',
            'user-docs/settings/media-library-settings',
            {
              type: 'doc',
              label: 'Review Workflows',
              id: 'user-docs/settings/review-workflows',
              customProps: {
                new: true,
              },
            },
            'user-docs/settings/single-sign-on',
            'user-docs/settings/transfer-tokens',
          ]
        },
      ],
    },
  ],
  cloudSidebar: [
    {
      type: 'category',
      collapsed: false,
      label: 'Getting Started',
      items: [
        {
          type: 'autogenerated',
          dirName: 'cloud/getting-started'
        }
      ]
    },
    {
      type: 'category',
      collapsed: false,
      label: 'Projects',
      items: [
        'cloud/projects/overview',
        {
          type: 'doc',
          label: 'Project Settings',
          id: 'cloud/projects/settings',
          customProps: {
            updated: true,
          },
        },
        {
          type: 'doc',
          label: 'Notifications',
          id: 'cloud/projects/notifications',
        },
      ]
    },
    {
      type: 'category',
      collapsed: false,
      label: 'Account Management',
      items: [
        'cloud/account/settings',
      ]
    },
    {
      type: 'category',
      collapsed: false,
      label: 'Advanced configuration',
      items: [
        'cloud/advanced/database',
      ]
    }
  ],
  restApiSidebar: [
    {
      type: 'link',
      label: '⬅️ Back to Dev Docs content',
      href: '/dev-docs/intro'
    },
    {
      type: 'category',
      collapsed: false,
      label: 'REST API',
      items: [
        {
          type: 'category',
          label: 'Endpoints and basic requests',
          link: {type: 'doc', id: 'dev-docs/api/rest'},
          collapsed: false,
          items: [
            {
              type: 'link',
              label: 'Endpoints',
              href: '/dev-docs/api/rest#endpoints',
            },
            {
              type: 'link',
              label: 'Get entries',
              href: '/dev-docs/api/rest#get-entries'
            },
            {
              type: 'link',
              label: 'Get an entry',
              href: '/dev-docs/api/rest#get-an-entry'
            },
            {
              type: 'link',
              label: 'Create an entry',
              href: '/dev-docs/api/rest#create-an-entry'
            },
            {
              type: 'link',
              label: 'Update an entry',
              href: '/dev-docs/api/rest#update-an-entry'
            },
            {
              type: 'link',
              label: 'Delete an entry',
              href: '/dev-docs/api/rest#delete-an-entry'
            },
          ]
        },
        {
          type: 'doc',
          id: 'dev-docs/api/rest/interactive-query-builder',
          label: '✨ Interactive Query Builder'
        },
        {
          type: 'doc',
          id: 'dev-docs/api/rest/parameters'
        },
        {
          type: 'category',
          label: 'Populate and Select',
          link: {type: 'doc', id: 'dev-docs/api/rest/populate-select'},
          collapsed: false,
          items: [
            {
              type: 'link',
              label: 'Field selection',
              href: '/dev-docs/api/rest/populate-select#field-selection',
            },
            {
              type: 'link',
              label: 'Populate Relations & Media Fields',
              href: '/dev-docs/api/rest/populate-select#relations--media-fields',
            },
            {
              type: 'link',
              label: 'Populate Components & Dynamic Zones',
              href: '/dev-docs/api/rest/populate-select#components--dynamic-zones',
            },
            {
              type: 'link',
              label: 'Populating createdBy and updatedBy',
              href: '/dev-docs/api/rest/populate-select#populating-createdby-and-updatedby',
            },
            {
              type: 'link',
              label: 'Combining populate with other operators',
              href: '/dev-docs/api/rest/populate-select#combining-population-with-other-operators',
            },
          ]
        },
        {
          type: 'category',
          collapsed: false,
          label: 'Filters, Locale, Publication State',
          link: {type: 'doc', id: 'dev-docs/api/rest/filters-locale-publication' },
          items: [
            {
              type: 'link',
              label: 'Filtering',
              href: '/dev-docs/api/rest/filters-locale-publication#filtering'
            },
            {
              type: 'link',
              label: 'Complex filtering',
              href: '/dev-docs/api/rest/filters-locale-publication#complex-filtering',
            },
            {
              type: 'link',
              label: 'Deep filtering',
              href: '/dev-docs/api/rest/filters-locale-publication#deep-filtering',
            },
            {
              type: 'link',
              label: 'Locale',
              href: '/dev-docs/api/rest/filters-locale-publication#locale',
            },
            {
              type: 'link',
              label: 'Publication state',
              href: '/dev-docs/api/rest/filters-locale-publication#publication-state',
            },
          ],
        },
        {
          type: 'category',
          collapsed: false,
          label: 'Sort and Pagination',
          link: { type: 'doc', id: 'dev-docs/api/rest/sort-pagination'},
          items: [
            {
              type: 'link',
              label: 'Sorting',
              href: '/dev-docs/api/rest/sort-pagination#sorting'
            },
            {
              type: 'link',
              label: 'Pagination',
              href: '/dev-docs/api/rest/sort-pagination#pagination'
            },
            {
              type: 'link',
              label: 'Pagination by page',
              href: '/dev-docs/api/rest/sort-pagination#pagination-by-page'
            },
            {
              type: 'link',
              label: 'Pagination by offset',
              href: '/dev-docs/api/rest/sort-pagination#pagination-by-offset'
            },
          ]
        },
        {
          type: 'category',
          collapsed: false,
          label: 'Relations',
          link: {type: 'doc', id: 'dev-docs/api/rest/relations'},
          items: [
            {
              type: 'link',
              label: 'connect',
              href: '/dev-docs/api/rest/relations#connect'
            },
            {
              type: 'link',
              label: 'disconnect',
              href: '/dev-docs/api/rest/relations#disconnect'
            },
            {
              type: 'link',
              label: 'set',
              href: '/dev-docs/api/rest/relations#set'
            },
          ]
        },

      ]
    },
  ],
  devDocsConfigSidebar: [
    {
      type: 'link',
      label: '⬅️ Back to Setup & Deployment',
      href: '/dev-docs/setup-deployment'
    },
    {
      type: 'category',
      collapsed: false,
      label: 'Configuration',
      link: {
        type: 'doc',
        id: 'dev-docs/configurations',
      },
      items: [
        {
          type: 'doc',
          label: 'Introduction',
          id: 'dev-docs/configurations',
        },
        {
          type: 'category',
          collapsed: false,
          label: 'Base configurations',
          link: {
            type: 'doc',
            id: 'dev-docs/configurations'
          },
          items: [
            'dev-docs/configurations/database',
            'dev-docs/configurations/server',
            'dev-docs/configurations/admin-panel',
            'dev-docs/configurations/middlewares',
            'dev-docs/configurations/api',
          ]
        },
        {
          type: 'category',
          label: 'Additional configurations',
          collapsed: false,
          link: {
            type: 'doc',
            id: 'dev-docs/configurations'
          },
          items: [
            'dev-docs/configurations/plugins',
            'dev-docs/configurations/typescript',
            'dev-docs/configurations/api-tokens',
            'dev-docs/configurations/functions',
            'dev-docs/configurations/cron',
            'dev-docs/configurations/environment',
            'dev-docs/configurations/sso',
          ]
        },
        {
          type: 'category',
          label: 'Guides',
          collapsed: false,
          link: {
            type: 'doc',
            id: 'dev-docs/configurations'
          },
          items: [
            'dev-docs/configurations/guides/rbac',
            'dev-docs/configurations/guides/access-cast-environment-variables',
            'dev-docs/configurations/guides/access-configuration-values',
            'dev-docs/configurations/guides/public-assets',
          ]
        }
      ]
    },
  ]
};

module.exports = sidebars;
