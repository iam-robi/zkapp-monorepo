import { defineNuxtConfig } from 'nuxt/config'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'
import crossOriginIsolation from 'vite-plugin-cross-origin-isolation'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

    app: {
        head: {
            script: [{ src: '/test.js', type: 'text/partytown' }],
        },
    },
    modules: [
        'nuxt-graphql-client',
        '@vueuse/nuxt',
        [
            '@pinia/nuxt',
            {
                autoImports: [
                    'defineStore',
                    ['defineStore', 'definePiniaStore'],
                ],
            },
        ],
        '@nuxtjs/partytown'
    ],
    runtimeConfig: {
        public: {
            'graphql-client':{
                clients: {
                    oracle: {
                        host: 'http://localhost:3008/graphql'
                    }
                }
            }
        }
    },
    typescript: {
        tsConfig: {
            compilerOptions: {
                strict: true,
                types: ['@pinia/nuxt'],
            },
        },
    },
    build: {
        transpile:
            process.env.NODE_ENV === 'production'
                ? [
                    'naive-ui',
                    'vueuc',
                    '@css-render/vue3-ssr',
                    '@juggle/resize-observer'
                ]
                : ['@juggle/resize-observer']
        ,
    },
    vite: {
        build: {
            target: "es2020"
        },
        plugins: [
            // {
            //     name: "configure-response-headers",
            //     configureServer: (server) => {
            //         server.middlewares.use((_req, res, next) => {
            //             res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
            //             res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
            //             res.setHeader("Cross-Origin-Resource-Policy", "same-site");
            //             // Cross-Origin-Resource-Policy: same-site
            //             next();
            //         });
            //     },
            // },
            crossOriginIsolation()
            // VueI18nVitePlugin({
            //     include: [
            //         resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')
            //     ]
            // })
        ],
        define: {
            'process.env': {},
        },
        optimizeDeps: {
            esbuildOptions: {
                 target: "es2020", supported: { bigint: true } ,
            },
            include:
                process.env.NODE_ENV === 'development'
                    ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone']
                    : []
        }
    },
    'graphql-client':{
        watch: true,
        autoImport: true,
        functionPrefix: 'Gql',
        documentPaths: ['./gql'],
        preferGETQueries: false
    },
    partytown: {

    }

})
