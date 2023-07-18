import express from "express";

import { showAUser, createAccount } from "../controllers/user.js";

import {
  showTours,
  showTourById,
  createTour,
  updateTour,
  deleteTour,
} from "../controllers/tours.js";

import {
  showJobs,
  showJobById,
  createJob,
  updateJob,
  deleteJob,
} from "../controllers/jobs.js";

import {
  showEducations,
  showEducationById,
  createEducation,
  updateEducation,
  deleteEducation,
} from "../controllers/educations.js";

import {
  showLocations,
  createLocation,
  deleteLocation,
} from "../controllers/locations.js";

import db from "../config/database.js";

// init express router
const router = express.Router();

// Auth
router.post("/api/register", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email or password is required" });
  }
  // Check if user already exists
  const query = `SELECT * FROM user WHERE user_email = '${email}'`;
  db.query(query, (err, result) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    if (result.length > 0) {
      return res.status(400).json({ message: "Email is already in use" });
    }

    // Create new user
    const query = `INSERT INTO user (user_email, user_password) VALUES ('${email}', '${password}')`;
    db.query(query, (err, result) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      return res.status(201).json({ message: "User created successfully" });
    });
  });
});

router.post("/api/login", (req, res) => {
  res.status(200).json({ message: "Login route is not implemented yet" });
});

////////////////////////// USER ////////////////////////////////
// get all user
router.get("/api/users/:email", showAUser);

// create account
router.post("/api/users", createAccount);

////////////////////////// TOURS ////////////////////////////////
// get all tours
router.get("/api/tours", showTours);

// get single tour
router.get("/api/tours/:id", showTourById);

// create tour
router.post("/api/tours", createTour);

// update tour
router.put("/api/tours/:id", updateTour);

// delete tour
router.delete("/api/tours/:id", deleteTour);

////////////////////////// JOBS ////////////////////////////////
// get all jobs
router.get("/api/jobs", showJobs);

// get single job
router.get("/api/jobs/:id", showJobById);

// create job
router.post("/api/jobs", createJob);

// update job
router.put("/api/jobs/:id", updateJob);

// delete job
router.delete("/api/jobs/:id", deleteJob);

////////////////////////// EDUCATIONS ////////////////////////////////
// get all educations
router.get("/api/educations", showEducations);

// get single education
router.get("/api/educations/:id", showEducationById);

// create education
router.post("/api/educations", createEducation);

// update education
router.put("/api/educations/:id", updateEducation);

// delete education
router.delete("/api/educations/:id", deleteEducation);

////////////////////////// LOCATIONS ////////////////////////////////
// get all locations
router.get("/api/locations", showLocations);

// create location
router.post("/api/locations", createLocation);

// delete location
router.delete("/api/locations/:id", deleteLocation);

// export default router
export default router;
