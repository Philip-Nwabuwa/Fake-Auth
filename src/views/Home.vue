<template>
  <div>
    <h1 v-if="isAuthenticated">Welcome!</h1>
    <h1 v-else>Please login to continue</h1>
    <button v-if="!isAuthenticated" @click="goToLogin">Login</button>
    <button v-if="isAuthenticated" @click="logout">Logout</button>
  </div>
</template>

<script>
import fakeAuth from "../auth";

export default {
  name: "Home",
  computed: {
    isAuthenticated() {
      return fakeAuth.isAuthenticated;
    },
  },
  methods: {
    logout() {
      fakeAuth.logout().then(() => {
        this.$router.push("/login");
      });
    },
    goToLogin() {
      this.$router.push("/login");
    },
  },
};
</script>
