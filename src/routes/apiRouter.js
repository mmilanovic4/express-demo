import { Router } from "express";

const apiRouter = Router();

apiRouter?.get("/person/:id", (req, res) => {
  console?.log(`Fetching person with ID: ${req?.params?.id}...`);
  res?.json({
    id: req?.params?.id,
  });
});

apiRouter?.post("/person", (req, res) => {
  console?.log(`Creating new person...`);
  res?.json({
    id: 1,
    firstName: req?.body?.firstName || "John",
    lastName: req?.body?.lastName || "Doe",
  });
});

apiRouter?.put("/person/:id", (req, res) => {
  console?.log(`Updating person with ID: ${req?.params?.id}...`);
  res?.json({
    id: req?.params?.id,
  });
});

apiRouter?.delete("/person/:id", (req, res) => {
  console?.log(`Deleting person with ID: ${req?.params?.id}...`);
  res?.json({
    id: req?.params?.id,
  });
});

export { apiRouter };
