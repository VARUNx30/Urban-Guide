export default {
  // tours mutations
  setTours(state, tours) {
    state.tours = tours;
  },

  setSearchTours(state, tours) {
    state.searchTours = tours;
  },

  //   educations mutations
  setEducations(state, educations) {
    state.educations = educations;
  },

  setSearchEducations(state, educations) {
    state.searchEducations = educations;
  },

  //   jobs mutations
  setJobs(state, jobs) {
    state.jobs = jobs;
  },

  setSearchJobs(state, jobs) {
    state.searchJobs = jobs;
  },

  //   user mutations
  setUser(state, user) {
    state.user = user;
  },

  setIsUserLoggedIn(state, isUserLoggedIn) {
    state.isUserLoggedIn = isUserLoggedIn;
  },

  //   admin mutations
  setAdmin(state, admin) {
    state.admin = admin;
  },

  //   locations mutations
  setLocations(state, locations) {
    state.locations = locations;
  },
};
