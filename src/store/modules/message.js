import {queryCompany} from '../../services/example'


const user = {
    state: {
        message: '',
    },

    mutations: {
        SET_MESSAGE: (state, message) => {
            state.message = message
        }
    },

    actions: {
        async getCurrentMsg({dispatch, commit}, params) {
            const data = await queryCompany(params)
            console.log(data.message);
            commit('SET_MESSAGE', data.message || '暂时无法获取消息')
        }
    }
}

export default user
