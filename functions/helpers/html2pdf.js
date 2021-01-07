
const formattedReturn = require('./formattedReturn');
var fs = require("fs")
const nodeHtmlToImage = require('node-html-to-image')
module.exports = async (event) => {
    fs.readFile('certificate.html', 'utf8', (err, data) => {
        if (err) throw err;
        nodeHtmlToImage({
          output: './image.jpg',
          html: data, 
          content: { name: 'John Smith', courseName: "Name of Course", date: "1/6/21" }
        })
        .then(() => console.log('The image was created successfully!'))
        .catch(error =>
            console.log(error))
      });

      return formattedReturn(200, {msg: "Image created successfully!"});
};


 


