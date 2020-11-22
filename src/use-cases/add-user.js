import makeUser from '../user';

export default function makeAdduser({ userDb }) {
    return async function addUser(userInfo) {
        const user = makeUser(userInfo);
        console.log('use-case');
        const exists = await userDb.findById({ userId: user.getId() });
        if (exists) {
            return exists
        }

        const moderated = await user;
        const userFile = moderated.getFile();
        const sendAnalytics = moderated.sendAnalytics;


        return userDb.insert({
            name: moderated.getName(),
            createdOn: moderated.getCreatedOn(),
            id: moderated.getId(),
            // postId: moderated.getPostId(),
            file: userFile,
            fileId: moderated.getFileId()

        }, sendAnalytics)
    }
}