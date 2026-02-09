async function readData() {
  try {
    const data = await readFilePromise("data.txt");
    console.log(data.toString());
  } catch (err) {
    console.log(err);
  }
}

readData();
