export default function buildMakeFile({ isValid, upload }) {
    return function makeFile(file) {
        const validFile = file;

        return Object.freeze({
            getFile: () => validFile
        })
    }
}
