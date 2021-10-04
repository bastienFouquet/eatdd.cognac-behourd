const xlsx = require('xlsx');

const filePath = process.argv.slice(2)[0];
const workbook = xlsx.readFile(filePath);
const worksheet = workbook.Sheets[workbook.SheetNames[0]];

let posts = [];
let post = {};

for (let cell in worksheet) {
    const cellAsString = cell.toString();

    if (cellAsString[1] !== 'r' && cellAsString[1] !== 'm' && cellAsString[1] > 1) {
        if (cellAsString[0] === 'A') {
            post.nom = worksheet[cell].v;
        }
        if (cellAsString[0] === 'B') {
            post.prenom = worksheet[cell].v;
        }
        if (cellAsString[0] === 'C') {
            post.poids = worksheet[cell].v;
        }
        if (cellAsString[0] === 'D') {
            post.annee_adhesion = worksheet[cell].v;
        }
        if (cellAsString[0] === 'E') {
            post.arme = worksheet[cell].v;
        }
        if (cellAsString[0] === 'F') {
            post.armure = worksheet[cell].v;
            posts.push(post);
            post = {};
        }
    }
}

console.log(posts);


//node .\src\import-xlsx.js .\files\Exemple.xlsx <-- pour lancer