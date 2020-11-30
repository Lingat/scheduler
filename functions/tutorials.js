// TODO
const formattedReturn = require('./helpers/formattedReturn');
const getTutorials= require('./helpers/getTutorials');

exports.handler = async (event) => {
    switch(event.httpMethod) {
        case 'GET':
            return await getTutorials(event);
        /*
        case 'POST':
            return await createCourse(event);
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
