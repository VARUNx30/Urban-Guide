import {
  getEducations,
  getEducationById,
  insertEducation,
  updateEducationById,
  deleteEducationById,
} from "../models/EducationsModel.js";

// get all Educations
export const showEducations = (req, res) => {
  getEducations((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// get single Education
export const showEducationById = (req, res) => {
  getEducationById(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// create Education
export const createEducation = (req, res) => {
  const data = req.body;
  insertEducation(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// update Education
export const updateEducation = (req, res) => {
  const data = req.body;
  updateEducationById(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// delete Food
export const deleteEducation = (req, res) => {
  const id = req.params.id;
  deleteEducationById(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
