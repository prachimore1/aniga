<template>
  <v-app class="pageBackground">
      <WelcomeHeader/>
    <v-card color="transparent" width="100%">
      <v-img
          class="text-center; imageStyle"
          :src="logo"
          contain
          height="100%"
          width="100%"
      />
    </v-card>
  </v-app>
</template>

<style>
.pageBackground {
  background-color: #FEC60D;
}
.imageStyle {
  opacity: 60%
}
</style>

<script>
import WelcomeHeader from "./components/Welcome-header";
import logo from "./assets/WeddingFire.jpg";

export default {
  name: 'App',

  components: {
    WelcomeHeader,
  },

  data: () => ({
    logo: logo,
  }),
}
</script>
