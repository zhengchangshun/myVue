export default [{
    path: '/',
    name: 'Test',
    component: () =>
        import ('@/views/example/test')
}, {
    path: '/message',
    name: 'Message',
    component: () =>
        import ('@/views/example/message')
}]
