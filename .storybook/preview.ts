import type { Preview } from '@storybook/react-vite';
import '../public/orbit/style/yoko-orbit.css';
// Load Google Fonts for Storybook only
import './fonts.css';
// Apply Titillium Web font to preview
import './preview.css';
import '../lib/index.css';

const preview: Preview = {
    tags: ['autodocs', 'autodocs', 'autodocs'],
    parameters: {
        layout: 'centered',
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
