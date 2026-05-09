import type { Preview } from '@storybook/react'
import React from 'react'
import '../app/globals.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark',  value: '#0E0E0C' },
        { name: 'light', value: '#F8F6F1' },
      ],
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals['theme'] ?? 'dark'
      return (
        <div
          data-theme={theme}
          style={{
            background: theme === 'dark' ? '#0E0E0C' : '#F8F6F1',
            minHeight: '100vh',
            padding: '2rem',
          }}
        >
          <Story />
        </div>
      )
    },
  ],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme',
      defaultValue: 'dark',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'dark',  title: 'Dark' },
          { value: 'light', title: 'Light' },
        ],
        showName: true,
      },
    },
  },
}

export default preview
