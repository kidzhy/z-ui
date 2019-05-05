<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="week in weeks" :key="week">
            {{ week }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="week in 6" :key="week">
          <td v-for="day in 7" :key="day">
            {{ monthDay[(week - 1) * 7 + day - 1] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      weeks: ["日", "一", "二", "三", "四", "五", "六"]
    };
  },
  computed: {
    monthDay() {
      const now = new Date();
      let days = [...Array(42)];
      const first = this.getWeekDays(now.setDate(1));
      const last = this.getDaysInMonth(now.getFullYear(), now.getMonth());
      days = days.map((it, i) => {
        if (i >= first && i < last + first) {
          return i;
        }
        return 0;
      });
      return days;
    }
  },
  methods: {
    getMonthDays(year, month) {
      var monthStartDate = new Date(year, month, 1);
      var monthEndDate = new Date(year, month + 1, 1);
      var days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);
      return days;
    },
    getWeekDays(day) {
      return new Date(day).getDay();
    },
    getDaysInMonth(year, month) {
      var m = parseInt(month, 10) + 1;
      var temp = new Date(year, m, 0);
      return temp.getDate();
    }
  }
};
</script>
