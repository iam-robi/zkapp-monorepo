import { defineNuxtConfig } from 'nuxt/config'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

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
        plugins: [
            // VueI18nVitePlugin({
            //     include: [
            //         resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')
            //     ]
            // })
        ],
        define: {
            'process.env': {}
        },
        optimizeDeps: {
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
    }
})
