const sgMail = require("@sendgrid/mail");

const { createCanvas, loadImage } = require("canvas");
const canvasWidth = 860;
const canvasHeight = 660;
const canvas = createCanvas(canvasWidth, canvasHeight);
const ctx = canvas.getContext("2d");

sgMail.setApiKey(
  "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"
);



function certificateString(name, courseName, date) {
  return (
    "This is to certify that " +
    name +
    "has successfully completed " +
    courseName +
    "Nicely done! \nDate:" +
    date
  );
}

function sendGridError(error, recipient) {
  console.log("Failed to send to " + recipient + "\nReason: " + error);
}

function sendEmail(imgBase64) {
  const msg = {
    to: "pierre@helloworld.college",
    from: "pierre@helloworld.college",
    subject: "Sending ceritficate of completion email test",
    html: '<img src="cid:certificate" alt="image" />',
    attachments: [
      {
        filename: "image",
        type: "image/png",
        content_id: "certificate",
        content: imgBase64,
        disposition: "inline",
      },
    ],
  };
  sgMail.send(msg).catch(function (error) {
    sendGridError(error, "pierre@helloworld.college");
  });
}

// creates image with a specified output
function createImage(output) {
  switch (output) {
    case "buffer":
      return canvas.toBuffer();
    case "stream":
      return canvas.createPNGStream();
    case "dataURL":
      return canvas.toDataURL("image/png");
    case "canvas":
      return canvas;
    default:
      throw new Error(`output type:${options.output} is not supported.`);
  }
}


// creates certificate string
function certificateString(name, courseName, date) {
  return (
    "Nicely done, \n" +
    name.toUpperCase() +
    "\nYou’ve completed:" +
    courseName.toUpperCase() +
    "\n- Hello World College [" +
    date +
    "]"
  );
}

module.exports = async (event) => {
  // load an image as the background
  loadImage(
    "https://media.istockphoto.com/vectors/certificate-border-vector-id165491341?k=6&m=165491341&s=612x612&w=0&h=ievJt__zUcs4SmfXqNihmUqoFhjTF_BnCL_4bl49jf4="
  )
    .then((image) => {
      ctx.drawImage(image, 0, 0, 850, 650);

      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.fillStyle = "#2A5982";
      ctx.font = "bold 38px Monospace";
      loadImage(
        "https://static.vecteezy.com/system/resources/thumbnails/001/209/023/small/graduation-hat.png"
      ).then((image2) => {

        ctx.fillText(
          certificateString(
            "John Smith\n",
            "\nZero to Coder (Stage 1)\n",
            "1/8/21"
          ),
          canvasWidth / 2,
          205
        );
        ctx.drawImage(image2, canvasWidth / 2 + 50, 120, 250, 150);
        sendEmail(createImage("buffer").toString("base64"));
      });
    })
    .catch((error) => {
      console.log(error);
    });

  return formattedReturn(200, { msg: "Image created successfully!" });
};
