const { table } = require('./airtable');
const formattedReturn = require('./formattedReturn');
module.exports = async (event) => {
    try {
        const tutorials = await table.select().firstPage(); // QUERY
        const formattedTutorials = tutorials.map(tutorial => ({id: tutorial.id, ...tutorial.fields}));
        return formattedReturn(200, formattedTutorials); // return as JSON
    }
    catch(err) {
        console.error(err);
        return formattedReturn(500, {msg: "Something went wrong!"});
    }
};
