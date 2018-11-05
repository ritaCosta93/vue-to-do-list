<template>
    <div class="vtdl-task-list">
        <br/>
        <div class="row">
            <div class="col s12">
                <h5>Tasks</h5>
            </div>
        </div>
        <div class="row">
            <div class="col s12">
                <div class="task">
                    <button @click="addNewTask" class="btn waves-effect waves-light blue" type="button">
                        <i class="material-icons left">add</i>Add New Task
                    </button>
                    <button @click="clearTaskList" class="btn waves-effect waves-light blue" type="button">
                        <i class="material-icons left">clear_all</i>Clear Task List
                    </button>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col s12">
                <table class="vtdl-task-list__table striped highlight">
                    <thead  class="vtdl-task-list__table-head">
                        <tr>
                            <th class="vtdl-task-list__table-actions">&nbsp;</th>
                            <th class="vtdl-task-list__table-number">#</th>
                            <th>Task Name</th>
                        </tr>
                    </thead>
                    <tbody id="taskList" class="vtdl-task-list__table-body">
                        <Task ref="task" @updateTaskNumbers="updateTaskNumbers" :key="index" :task="task" v-for="(task, index) in tasks"/>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import Task from '@/components/task/task';

export default {
  name: 'tasklist',
  components: {
    Task
  },
  data() {
    return {
      tasks: []
    };
  },
  created: function() {
    // get the tasks list
    this.$eventBus.$emit('showMask');
    this.$http
      .get('http://jsonplaceholder.typicode.com/todos')
      .then(function(response) {
        // console.log(response.body);
        // load the JSON tasks into the data variable
        this.tasks = response.body;
        this.$eventBus.$emit('hideMask');
      });
  },
  methods: {
    addNewTask() {},
    clearTaskList() {
      for (var i = 0; i < this.$refs.task.length; i++) {
        this.$refs.task[i].$el.remove();
        this.$refs.task[i].$destroy();
      }
    },
    updateTaskNumbers() {
      let counter = 1;
      for (var i = 0; i < this.$refs.task.length; i++) {
        if (
          document
            .getElementsByTagName('body')[0]
            .contains(this.$refs.task[i].$refs.taskNumber)
        ) {
          this.$refs.task[i].$refs.taskNumber.innerText = counter++;
        }
        this.$eventBus.$emit('hideMask');
      }
    }
  }
};
</script>

<style lang="scss">
@import 'tasklist.scss';
</style>
