<template>
  <div class="box1">
    <button @click="flag = !flag">我是box1</button>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {}
  },
  computed: {
    flag: {
      get() {
        return this.$store.state.common.flag
      },
      set(val) {
        this.$store.commit('common/updateFlag', val)
      }
    }
  },
  components: {},
  created() {},
  mounted() {},
  destroyed() {},
  watch: {},
  methods: {}
}
</script>
<style scoped>
.box1 {
  width: 200px;
  height: 200px;
  background-color: aquamarine;
}
</style>