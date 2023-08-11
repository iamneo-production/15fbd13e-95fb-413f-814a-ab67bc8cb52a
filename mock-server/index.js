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
        data.cards.push({ id: line.split("/")[4], url: line })
    });
    
    rl.on('close', () => {
        console.log('Finished reading the file.');
    });
    
    return data
}



