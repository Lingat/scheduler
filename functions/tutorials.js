// TODO
const formattedReturn = require('./helpers/formattedReturn');
const getTutorials= require('./helpers/getTutorials');
const updateTutorial = require('./helpers/updateTutorial');

exports.handler = async (event) => {
    switch(event.httpMethod) {
        case 'GET':
            return await getTutorials(event);
        case 'PUT':
            return await updateTutorial(event);
        /*
        case 'PUT':
            return await updateTutorial(event);
        case 'DELETE':
            return await deleteTutorial(event);
        */
        default:
            return formattedReturn(405, {});
    }
};
