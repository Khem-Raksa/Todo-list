<template>
  <main>
    <h1>Todo List</h1>
    <p>Create your list of tasks</p>

    <div class="create-new">
      <input type="text" 
      v-model="newTask" 
      placeholder="Add a new Task" 
      @keypress.enter="addTask">
      <button @click="addTask">Add</button>
    </div>

    <div class="tasks">
      <Task
        v-for = "(task, i) in $store.state.tasks"
        :key = "i"
        :task = "task"/>
    </div>

  </main>
</template>

<script>
export default {
  data(){
    return {
      newTask: ''
    }
  },
  methods: {
    addTask () {
      if (this.newTask){
        this.$store.commit('add_task', this.newTask);
        this.newTask = ''
      }
    }
  }
}
</script>
