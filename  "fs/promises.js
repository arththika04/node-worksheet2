import fs from "fs/promises";

async function readFileSafe() {
  try {
    const data = await fs.readFile("missing.txt", "utf8");
    console.log(data);
  } catch (err) {
    if (err.code === "ENOENT") {
      console.error("File not found, creating a default one...");
      // handle missing file: create it, return default data, etc.
    } else {
      console.error("Unexpected error while reading file:", err);
    }
  }
}

readFileSafe();
