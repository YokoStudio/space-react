import { addons } from 'storybook/manager-api';
import { themes } from 'storybook/theming';
import './manager.css';

addons.setConfig({
    theme: {
        ...themes.light,
        brandTitle:
            '<img src="./logo.jpeg" style="height: 32px; width: auto; margin-right: 8px; vertical-align: middle;" /> Yoko Space React',
        brandUrl: './',
        colorPrimary: '#021CFC',
        colorSecondary: '#000000',
        // Font family
        fontBase:
            '"Titillium Web", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        fontCode:
            'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
        // UI colors
        appBg: '#ffffff',
        appContentBg: '#ffffff',
        appBorderColor: '#e0e0e0',
        appBorderRadius: 4,
        // Text colors
        textColor: '#000000',
        textInverseColor: '#ffffff',
        textMutedColor: '#666666',
        // Toolbar colors
        barTextColor: '#000000',
        barSelectedColor: '#021CFC',
        barHoverColor: '#021CFC',
        barBg: '#ffffff',
        // Input colors
        inputBg: '#ffffff',
        inputBorder: '#e0e0e0',
        inputTextColor: '#000000',
        inputBorderRadius: 4,
    },
});
