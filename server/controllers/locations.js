import {
  getLocations,
  insertLocation,
  deleteLocationById,
} from "../models/LocationsModel.js";

export const showLocations = (req, res) => {
  getLocations((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const createLocation = (req, res) => {
  const data = req.body;
  insertLocation(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const deleteLocation = (req, res) => {
  const id = req.params.id;
  deleteLocationById(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
