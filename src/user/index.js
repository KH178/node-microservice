import Id from '../Id/index';
var multer = require('multer')
const upload = multer({ dest: 'uploads/' });
var amqp = require('amqplib/callback_api');
import buildMakeFile from './file';
import buildMakeUser from './user';
import buildAnalytics from './analytics';


const isValidIp = true;
const makeFile = buildMakeFile({ isValidIp, upload });
const makeAnalytics = buildAnalytics({ amqp });
const makeUser = buildMakeUser({ Id, makeFile, makeAnalytics });

export default makeUser;
