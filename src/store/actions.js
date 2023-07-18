import axios from "axios";

export default {
  // tours actions
  async fetchTours(context) {
    try {
      const res = await axios.get("/tours");
      context.commit("setTours", res.data);
      context.commit("setSearchTours", res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },

  async fetchTourById(context, id) {
    try {
      const res = await axios.get(`/tours/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },

  async AddTour(context, tour) {
    const newTour = {
      tour_name: tour.name,
      tour_location: tour.location,
      tour_description: tour.description,
      tour_price: tour.price,
      tour_rating: tour.rating,
      tour_type: tour.type,
      tour_image: tour.image,
    };
    try {
      const res = await axios.post("/tours", newTour);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },

  async deleteTourById(context, id) {
    try {
      const res = await axios.delete(`/tours/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },

  async updateTourById(context, tour) {
    const id = Number(tour.id);
    try {
      const res = await axios.put(`/tours/${id}`, tour);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },

  searchTours(context, keyword) {
    const results = context.state.tours.filter((tour) => {
      return Object.keys(tour).some((key) => {
        if (tour[key] == null) return false;
        if (key == "tour_name")
          return tour[key]
            .toString()
            .toLowerCase()
            .includes(keyword.toLowerCase());
        return false;
      });
    });
    context.commit("setSearchTours", results);
  },

  //   educations actions
  async fetchEducations(context) {
    try {
      const res = await axios.get("/educations");
      context.commit("setEducations", res.data);
      context.commit("setSearchEducations", res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },

  async fetchEducationById(context, id) {
    try {
      const res = await axios.get(`/educations/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },

  async AddEducation(context, education) {
    const newEducation = {
      education_name: education.name,
      education_location: education.location,
      education_description: education.description,
      education_price: education.price,
      education_rating: education.rating,
      education_type: education.type,
      education_image: education.image,
    };
    try {
      const res = await axios.post("/educations", newEducation);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },

  async deleteEducationById(context, id) {
    try {
      const res = await axios.delete(`/educations/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },

  async updateEducationById(context, education) {
    const id = Number(education.id);
    try {
      const res = await axios.put(`/educations/${id}`, education);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },

  searchEducations(context, keyword) {
    const results = context.state.educations.filter((education) => {
      return Object.keys(education).some((key) => {
        if (education[key] == null) return false;
        if (key == "education_name")
          return education[key]
            .toString()
            .toLowerCase()
            .includes(keyword.toLowerCase());
        return false;
      });
    });
    context.commit("setSearchEducations", results);
  },

  //   jobs actions
  async fetchJobs(context) {
    try {
      const res = await axios.get("/jobs");
      context.commit("setJobs", res.data);
      context.commit("setSearchJobs", res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },

  async fetchJobById(context, id) {
    try {
      const res = await axios.get(`/jobs/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },

  async AddJob(context, job) {
    const newJob = {
      job_name: job.name,
      job_location: job.location,
      job_description: job.description,
      job_price: job.price,
      job_rating: job.rating,
      job_type: job.type,
      job_image: job.image,
    };
    try {
      const res = await axios.post("/jobs", newJob);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },

  async deleteJobById(context, id) {
    try {
      const res = await axios.delete(`/jobs/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },

  async updateJobById(context, job) {
    const id = Number(job.id);
    try {
      const res = await axios.put(`/jobs/${id}`, job);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },

  searchJobs(context, keyword) {
    const results = context.state.jobs.filter((job) => {
      return Object.keys(job).some((key) => {
        if (job[key] == null) return false;
        if (key == "job_name")
          return job[key]
            .toString()
            .toLowerCase()
            .includes(keyword.toLowerCase());
        return false;
      });
    });
    context.commit("setSearchJobs", results);
  },

  //   locations actions

  async fetchLocations(context) {
    try {
      const res = await axios.get("/locations");
      context.commit("setLocations", res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },

  async deleteLocationById(context, id) {
    try {
      const res = await axios.delete(`/locations/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },

  async createLocation(context, data) {
    const newLocation = {
      location_name: data,
    };
    try {
      const res = await axios.post("/locations", newLocation);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },

  async updateLocationSelectTour(context, locationName) {
    if (locationName == "all") {
      context.commit("setSearchTours", context.state.tours);
      return;
    }
    const results = context.state.tours.filter((tour) => {
      return Object.keys(tour).some((key) => {
        if (tour[key] == null) return false;
        if (key == "tour_location")
          return tour[key]
            .toString()
            .toLowerCase()
            .includes(locationName.toLowerCase());
        return false;
      });
    });
    context.commit("setSearchTours", results);
  },

  async updateLocationSelectEducation(context, locationName) {
    if (locationName == "all") {
      context.commit("setSearchEducations", context.state.educations);
      return;
    }
    const results = context.state.educations.filter((education) => {
      return Object.keys(education).some((key) => {
        if (education[key] == null) return false;
        if (key == "education_location")
          return education[key]
            .toString()
            .toLowerCase()
            .includes(locationName.toLowerCase());
        return false;
      });
    });
    context.commit("setSearchEducations", results);
  },

  async updateLocationSelectJob(context, locationName) {
    if (locationName == "all") {
      context.commit("setSearchJobs", context.state.jobs);
      return;
    }
    const results = context.state.jobs.filter((job) => {
      return Object.keys(job).some((key) => {
        if (job[key] == null) return false;
        if (key == "job_location")
          return job[key]
            .toString()
            .toLowerCase()
            .includes(locationName.toLowerCase());
        return false;
      });
    });
    context.commit("setSearchJobs", results);
  },
};
