// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import 'fullpage-vue/src/fullpage.css'
import VueFullPage from 'fullpage-vue'
import FullPageLayout from '~/layouts/FullPage.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('FullPageLayout', FullPageLayout)
  Vue.use(VueFullPage);
}
