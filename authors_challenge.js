'use strict';

const fs = require('fs');
const https = require('https');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'getArticleTitles' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING author as parameter.
 * 
 * URL for cut and paste: 
 * https://jsonmock.hackerrank.com/api/articles?author=<authorName>&page=<num>
 *
 */

async function getArticleTitles(author) {

    let number = 1;
    let titles = [];

    const getData = (author, number, callback) => {

        https.get(`https://jsonmock.hackerrank.com/api/articles?author=${author}&page=<${number}`, callback);
    }

    const getTitles = () => {
        return titles;
    }

    const dataCallback = (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
            data += chunk;
        })

        resp.on('end', () => {
            console.log("in end")
            titles = [...JSON.parse(data).data]
            console.log(titles)
            return titles;
        });

        resp.on("error", (err) => {
            console.log("Error: " + err.message);
        });

    }

    return getData(author, number, dataCallback);

}
// async function main() {
//     console.log("in main");
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const author = readLine();

//     const result = await getArticleTitles(author);

//     ws.write(result.join('\n') + '\n');

//     ws.end();
// }

getArticleTitles("epaga");