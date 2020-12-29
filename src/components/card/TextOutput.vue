<template>
  <div @mouseover="showOptions = true" @mouseleave="showOptions = false">
    <form class="small" v-show="showOptions">
      <p>test</p>
    </form>
    <p :style="styleObject"> {{ displayText }} </p>
  </div>
</template>

<script>
export default {
  props: {
    displayText: [String],
    containerHeight: {
      type: Number,
      default: 200
    }
  },
  data: function() {
    return {
      showOptions: false
    }
  },
  computed: {
    styleObject: function () {
      return {
        height: this.containerHeight + 'px'
      }
    }
  }
}
</script>

<style scoped>
  p {
  font-family: 'Tangerine', cursive;
  font-size: 42px;
  line-height: 42px;
  text-shadow: 2px 2px 2px #aaa;
  color: #4d4d4d;
  margin: 5px 0;
  border: 1px dotted grey;
  white-space: pre-line;
  overflow: hidden;
  }
</style>