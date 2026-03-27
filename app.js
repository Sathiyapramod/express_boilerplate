// import the fs package
import fs from "fs";
// write logic to

// todo: file creation & writing
/**
 * 1. create the file
 * ?? 2. what I am going to write inside the file
 * 3. status of creation  -> success / error
 */

fs.writeFile("index.html", `<div>hello world</div>`, (error) => {
  if (error) console.log("error has occurred");
  else console.log("file written successfully");
});

// todo : read a particular file and print the content inside that file

fs.readFile("./namelist.txt", "utf-8", (error, data) => {
  if (error) console.log("error");
  else console.log(data);
});
