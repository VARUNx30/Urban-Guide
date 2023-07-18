import { createStore } from "vuex";

import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default createStore({
  state: {
    tours: [],
    educations: [],
    jobs: [],
    user: {},
    isUserLoggedIn: false,
    admin: false,
    searchTours: [],
    searchEducations: [],
    searchJobs: [],
    locations: []
  },
  //   getters
  getters: getters,

  // actions
  actions: actions,

  // mutations
  mutations: mutations,
});
