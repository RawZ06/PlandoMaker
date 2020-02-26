import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Changelog from '@/components/Changelog'
import About from '@/components/About'
import Settings from '@/components/Settings'
import Page404 from '@/components/404'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '*',
			name: 'Page404',
			component: Page404
		},
		{
			path: '/',
			name: 'Index',
			component: Index
		},
		{
			path: '/changelog',
			name: 'Changelog',
			component: Changelog
		}, {
			path: '/about',
			name: 'About',
			component: About
		}, , {
			path: '/settings',
			name: 'Settings',
			component: Settings
		},
	],
	mode: 'history'
})
