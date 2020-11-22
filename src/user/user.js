export default function buildMakeUser({ Id, makeFile, makeAnalytics }) {
    return function makeUser({
        name,
        createdOn = Date.now(),
        id = Id.makeId(),
        age,
        file,
        fileId,
    } = {}) {
        if (!name) {
            throw new Error('Data must have an name.')
        }
        if (name.length < 2) {
            throw new Error("Data name must be longer than 2 characters.")
        }

        if (!age && !Number(age)) {
            throw new Error('Data must have valid age.')
        }
        const { getFile } = makeFile(file);
        const { sendAnalytics } = makeAnalytics();



        return Object.freeze({
            getName: () => name,
            getCreatedOn: () => createdOn,
            // getHash: () => hash || (hash = makeHash()),
            getId: () => id,
            getFileId: () => fileId,
            getAge: () => age,
            getFile: () => getFile(),
            sendAnalytics: () => sendAnalytics()
        })

    }
}