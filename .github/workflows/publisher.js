const fs = require("fs");
const path = require("path");

const PUBLISHER_JSON_PATH = process.argv[2];
const PUBLISHER_JSON_DATA = require(PUBLISHER_JSON_PATH);

const run = () => {
  console.log(PUBLISHER_JSON_DATA);
  PUBLISHER_JSON_DATA.push(PUBLISHER_JSON_DATA.shift());

  fs.writeFileSync(PUBLISHER_JSON_PATH, JSON.stringify(PUBLISHER_JSON_DATA), 'utf8');
  console.log(PUBLISHER_JSON_DATA);
};

run();
