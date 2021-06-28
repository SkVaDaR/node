const fs = require('fs');
const path = require('path');
const six = `${__dirname}/students/1800girlz`;
const eight = `${__dirname}/students/2000boyz`;
fs.readdir(six, (err, files) => {
    if (err) {
        console.log(err);
    }
    console.log(files);
    files.forEach(value => {
        fs.readFile(`${six}/${value}`, (err1, data) => {
            if (err1) {
                console.log(err1);
            }
            const stud = JSON.parse(data);
            console.log(stud);
            if (stud.gender === 'male') {
                fs.rename(`${six}/${value}`, `${eight}/${value}`, (err2 => {
                    if (err2) {
                        console.log(err2);
                    }
                }))
            }
        })
    })
});
fs.readdir(eight, (err, files) => {
    if (err) {
        console.log(err);
    }
    console.log(files);
    for (let i = 0; i < files.length; i++) {
        fs.readFile(`${eight}/${files[i]}`, (err1, data) => {
            if (err1) {
                console.log(err1);
            }
            const stud1 = JSON.parse(data)
            if (stud1.gender==='female'){
                fs.rename(`${eight}/${files[i]}`, `${six}/${files[i]}`, (err2 => {
                    if (err2){
                        console.log(err2);
                    }
                }))
            }
        })
    }
})