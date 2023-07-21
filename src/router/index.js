import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@views/HomePage.vue';
import DefaultLayout from '@layouts/DefaultLayout.vue';
import { checkAuth } from '@helpers/checkAuth';

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Home Page',
        component: HomePage,
        meta: {
          title: 'Главная страница',
          requiresAuth: true,
        }
      }
    ]
  },
  {
    path: '/login',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Login Page',
        component: (() => import('/src/views/LoginPage.vue')),
        meta: {
          title: 'Авторизация',
          breadcrumb: 'Авторизация'
        }
      }
    ]
  },
  {
    path: '/profile',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Profile Page',
        component: (() => import('/src/views/ProfilePage.vue')),
        meta: {
          title: 'Личный кабинет',
          requiresAuth: true,
          breadcrumb: 'Личный кабинет'
        }
      }
    ]
  },
  {
    path: '/ticket',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Tickets page',
        component: (() => import('/src/views/TicketPage.vue')),
        meta: {
          title: 'Мои тикеты',
          requiresAuth: true,
          breadcrumb: 'Тикеты'
        }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'NotFound',
        component: (() => import('/src/views/NotFound.vue')),
        meta: {
          title: '404 Not Found',
          layout: 'DefaultLayout'
        }
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!checkAuth()) {
      next({
        path: '/login',
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;