<template>
  <div class="zj-date-picker">
    <input type="text" autocomplete="off" :placeholder="placeholder" />
    <date-panel></date-panel>
  </div>
</template>
<script>
import DatePanel from "./DatePanel";
export default {
  components: {
    DatePanel
  },
  props: {
    placeholder: {
      type: String,
      default: "日期选择"
    }
  },
  name: "ZjDatePicker"
};
</script>
