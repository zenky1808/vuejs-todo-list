<template>
  <div class="contaner">
    <div class="component1 ">
      <div>
        <h1>components1</h1>
        <h4>My name: {{ customName }}</h4>
        <h4>I'm {{ customAge }} year old</h4>
        <h4>I'm {{ reverseName() }} year old</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
   customName: {
      required: true,
      default: () => {
        return 'RIN'
      }
    },
    customAge: {
      required: true
    }
  },
  methods: {
    reverseName(){
      return this.customName.split('').reverse().join("")
    }
  }
};
</script>

<style scoped></style>
