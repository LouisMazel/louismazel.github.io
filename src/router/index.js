import Vue from 'vue'
import Router from 'vue-router'
import Me from '@/views/Me'
import Libraries from '@/views/Libraries'
import VueCtkDateTimePicker from '@/views/Libraries/_subs/VueCtkDateTimePicker'
import LeafletMovingMarker from '@/views/Libraries/_subs/LeafletMovingMarker'
import Summary from '@/views/Libraries/_subs/Summary'
import locales from '@/locales'

Vue.use(Router)

const trans = (key) => {
  let message = locales.messages[locales.locale][key]
  if (message && message.includes('|')) {
    console.error(`No plurialization for routes translations : '${key}'`)
    message = message.split('|')[0].replace(/\s/g, '')
  } else if (typeof message === 'undefined') {
    console.error(`Undefined translation for '${key}'`)
  }
  return message
}

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Me',
      component: Me,
      menu: trans('me.title'),
      meta: {
        title: trans('me.title'),
        metaTags: [
          {
            name: 'description',
            content: trans('me.meta_description')
          },
          {
            property: 'og:description',
            content: trans('me.meta_description')
          }
        ]
      }
    },
    {
      path: '/libraries',
      component: Libraries,
      menu: trans('library.title'),
      meta: {
        title: trans('library.title'),
        metaTags: [
          {
            name: 'description',
            content: trans('library.meta_description')
          },
          {
            property: 'og:description',
            content: trans('library.meta_description')
          }
        ]
      },
      children: [
        {
          name: 'Summary',
          path: '',
          component: Summary
        },
        {
          name: 'VueCtkDateTimePicker',
          path: 'vue-ctk-date-time-picker',
          component: VueCtkDateTimePicker,
          menu: 'Range Date Time Picker',
          icon: 'el-icon-menu'
        },
        {
          name: 'LeafletMovingMarker',
          path: 'leaflet-moving-marker',
          component: LeafletMovingMarker,
          menu: 'Leaflet Moving Marker',
          icon: 'el-icon-location'
        }
      ]
    }
  ]
})
// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el))

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next()

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    let tag = document.createElement('meta')

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key])
    })

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '')
    return tag
  })
  // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag))

  next()
})

export default router
