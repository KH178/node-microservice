import makeAdduser from './add-user';
import userDb from '../data-access'


const addUser = makeAdduser({ userDb });

const userService = Object.freeze({
    addUser
})

export default userService;

export { addUser }
