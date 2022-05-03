import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';
import info from './info';
import category from './category';
import record from './record';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        error: null,
    },
    getters: {
        error: state => state.error,
    },
    mutations: {
        setError(state, error) {
            state.error = error;
        },
        clearError(state) {
            state.error = null;
        }
    },
    actions: {
        fetchCurrency() {
            return Promise.resolve({
                date: '2022-05-04',
                rates: {
                    EUR: 1,
                    RUB: 72,
                    USD: 1.12,
                }
            });
        }
    },
    modules: {
        auth,
        info,
        category,
        record,
    }
});
