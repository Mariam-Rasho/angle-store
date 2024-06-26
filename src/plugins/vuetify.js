/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { ar, en } from 'vuetify/locale'
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
    locale: {
        locale: 'en',
        fallback: 'ar',
        messages: { ar, en },
    },
    theme: {
        themes: {
            light: {
                colors: {
                    primary: '#1867C0',
                    secondary: '#5CBBF6',
                },
            },
            dark: {
                colors: {
                    primary: '#5CBBF6',
                    secondary: '#1867C0',
                },

            },
        },
    },
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
})