export const state = () => ({
    tasks : [],

})

export const mutations = {
    add_task(state,task){
        state.tasks = [{content: task, done: false}, ...state.tasks]
        //localStorage.setItem("task",toString(state.tasks.content))
    },

    delete_task(state,task) {
        state.tasks.splice(state.tasks.indexOf(task),1);
        //localStorage.setItem("task",toString(state.tasks.content))
      
    },

    toggle_task(state, task) {
        task.done = !task.done
    }
}