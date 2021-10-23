import {Person} from "../classes/Person";
import {existsSync} from "fs";
import path from 'path';
const xlsx = require('xlsx');

export function importXlsx(pathFile: string): Person[] {
    const extension = pathFile.split('.').pop();
    if (extension !== 'xlsx') {
        throw new Error('Wrong type of file !');
    }
    if (!existsSync(path.resolve(pathFile))) {
        throw new Error('No such file !');
    }
    const workbook = xlsx.readFile(path.resolve(pathFile));
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const posts = [];
    const persons: Person[] = [];
    const post: any = {};
    for (const cell in worksheet) {
        const cellAsString: any = cell.toString();
        if (cellAsString[1] !== 'r' && cellAsString[1] !== 'm' && cellAsString[1] > 1) {
            if (cellAsString[0] === 'A') {
                post.name = worksheet[cell].v;
            }
            if (cellAsString[0] === 'B') {
                post.firstname = worksheet[cell].v;
            }
            if (cellAsString[0] === 'C') {
                post.weight = Number(worksheet[cell].v.replace('kg', ''));
            }
            if (cellAsString[0] === 'D') {
                post.yearRegistration = worksheet[cell].v;
            }
            if (cellAsString[0] === 'E') {
                post.weapon = worksheet[cell].v;
            }
            if (cellAsString[0] === 'F') {
                post.armor = worksheet[cell].v;
                posts.push(post);
                const person: Person = new Person({
                    firstname: post.firstname,
                    lastname: post.name,
                    yearRegistration: post.yearRegistration,
                    weight: post.weight,
                    weapon: post.weapon,
                    armor: post.armor
                });
                persons.push(person)
            }
        }
    }
    return persons
}

