<template>
  <div class="container">
    <h1>Todo List</h1>
    {{ count }}
    <div class="box p-5">
      <div class="form-group ml-5 mr-5 row">
        <div class="col-10">
          <input
            class="form-control"
            autofocus
            v-model.trim="newTodo"
            @keyup.enter="Add"
            placeholder="Nhập việc cần làm và ấn Enter để thêm"
          />
        </div>
        <div class="col-2">
          <button @click="Add" class="btn btn-primary">Add task</button>
        </div>
      </div>
      <div>
        <table class="mt-3 listTodo">
          <p v-if="toDos.length <= 0">Danh sách trống</p>
          <tr
            v-for="item in toDos"
            :key="item.id"
            :class="{ completed: item.completed }"
          >
            <td>
              <input class="mark" type="checkbox" v-model="item.completed" />
              <span class="checkmark"> </span>
            </td>
            <td>
              <div class="ok">
                <label @click="edited(item)">
                  {{ item.title | capitalize }}
                </label>
                <input
                  v-if="edit == item && item.completed != true"
                  v-model="item.title"
                  :class="{}"
                  @keyup.escape="doneEdit"
                  @keyup.enter="doneEdit"
                />
              </div>
            </td>
            <td width="20%">
              <a
                @click="Delete(item)"
                title="Xóa"
                class="delete badge badge-danger"
              >
                x
              </a>
            </td>
          </tr>
        </table>

        <div class="m-5 text-left">
          <b> Bạn có {{ allTasks }} task </b>
          <span class="badge badge-warning"> Task còn lại: {{ notDone }} </span>
          <span class="badge badge-success"> Task đã xong: {{ Done }} </span>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      toDos: this.$store.state.toDos,
      newTodo: this.$store.state.newTodo,
      edit: this.$store.edit,
      editDone: "",
    };
  },
  methods: {
    Add() {
      this.$store.dispatch("addTask", this.newTodo);
      this.newTodo = "";
    },
    edited(item) {
      this.edit = item;
    },
    doneEdit() {
      // this.$swal('Done')
      this.edit = null;
    },
    Delete(item) {
      this.$store.dispatch("deleteTodo", item);
    },
  },
  computed: {
    notDone() {
      return this.$store.getters.notDone;
    },
    Done() {
      return this.$store.getters.Done;
    },
    allTasks() {
      return this.$store.getters.allTasks;
    },
    count() {
      return this.$store.getters.count;
    },
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
};
</script>

<style scoped>
a {
  font-size: 15px;
  cursor: pointer;
  margin-left: 20px;
}
.completed label {
  color: #cccaca;
  text-decoration: line-through;
}
label {
  cursor: pointer;
}
.listTodo {
  font-size: 30px;
  margin: 0 auto;
}
table {
  width: 70%;
}
table,
td {
  border: 1px black;
  text-align: left;
}
table td .delete {
  display: none;
}
table tr:hover .delete {
  display: block;
}
.box {
  width: 60%;
  height: auto;
  margin: 0 auto;
  margin-top: 10px;
  box-shadow: 0px 12px 23px 0px #c1c1c1;
  border: 1px solid #e2e2e2;
}
.mark {
  width: 50px;
  height: auto;
}
.ok {
  position: relative;
}
.ok input {
  position: absolute;
  width: 100%;

  top: 0px;
  left: 0px;
}
</style>
