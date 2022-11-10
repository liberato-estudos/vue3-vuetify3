/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import vuetify from './plugins/vuetify'

import router from './router'

const app = createApp(App)

registerPlugins(app)

app.use(router)
app.use(vuetify)
app.mount('#app')
