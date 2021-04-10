

const getters = {
    notDone: state => state.toDos.filter(itemNotDone => itemNotDone.completed == false).length,
    Done: (state) => state.toDos.filter(itemNotDone => itemNotDone.completed == true).length,
    allTask: state => state.toDos.length,
    count: state => state.count
}

export default getters;