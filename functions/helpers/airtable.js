// TODO: create Airtable configuration
require("dotenv").config(); 
const Airtable = require("airtable");
const base = new Airtable({apiKey: "keyrY4bCSA8vsHJHp"}).base("appLd5V32pIkImqrK");
const table = base("tutorials");

module.exports = { table };