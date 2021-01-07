// TODO
const formattedReturn = require('./helpers/formattedReturn');


exports.handler = async (event) => {
    switch(event.httpMethod) {
        case 'GET':
            return await formattedReturn(200, {msg: "Image created successfully!"})
        default:
            return formattedReturn(405, {});
    }
};
