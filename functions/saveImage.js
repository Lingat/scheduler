// TODO
const formattedReturn = require('./helpers/formattedReturn');
const html2pdf = require('./helpers/html2pdf');


exports.handler = async (event) => {
    switch(event.httpMethod) {
    
        default:
            return formattedReturn(405, {});
    }
};
