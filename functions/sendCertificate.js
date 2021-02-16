// TODO
const formattedReturn = require('./helpers/formattedReturn');
const canvasToPNG = require("./helpers/canvasToPNG")

exports.handler = async (event) => {
    switch(event.httpMethod) {
        case 'GET':
            return await canvasToPNG(event);
        default:
            return formattedReturn(405, {});
    }
};
``