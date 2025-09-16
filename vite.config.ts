import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    const isLibrary = mode === 'library';

    if (isLibrary) {
        return {
            plugins: [
                react(),
                svgr({
                    svgrOptions: {
                        icon: true,
                        dimensions: true,
                    },
                }),
            ],
            build: {
                lib: {
                    entry: resolve(__dirname, 'lib/index.ts'),
                    name: 'SpaceReact',
                    fileName: (format) => `index.${format}.js`,
                    formats: ['es', 'cjs'],
                },
                rollupOptions: {
                    external: [
                        'react',
                        'react-dom',
                        'react/jsx-runtime',
                        'react/jsx-dev-runtime',
                        '@headlessui/react',
                        '@floating-ui/react',
                        'framer-motion',
                        'clsx'
                    ],
                    output: {
                        globals: {
                            'react': 'React',
                            'react-dom': 'ReactDOM',
                            'react/jsx-runtime': 'React',
                            'react/jsx-dev-runtime': 'React',
                            '@headlessui/react': 'HeadlessUI',
                            '@floating-ui/react': 'FloatingUI',
                            'framer-motion': 'FramerMotion',
                            'clsx': 'clsx'
                        },
                    },
                },
                outDir: 'dist',
                sourcemap: true,
                emptyOutDir: true,
            },
            css: {
                postcss: './postcss.config.js',
            },
        };
    }

    return {
        plugins: [
            react(),
            svgr({
                svgrOptions: {
                    icon: true,
                    dimensions: true,
                },
            }),
        ],
    };
});
