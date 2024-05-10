//CHATGPT
    // Add CORS middleware
    function handleCORS(app){
        app.use((req, res, next) => {
            res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
            next();
        });
    }

//Google Generative AI 
    const fs = require('fs');
    const data = fs.readFileSync("images/base64image.txt", 'utf8');

const image_base64 = data

const professionalRoute = (req, res) => {
    let obj = {
        professionalName: "Casey Owens",
        base64Image: image_base64,
        primaryDescription: "Yo what up",
        nameLink: {
            firstName: "Casey",
            lastName: "Owens",
            url: ""
        },
        workDescription1: "I like to program",
        workDescription2: "",
        linkTitleText: "Profiles",
        linkedInLink: {
            text: "LinkedIn",
            link: "https://www.linkedin.com/in/casey-o-41730a271/"
        },
        githubLink: {
            text: "GitHub",
            link: "https://github.com/glitchyrobot108"
        }
    }
    res.send(obj)
}


module.exports = {professionalRoute, handleCORS}