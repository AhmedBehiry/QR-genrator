import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";


inquirer
.prompt([
    {
        message:"ur URL plz :",
        name: "URL",
    }
])
.then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("facebook.png"));

    fs.writeFile("face.txt", url, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
    });
})
.catch((error) => {
if (error.isTtyError) {} else {}
});