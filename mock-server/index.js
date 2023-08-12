const fs = require('fs');
const readline = require('readline');


module.exports = () => {
    const data = { cards: [] }

    const fileStream = fs.createReadStream('image-urls.txt');
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    
    rl.on('line', (line) => {
        let name= line.split('/').slice(-1)[0].replace('.png','')
        name = name.substring(name.indexOf("-")+1)
        data.cards.push({ name, url: line })
    });
    
    rl.on('close', () => {
        console.log('Finished reading the file.');
    });
    
    return data
}



