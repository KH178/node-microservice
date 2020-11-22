import makeUserDb from './user-db';
import mongodb from 'mongodb';

const MongoClient = mongodb.MongoClient
const url = process.env.DM_USER_URL

const dbName = process.env.DM_USER_DB_NAME
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true })

export async function makeDb() {
    console.log(dbName);
    if (!client.isConnected()) {
        await client.connect()
    }
    return client.db(dbName).collection("user");
}


const userDb = makeUserDb({ makeDb });
export default userDb;