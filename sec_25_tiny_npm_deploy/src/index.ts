#!/usr/bin/env node
import express from 'express';

const app = express();
const port = 3005;

app.get('/', (req, res) => {
  res.send("eyyo wassup");
});

app.listen(port, () => console.log(`server's listening on port ${port}`));