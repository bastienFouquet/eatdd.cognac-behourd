const xlsx = require('xlsx');

const filePath = process.argv.slice(2)[0];
const workbook = xlsx.readFile(filePath);
const worksheet = workbook.Sheets[workbook.SheetNames[0]];

let posts = [];
let post: any = {};

for (let cell in worksheet) {
    const cellAsString:any = cell.toString();

    if (cellAsString[1] !== 'r' && cellAsString[1] !== 'm' && cellAsString[1] > 1) {
        if (cellAsString[0] === 'A') {
            post.name = worksheet[cell].v;
        }
        if (cellAsString[0] === 'B') {
            post.firstname = worksheet[cell].v;
        }
        if (cellAsString[0] === 'C') {
            post.weight = worksheet[cell].v;
        }
        if (cellAsString[0] === 'D') {
            post.year_register = worksheet[cell].v;
        }
        if (cellAsString[0] === 'E') {
            post.weapon = worksheet[cell].v;
        }
        if (cellAsString[0] === 'F') {
            post.armor = worksheet[cell].v;
            posts.push(post);
            post = {};
        }
    }
}

console.log(posts);



//node .\src\import-xlsx.js .\files\Exemple.xlsx <-- pour lancer