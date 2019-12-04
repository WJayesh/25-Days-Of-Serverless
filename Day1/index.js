module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    number = (Math.random() *10) % 4;
    number = Math.floor(number);
    driedel = ["Nun", "Gimmel", "Hay", "Shin"];

    // if (req.query.name || (req.body && req.body.name)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            
            body: "Result is a " + driedel[number],
        };
    // }
    // else {
    //     context.res = {
    //         status: 400,
    //         body: "Please pass a name on the query string or in the request body"
    //     };
    // }
};