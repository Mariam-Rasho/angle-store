/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import router from '../router'
import { createPinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import i18n from './i18n';
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
export function registerPlugins(app) {
    app
        .use(vuetify)
        .use(router)
        .use(pinia)
        .use(i18n)
}