// import connection
import db from "../config/database.js";

export const getJobs = (result) => {
  db.query("SELECT * FROM jobs", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

export const getJobById = (id, result) => {
  db.query("SELECT * FROM jobs WHERE job_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};

export const insertJob = (data, result) => {
  db.query("INSERT INTO jobs SET ?", data, (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};

export const updateJobById = (data, result) => {
  db.query(
    "UPDATE jobs SET job_name = ?, job_description = ?, job_location = ?, job_price = ?, job_rating = ?, job_image = ?, job_type = ? WHERE job_id = ?",
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

export const deleteJobById = (id, result) => {
  db.query("DELETE FROM jobs WHERE job_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
