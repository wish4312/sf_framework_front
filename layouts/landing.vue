<template>
  <v-app :class="`${isDarkMode ? 'dark-mode' : 'light-mode'}`">
    <nuxt />
    <v-footer>
      <span>&copy; 2022. LS ITC all rights reserved.</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "landing",
  computed: {
    ...mapState({
      isDarkMode: "isDarkMode"
    })
  }
};
</script>
