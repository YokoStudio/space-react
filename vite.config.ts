import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

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
                dts({
                    outDir: 'dist',
                    tsconfigPath: './tsconfig.lib.json',
                }),
                viteStaticCopy({
                    targets: [
                        { src: './lib/types/style.d.ts', dest: '.' }
                    ],
                })
            ],
            build: {
                lib: {
                    entry: resolve(__dirname, 'lib/index.ts'),
                    name: 'SpaceReact',
                    fileName: (format) => `index.${format}.js`,
                    formats: ['es', 'cjs'],
                },
                cssCodeSplit: false,
                rollupOptions: {
                    external: [
                        'react',
                        'react-dom',
                        'react/jsx-runtime',
                        '@headlessui/react',
                        '@floating-ui/react',
                        'framer-motion',
                    ],
                    output: {
                        globals: {
                            react: 'React',
                            'react-dom': 'ReactDOM',
                            'react/jsx-runtime': 'ReactJSXRuntime',
                            '@headlessui/react': 'HeadlessUI',
                            '@floating-ui/react': 'FloatingUI',
                            'framer-motion': 'FramerMotion',
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
