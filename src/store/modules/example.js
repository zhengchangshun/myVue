import {queryExampleData} from '../../services/example'


const example = {
    state: {
        exampleData: '',
    },

    mutations: {
        SET_EXAMPLEDATA: (state, message) => {
            state.exampleData = message
        }
    },

    actions: {
        async queryExampleData({dispatch, commit}, params) {
            const data = await queryExampleData(params)
            console.log(data);
            commit('SET_EXAMPLEDATA', data.data)
        }
    }
}

export default example
