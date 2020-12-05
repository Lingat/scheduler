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
            return await updateCourse(event);
        case 'DELETE':
            return await deleteCourse(event);
        */
        default:
            return formattedReturn(405, {});
    }
    //return formattedReturn(200, 'Hello World');
};
