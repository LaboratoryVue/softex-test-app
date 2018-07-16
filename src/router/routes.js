import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import ContactPage from '../views/ContactPage.vue';
import PicturePage from '../views/PicturePage.vue';

export default [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/about',
    component: AboutPage
  },
  {
    path: '/contact',
    component: ContactPage
  },
  {
    path: '/picture/:id',
    component: PicturePage
  },
  {
    path: '*',
    redirect: '/'
  }
];
