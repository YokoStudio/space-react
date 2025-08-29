import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    stories: ['../lib/**/*.mdx', '../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-onboarding',
        '@chromatic-com/storybook',
        '@storybook/addon-docs'
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    docs: {},
    typescript: {
        reactDocgen: 'react-docgen-typescript',
    },
};
export default config;
