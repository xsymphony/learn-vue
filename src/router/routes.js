import App from '@/App'

export default  [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '',
        component: solve => require(['@/pages/Home'], solve)
      },
      {
        path: '/home',
        component: solve => require(['@/pages/Home'], solve)
      },
      {
        path: '/login',
        component: solve => require(['@/pages/Login'], solve)
      }
    ]
  }
];

