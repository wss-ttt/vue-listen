<template>
  <div class="box2"></div>
</template>

<script>
export default {
  props: {},
  data() {
    return {}
  },
  computed: {
    flag() {
      return this.$store.state.common.flag
    }
  },
  components: {},
  created() {},
  mounted() {},
  destroyed() {},
  watch: {
    flag: {
      handler(newVal, oldVal) {
          console.log('我是box2中的输出语句:box1组件中的按钮被点击了')
      }
    }
  },
  methods: {}
}
</script>
<style scoped>
.box2 {
  width: 200px;
  height: 200px;
  background-color: blueviolet;
}
</style>