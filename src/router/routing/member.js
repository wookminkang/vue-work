export default {
    path: '/member/',
    name: 'member',
    children: [
        {
            path : "mypage",
            component: () => import('../../member/Mypage.vue')
        },
        {
            path : "join",
            component: () => import('../../member/Join.vue')
        }
    ],
    props: true,
    component: () => import('../../member/')
}
