export default function buildAnalytics({ amqp }) {
    return function makeAnalytics() {
        const anslytics = () => {
            amqp.connect(process.env.DM_RABBIT_URL, function (error0, connection) {
                if (error0) {
                    throw error0;
                }
                connection.createChannel(function (error1, channel) {
                    if (error1) {
                        throw error1;
                    }
                    var queue = 'fromProducer';
                    var msg = 'Hello Consumer';

                    channel.assertQueue(queue, {
                        durable: false
                    });

                    channel.sendToQueue(queue, Buffer.from(msg));
                    console.log(" [x] Sent %s", msg);
                });
                // setTimeout(function () {
                connection.close();
                process.exit(0);
                // }, 500);
            });
        }
        return Object.freeze({
            sendAnalytics: () => anslytics()
        })
    }

}




