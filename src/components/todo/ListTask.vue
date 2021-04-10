<template>
  <div class="contaner">
    <div class="component2">
      <div >
        <h1>components2</h1>
        <h4>My name: {{ customName }}</h4>
        <h4>I'm {{ customAge }} year old</h4>
        <button @click="resetName">Reset Name</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['customName', 'customAge'],
  methods: {
    resetName(){
      this.customName = 'Zenky';
      this.$emit('nameWasReset', this.customName)
    }
  }
};
</script>
