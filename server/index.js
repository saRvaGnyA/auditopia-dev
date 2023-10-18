const express = require("express");
const web3Storage = require("web3.storage");
require("dotenv").config();

const app = express();
const port = 4000;

app.post("/upload-contracts", async (req, res) => {
  const token = process.env.WEB3STORAGE_API_TOKEN;

  if (!token) {
    return console.error("Files cannot be uploaded due to invalid token.");
  }

  const storage = new web3Storage.Web3Storage({ token });
  const files = req.files;
  if (!files) {
    console.log("Files not found.");
    return res.sendStatus(404);
  }

  console.log(`Uploading ${files.length} files`);
  const cid = await storage.put(files);
  console.log("Content added with CID:", cid);
  return res.sendStatus(200);
});

app.post("/get-contracts", async (req, res) => {
  const token = process.env.WEB3STORAGE_API_TOKEN;

  if (!token) {
    return console.error("Files cannot be uploaded due to invalid token.");
  }

  const client = new web3Storage.Web3Storage({ token });
  const cid = req.cid;
  const response = await client.get(cid);

  console.log(`Got a response! [${response.status}] ${response.statusText}`);

  if (!response.ok) {
    throw new Error(
      `failed to get ${cid} - [${response.status}] ${response.statusText}`
    );
    return res.sendStatus(404);
  }

  const files = await res.files();
  for (const file of files) {
    console.log(`${file.cid} -- ${file.path} -- ${file.size}`);
  }
  return res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`App running on port:${port}`);
});
