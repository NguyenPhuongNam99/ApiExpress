import { MongoClient } from "mongodb";
// import dotenv from 'dotenv'
// dotenv.config()
//replace env
import { env } from "./enviroment.js";

//r4ExhCbivaUcqBPD
// const uri = 'mongodb+srv://phuongnam:r4ExhCbivaUcqBPD@cluster0.dbjjn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const uri = env.MONGODB_CONFIG;
// console.log('uri', uri);
let dbInstance = null;
export const connectDB = async () => {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  //   try {
  //     //connect the client to the server
  //     await client.connect();
  //     await listDatabase(client);
  //     console.log("Connect successfully to server");
  //   } finally {
  //     await client.close();
  //   }
  await client.connect();
  dbInstance = client.db('phuongnam');
  console.log('db get sucess')
};

export const getDB = () => {
  if (!dbInstance) throw new Error("Musct connect");
  return dbInstance;
};

//hiển thị danh sách database
// const listDatabase = async (client) => {
//   const databaseList = await client.db().admin().listDatabases();
//   console.log(databaseList);
//   databaseList.databases.forEach((db) =>
//     console.log(`ten database ${db.name}`)
//   );
// };
