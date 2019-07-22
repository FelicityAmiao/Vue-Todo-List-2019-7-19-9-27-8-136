<template>
  <div id="app">
    <div class="mainPanel">
      <Header></Header>
      <Body :showFilter="showFilter"></Body>
      <Footer @get-show-type="getShowFilter"></Footer>
      <div></div>
    </div>
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import Body from "./components/Body.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "app",
  components: {
    Header,
    Body,
    Footer
  },
  data() {
    return {
      showFilter: (list) => list
    };
  },
  methods: {
    getShowFilter: function(showFilter) {
      this.showFilter = showFilter;
    }
  }
};
</script>
