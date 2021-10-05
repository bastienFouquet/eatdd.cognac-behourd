import { importXlsx } from "../../src/helpers/import-xlsx";

describe('importXlsx', () =>{
    describe('importFileFromDisk', () =>{
        it('xlsx file have a good path', () => {
            const path = '../../files/Exemple.xlsx';

        });
        it('xlsx file is not xlsx', () => {
            expect(() => {
                importXlsx('.xlsx');
            }).toThrowError();
        });
    });
});
