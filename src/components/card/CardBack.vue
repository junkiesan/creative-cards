<template>
  <div class="row">
    <div class="col-sm-6 card edit-area">
      <cc-image-upload @displayImageChanged="imageName = $event"></cc-image-upload> <hr>
      <ccSectionCompleted></ccSectionCompleted>
    </div>
    <div class="col-sm-6 card card-display">
      <cc-image-output :displayImage="imageName" :containerHeight="400" :clearImageProp="clearImage"></cc-image-output>
    </div>
  </div>
</template>

<script>
import ImageUpload from './ImageUpload.vue'
import ImageOutput from './ImageOutput.vue'
import SectionCompleted from './SectionCompleted.vue'

export default {
  data: function () {
    return {
      imageName: ''
    }
  },
  methods: {
    clearImage: function () {
      if(this.imageName != '') {
        this.imageName = 'background.png'
      }
    }
  },
  components: {
    ccImageUpload: ImageUpload,
    ccImageOutput: ImageOutput,
    ccSectionCompleted: SectionCompleted

  }
  
}
</script>

<style>

</style>