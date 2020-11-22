
export default function makePostUser({ addUser }) {
    return async function postUser(httpRequest) {
        console.log(httpRequest, 'Posted');
        try {
            const { ...userInfo } = httpRequest.body;
            const posted = await addUser({
                ...userInfo
            })
            return {
                headers: {
                    'Content-Type': 'application/json',
                    'Last-Modified': new Date(posted.modifiedOn).toUTCString()
                },
                statusCode: 201,
                body: { posted }
            }
        } catch (error) {
            console.log(e, 'error')

            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 400,
                body: {
                    error: e.message
                }
            }
        }
    }
}