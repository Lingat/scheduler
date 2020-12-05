const { table } = require('./airtable');
const formattedReturn = require('./formattedReturn');
module.exports = async (event) => {
 
    
    try {
        
        const {id, capacity, name} = JSON.parse(event.body);
        
        const updatedTutorial = await table.update(id, {"capacity": capacity+1});
        console.log("Registration to " + name + " was a success!")
        return formattedReturn(200, updatedTutorial);
    }
    catch(err) {
        console.log(err);
        return formattedReturn(500, {msg: "Something went wrong!"});
    }
    
}
