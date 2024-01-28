import fs from "fs/promises";

fs.readFile("../theory/http-requests.md", "utf8").then((data) => {
  console.log(data);
});

fs.writeFile("test.txt", "Hello World").then(() => {});

fs.readdir("../theory").then((files) => {
  console.log(files);
});

fs.mkdir("test").then(() => {
  console.log("created");
});

fs.rmdir("test").then(() => {
  console.log("removed");
});

fs.unlink("test.txt").then(() => {
  console.log("removed");
});

fs.statfs("../theory").then((stats) => {
  console.log(stats);
});

fs.stat("../theory/http-requests.md").then((stats) => {
  console.log(stats);
});
