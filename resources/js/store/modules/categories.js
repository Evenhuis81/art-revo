import axios from 'axios'

export default {
    namespaced: true,
    state: () => ({
        categories: null,
    }),
    mutations: {
        setCategories(state, categories) {
            state.categories = categories
        },
        removeCategory(state, id) {
            const removeIndex = state.categories.map(item => item.id).indexOf(id);
            state.categories.splice(removeIndex, 1);
        }
    },
    actions: {
        getCategories({ commit }) {
            axios.get('/api/categories').then(response => {
                commit('setCategories', response.data)
            })
        },
        createCategory({}, payload) {
            axios.post('/api/categories', payload)
        },
        deleteCategory({ commit }, id) {
            return axios.post(`/api/categories/${id}`).then(response => {
                commit('removeCategory', id)
                return response.data.message
            })
            
        }
    },
    getters: {},
}
