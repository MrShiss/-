import Vue from 'vue'
import Router from 'vue-router'

import Homepage from '../components/homepage/HomePage'
import Search from '../components/search/Search'
import Video from '../components/videopage/Videopage'
import Circle from '../components/circle/Circle'
import hotCommit from '../components/circle/hotCommit'
import newCommit from '../components/circle/newCommit'
import wenDa from '../components/circle/wenDa'
import Find from '../components/find/Find'
import Mytv from '../components/mytv/Mytv'
import Follow from '../components/mytv/Follow'
import Record from '../components/mytv/Record'
import Mine from '../components/mine/Mine'
import Person from '../components/mine/Person'
import Register from '../components/user/Register'
import Login from '../components/user/Login'
import Empty from '../components/empty/Empty'
import Empty1 from '../components/empty/Empty1'
import Empty2 from '../components/empty/Empty2'

Vue.use(Router)

Router.prototype.goBack = () => {
  this.isBack = true
  window.history.go(-1)
}

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component:Homepage
    },
    {
      path: '/Homepage',
      name: 'Homepage',
      component: Homepage,
      children: [
        {
          path: '/search',
          name: 'Search',
          component: Search
        },
        {
          path: '/video',
          name: 'Video',
          component: Video
        }
      ]
    },
    {
      path: '/find',
      name: 'Find',
      component: Find,
      children: [{
        path: '/searchPort',
        name: 'Search',
        component: Search
      }]
    },
    {
      path: '/circle', 
      name: 'Circle', 
      component: Circle,
      children: [
        {
          path: '/hotCommit',
          name: 'hotCommit',
          component: hotCommit
        },
        {
          path: '/newCommit',
          name: 'newCommit',
          component: newCommit
        },
        {
          path: '/wenDa',
          name: 'wenDa',
          component: wenDa
        }
      ]
    },
    {
      path: '/mytv', 
      name: 'Mytv', 
      component: Mytv,
      children: [
        {
          path: '/follow',
          name: 'Follow',
          component: Follow
        },
        {
          path: '/record',
          name: 'Record',
          component: Record
        }
      ]
  },
    {
      path: '/mine', 
      name: 'Mine', 
      component: Mine
    },
    {path: '/register', name: 'Register', component: Register},
    {path: '/login', name: 'Login', component: Login},
    {path: '/empty', name: 'Empty', component: Empty},
    {path: '/empty1', name: 'Empty1', component: Empty1},
    {path: '/empty2', name: 'Empty2', component: Empty2},
    {
      path: '/person', 
      name: 'Person', 
      component: Person,
    }
  ]
})
