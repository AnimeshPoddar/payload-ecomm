import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import css from 'styled-jsx/css'
import path from 'path'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  custom: {
    css: path.resolve(__dirname, './src/app/(payload)/custom.scss'),
  },

  admin: {
    components: {
      // components: {
      edit: {
        PublishButton: {
          path: '/components/CustomPublishButton/CustomPublishButton.tsx',
          exportName: 'CustomPublishButton',
        },
        SaveButton: {
          path: '/components/CustomSaveButton/CustomSaveButton.tsx#CustomSaveButton',
          // exportName: 'CustomSaveButton',
        },
        // },
      },

      // views: {
      //   list: {
      //     Component: '/components/CustomUserCollectionView/CustomUserCollectionView.tsx',
      //   },
      //   // list: '/components/CustomUserCollectionView/CustomUserCollectionView.tsx',
      // },
      // edit: {
      // },
    },
    defaultColumns: ['name', 'email'],
    useAsTitle: 'name',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
  timestamps: true,
}
