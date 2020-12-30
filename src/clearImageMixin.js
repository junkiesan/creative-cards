export const clearImageMixin = {
  methods: {
    clearImage: function () {
      if(this.imageName != '') {
        this.imageName = 'background.png'
      }
    }
  }
}