<template>
  <div id="app">
    <div id="nav">
      <li v-for="route in routes" :key="route.path">
        <router-link :to="route.path">{{ route.name }}</router-link>
      </li>
    </div>
    <div class="markdown">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      routes: [
        { path: "/", name: "首页" },
        { path: "/button", name: "按钮" },
        { path: "/datepicker", name: "日期选择器" }
      ]
    };
  }
};
</script>
<style lang="less">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  height: 100%;
}
#app {
  height: 100%;
  display: flex;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  width: 200px;
  a {
    color: #2c3e50;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#nav ul,
#nav li {
  list-style: none;
}
#nav li {
  padding: 12px;
}
#nav li:hover a {
  color: #42b983;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-bottom: 1rem;
}
.markdown {
  flex: 1;
  padding: 20px 0;
}
.markdown section > table {
  border-collapse: collapse;
  width: 100%;
  background-color: #fff;
  font-size: 14px;
  margin-bottom: 45px;
  line-height: 1.5em;
}
.markdown section > table th,
.markdown section > table td {
  text-align: left;
  white-space: nowrap;
  color: #909399;
  font-weight: 400;
  border-bottom: 1px solid #dcdfe6;
  padding: 15px;
  max-width: 250px;
}
.markdown section > table td {
  color: #606266;
}
.markdown section > table th:first-child,
.markdown section > table td:first-child {
  padding-left: 10px;
}
</style>
