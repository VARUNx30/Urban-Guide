// import connection
import db from "../config/database.js";

export const getLocations = (result) => {
  db.query("SELECT * FROM locations", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

export const insertLocation = (data, result) => {
  db.query("INSERT INTO locations SET ?", data, (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};

export const deleteLocationById = (id, result) => {
  db.query(
    "DELETE FROM locations WHERE location_id = ?",
    [id],
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
