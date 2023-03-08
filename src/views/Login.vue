<template>
  <div>
    <h1>Login</h1>
    <button @click="login">Login</button>
  </div>
</template>

<script>
import fakeAuth from "../authentication/auth";

export default {
  name: "Login",
  methods: {
    login() {
      fakeAuth.login().then(() => {
        this.$router.push("/dashboard");
      });
    },
  },
};
</script>
