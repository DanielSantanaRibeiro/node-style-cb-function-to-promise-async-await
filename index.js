const fs = require('fs');

const readFilePromise = (path) => {
    return new Promise((res, rej)=>{
        fs.readFile(path, (err, data) =>{
            if(err) {
                return rej(err);
            }                            
            return res(data);
        })
    });
}


const readFile = async (path) => {
    try {
        const text = await readFilePromise(path);    
        console.log(text);
    } catch (error) {
        console.log(error);
    }
};

readFile('./texto.txt');