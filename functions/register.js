// TODO
const formattedReturn = require('./helpers/formattedReturn');
const registerTutorial = require('./helpers/registerTutorial')

exports.handler = async (event) => {
    switch(event.httpMethod) {
        case 'PUT':
        
            return await registerTutorial(event);
        default:
            return formattedReturn(405, {});
    }
    //return formattedReturn(200, 'Hello World');
};
