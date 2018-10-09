<template>
    <tr class="vtdl-task">
        <td class="vtdl-task-list__table-actions">
            <button class="btn-floating btn-delete-task waves-effect waves-light black" type="button">
                <i class="material-icons">delete</i>
            </button>
        </td>
        <td class="vtdl-task-list__table-number taskNumber">{{index}} {{task.id}}</td>
        <td class="vtdl-task-list__table-name taskName">{{task.title}}</td>
    </tr>
</template>

<script>
export default {
  name: 'task',
  props: {
      index: Number,
      task: Object
  },
  data () {
    return {};
  },
  created () {
      //console.log(this);
  }
};
</script>

<style lang="scss">
@import 'task.scss';
</style>
