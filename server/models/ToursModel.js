// import connection
import db from "../config/database.js";

// get all Tours
export const getTours = (result) => {
  db.query("SELECT * FROM tours", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// get single Tour
export const getTourById = (id, result) => {
  db.query("SELECT * FROM tours WHERE tour_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};

export const insertTour = (data, result) => {
  db.query("INSERT INTO tours SET ?", data, (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};

export const updateTourById = (data, result) => {
  db.query(
    "UPDATE tours SET tour_name = ?, tour_description = ?, tour_location = ?, tour_price = ?, tour_rating = ?, tour_image = ?, tour_type = ? WHERE tour_id = ?",
    [
      data.name,
      data.description,
      data.location,
      data.price,
      data.rating,
      data.image,
      data.type,
      data.id,
    ],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

export const deleteTourById = (id, result) => {
  db.query("DELETE FROM tours WHERE tour_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
