import { Router } from "express";
import * as PersonModel from "../models/person";

const personAPIRouter = Router();

personAPIRouter?.get("/:id", (req, res) => {
  const { id } = req?.params;

  if (id === "all") {
    PersonModel?.all()?.then((data) => {
      res?.json({
        data,
      });
    });
  } else {
    PersonModel?.get(id)?.then((data) => {
      res?.json({
        data,
      });
    });
  }
});

personAPIRouter?.post("/", (req, res) => {
  const { firstName, lastName } = req?.body;

  PersonModel?.create(firstName, lastName)?.then((data) => {
    res?.json({
      data,
    });
  });
});

personAPIRouter?.put("/:id", (req, res) => {
  const { id } = req?.params;
  const { firstName, lastName } = req?.body;

  PersonModel?.update(id, firstName, lastName)?.then((data) => {
    res?.json({
      data,
    });
  });
});

personAPIRouter?.delete("/:id", (req, res) => {
  const { id } = req?.params;

  PersonModel?.remove(id)?.then((data) => {
    res?.json({
      data,
    });
  });
});

export { personAPIRouter };
