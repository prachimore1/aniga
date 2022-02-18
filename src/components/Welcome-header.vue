<template>
  <h2 id="welcome-text">{{welcomeMsg}}</h2>
</template>

<script>
import json from "../assets/welcomeText.json";

export default {
  name: "Welcome-header",
  data: function () {
    return json;
  },
};
</script>
