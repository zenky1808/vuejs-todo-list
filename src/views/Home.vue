<template>
  <div class="home container">
    <GetTask />
    <hr />
    <div class="compnt">
      <h3>components1</h3>
      <h4>My name: {{ name }}</h4>
      <h4>I'm {{ age }} year old</h4>
      <button @click="change">Change Name</button>
    </div>
    <hr />
    <div class="component row">
      <div class="cpn1 col-md-6">
        <Cpn1 :customName="name" :customAge="age"/>
      </div>
      <div class="cpn1 col-md-6">
        <Cpn2 :customName="name" @nameWasReset="name = $event" :customAge="age"  />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import GetTask from "@/components/todo/GetTask.vue";
import Cpn1 from "@/components/todo/CompletedTask.vue";
import Cpn2 from "@/components/todo/ListTask.vue";

export default {
  name: "Home",
  components: {
    GetTask,
    Cpn1,
    Cpn2,
  },
  data() {
    return {
      name: "Kien",
      age: 25,
    };
  },
  methods: {
    change() {
      (this.name = "Tom"),
      (this.age = 22);
    },
  },
};
</script>

<style></style>
