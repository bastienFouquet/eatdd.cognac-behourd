import { importXlsx } from "../../src/helpers/import-xlsx";

describe('importXlsx', () =>{
    describe('importFileFromDisk', () =>{
        it('xlsx file have a good path', () => {
            const path = '../../files/E.xlsx';
            expect(() => {
                importXlsx(path);
            }).toThrowError();
        });
        it('xlsx file is not xlsx', () => {
            const path = '../../files/Exemple.csv';
            expect(() => {
                importXlsx(path);
            }).toThrowError();
        });
        it('xlsx file is not xlsx', () => {
            const path = '../../files/ExempleFaux.xlsx';
            expect(() => {
                importXlsx(path);
            }).toThrowError();
        });
    });
});
