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
                    <button id="addNewTask" class="btn waves-effect waves-light blue" type="button">
                        <i class="material-icons left">add</i>Add New Task
                    </button>
                    <button id="clearTaskList" class="btn waves-effect waves-light blue" type="button">
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
                        <Task :key="index" :task="task" v-for="(task, index) in tasks"/>
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
    console.log('Tasks ran');

    // get the tasks list
    this.$http
      .get('http://jsonplaceholder.typicode.com/todos')
      .then(function(response) {
        console.log(response.body);

        this.tasks = response.body;

      });
  }
};
</script>

<style lang="scss">
@import 'tasklist.scss';
</style>
