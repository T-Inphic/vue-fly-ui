<template>
  <button
    class="fy-button"
    @click="handleClick"
    >
    121212
  </button>
</template>

<script>
export default {
  name: 'Fy-Button',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

<style lang="scss">

</style>
