<template>
  <WelcomeHeader/>
  <v-app>
    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import WelcomeHeader from "./components/Welcome-header";
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',

  components: {
    WelcomeHeader,
    HelloWorld,
  },

  data: () => ({
    //
  }),
}
</script>
