<template>
  <button
    @click="handleClick"
    class="zj-button"
    :class="[type ? 'zj-button-' + type : '']"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: {
    type: String
  },
  name: "zjButton",
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>
