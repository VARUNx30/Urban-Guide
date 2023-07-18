import {
  getTours,
  getTourById,
  insertTour,
  updateTourById,
  deleteTourById,
} from "../models/ToursModel.js";

// get all Tours
export const showTours = (req, res) => {
  getTours((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// get single Tour
export const showTourById = (req, res) => {
  getTourById(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// create Tour
export const createTour = (req, res) => {
  const data = req.body;
  insertTour(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// update Tour
export const updateTour = (req, res) => {
  const data = req.body;
  updateTourById(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// delete Food
export const deleteTour = (req, res) => {
  const id = req.params.id;
  deleteTourById(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
