import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from '@/components/home'
import document from '@/components/document'
import abult from '@/components/abult'
import user from '@/components/user'


import noFound from '@/components/404'

import study from '@/views/study'
import work from '@/views/work'
import hoddy from '@/views/hoddy'

import slider from '@/views/slider'

let router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior(to, from, savePosition) { // 点击浏览器的前进后退或切换导航触发
    //console.log(to); // 要进入的目标路由对象 要去向哪里
    //console.log(from) // 离开的路由对象  从哪里来
    //console.log(savePosition) // 记录滚动条的坐标 点击前进后退的时候记录值

    /*if(savePosition){
      return savePosition;
    }else{
      return {x:0,y:0}
    }*/

    if (to.hash) {
      return {
        selector: to.hash
      }
    }

  },
  routes: [{
      path: '/',
      component: home,
      meta: {
        index: 0,
        title: 'home'
      }
    },
    {
      path: '/user/:tip?/:userId?', // /user/vip/1  /user/common/2  /user
      component: user,
      meta: {
        index: 3,
        title: 'user'
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: home,
      alias: '/index'
    },
    {
      path: '/abult',
      component: abult,
      children: [{
          path: '', // 默认的子路由  /about
          name: 'Abult',
          component: study,
          meta: {
            index: 2,
            title: 'abult'
          }
        },
        {
          path: '/work', // /work
          name: 'Work',
          component: work
        },
        {
          path: '/hoddy', // /hobby
          name: 'Hoddy',
          component: hoddy
        }
      ]
    },
    {
      path: '/document',
      name: 'Dcoument',
      beforeEnter(to, from, next) {
        console.log("beforeEnter")
        next()
      },
      meta: {
        index: 1,
        login: true,
        title: 'document'
      },
      components: {
        default: document,
        slider: slider
      }
    }
  ]
})

/*router.beforeEach((to, from, next) => {
  console.log("beforeEach")
  // next()
   // next(false)

   if(to.meta.login){
    next('/login')
  }else{
    next()
  }

  next()

})

router.afterEach((to, from) => {
  if( to.meta.title ){
    window.document.title = to.meta.title
  }else{
    window.document.title = 'miaov'
  }
})
 */

export default router;
