import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Changelog from '@/components/Changelog'
import About from '@/components/About'
import Settings from '@/components/Settings'
import Page404 from '@/components/404'

Vue.use(Router)

const routes = [
	{
		path: '*',
		name: 'Page404',
		component: Page404,
		meta: {
			title: 'PlandoMaker | 404 Not Found',
			metaTags: [
				{
					name: 'description',
					content: '404 Not Found.'
				},
				{
					property: 'og:description',
					content: '404 Not Found.'
				}
			]
		}
	},
	{
		path: '/',
		name: 'Index',
		component: Index,
		meta: {
			title: 'PlandoMaker | Home',
			metaTags: [
				{
					name: 'description',
					content: 'Create your own seed Ocarina Of Time Randomizer.'

				},
				{
					property: 'og:description',
					content: 'Create your own seed Ocarina Of Time Randomizer.'
				}
			]
		}
	},
	{
		path: '/changelog',
		name: 'Changelog',
		component: Changelog,
		meta: {
			title: 'PlandoMaker | Changelog ',
			metaTags: [
				{
					name: 'description',
					content: 'Changelog of PlandoMaker.'
				},
				{
					property: 'og:description',
					content: 'Changelog of PlandoMaker.'
				}
			]
		}
	}, {
		path: '/about',
		name: 'About',
		component: About,
		meta: {
			title: 'PlandoMaker | About',
			metaTags: [
				{
					name: 'description',
					content: 'About of PlandoMaker.'
				},
				{
					property: 'og:description',
					content: 'About of PlandoMaker.'
				}
			]
		}
	}, {
		path: '/settings',
		name: 'Settings',
		component: Settings,
		meta: {
			title: 'PlandoMaker | Settings Random Maker',
			metaTags: [
				{
					name: 'description',
					content: 'Generate a settings random for Ocarina of Time Randomizer.'
				},
				{
					property: 'og:description',
					content: 'Generate a settings random for Ocarina of Time Randomizer.'
				}
			]
		}
	},
];

const router = new Router({
	routes,
	mode: 'history'
});

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
	// This goes through the matched routes from last to first, finding the closest route with a title.
	// eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
	const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

	// Find the nearest route element with meta tags.
	const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
	const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

	// If a route with a title was found, set the document (page) title to that value.
	if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

	// Remove any stale meta tags from the document using the key attribute we set below.
	Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

	// Skip rendering meta tags if there are none.
	if (!nearestWithMeta) return next();

	// Turn the meta tag definitions into actual elements in the head.
	nearestWithMeta.meta.metaTags.map(tagDef => {
		const tag = document.createElement('meta');

		Object.keys(tagDef).forEach(key => {
			tag.setAttribute(key, tagDef[key]);
		});

		// We use this to track which meta tags we create, so we don't interfere with other ones.
		tag.setAttribute('data-vue-router-controlled', '');

		return tag;
	})
		// Add the meta tags to the document head.
		.forEach(tag => document.head.appendChild(tag));

	next();
});

export default router;
