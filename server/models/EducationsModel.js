// import connection
import db from "../config/database.js";

export const getEducations = (result) => {
  db.query("SELECT * FROM educations", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

export const getEducationById = (id, result) => {
  db.query(
    "SELECT * FROM educations WHERE education_id = ?",
    [id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results[0]);
      }
    }
  );
};

export const insertEducation = (data, result) => {
  db.query("INSERT INTO educations SET ?", data, (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};

export const updateEducationById = (data, result) => {
  db.query(
    "UPDATE educations SET education_name = ?, education_description = ?, education_location = ?, education_price = ?, education_rating = ?, education_image = ?, education_type = ? WHERE education_id = ?",
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

export const deleteEducationById = (id, result) => {
  db.query(
    "DELETE FROM educations WHERE education_id = ?",
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
