// const express = require("express");

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("server is running");
});

//get a list of 5 jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "title1",
    },
    {
      id: 2,
      title: "title1",
    },
    {
      id: 3,
      title: "title1",
    },
    {
      id: 4,
      title: "title1",
    },
    {
      id: 5,
      title: "title1",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server at localhost ${port}`);
});
