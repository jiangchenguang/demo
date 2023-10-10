import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/use-model',
    },
    {
      name: 'useModel-demo',
      path: '/use-model',
      component: './use-model',
    },
  ],
  npmClient: 'pnpm',
});

