const express = require("express");
const PORT = 3000;
const app = express();
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const Run = require("../database/index");
const ObjectId = require("mongodb").ObjectId;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.static("client/dist"));

app.get("/api/runs", (req, res) => {
  const { foam, skip, limit } = req.query;
  Run.find({ foam: { $eq: foam } })
    .skip(skip)
    .limit(limit)
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.put("/api/runs/:id", (req, res) => {
  let id = req.params.id;
  Run.findOneAndUpdate({ _id: ObjectId(id) }, req.body, { new: true })
    .then((result) => {
      res.send(`Updated ${id} foam status to ${req.body}`);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
