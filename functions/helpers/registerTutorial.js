const { table } = require('./airtable');
const formattedReturn = require('./formattedReturn');
module.exports = async (event) => {
    // Try and update the capacity upon registration
    try {
        const {id, capacity, name, maxCapacity} = JSON.parse(event.body);
        // Ensures that registrations don't exceed max capacity
        if(capacity <= maxCapacity) {
            const updatedTutorial = await table.update(id, {"capacity": capacity+1});
            console.log("Registration to " + name + " was a success!")
            return formattedReturn(200, updatedTutorial);
        }
        else {
            return formattedReturn(403, {msg: "Error, capacity is full."});
        }
        
    }
    catch(err) {
        console.log(err);
        return formattedReturn(500, {msg: "Something went wrong!"});
    }
    
}
