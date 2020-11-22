import { addUser } from '../use-cases';

import makePostUser from './postuser';

const postUser = makePostUser({ addUser });

const userController = Object.freeze({
    postUser
})

export default userController;

export { postUser }