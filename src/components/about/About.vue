<template>
  <div class="container">
    <h2>Info Page</h2>
    <table>
      <tr>
        <th>Use Name</th>
        <th>Name</th>
        <th>Age</th>
      </tr>
      <tr v-for="(user, index) in dataUser" v-bind:key="index">
        <td>{{ userName }}</td>
        <td>{{ name }}</td>
        <td>{{ age }}</td>
      </tr>
    </table>
    <div class="input-group mt-4">
      <div class="input-group-prepend">
        <input
          class="input-group-text"
          type="text"
          v-model="userNameInput"
          @keypress.enter="changUserName"
        />
      </div>
      <button type="button" class="btn btn-primary ml-3" @click="changUserName">
        Primary
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataUser: this.$store.state.user,
      userNameInput: "",
    };
  },
  methods: {
    changUserName() {
      if (!this.userNameInput) {
        return;
      } else {
        this.$store.dispatch("handleChangeUserName", this.userNameInput);
        this.userNameInput = "";
      }
    },
  },
  computed: {
    userName() {
      console.log(this.dataUser);
      return this.$store.state.user[0].username;
    },
    name() {
      return this.$store.state.user[0].name;
    },
    age() {
      return this.$store.state.user[0].age;
    },
  },
};
</script>

<style scoped>
table,
td,
th {
  border: 1px solid black;
}
table {
  width: 100%;
}
</style>