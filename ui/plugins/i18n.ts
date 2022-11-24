import { createI18n } from 'vue-i18n'
import fr from '../i18n/fr.json'
import en from '../i18n/en.json'

const DEFAULT_LANGUAGE = 'en'
const SUPPORTED_LANGUAGES = ['en', 'fr']

const getUserLanguage = () => {
    if (process.client) {
        const userLanguage = ((navigator.languages && navigator.languages[0]) || navigator.language).split('-')[0]
        return SUPPORTED_LANGUAGES.includes(userLanguage) ? userLanguage : DEFAULT_LANGUAGE;
    }

    return DEFAULT_LANGUAGE;
}

export default defineNuxtPlugin(({ vueApp }) => {
    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        locale: 'fr',
        fallbackLocale: DEFAULT_LANGUAGE,
        datetimeFormats : {
            'fr': {
                short: {
                    year: 'numeric', month: 'numeric', day: 'numeric'
                },
                long: {
                    year: 'numeric', month: 'long', day: 'numeric'
                }
            },
            'en': {
                short: {
                    year: 'numeric', month: 'numeric', day: 'numeric'
                },
                long: {
                    year: 'numeric', month: 'long', day: 'numeric'
                }
            },

        },
        messages: {
            fr,
            en
        }
    })

    vueApp.use(i18n)
})