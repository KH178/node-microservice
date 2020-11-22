const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");


export default function buildAnalytics({ fileConverter }) {

}

const storage = new GridFsStorage({
    url: process.env.DM_USER_URL,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString("hex") + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: "uploads"
                };
                resolve(fileInfo);
            });
        });
    }
});

const upload = multer({
    storage
});