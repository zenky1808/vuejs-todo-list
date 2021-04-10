<template>
  <div class="about">
    <h1>This is an about page</h1>
    <User />
  </div>
</template>


<script>
import User from "@/components/about/About.vue";
export default {
  components: {
    User,
  },
};
</script>