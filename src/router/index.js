import Vue from 'vue';
import Router from 'vue-router';
import TaskList from '@/components/tasklist/tasklist';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'TaskList',
            component: TaskList
        },
        {
            path: '*',
            name: 'TaskList',
            component: TaskList
        }
    ]
});
