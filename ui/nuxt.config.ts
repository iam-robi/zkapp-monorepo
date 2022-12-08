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
                        host: `${process.env.VITE_ORACLE_SERVER_ENDPOINT}/graphql`
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
            crossOriginIsolation()
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
