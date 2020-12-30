<template>
  <div class="row">
    <div class="col-sm-12">
      <p>Completed: <span id="counter">0</span>/4:</p>
      <progress></progress>
    </div>
  </div>
</template>

<script>
import { EventBus } from '../../main.js'

export default {
  created: function () {
    EventBus.$on('mark-as-completed', function(data) {
      if(data) {
        document.getElementById('counter').innerText--;
      } else {
        document.getElementById('counter').innerText++;
      }
    })
  }
}
</script>

<style>
</style>