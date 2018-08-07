import Vue from 'vue';
import Vuex from 'vuex';
import example from './modules/example';
import getters from './getters'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        example,
    },
    getters
});

export default store
