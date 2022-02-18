<template>
  <h2 id="welcome-text">{{welcomeMsg}}</h2>
</template>

<script>
import json from "../assets/welcomeText.json";

export default {
  name: "Welcome",
  data: function () { return json }
};
</script>
