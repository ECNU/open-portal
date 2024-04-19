import Theme from 'vitepress/theme'
import Notices from './components/Notices.vue'
import MyLayout from './components/MyLayout.vue'
import './style/vars.css'
import { App } from 'vue'

export default {
  extends: Theme,
  Layout: MyLayout,
  enhanceApp({ app }: { app: App }) {
    app.component('Notices', Notices)
  },
}
