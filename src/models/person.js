import { db } from "../db";

const TABLE_NAME = "Person";

const QUERIES = {
  all: `SELECT id, firstName, lastName FROM ${TABLE_NAME} ORDER BY id ASC`,
  get: `SELECT id, firstName, lastName FROM ${TABLE_NAME} WHERE id = ?`,
  create: `INSERT INTO ${TABLE_NAME} (firstName, lastName) VALUES (?, ?)`,
  update: `UPDATE ${TABLE_NAME} SET firstName = ?, lastName = ? WHERE id = ?`,
  remove: `DELETE FROM ${TABLE_NAME} WHERE id = ?`,
};

const all = () => {
  return new Promise((resolve) => {
    db?.all(QUERIES?.all, [], function (err, people) {
      if (err) {
        console?.log(err);
        resolve({
          status: false,
          error: err?.message,
        });
      } else {
        resolve({
          status: Boolean(people),
          people: people || [],
        });
      }
    });
  });
};

const get = (id) => {
  return new Promise((resolve) => {
    db?.get(QUERIES?.get, [id], function (err, person) {
      if (err) {
        console?.log(err);
        resolve({
          status: false,
          error: err?.message,
        });
      } else {
        resolve({
          status: Boolean(person),
          person: person || {},
        });
      }
    });
  });
};

const create = (firstName, lastName) => {
  return new Promise((resolve) => {
    db?.run(QUERIES?.create, [firstName, lastName], function (err) {
      if (err) {
        console?.log(err);
        resolve({
          status: false,
          error: err?.message,
        });
      } else {
        resolve({
          status: this?.changes === 1,
          id: this?.changes === 1 ? this?.lastID : -1,
        });
      }
    });
  });
};

const update = (id, firstName, lastName) => {
  return new Promise((resolve) => {
    db?.run(QUERIES?.update, [firstName, lastName, id], function (err) {
      if (err) {
        console?.log(err);
        resolve({
          status: false,
          error: err?.message,
        });
      } else {
        resolve({
          status: this?.changes === 1,
        });
      }
    });
  });
};

const remove = (id) => {
  return new Promise((resolve) => {
    db?.run(QUERIES?.remove, [id], function (err) {
      if (err) {
        console?.log(err);
        resolve({
          status: false,
          error: err?.message,
        });
      } else {
        resolve({
          status: this?.changes === 1,
        });
      }
    });
  });
};

export { all, get, create, update, remove };
