import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/pages/index/index'
import person from '@/components/pages/person/person'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'index',
		component: index
	}, {
		path: '/person',
		name: 'person',
		component: person
	}, ]
})