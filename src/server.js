import express from "express";
import { connectDB, getDB } from "./config/mongodb.js";
import { BoardModel } from './models/board.model.js'
// const app = express();
import { apiV1 } from "./routes/v1/index.js";
const hostname = "localhost";
const port = 8017;

connectDB()
  .then(() => console.log("Connect succesfully to database server"))
  .then(() => bootServer())
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

const bootServer = () => {
  const app = express();
  console.log('start')
  // app.get("/", (req, res) => {
  //   // res.send("hello dsd");
  //   const dbInstance = getDB()
  //   dbInstance.collection('boards').insertOne({
  //     tittle:'PhuongNam'
  //   })
  //   console.log('ss')
  //   res.end('<h1>hello</h1>')
  // });
  // app.get("/", async(req, res) => {
  //   res.send("hello dsd");
  //   let fakeData = { title: 'hello viet nam'}
  //   await BoardModel.createNew(fakeData)
   
  // });
  app.use(express.json())
  app.use('/v1', apiV1); 

  app.listen(port, hostname, () => {
    console.log(`hello trungqdsdsdsuandev, iam ${hostname}:${port}`);
  });
};
