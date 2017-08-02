import App from '@/App'

export default  [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '',
        component: solve => require(['@/components/Home'], solve)
      },
      {
        path: '/home',
        component: solve => require(['@/components/Home'], solve)
      }
    ]
  }
];

