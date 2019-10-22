export default {
    namespaced: true,
    state: {
        flag: false
    },
    getters: {

    },
    actions: {

    },
    mutations: {
        updateFlag(state,flag){
            console.log('flag',flag)
            state.flag =flag
        }
    }
}