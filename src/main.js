import { createApp, reactive } from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import App from './App.vue';
import router from './router';
import '@/assets/css/tailwind.css';

const app = createApp(App);
const gStore = reactive({ flashMessage: '' });

const requireComponent = require.context('./components', false, /Base[A-Z]\w+\.(vue|js)$/);
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1')));

  app.component(componentName, componentConfig.default || componentConfig);
});

app
  .use(router)
  .provide('gStore', gStore)
  .mount('#app');
