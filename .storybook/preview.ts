import type { Preview } from '@storybook/react';
import '../public/orbit/style/yoko-orbit.css';
import '../lib/index.css';

const preview: Preview = {
    tags: ['autodocs', 'autodocs', 'autodocs'],
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
