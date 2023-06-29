const fs = require("fs");
const path = require("path");


const PUBLISHER_JSON_PATH = 'publisher.json';
const PUBLISHER_DATA = require(PUBLISHER_JSON_PATH);

const run = () => {
  console.log(PUBLISHER_DATA);
  PUBLISHER_DATA.push(PUBLISHER_DATA.shift());
  console.log(PUBLISHER_DATA);

  fs.writeFileSync(PUBLISHER_JSON_PATH, JSON.stringify(PUBLISHER_DATA), 'utf8');
};

run();
