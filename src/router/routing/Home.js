export default {
    path: '/Home',
    name: 'Home',
    props: true,
    component: () => import(/* webpackChunkName: "GolfMembership" */'../../Home/Home.vue')
}
