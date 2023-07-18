export default {
  authLoggedIn(state) {
    return state.isUserLoggedIn;
  },

  authAdmin(state) {
    return state.admin;
  },
};
