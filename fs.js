import fs from "fs";

// create a readable stream from a file
const readable = fs.createReadStream("bigfile.txt", {
  encoding: "utf8",
});

// option 1: manually handle chunks
readable.on("data", (chunk) => {
  console.log("Chunk received:", chunk.length);
});

readable.on("end", () => {
  console.log("Finished reading file");
});

readable.on("error", (err) => {
  console.error("Error while reading:", err);
});

// option 2: pipe to another stream (e.g., copy file)
const writable = fs.createWriteStream("copy.txt");
readable.pipe(writable);
