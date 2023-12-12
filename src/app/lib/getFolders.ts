import fs from "fs";

export default async function getFolders() {
  const folders = fs.readdirSync("./src/app/post").filter((f) => fs.statSync(`./src/app/post/${f}`).isDirectory());
  return folders.map((f) => ({
    name: f,
  }));
};