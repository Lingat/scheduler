// TODO
const formattedReturn = require('./helpers/formattedReturn');
const html2pdf = require('./helpers/html2pdf');


exports.handler = async (event) => {
    switch(event.httpMethod) {
        case 'GET':
            return await html2pdf();
        default:
            return formattedReturn(405, {});
    }
};
