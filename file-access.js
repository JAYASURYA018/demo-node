const { fstat } = require("fs")

const htmldata = "Good morning"

for(let i=0;i<=10;i++)
{
    fs.writeFile(`./backups/text-${i}.txt`,htmldata,function(err){
        console.log("Completed writing !!!",i);
    
    });
}