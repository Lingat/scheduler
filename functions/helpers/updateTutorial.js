const { table } = require('./airtable');
const formattedReturn = require('./formattedReturn');
module.exports = async (event) => {
    const {id, ... fields} = JSON.parse(event.body);
    const updatedTutorial = await table.update([{id, fields}]);
    return formattedReturn(200, updatedTutorial);
    /*
    try {
        const {id, ... fields} = JSON.parse(event.body);
        const updatedTutorial = await table.update([{id, fields}]);
        return formattedReturn(200, updatedTutorial);
    }
    catch(err) {
        console.log(err);
        return formattedReturn(500, {msg: "Something went wrong!"});
    }
    */
}
