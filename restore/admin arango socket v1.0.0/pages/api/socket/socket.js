//import { mysocket } from "../../../apicomponent/db";
const { Database, aql } = require("arangojs");
const io = require('socket.io')()
//database info
const db = new Database({
  url: "http://localhost:8529/",
  databaseName: "arango",
  auth: {
    username: "root",
    password: ""
  },
})
export default async function handler(req, res) {
  const myres =await db.query(aql `FOR u in Users SORT u._key DESC LIMIT 1  RETURN { u }`);
    let result = [];
    for await (let User of myres) {
      result.push(User);
  
    }

io.on('connection', client => {
  result
});
    
  
  

    res.status(200).json(result)
}