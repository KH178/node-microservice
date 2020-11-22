import Id from '../Id';

export default function makeUserDb({ makeDb }) {
    return Object.freeze({
        insert, findById
    })
    async function insert({ id: _id = Id.makeId(), ...userInfo }, sendAnalytics) {
        const db = await makeDb();
        const result = await db.insertOne({ _id, ...userInfo });
        sendAnalytics();
        const { _id: id, ...insertedInfo } = result.ops[0];

        return { id, ...insertedInfo }
    }
    async function findById({ userId }) {
        console.log(userId, 'user');
        const db = await makeDb();
        // const result = await db.collection('user').find({ id: userId })
        const result = await db.find({ id: userId })
        console.log(result.found, 'found');
        const found = await result.toArray()
        if (found.length === 0) {
            return null
        }
        const { _id: id, ...insertedInfo } = found[0]
        return { id, ...insertedInfo }
    }
}


