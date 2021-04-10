

const actions = {
    handleChangeUserName({ commit }, newUserName) {
        commit('changeUsername', newUserName)
    },

    addTask({ commit }, newTodo) {
        commit('addTask', newTodo)
    },

    deleteTodo({ commit }, item) {
        commit('deleteToDo', item)
    },

    doneEdit({ commit }, item) {
        commit('doneEdit', item)
    }
}

export default actions