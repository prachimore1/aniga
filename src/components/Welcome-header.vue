<template>
  <v-app-bar class="barStyle">
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-navigation-drawer
        v-if="drawer"
    >
      <v-list
          :items="items"
      ></v-list>
    </v-navigation-drawer>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="font-weight-bol mb-3" id="welcome-text">{{ json.welcomeMsg }}</h1>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<style>
.barStyle {
  /*background-color: #000000;*/
}
</style>
<script>
import json from "../assets/welcomeText.json";

export default {
  name: "Welcome-header",
  data: function () {
    return {
      json: json,
      items: [
        {
          title: 'Foo',
          value: 'foo',
        },
        {
          title: 'Bar',
          value: 'bar',
        },
        {
          title: 'Bar',
          value: 'bar',
        },
        {
          title: 'Bar',
          value: 'bar',
        },
        {
          title: 'Bar',
          value: 'bar',
        },
        {
          title: 'Bar',
          value: 'bar',
        }
      ],
      drawer: false,
      group: null,
    };
  },
  watch: {
    group() {
      this.drawer = false
    },
  },
};
</script>
