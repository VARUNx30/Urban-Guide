import {
  getJobs,
  getJobById,
  insertJob,
  updateJobById,
  deleteJobById,
} from "../models/JobsModel.js";

// get all Jobs
export const showJobs = (req, res) => {
  getJobs((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// get single Job
export const showJobById = (req, res) => {
  getJobById(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// create Job
export const createJob = (req, res) => {
  const data = req.body;
  insertJob(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// update Job
export const updateJob = (req, res) => {
  const data = req.body;
  updateJobById(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// delete Food
export const deleteJob = (req, res) => {
  const id = req.params.id;
  deleteJobById(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
