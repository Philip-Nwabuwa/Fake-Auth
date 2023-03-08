export default {
  isAuthenticated: false,
  login() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.isAuthenticated = true;
        resolve(true);
      }, 1000);
    });
  },
  logout() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.isAuthenticated = false;
        resolve(true);
      }, 1000);
    });
  },
};
