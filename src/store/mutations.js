

const mutations = {
    changeUsername(state, newUserName) {
        state.user[0].username = newUserName
    },

    addTask(state, newTodo) {
        if (newTodo.length) {
            state.toDos.push({
                title: newTodo,
                completed: false
            })
        }
        state.newTodo = null
    },

    deleteToDo(state, item) {
        const index = state.toDos.indexOf(item)
        state.toDos.splice(index, 1)
    },

    doneEdit(state) {
        state.edit = null
    }
}
export default mutations